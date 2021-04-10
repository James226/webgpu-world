#version 450
#define OctreeSize 32

const uint width = uint(OctreeSize) + 1u;

layout (std430, binding = 0) buffer INPUT {
    int Perm[512];
};

layout(std430, set = 0, binding = 1) buffer ParticlesA {
  uint cornerMaterials[(OctreeSize + 1) * (OctreeSize + 1) * (OctreeSize + 1)];
};

layout(binding = 5) uniform UniformBufferObject {
    vec3 chunkPosition;
};

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

void main ()
{
    uint index = gl_GlobalInvocationID.z * width * width + gl_GlobalInvocationID.y * width + gl_GlobalInvocationID.x;
    vec3 cornerPos = vec3(float(gl_GlobalInvocationID.x), float(gl_GlobalInvocationID.y), float(gl_GlobalInvocationID.z));

    float density = getDensity(cornerPos + chunkPosition);
    uint material = density < 0.0f ? 1u : 0u;
    cornerMaterials[index] = material;
}