struct Uniforms {
  modelViewProjectionMatrix : mat4x4<f32>,
  stride: i32,
  position: vec3<f32>
};
@binding(0) @group(0) var<uniform> uniforms : Uniforms;
@binding(1) @group(0) var<storage, read> corners : array<u32, 32768>;

struct Density {
  density: f32,
  material: u32
}

struct Permutations {
  Perm : array<i32, 512>,
};

@binding(0) @group(1)
var<storage, read> perm : Permutations;

let CHILD_MIN_OFFSETS: array<vec3<u32>, 8> = array<vec3<u32>, 8>
(
  vec3<u32>(0u, 0u, 0u),
  vec3<u32>(0u, 0u, 1u),
  vec3<u32>(0u, 1u, 0u),
  vec3<u32>(0u, 1u, 1u),
  vec3<u32>(1u, 0u, 0u),
  vec3<u32>(1u, 0u, 1u),
  vec3<u32>(1u, 1u, 0u),
  vec3<u32>(1u, 1u, 1u)
);

let edgevmap: array<vec2<i32>, 12> = array<vec2<i32>, 12>
(
	vec2<i32>(0,4), vec2<i32>(1,5), vec2<i32>(2,6), vec2<i32>(3,7),
	vec2<i32>(0,2), vec2<i32>(1,3), vec2<i32>(4,6), vec2<i32>(5,7),
	vec2<i32>(0,1), vec2<i32>(2,3), vec2<i32>(4,5), vec2<i32>(6,7)
);

fn random(i: vec2<f32>) -> f32 {
  return fract(sin(dot(i,vec2(12.9898,78.233)))*43758.5453123);
}

fn Box(worldPosition: vec3<f32>, origin: vec3<f32>, halfDimensions: vec3<f32>) -> f32
{
	let local_pos: vec3<f32> = worldPosition - origin;
	let pos: vec3<f32> = local_pos;

	let d: vec3<f32> = vec3<f32>(abs(pos.x), abs(pos.y), abs(pos.z)) - halfDimensions;
	let m: f32 = max(d.x, max(d.y, d.z));
	return clamp(min(m, length(max(d, vec3<f32>(0.0, 0.0, 0.0)))), -100.0, 100.0);
}

fn Torus(worldPosition: vec3<f32>, origin: vec3<f32>, t: vec3<f32>) -> f32
{
	let p: vec3<f32> = worldPosition - origin;

  let q: vec2<f32> = vec2<f32>(length(p.xz)-t.x,p.y);
  return length(q)-t.y;
}

fn Sphere(worldPosition: vec3<f32>, origin: vec3<f32>, radius: f32) -> f32
{
	return clamp(length(worldPosition - origin) - radius, -100.0, 100.0);
}

fn Vec3Dot(a: vec3<f32>, b: vec3<f32>) -> f32
{
	return (a.x * b.x) + (a.y * b.y) + (a.z * b.z);
}

let Grad3: array<vec3<f32>, 12> = array<vec3<f32>, 12>(
	vec3<f32>(1.0,1.0,0.0), vec3<f32>(-1.0,1.0,0.0), vec3<f32>(1.0,-1.0,0.0), vec3<f32>(-1.0,-1.0,0.0),
	vec3<f32>(1.0,0.0,1.0), vec3<f32>(-1.0,0.0,1.0), vec3<f32>(1.0,0.0,-1.0), vec3<f32>(-1.0,0.0,-1.0),
	vec3<f32>(0.0,1.0,1.0), vec3<f32>(0.0,-1.0,1.0), vec3<f32>(0.0,1.0,-1.0), vec3<f32>(0.0,-1.0,-1.0)
);

