#version 310 es
#define HIGHEST_RESOLUTION 32

struct GPUVOX
{
	vec3 voxMin;
	float corners;
	vec3 vertPoint;
	vec3 avgNormal;
	float numPoints;
};

layout (local_size_x = 128, local_size_y = 1, local_size_z = 1) in;

layout (std430, binding = 0) buffer INPUT {
    int Perm[512];
};

layout (std430, binding = 2) buffer VOXELMATERIALS {
    uint voxelMaterials[];
};

layout (std430, binding = 3) buffer CORNERINDEX {
	uint cornerCount;
    uint cornerIndexes[];
};

layout (std430, binding = 4) buffer VOXMINS {
	GPUVOX voxels[];
};


uint octreeSize = 32u;

layout(binding = 5) uniform UniformBufferObject {
    vec3 chunkPosition;
		float stride;
};


const vec3 CHILD_MIN_OFFSETS[8] = vec3[]
(
  vec3(0, 0, 0),
  vec3(0, 0, 1),
  vec3(0, 1, 0),
  vec3(0, 1, 1),
  vec3(1, 0, 0),
  vec3(1, 0, 1),
  vec3(1, 1, 0),
  vec3(1, 1, 1)
);

const ivec2 edgevmap[12] = ivec2[]
(
	ivec2(0,4), ivec2(1,5), ivec2(2,6), ivec2(3,7),
	ivec2(0,2), ivec2(1,3), ivec2(4,6), ivec2(5,7),
	ivec2(0,1), ivec2(2,3), ivec2(4,5), ivec2(6,7)
);

float Box(vec3 worldPosition, vec3 origin, vec3 halfDimensions)
{
	vec3 local_pos = worldPosition - origin;
	vec3 pos = local_pos;

	vec3 d = vec3(abs(pos.x), abs(pos.y), abs(pos.z)) - halfDimensions;
	float m = max(d.x, max(d.y, d.z));
	return min(m, length(max(d, vec3(0, 0, 0))));
}

float Torus( vec3 p, vec2 t )
{
  vec2 q = vec2(length(p.xz)-t.x,p.y);
  return length(q)-t.y;
}

float Sphere(vec3 worldPosition, vec3 origin, float radius)
{
	return length(worldPosition - origin) - radius;
}

float Vec3Dot(vec3 a, vec3 b)
{
	float res = (a.x * b.x) + (a.y * b.y) + (a.z * b.z);
	return res;
}

vec3 Grad3[] = vec3[](
	vec3(1,1,0), vec3(-1,1,0), vec3(1,-1,0), vec3(-1,-1,0),
	vec3(1,0,1), vec3(-1,0,1), vec3(1,0,-1), vec3(-1,0,-1),
	vec3(0,1,1), vec3(0,-1,1), vec3(0,1,-1), vec3(0,-1,-1)
);

float Perlin(float x, float y, float z)
{
	int X = x > 0.0 ? int(x) : int(x) - 1;
	int Y = y > 0.0 ? int(y) : int(y) - 1;
	int Z = z > 0.0 ? int(z) : int(z) - 1;
	
	x = x - float(X);
	y = y - float(Y);
	z = z - float(Z);
	
	X = X & 255;
	Y = Y & 255;
	Z = Z & 255;
	
	int gi000 = int(Perm[X + Perm[Y + Perm[Z]]] % 12);
	int gi001 = int(Perm[X + Perm[Y + Perm[Z + 1]]] % 12);
	int gi010 = int(Perm[X + Perm[Y + 1 + Perm[Z]]] % 12);
	int gi011 = int(Perm[X + Perm[Y + 1 + Perm[Z + 1]]] % 12);
	int gi100 = int(Perm[X + 1 + Perm[Y + Perm[Z]]] % 12);
	int gi101 = int(Perm[X + 1 + Perm[Y + Perm[Z + 1]]] % 12);
	int gi110 = int(Perm[X + 1 + Perm[Y + 1 + Perm[Z]]] % 12);
	int gi111 = int(Perm[X + 1 + Perm[Y + 1 + Perm[Z + 1]]] % 12);
	
	float n000 = Vec3Dot(Grad3[gi000], vec3(x, y, z));
	float n100 = Vec3Dot(Grad3[gi100], vec3(x - 1.0, y, z));
	float n010 = Vec3Dot(Grad3[gi010], vec3(x, y - 1.0, z));
	float n110 = Vec3Dot(Grad3[gi110], vec3(x - 1.0, y - 1.0, z));
	float n001 = Vec3Dot(Grad3[gi001], vec3(x, y, z - 1.0));
	float n101 = Vec3Dot(Grad3[gi101], vec3(x - 1.0, y, z - 1.0));
	float n011 = Vec3Dot(Grad3[gi011], vec3(x, y - 1.0, z - 1.0));
	float n111 = Vec3Dot(Grad3[gi111], vec3(x - 1.0, y - 1.0, z - 1.0));
	
	float u = float(x * x * x * (x * (x * 6.0 - 15.0) + 10.0));
	float v = float(y * y * y * (y * (y * 6.0 - 15.0) + 10.0));
	float w = float(z * z * z * (z * (z * 6.0 - 15.0) + 10.0));
	
	float nx00 = mix(n000, n100, u);
	float nx01 = mix(n001, n101, u);
	float nx10 = mix(n010, n110, u);
	float nx11 = mix(n011, n111, u);
	
	float nxy0 = mix(nx00, nx10, v);
	float nxy1 = mix(nx01, nx11, v);
	
	
	float nxyz = mix(nxy0, nxy1, w);
	
	return nxyz;
}

