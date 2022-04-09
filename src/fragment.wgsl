@group(1) @binding(0) var mySampler: sampler;
@group(1) @binding(1) var myTexture: texture_2d<f32>;

fn getTriPlanarBlend(_wNorm: vec3<f32>) -> vec3<f32> {
	// in wNorm is the world-space normal of the fragment
	var blending = abs( _wNorm );
  blending.x = max(blending.x, 0.00001);
  blending.y = max(blending.y, 0.00001);
  blending.z = max(blending.z, 0.00001);
	blending = normalize(blending); // Force weights to sum to 1.0
	let b = (blending.x + blending.y + blending.z);
	blending /= vec3<f32>(b, b, b);
	return blending;
}

let normalRepeat = 0.01;

let lower = 20.0;
let upper = 49.0;
let diff = 29.0;

fn getFade(y: f32) -> f32 {
  if (y < lower) {
    return 1.0;
  }
  return max(((diff - (min(y, upper) - lower)) / diff), 0.1);
}
@stage(fragment)
fn main(@location(0) vPos: vec4<f32>,
        @location(1) vNormal: vec3<f32>) -> @location(0) vec4<f32> {

  let fade = getFade(vPos.y);
  let blending = getTriPlanarBlend(vNormal);
	let xaxis = textureSample( myTexture, mySampler, vPos.yz * normalRepeat).rgb;
	let yaxis = textureSample( myTexture, mySampler, vPos.xz  * normalRepeat).rgb;
	let zaxis = textureSample( myTexture, mySampler, vPos.xy  * normalRepeat).rgb;
	var texture = xaxis * blending.x + yaxis * blending.y + zaxis * blending.z;

  return vec4<f32>(texture * fade, 1.0);
}