fn Perlin(x1: f32, y1: f32, z1: f32) -> f32
{
	var X: i32 = 0;
	if (x1 > 0.0) {
		X = i32(x1);
	} else {
		X = i32(x1) - 1;
	}

	var Y: i32 = 0;
	if (y1 > 0.0) {
		Y = i32(y1);
	} else {
		Y = i32(y1) - 1;
	}

	var Z: i32 = 0;
	if (z1 > 0.0) {
		Z = i32(z1);
	} else {
		Z = i32(z1) - 1;
	}

	let x: f32 = x1 - f32(X);
	let y: f32 = y1 - f32(Y);
	let z: f32 = z1 - f32(Z);

	X = X & 255;
	Y = Y & 255;
	Z = Z & 255;

	let gi000: i32 = (perm.Perm[X + perm.Perm[Y + perm.Perm[Z]]] % 12);
	let gi001: i32 = (perm.Perm[X + perm.Perm[Y + perm.Perm[Z + 1]]] % 12);
	let gi010: i32 = (perm.Perm[X + perm.Perm[Y + 1 + perm.Perm[Z]]] % 12);
	let gi011: i32 = (perm.Perm[X + perm.Perm[Y + 1 + perm.Perm[Z + 1]]] % 12);
	let gi100: i32 = (perm.Perm[X + 1 + perm.Perm[Y + perm.Perm[Z]]] % 12);
	let gi101: i32 = (perm.Perm[X + 1 + perm.Perm[Y + perm.Perm[Z + 1]]] % 12);
	let gi110: i32 = (perm.Perm[X + 1 + perm.Perm[Y + 1 + perm.Perm[Z]]] % 12);
	let gi111: i32 = (perm.Perm[X + 1 + perm.Perm[Y + 1 + perm.Perm[Z + 1]]] % 12);

	let n000: f32 = dot(Grad3[gi000], vec3<f32>(x, y, z));
	let n100: f32 = dot(Grad3[gi100], vec3<f32>(x - 1.0, y, z));
	let n010: f32 = dot(Grad3[gi010], vec3<f32>(x, y - 1.0, z));
	let n110: f32 = dot(Grad3[gi110], vec3<f32>(x - 1.0, y - 1.0, z));
	let n001: f32 = dot(Grad3[gi001], vec3<f32>(x, y, z - 1.0));
	let n101: f32 = dot(Grad3[gi101], vec3<f32>(x - 1.0, y, z - 1.0));
	let n011: f32 = dot(Grad3[gi011], vec3<f32>(x, y - 1.0, z - 1.0));
	let n111: f32 = dot(Grad3[gi111], vec3<f32>(x - 1.0, y - 1.0, z - 1.0));

	let u: f32 = f32(x * x * x * (x * (x * 6.0 - 15.0) + 10.0));
	let v: f32 = f32(y * y * y * (y * (y * 6.0 - 15.0) + 10.0));
	let w: f32 = f32(z * z * z * (z * (z * 6.0 - 15.0) + 10.0));
	let nx00: f32 = mix(n000, n100, u);
	let nx01: f32 = mix(n001, n101, u);
	let nx10: f32 = mix(n010, n110, u);
	let nx11: f32 = mix(n011, n111, u);
	let nxy0: f32 = mix(nx00, nx10, v);
	let nxy1: f32 = mix(nx01, nx11, v);
	let nxyz: f32 = mix(nxy0, nxy1, w);

	return nxyz;
}

fn FractalNoise(octaves: i32, frequency: f32, lacunarity: f32, persistence: f32, position: vec3<f32>) -> f32
{
	let SCALE: f32 = 1.0 / 128.0;
	var p: vec3<f32> = position * SCALE;
	var nois: f32 = 0.0;

	var amplitude: f32 = 1.0;
	p = p * frequency;

	var i: i32 = 0;
	loop {
		if (i >= octaves) { break; }

		nois = nois + Perlin(p.x, p.y, p.z) * amplitude;
		p = p * lacunarity;
		amplitude = amplitude * persistence;

		continuing {
			i = i + 1;
		}
	}

	return nois;
}