float FractalNoise(int octaves, float frequency, float lacunarity, float persistence, vec3 position)
{
	float SCALE = 1.0 / 128.0;
	vec3 p = position * SCALE;
	float nois = 0.0;

	float amplitude = 1.0;
	p *= frequency;

	for (int i = 0; i < octaves; i++)
	{
		nois += Perlin(p.x, p.y, p.z) * amplitude;
		p *= lacunarity;
		amplitude *= persistence;
	}
	
	return nois;
}

float FractalNoise(float frequency, float lacunarity, float persistence, vec3 position)
{
	float SCALE = 1.0f / 128.0f;
	vec3 p = position * SCALE;
	float nois = 0.0f;

	float amplitude = 1.0f;
	p *= frequency;
	
	nois += Perlin(p.x, p.y, p.z) * amplitude;
	p *= lacunarity;
	amplitude *= persistence;
	
	return nois;
}


float CalculateNoiseValue(vec3 pos, float scale)
{
	return FractalNoise(4, 0.5343f, 2.2324f, 0.68324f, pos * scale);
}

float CLerp(float a, float b, float t)
{
	return (1.0 - t) * a + t * b;
}

float getDensity(vec3 worldPosition) {
	//return Box(worldPosition, vec3(5.0, 5.0, 5.0), vec3(2.0, 2.0, 2.0));
    //float box = Box(worldPosition, vec3(10.0, 20.0, 20.0), vec3(5.0, 5.0, 5.0));

    // float sphere = Torus(worldPosition - vec3(10.0, 10.0, 10.0), vec2(5.0, 5.0));

    // float world = min(box, sphere);
    // return max(world, -Sphere(worldPosition, vec3(7.0, 7.0, 12.0), 2.0));
float worldRadius = 50.0f;
	vec3 world = worldPosition - vec3(70.0, 70.0, 70.0);
	float worldDist = -worldRadius + length(world);

	float flatlandNoiseScale = 3.0f;
	float flatlandLerpAmount = 0.07f;
	float flatlandYPercent = 1.2f;

	float rockyNoiseScale = 3.5f;
	float rockyLerpAmount = 0.05f;
	float rockyYPercent = 0.7f;
	
	float maxMountainMixLerpAmount = 0.075f;
	float minMountainMixLerpAmount = 1.0f;
	
	float rockyBlend = 1.0f;
	
	float mountainBlend = clamp(abs(FractalNoise(0.5343f, 2.2324f, 0.68324f, world )) * 4.0f, 0.0, 1.0);
	
	// float rockiness = abs(FractalNoise(0.5343f, 2.2324f, 0.68324f, world * 0.05f) * 2.0f);
	// rockyBlend = saturate(rockiness);
	
	// if (worldPosition.y < -15.0f)
	// 	mountainBlend = 0;
	
	
	float mountain = CalculateNoiseValue(world, 0.07f);
	

	float blob = CalculateNoiseValue(world, flatlandNoiseScale + ((rockyNoiseScale - flatlandNoiseScale) * rockyBlend));
	blob = CLerp(blob, (worldDist) * (flatlandYPercent + ((rockyYPercent - flatlandYPercent) * rockyBlend)),
				flatlandLerpAmount + ((rockyLerpAmount - flatlandLerpAmount) * rockyBlend));
	
	float result = ((worldDist) / worldRadius) + CLerp(mountain, blob, minMountainMixLerpAmount + ((maxMountainMixLerpAmount - minMountainMixLerpAmount) * mountainBlend));
	float floor = max(-Box(worldPosition, vec3(5.0, 5.0, 5.0), vec3(3.0, 3.0, 3.0)), worldPosition.y - 4.0);
	return max(-Sphere(worldPosition, vec3(20.0, 48.0, 48.0), 10.0), min(result, Box(worldPosition, vec3(10.0, 10.0, 10.0), vec3(3.0, 3.0, 3.0))));
}

