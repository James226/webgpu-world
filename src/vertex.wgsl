struct Uniforms {
  modelViewProjectionMatrix : mat4x4<f32>
};
@binding(0) @group(0) var<uniform> uniforms : Uniforms;

struct Lights
{
  position: vec3<f32>,
  diffuse: vec3<f32>
};

fn lambert(N: vec3<f32>, L: vec3<f32>) -> f32
{
  var nrmN = normalize(N);
  var nrmL = normalize(L);
  var result = dot(nrmN, nrmL);
  return max(result, 0.0);
}

struct VertexOutput {
  @builtin(position) Position : vec4<f32>,
  @location(0) fragUV : vec2<f32>,
  @location(1) fragPosition: vec4<f32>
};

@stage(vertex)
fn main(@location(0) position : vec4<f32>,
        @location(1) color : vec4<f32>) -> VertexOutput {

  var light: Lights;
  light.position = vec3<f32>(2.0, 1.0, 4.0);
  light.diffuse = vec3<f32>(1.0, 1.0, 1.0);

  var output : VertexOutput;
  output.Position = uniforms.modelViewProjectionMatrix * position;
  output.fragUV = position.xz;

  var result = vec3<f32>(0.2, 0.2, 0.2) + light.diffuse * lambert(color.rgb, light.position);

  output.fragPosition = vec4<f32>(result.rgb, 1.0);
  return output;
}