fn FractalNoise1(frequency: f32, lacunarity: f32, persistence: f32, position: vec3<f32>) -> f32
{
	let SCALE: f32 = 1.0 / 128.0;
	var p: vec3<f32> = position * SCALE;
	var nois: f32 = 0.0;

	var amplitude: f32 = 1.0;
	p = p * frequency;

	nois = nois + Perlin(p.x, p.y, p.z) * amplitude;
	p = p * lacunarity;
	amplitude = amplitude * persistence;

	return nois;
}

fn CalculateNoiseValue(pos: vec3<f32>, scale: f32) -> f32
{
	return FractalNoise(4, 0.5343, 2.2324, 0.68324, pos * scale);
}

fn CLerp(a: f32, b: f32, t: f32) -> f32
{
	return (1.0 - t) * a + t * b;
}

// SVD

let SVD_NUM_SWEEPS: i32 = 4;
let PSUEDO_INVERSE_THRESHOLD: f32 = 0.00000001;

fn svd_mul_matrix_vec(m: mat3x3<f32>, b: vec4<f32>) -> vec4<f32>
{
	var a: mat3x3<f32> = m;

	return vec4<f32>(
		dot(vec4<f32>(a[0][0], a[0][1], a[0][2], 0.0), b),
		dot(vec4<f32>(a[1][0], a[1][1], a[1][2], 0.0), b),
		dot(vec4<f32>(a[2][0], a[2][1], a[2][2], 0.0), b),
		0.0
	);
}

fn givens_coeffs_sym(a_pp: f32, a_pq: f32, a_qq: f32) -> vec2<f32>
{
	if (a_pq == 0.0) {
		return vec2<f32>(1.0, 0.0);
	}

	let tau: f32 = (a_qq - a_pp) / (2.0 * a_pq);
	let stt: f32 = sqrt(1.0 + tau * tau);
	var tan: f32;
	if ((tau >= 0.0)) {
		tan = (tau + stt);
	} else {
		tan = (tau - stt);
	}
	tan = 1.0 / tan;

	let c: f32 = inverseSqrt(1.0 + tan * tan);
	let s: f32 = tan * c;

	return vec2<f32>(c, s);
}

fn svd_rotate_xy(x: f32, y: f32, c: f32, s: f32) -> vec2<f32>
{
	return vec2<f32>(c * x - s * y, s * x + c * y);
}

fn svd_rotateq_xy(x: f32, y: f32, z: f32, c: f32, s: f32) -> vec2<f32>
{
	let cc: f32 = c * c;
	let ss: f32 = s * s;
	let mx: f32 = 2.0 * c * s * z;

	return vec2<f32>(
		cc * x - mx + ss * y,
		ss * x + mx + cc * z
	);
}

var<private> vtav: mat3x3<f32>;
var<private> v: mat3x3<f32>;
var<private> ATA: array<f32, 6>;
var<private> Atb: vec4<f32>;
var<private> pointaccum: vec4<f32>;
var<private> btb: f32;

fn svd_rotate(a: i32, b: i32)
{
	if (vtav[a][b] == 0.0) { return; }



	let coeffs: vec2<f32> = givens_coeffs_sym(vtav[a][a], vtav[a][b], vtav[b][b]);
	let c: f32 = coeffs.x;
	let s: f32 = coeffs.y;

	let rot1: vec2<f32> = svd_rotateq_xy(vtav[a][a], vtav[b][b], vtav[a][b], c, s);
	vtav[a][a] = rot1.x;
	vtav[b][b] = rot1.y;

	let rot2: vec2<f32> = svd_rotate_xy(vtav[0][3-b], vtav[1-a][2], c, s);
	vtav[0][3-b] = rot2.x;
	vtav[1-a][2] = rot2.y;

	vtav[a][b] = 0.0;

	let rot3: vec2<f32> = svd_rotate_xy(v[0][a], v[0][b], c, s);
	v[0][a] = rot3.x; v[0][b] = rot3.y;

	let rot4: vec2<f32> = svd_rotate_xy(v[1][a], v[1][b], c, s);
	v[1][a] = rot4.x; v[1][b] = rot4.y;

	let rot5: vec2<f32> = svd_rotate_xy(v[2][a], v[2][b], c, s);
	v[2][a] = rot5.x; v[2][b] = rot5.y;
}