vec3 ApproximateZeroCrossingPosition(vec3 p0, vec3 p1)
{
	float minValue = 100000.0f;
	float t = 0.0f;
	float currentT = 0.0f;
	float steps = 8.0f;
	float increment = 1.0f / steps;
	while (currentT <= 1.0f)
	{
		vec3 p = p0 + ((p1 - p0) * currentT);
		float density = abs(getDensity(p));
		if (density < minValue)
		{
			minValue = density;
			t = currentT;
		}

		currentT += increment;
	}

	return p0 + ((p1 - p0) * t);
}

vec3 CalculateSurfaceNormal(vec3 p)
{
	float H = 0.001f;
	float dx = getDensity(p + vec3(H, 0.0f, 0.0f)) - getDensity(p - vec3(H, 0.0f, 0.0f));
	float dy = getDensity(p + vec3(0.0f, H, 0.0f)) - getDensity(p - vec3(0.0f, H, 0.0f));
	float dz = getDensity(p + vec3(0.0f, 0.0f, H)) - getDensity(p - vec3(0.0f, 0.0f, H));

	return normalize(vec3(dx, dy, dz));
}

// SVD

#define SVD_NUM_SWEEPS 4
#define PSUEDO_INVERSE_THRESHOLD 1e-6f

void svd_mul_matrix_vec(inout vec4 result, mat3x3 a, vec4 b)
{
	result.x = dot(vec4(a[0][0], a[0][1], a[0][2], 0.0f), b);
	result.y = dot(vec4(a[1][0], a[1][1], a[1][2], 0.0f), b);
	result.z = dot(vec4(a[2][0], a[2][1], a[2][2], 0.0f), b);
	result.w = 0.0f;
}

void givens_coeffs_sym(float a_pp, float a_pq, float a_qq, inout float c, inout float s)
{
	if (a_pq == 0.0f)
	{
		c = 1.0f;
		s = 0.0f;
		return;
	}
	
	float tau = (a_qq - a_pp) / (2.0f * a_pq);
	float stt = sqrt(1.0f + tau * tau);
	float tan = 1.0f / ((tau >= 0.0f) ? (tau + stt) : (tau - stt));
	c = inversesqrt(1.0f + tan * tan);
	s = tan * c;
}

void svd_rotate_xy(inout float x, inout float y, float c, float s)
{
	float u = x; float v = y;
	x = c * u - s * v;
	y = s * u + c * v;
}

void svd_rotateq_xy(inout float x, inout float y, inout float a, float c, float s)
{
	float cc = c * c; float ss = s * s;
	float mx = 2.0f * c * s * a;
	float u = x; float v = y;
	x = cc * u - mx + ss * v;
	y = ss * u + mx + cc * v;
}

void svd_rotate(inout mat3x3 vtav, mat3x3 v, int a, int b)
{
	if (vtav[a][b] == 0.0f) return;
	
	float c, s;
	givens_coeffs_sym(vtav[a][a], vtav[a][b], vtav[b][b], c, s);
	
	float x, y, z;
	x = vtav[a][a]; y = vtav[b][b]; z = vtav[a][b];
	svd_rotateq_xy(x, y, z, c, s);
	vtav[a][a] = x; vtav[b][b] = y; vtav[a][b] = z;
	
	x = vtav[0][3-b]; y = vtav[1-a][2];
	svd_rotate_xy(x, y, c, s);
	vtav[0][3-b] = x; vtav[1-a][2] = y;
	
	vtav[a][b] = 0.0f;
	
	x = v[0][a]; y = v[0][b];
	svd_rotate_xy(x, y, c, s);
	v[0][a] = x; v[0][b] = y;
	
	x = v[1][a]; y = v[1][b];
	svd_rotate_xy(x, y, c, s);
	v[1][a] = x; v[1][b] = y;
	
	x = v[2][a]; y = v[2][b];
	svd_rotate_xy(x, y, c, s);
	v[2][a] = x; v[2][b] = y;
}

