struct Uniforms {
  modelViewProjectionMatrix : mat4x4<f32>,
  stride: i32
};
@binding(0) @group(0) var<uniform> uniforms : Uniforms;

@group(1) @binding(0) var mySampler: sampler;
@group(1) @binding(1) var myTexture: texture_2d<f32>;

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

fn samp(co: vec2<f32>) -> vec3<f32> {
  let cell =  cellular(co * 20.0);
  // Stone
  let n = (1.0 + sin((co.x + perlinNoise2(co * 5.0) / 2.0) * 50.0)) / 2.0;
  let color = mix(vec3<f32>(0.3, 0.3, 0.3), vec3<f32>(0.4,0.4,0.4),(n * 0.4 + cell * 0.6));
  return color;


  // Wood
  let v = fract((perlinNoise2(co * vec2<f32>(10.0, 0.2))*0.5+0.5)*5.0) + perlinNoise2(co * vec2<f32>(100.0,20.0))*0.2;

  return mix(vec3<f32>(0.19, 0.13, 0.06), vec3<f32>(0.52, 0.32, 0.19), v);


  let r = perlinNoise2(floor(co * 100.0)) * 0.2 + 0.2;
  return vec3<f32>(r);
}

@stage(fragment)
fn main(@location(0) vPos: vec4<f32>,
        @location(1) vNormal: vec3<f32>,
        @location(2) color: vec3<f32>) -> @location(0) vec4<f32> {
  let fade = getFade(vPos.y);
  let blending = getTriPlanarBlend(vNormal);
	// let xaxis = textureSample( myerTexture, mySampler, vPos.yz * normalRepeat).rgb;
	// let yaxis = textureSample( myTexture, mySampler, vPos.xz  * normalRepeat).rgb;
	// let zaxis = textureSample( myTexture, mySampler, vPos.xy  * normalRepeat).rgb;
  let xaxis = samp(vPos.yz * normalRepeat);
  let yaxis = samp(vPos.xz * normalRepeat);
  let zaxis = samp(vPos.xy * normalRepeat);
	var tex = xaxis * blending.x + yaxis * blending.y + zaxis * blending.z;

  //return vec4<f32>(min(f32(uniforms.stride) * 4.0 / 256.0, 1.0), 0.0, 0.0, 1.0);
  return vec4<f32>(tex * color, 1.0);
}