fn svd_solve_sym(b: array<f32, 6>) -> vec4<f32>
{
	var a: array<f32, 6> = b;

	vtav = mat3x3<f32>(
		vec3<f32>(a[0], a[1], a[2]),
		vec3<f32>(0.0, a[3], a[4]),
		vec3<f32>(0.0, 0.0, a[5])
	);

	var i: i32;
	loop {
		if (i >= SVD_NUM_SWEEPS) { break; }

		svd_rotate(0, 1);
		svd_rotate(0, 2);
		svd_rotate(1, 2);

		continuing {
			i = i + 1;
		}
	}

	var copy: mat3x3<f32> = vtav;
	return vec4<f32>(copy[0][0], copy[1][1], copy[2][2], 0.0);
}


fn svd_invdet(x: f32, tol: f32) -> f32
{
	if (abs(x) < tol || abs(1.0 / x) < tol) {
		return 0.0;
	}
	return (1.0 / x);
}

fn svd_pseudoinverse(sigma: vec4<f32>, c: mat3x3<f32>) -> mat3x3<f32>
{
	let d0: f32 = svd_invdet(sigma.x, PSUEDO_INVERSE_THRESHOLD);
	let d1: f32 = svd_invdet(sigma.y, PSUEDO_INVERSE_THRESHOLD);
	let d2: f32 = svd_invdet(sigma.z, PSUEDO_INVERSE_THRESHOLD);

	var copy: mat3x3<f32> = c;

	return mat3x3<f32> (
		vec3<f32>(
			copy[0][0] * d0 * copy[0][0] + copy[0][1] * d1 * copy[0][1] + copy[0][2] * d2 * copy[0][2],
			copy[0][0] * d0 * copy[1][0] + copy[0][1] * d1 * copy[1][1] + copy[0][2] * d2 * copy[1][2],
			copy[0][0] * d0 * copy[2][0] + copy[0][1] * d1 * copy[2][1] + copy[0][2] * d2 * copy[2][2]
		),
		vec3<f32>(
			copy[1][0] * d0 * copy[0][0] + copy[1][1] * d1 * copy[0][1] + copy[1][2] * d2 * copy[0][2],
			copy[1][0] * d0 * copy[1][0] + copy[1][1] * d1 * copy[1][1] + copy[1][2] * d2 * copy[1][2],
			copy[1][0] * d0 * copy[2][0] + copy[1][1] * d1 * copy[2][1] + copy[1][2] * d2 * copy[2][2]
		),
		vec3<f32>(
			copy[2][0] * d0 * copy[0][0] + copy[2][1] * d1 * copy[0][1] + copy[2][2] * d2 * copy[0][2],
			copy[2][0] * d0 * copy[1][0] + copy[2][1] * d1 * copy[1][1] + copy[2][2] * d2 * copy[1][2],
			copy[2][0] * d0 * copy[2][0] + copy[2][1] * d1 * copy[2][1] + copy[2][2] * d2 * copy[2][2]
		),
	);
}

fn svd_solve_ATA_Atb(a: vec4<f32>) -> vec4<f32>
{
	v = mat3x3<f32>(vec3<f32>(1.0, 0.0, 0.0), vec3<f32>(0.0, 1.0, 0.0), vec3<f32>(0.0, 0.0, 1.0));

	let sigma: vec4<f32> = svd_solve_sym(ATA);

	let Vinv: mat3x3<f32> = svd_pseudoinverse(sigma, v);
	return svd_mul_matrix_vec(Vinv, a);
}

fn svd_vmul_sym(v: vec4<f32>) -> vec4<f32>
{
	let A_row_x: vec4<f32> = vec4<f32>(ATA[0], ATA[1], ATA[2], 0.0);
	return vec4<f32> (
		dot(A_row_x, v),
		ATA[1] * v.x + ATA[3] * v.y + ATA[4] * v.z,
		ATA[2] * v.x + ATA[4] * v.y + ATA[5] * v.z,
		0.0
	);
}