void svd_solve_sym(inout float[6] a, inout vec4 sigma, mat3x3 v)
{
	mat3x3 vtav = mat3( vec3(0.0f, 0.0f, 0.0f), vec3(0.0f, 0.0f, 0.0f), vec3(0.0f, 0.0f, 0.0f));
	vtav[0][0] = a[0]; vtav[0][1] = a[1]; vtav[0][2] = a[2];
	vtav[1][0] = 0.0f;  vtav[1][1] = a[3]; vtav[1][2] = a[4];
	vtav[2][0] = 0.0f;  vtav[2][1] = 0.0f;  vtav[2][2] = a[5];
	
	for (int i = 0; i < SVD_NUM_SWEEPS; ++i)
	{
		svd_rotate(vtav, v, 0, 1);
		svd_rotate(vtav, v, 0, 2);
		svd_rotate(vtav, v, 1, 2);
	}
	
	sigma = vec4(vtav[0][0], vtav[1][1], vtav[2][2], 0.0f);
}

float svd_invdet(float x, float tol)
{
	return (abs(x) < tol || abs(1.0f / x) < tol) ? 0.0f : (1.0f / x);
}

void svd_pseudoinverse(inout mat3x3 o, vec4 sigma, mat3x3 v)
{
	float d0 = svd_invdet(sigma.x, PSUEDO_INVERSE_THRESHOLD);
	float d1 = svd_invdet(sigma.y, PSUEDO_INVERSE_THRESHOLD);
	float d2 = svd_invdet(sigma.z, PSUEDO_INVERSE_THRESHOLD);

	o[0][0] = v[0][0] * d0 * v[0][0] + v[0][1] * d1 * v[0][1] + v[0][2] * d2 * v[0][2];
	o[0][1] = v[0][0] * d0 * v[1][0] + v[0][1] * d1 * v[1][1] + v[0][2] * d2 * v[1][2];
	o[0][2] = v[0][0] * d0 * v[2][0] + v[0][1] * d1 * v[2][1] + v[0][2] * d2 * v[2][2];
	o[1][0] = v[1][0] * d0 * v[0][0] + v[1][1] * d1 * v[0][1] + v[1][2] * d2 * v[0][2];
	o[1][1] = v[1][0] * d0 * v[1][0] + v[1][1] * d1 * v[1][1] + v[1][2] * d2 * v[1][2];
	o[1][2] = v[1][0] * d0 * v[2][0] + v[1][1] * d1 * v[2][1] + v[1][2] * d2 * v[2][2];
	o[2][0] = v[2][0] * d0 * v[0][0] + v[2][1] * d1 * v[0][1] + v[2][2] * d2 * v[0][2];
	o[2][1] = v[2][0] * d0 * v[1][0] + v[2][1] * d1 * v[1][1] + v[2][2] * d2 * v[1][2];
	o[2][2] = v[2][0] * d0 * v[2][0] + v[2][1] * d1 * v[2][1] + v[2][2] * d2 * v[2][2];
}

void svd_solve_ATA_Atb(inout float[6] ATA, vec4 Atb, inout vec4 x)
{
	mat3x3 V = mat3(vec3(1.0f, 0.0f, 0.0f), vec3(0.0f, 1.0f, 0.0f), vec3(0.0f, 0.0f, 1.0f));
	
	vec4 sigma = vec4(0, 0, 0, 0);
	svd_solve_sym(ATA, sigma, V);
	
	mat3x3 Vinv = mat3(vec3(0.0f, 0.0f, 0.0f), vec3(0.0f, 0.0f, 0.0f), vec3(0.0f, 0.0f, 0.0f));
	svd_pseudoinverse(Vinv, sigma, V);
	svd_mul_matrix_vec(x, Vinv, Atb);
}

void svd_vmul_sym(inout vec4 result, float[6] A, vec4 v)
{
	vec4 A_row_x = vec4(A[0], A[1], A[2], 0);
	result.x = dot(A_row_x, v);
	result.y = A[1] * v.x + A[3] * v.y + A[4] * v.z;
	result.z = A[2] * v.x + A[4] * v.y + A[5] * v.z;
}


// QEF

