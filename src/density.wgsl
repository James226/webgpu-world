let freq = 0.001;

fn getDensity(worldPosition: vec3<f32>) -> f32 {
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

	let i = perm.Perm[0];

	//var blob: f32 = CalculateNoiseValue(world, flatlandNoiseScale + ((rockyNoiseScale - flatlandNoiseScale) * rockyBlend));
	//var blob: f32 = 0.0;
	//blob = CLerp(blob, (worldDist) * (flatlandYPercent + ((rockyYPercent - flatlandYPercent) * rockyBlend)),
	//			flatlandLerpAmount + ((rockyLerpAmount - flatlandLerpAmount) * rockyBlend));

	var result: f32 = ((worldDist) / worldRadius); // + CLerp(mountain, blob, minMountainMixLerpAmount + ((maxMountainMixLerpAmount - minMountainMixLerpAmount) * mountainBlend));


    result = min(Box(worldPosition, vec3<f32>(5010.0, 150.0, 5010.0), vec3<f32>(5000.0, 1000.0, 5000.0)), result);
    result = min(Sphere(worldPosition, vec3<f32>(5000.0, 100.0, 100.0), 5000.0), result);
    result = min(Sphere(worldPosition, vec3<f32>(10000.0, 100.0, 100.0), 5000.0), result);
    result = min(Sphere(worldPosition, vec3<f32>(20000.0, 100.0, 100.0), 5000.0), result);

    result = max(-Sphere(worldPosition, vec3<f32>(), 500.0), result);

    return result;
	//return max(result, -Sphere(worldPosition, vec3<f32>(50.0, 50.0, 50.0), 50.0));
}