// // QEF

fn qef_add(n: vec4<f32>, p: vec4<f32>)
{
	ATA[0] = ATA[0] + n.x * n.x;
	ATA[1] = ATA[1] + n.x * n.y;
	ATA[2] = ATA[2] + n.x * n.z;
	ATA[3] = ATA[3] + n.y * n.y;
	ATA[4] = ATA[4] + n.y * n.z;
	ATA[5] = ATA[5] + n.z * n.z;

	let b: f32 = dot(p, n);
	Atb.x = Atb.x +n.x * b;
	Atb.y = Atb.y +n.y * b;
	Atb.z = Atb.z +n.z * b;
	btb = btb + b * b;

	pointaccum.x = pointaccum.x +p.x;
	pointaccum.y = pointaccum.y +p.y;
	pointaccum.z = pointaccum.z +p.z;
	pointaccum.w = pointaccum.w +1.0;
}

fn qef_calc_error(x: vec4<f32>) -> f32
{
	var tmp: vec4<f32> = svd_vmul_sym(x);
	tmp = Atb - tmp;

	return dot(tmp, tmp);
}

fn qef_solve() -> vec4<f32>
{
	let masspoint: vec4<f32> = vec4<f32>(pointaccum.x / pointaccum.w, pointaccum.y / pointaccum.w, pointaccum.z / pointaccum.w, pointaccum.w / pointaccum.w);

	var A_mp: vec4<f32> = svd_vmul_sym(masspoint);
	A_mp = Atb - A_mp;

	let x: vec4<f32> = svd_solve_ATA_Atb(A_mp);

	let error: f32 = qef_calc_error(x);
	let r: vec4<f32> = x + masspoint;

	return vec4<f32>(r.x, r.y, r.z, error);
}

let MATERIAL_AIR = 0u;
let MATERIAL_ROCK = 1u;
let MATERIAL_WOOD = 2u;

fn subtract(base: Density, sub: f32) -> Density {
  return Density(max(base.density, sub), base.material);
}

fn add(base: Density, add: f32, material: u32) -> Density {
  if (add <= 0) {
    return Density(add, material);
  }
  return base;
}

fn getDensity(worldPosition: vec3<f32>) -> Density {
	var worldRadius: f32 = 10000.0;
	var world: vec3<f32> = worldPosition - vec3<f32>(worldRadius);
	var worldDist: f32 = clamp(-worldRadius + length(world), -1000.0, 1000.0);

	let flatlandNoiseScale: f32 = 3.0;
	let flatlandLerpAmount: f32 = 0.07;
	let flatlandYPercent: f32 = 1.2;

	let rockyNoiseScale: f32 = 3.0;
	let rockyLerpAmount: f32 = 0.05;
	let rockyYPercent: f32 = 0.7;

	let maxMountainMixLerpAmount: f32 = 0.075;
	let minMountainMixLerpAmount: f32 = 1.0;

	let rockyBlend: f32 = 1.0;

	//let mountainBlend: f32 = clamp(abs(FractalNoise1(0.5343, 2.2324, 0.68324, world)) * 4.0, 0.0, 1.0);
	let mountainBlend: f32 = 0.0;

	//let mountain: f32 = CalculateNoiseValue(world, 0.07);
	let mountain: f32 = 0.0;

	//var blob: f32 = CalculateNoiseValue(world, flatlandNoiseScale + ((rockyNoiseScale - flatlandNoiseScale) * rockyBlend));
	//var blob: f32 = 0.0;
	//blob = CLerp(blob, (worldDist) * (flatlandYPercent + ((rockyYPercent - flatlandYPercent) * rockyBlend)),
	//			flatlandLerpAmount + ((rockyLerpAmount - flatlandLerpAmount) * rockyBlend));

	var result = add(Density(1.0, MATERIAL_AIR), worldDist / worldRadius, MATERIAL_ROCK); // + CLerp(mountain, blob, minMountainMixLerpAmount + ((maxMountainMixLerpAmount - minMountainMixLerpAmount) * mountainBlend));

  result = add(result, Box(worldPosition, vec3<f32>(5010.0, 150.0, 5010.0), vec3<f32>(5000.0, 1000.0, 5000.0)), MATERIAL_WOOD);
  result = add(result, Sphere(worldPosition, vec3<f32>(5000.0, 100.0, 100.0), 5000.0), MATERIAL_ROCK);
  result = add(result, Sphere(worldPosition, vec3<f32>(10000.0, 100.0, 100.0), 5000.0), MATERIAL_ROCK);
  result = add(result, Sphere(worldPosition, vec3<f32>(20000.0, 100.0, 100.0), 5000.0), MATERIAL_ROCK);

  result = subtract(result, -Sphere(worldPosition, vec3<f32>(), 500.0));

  return result;
}