void qef_add(vec4 n, vec4 p, inout float[6] ATA, inout vec4 Atb, inout vec4 pointaccum, inout float btb)
{
	ATA[0] += n.x * n.x;
	ATA[1] += n.x * n.y;
	ATA[2] += n.x * n.z;
	ATA[3] += n.y * n.y;
	ATA[4] += n.y * n.z;
	ATA[5] += n.z * n.z;
	
	float b = dot(p, n);
	Atb.x += n.x * b;
	Atb.y += n.y * b;
	Atb.z += n.z * b;
	btb += b * b;
	
	pointaccum.x += p.x;
	pointaccum.y += p.y;
	pointaccum.z += p.z;
	pointaccum.w += 1.0f;
}

float qef_calc_error(float[6] A, vec4 x, vec4 b)
{
	vec4 tmp = vec4(0, 0, 0, 0);
	svd_vmul_sym(tmp, A, x);
	tmp = b - tmp;
	
	return dot(tmp, tmp);
}

float qef_solve(float[6] ATA, vec4 Atb, vec4 pointaccum, inout vec4 x)
{
	vec4 masspoint = pointaccum / pointaccum.w;
	
	vec4 A_mp = vec4(0, 0, 0, 0);
	svd_vmul_sym(A_mp, ATA, masspoint);
	A_mp = Atb - A_mp;
	
	svd_solve_ATA_Atb(ATA, A_mp, x);
	
	float error = qef_calc_error(ATA, x, Atb);
	x += masspoint;
	
	return error;
}



void main()
{
	uint trueIndex = gl_GlobalInvocationID.x;

	if (trueIndex < cornerCount)
	{
		uint ures = 32u;
		
		uint nodeSize = uint(stride);
	
		uint voxelIndex = cornerIndexes[trueIndex];
		uint z = voxelIndex / (ures * ures);
		uint y = (voxelIndex - (z * ures * ures)) / ures;
		uint x = voxelIndex - (z * ures * ures) - (y * ures);

		uint corners = voxelMaterials[voxelIndex];

		vec3 nodePos = vec3(float(x * nodeSize), float(y * nodeSize), float (z * nodeSize)) + chunkPosition;
		voxels[trueIndex].voxMin = nodePos;
		int MAX_CROSSINGS = 6;
		int edgeCount = 0;
		
		vec4 pointaccum = vec4(0, 0, 0, 0);
		float ATA[6] = float[](0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
		vec4 Atb = vec4(0, 0, 0, 0);
		vec3 averageNormal = vec3(0, 0, 0);
		float btb = 0.0;

		for (int j = 0; j < 12 && edgeCount <= MAX_CROSSINGS; j++)
		{
			int c1 = edgevmap[j].x;
			int c2 = edgevmap[j].y;

			uint m1 = (corners >> c1) & 1u;
			uint m2 = (corners >> c2) & 1u;
			
			if (!((m1 == 0u && m2 == 0u) || (m1 == 1u && m2 == 1u)))
			{
				vec3 p1 = nodePos + (CHILD_MIN_OFFSETS[c1] * float(nodeSize));
				vec3 p2 = nodePos + (CHILD_MIN_OFFSETS[c2] * float(nodeSize));
				vec3 p = ApproximateZeroCrossingPosition(p1, p2);
				vec3 n = CalculateSurfaceNormal(p);
				
				qef_add(vec4(n.x, n.y, n.z, 0), vec4(p.x, p.y, p.z, 0), ATA, Atb, pointaccum, btb);
				
				averageNormal += n;
				
				edgeCount++;
			}
		}
		
		averageNormal = normalize(averageNormal / float(edgeCount));
		
		vec3 com = vec3(pointaccum.x, pointaccum.y, pointaccum.z) / pointaccum.w;
		vec4 solved_position = vec4(0, 0, 0, 0);
		
		float error = qef_solve(ATA, Atb, pointaccum, solved_position);
		
		vec3 Min = nodePos;
		vec3 Max = nodePos + vec3(1.0f, 1.0f, 1.0f);
		if (solved_position.x < Min.x || solved_position.x > Max.x ||
				solved_position.y < Min.y || solved_position.y > Max.y ||
				solved_position.z < Min.z || solved_position.z > Max.z)
		{
			solved_position.x = com.x;
			solved_position.y = com.y;
			solved_position.z = com.z;
		}
		
		voxels[trueIndex].vertPoint = vec3(solved_position.x, solved_position.y, solved_position.z);
		voxels[trueIndex].avgNormal = averageNormal;
		voxels[trueIndex].numPoints = float(edgeCount);
		voxels[trueIndex].corners = float(voxelMaterials[voxelIndex]);
	}
}