let octreeSize: u32 = 32u;

let width: u32 = 33u;

[[block]] struct Permutations {
  Perm : array<i32, 512>;
};
[[binding(0), group(0)]] var<storage> perm : [[access(read)]] Permutations;

[[block]] struct CornerMaterials {
  cornerMaterials : array<u32>;
};

[[binding(1), group(0)]] var<storage> cornerMaterials: [[access(read_write)]] CornerMaterials;

[[block]] struct UniformBufferObject {
  chunkPosition : vec3<f32>;
  stride : f32;
};
[[binding(5), group(0)]] var<uniform> uniforms : UniformBufferObject;

fn Box(worldPosition: vec3<f32>, origin: vec3<f32>, halfDimensions: vec3<f32>) -> f32
{
	let local_pos: vec3<f32> = worldPosition - origin;
	let pos: vec3<f32> = local_pos;

	let d: vec3<f32> = vec3<f32>(abs(pos.x), abs(pos.y), abs(pos.z)) - halfDimensions;
	let m: f32 = max(d.x, max(d.y, d.z));
	return min(m, length(max(d, vec3<f32>(0.0, 0.0, 0.0))));
}

fn Torus(p: vec3<f32>, t: vec3<f32>) -> f32
{
  let q: vec2<f32> = vec2<f32>(length(p.xz)-t.x,p.y);
  return length(q)-t.y;
}

fn Sphere(worldPosition: vec3<f32>, origin: vec3<f32>, radius: f32) -> f32
{
	return length(worldPosition - origin) - radius;
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
	
	let gi000: i32 = i32(perm.Perm[X + perm.Perm[Y + perm.Perm[Z]]] % 12);
	let gi001: i32 = i32(perm.Perm[X + perm.Perm[Y + perm.Perm[Z + 1]]] % 12);
	let gi010: i32 = i32(perm.Perm[X + perm.Perm[Y + 1 + perm.Perm[Z]]] % 12);
	let gi011: i32 = i32(perm.Perm[X + perm.Perm[Y + 1 + perm.Perm[Z + 1]]] % 12);
	let gi100: i32 = i32(perm.Perm[X + 1 + perm.Perm[Y + perm.Perm[Z]]] % 12);
	let gi101: i32 = i32(perm.Perm[X + 1 + perm.Perm[Y + perm.Perm[Z + 1]]] % 12);
	let gi110: i32 = i32(perm.Perm[X + 1 + perm.Perm[Y + 1 + perm.Perm[Z]]] % 12);
	let gi111: i32 = i32(perm.Perm[X + 1 + perm.Perm[Y + 1 + perm.Perm[Z + 1]]] % 12);
	
	let n000: f32 = Vec3Dot(Grad3[gi000], vec3<f32>(x, y, z));
	let n100: f32 = Vec3Dot(Grad3[gi100], vec3<f32>(x - 1.0, y, z));
	let n010: f32 = Vec3Dot(Grad3[gi010], vec3<f32>(x, y - 1.0, z));
	let n110: f32 = Vec3Dot(Grad3[gi110], vec3<f32>(x - 1.0, y - 1.0, z));
	let n001: f32 = Vec3Dot(Grad3[gi001], vec3<f32>(x, y, z - 1.0));
	let n101: f32 = Vec3Dot(Grad3[gi101], vec3<f32>(x - 1.0, y, z - 1.0));
	let n011: f32 = Vec3Dot(Grad3[gi011], vec3<f32>(x, y - 1.0, z - 1.0));
	let n111: f32 = Vec3Dot(Grad3[gi111], vec3<f32>(x - 1.0, y - 1.0, z - 1.0));
	
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

fn getDensity(worldPosition: vec3<f32>) -> f32 {
	var worldRadius: f32 = 100.0;
	var world: vec3<f32> = worldPosition - vec3<f32>(0.0, 0.0, 0.0);
	var worldDist: f32 = -worldRadius + length(world);

	let flatlandNoiseScale: f32 = 3.0;
	let flatlandLerpAmount: f32 = 0.07;
	let flatlandYPercent: f32 = 1.2;

	let rockyNoiseScale: f32 = 3.5;
	let rockyLerpAmount: f32 = 0.05;
	let rockyYPercent: f32 = 0.7;
	
	let maxMountainMixLerpAmount: f32 = 0.075;
	let minMountainMixLerpAmount: f32 = 1.0;
	
	let rockyBlend: f32 = 1.0;
	
	let mountainBlend: f32 = clamp(abs(FractalNoise1(0.5343, 2.2324, 0.68324, world)) * 4.0, 0.0, 1.0);
	
	let mountain: f32 = CalculateNoiseValue(world, 0.07);
	

	var blob: f32 = CalculateNoiseValue(world, flatlandNoiseScale + ((rockyNoiseScale - flatlandNoiseScale) * rockyBlend));
	blob = CLerp(blob, (worldDist) * (flatlandYPercent + ((rockyYPercent - flatlandYPercent) * rockyBlend)),
				flatlandLerpAmount + ((rockyLerpAmount - flatlandLerpAmount) * rockyBlend));
	
	var result: f32 = ((worldDist) / worldRadius) + CLerp(mountain, blob, minMountainMixLerpAmount + ((maxMountainMixLerpAmount - minMountainMixLerpAmount) * mountainBlend));
	return result;
	//return max(-result, max(-Sphere(worldPosition, vec3(20.0, 48.0, 48.0), 10.0), min(result, Box(worldPosition, vec3(0.0, 0.0, 0.0), vec3(300.0, 300.0, 300.0)))));
}

[[stage(compute), workgroup_size(1)]]
fn main([[builtin(global_invocation_id)]] GlobalInvocationID : vec3<u32>) {
    let index: u32 = GlobalInvocationID.z * width * width + GlobalInvocationID.y * width + GlobalInvocationID.x;
    let cornerPos: vec3<f32> = vec3<f32>(f32(GlobalInvocationID.x) * uniforms.stride, f32(GlobalInvocationID.y) * uniforms.stride, f32(GlobalInvocationID.z) * uniforms.stride);

    let density: f32 = getDensity(cornerPos + uniforms.chunkPosition);

		if (density < 0.0) {
			cornerMaterials.cornerMaterials[index] = 1u;
		} else {
			cornerMaterials.cornerMaterials[index] = 0u;
		}
}