fn getTriPlanarBlend(_wNorm: vec3<f32>) -> vec3<f32> {
  let maxNorm = max(max(_wNorm.x, _wNorm.y), _wNorm.z);
  if (_wNorm.x == maxNorm) {
    return vec3<f32>(1.0, 0.0, 0.0);
  }
  if (_wNorm.y == maxNorm) {
    return vec3<f32>(0.0, 1.0 ,0.0);
  }
  return vec3<f32>(0.0, 0.0, 1.0);
	// in wNorm is the world-space normal of the fragment
	var blending = abs( _wNorm );
  blending.x = max(blending.x, 0.00001);
  blending.y = max(blending.y, 0.00001);
  blending.z = max(blending.z, 0.00001);
	blending = normalize(blending); // Force weights to sum to 1.0
	let b = (blending.x + blending.y + blending.z);
	blending = blending / b;
	return blending;
}

let normalRepeat = 0.2;

let lower = 20.0;
let upper = 49.0;
let diff = 29.0;

fn getFade(y: f32) -> f32 {
  if (y < lower) {
    return 1.0;
  }
  return max(((diff - (min(y, upper) - lower)) / diff), 0.1);
}

fn rand(co: vec2<f32>) -> f32 {
    return fract(sin(dot(co, vec2<f32>(12.9898, 78.233))) * 43758.5453);
}

fn permute4(x: vec4<f32>) -> vec4<f32> { return ((x * 34. + 1.) * x) % vec4<f32>(289.); }
fn fade2(t: vec2<f32>) -> vec2<f32> { return t * t * t * (t * (t * 6. - 15.) + 10.); }

fn perlinNoise2(P: vec2<f32>) -> f32 {
  var Pi: vec4<f32> = floor(P.xyxy) + vec4<f32>(0., 0., 1., 1.);
  let Pf = fract(P.xyxy) - vec4<f32>(0., 0., 1., 1.);
  Pi = Pi % vec4<f32>(289.); // To avoid truncation effects in permutation
  let ix = Pi.xzxz;
  let iy = Pi.yyww;
  let fx = Pf.xzxz;
  let fy = Pf.yyww;
  let i = permute4(permute4(ix) + iy);
  var gx: vec4<f32> = 2. * fract(i * 0.0243902439) - 1.; // 1/41 = 0.024...
  let gy = abs(gx) - 0.5;
  let tx = floor(gx + 0.5);
  gx = gx - tx;
  var g00: vec2<f32> = vec2<f32>(gx.x, gy.x);
  var g10: vec2<f32> = vec2<f32>(gx.y, gy.y);
  var g01: vec2<f32> = vec2<f32>(gx.z, gy.z);
  var g11: vec2<f32> = vec2<f32>(gx.w, gy.w);
  let norm = 1.79284291400159 - 0.85373472095314 *
      vec4<f32>(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
  g00 = g00 * norm.x;
  g01 = g01 * norm.y;
  g10 = g10 * norm.z;
  g11 = g11 * norm.w;
  let n00 = dot(g00, vec2<f32>(fx.x, fy.x));
  let n10 = dot(g10, vec2<f32>(fx.y, fy.y));
  let n01 = dot(g01, vec2<f32>(fx.z, fy.z));
  let n11 = dot(g11, vec2<f32>(fx.w, fy.w));
  let fade_xy = fade2(Pf.xy);
  let n_x = mix(vec2<f32>(n00, n01), vec2<f32>(n10, n11), vec2<f32>(fade_xy.x));
  let n_xy = mix(n_x.x, n_x.y, fade_xy.y);
  return 2.3 * n_xy;
}

fn random2(p: vec2<f32>) -> vec2<f32> {
    return fract(sin(vec2<f32>(dot(p,vec2<f32>(127.1,311.7)),dot(p,vec2<f32>(269.5,183.3))))*43758.5453);
}

fn cellular(co: vec2<f32>) -> vec3<f32> {
    var color = vec3<f32>(.0);
    let position = co * 1.;

    // Tile the space
    let i_st = floor(position);
    let f_st = fract(position);

    var m_dist = 1.;  // minimum distance

    for (var y= -1; y <= 1; y++) {
        for (var x= -1; x <= 1; x++) {
            // Neighbor place in the grid
            let neighbor = vec2<f32>(f32(x),f32(y));

            // Random position from current + neighbor place in the grid
            let point = random2(i_st + neighbor);

			// Vector between the pixel and the point
            let diff = neighbor + point - f_st;

            // Distance to the point
            let dist = length(diff);

            // Keep the closer distance
            m_dist = min(m_dist, dist);
        }
    }

    // Draw the min distance (distance field)
    color = color + m_dist;

    return color;
}

fn samp(co: vec2<f32>, material: u32) -> vec3<f32> {
  if (material == MATERIAL_ROCK) {
    // Stone
    let cell =  cellular(co * 20.0);
    let n = (1.0 + sin((co.x + perlinNoise2(co * 5.0) / 2.0) * 50.0)) / 2.0;
    let color = mix(vec3<f32>(0.3, 0.3, 0.3), vec3<f32>(0.4,0.4,0.4),(n * 0.4 + cell * 0.6));
    return color;
  }

  if (material == MATERIAL_WOOD) {
    // Wood
    let v = fract((perlinNoise2(co * vec2<f32>(10.0, 0.2))*0.5+0.5)*5.0) + perlinNoise2(co * vec2<f32>(100.0,20.0))*0.2;

    return mix(vec3<f32>(0.19, 0.13, 0.06), vec3<f32>(0.52, 0.32, 0.19), v);
  }

  return vec3<f32>(1.0, 0.0, 0.0);
  let r = perlinNoise2(floor(co * 100.0)) * 0.2 + 0.2;
  return vec3<f32>(r);
}

fn findMaterial(pos: vec3<f32>, normal: vec3<f32>) -> u32 {
  var i = 0;
	loop {
	  let density = getDensity(pos - normal * f32(i * uniforms.stride));

    if (i > 10) {
      return MATERIAL_AIR;
    }

		if (density.density <= 0) {
		  return density.material;
		}

		continuing {
			i = i + 1;
		}
	}
}

@stage(fragment)
fn main(@location(0) vPos: vec4<f32>,
        @location(1) vNormal: vec3<f32>,
        @location(2) color: vec3<f32>) -> @location(0) vec4<f32> {
  let fade = getFade(vPos.y);
  let blending = getTriPlanarBlend(vNormal);
  let material = findMaterial(vPos.xyz, normalize(vNormal.xyz));

  let xaxis = samp(vPos.yz * normalRepeat, material);
  let yaxis = samp(vPos.xz * normalRepeat, material);
  let zaxis = samp(vPos.xy * normalRepeat, material);
	var tex = xaxis * blending.x + yaxis * blending.y + zaxis * blending.z;

  let cell = vec3<u32>(vPos.xyz - uniforms.position / f32(uniforms.stride));
  //let foo = corners[cell.x * 32 * 32 + cell.y * 32 + cell.z];
  return vec4<f32>(tex * color, 1.0);
}