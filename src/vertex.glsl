#version 450

struct Lights
{
  vec3 position;
  vec3 diffuse; // Colour
};

float lambert(vec3 N, vec3 L)
{
  vec3 nrmN = normalize(N);
  vec3 nrmL = normalize(L);
  float result = dot(nrmN, nrmL);
  return max(result, 0.0);
}

layout(set = 0, binding = 0) uniform Uniforms {
  mat4 modelViewProjectionMatrix;
} uniforms;

layout(location = 0) in vec4 position;
layout(location = 1) in vec4 color;

layout(location = 0) out vec4 fragColor;

void main() {
  Lights light;
  light.position = vec3(2,1,4);
  light.diffuse = vec3(1.0, 1.0, 1.0);

  gl_Position = uniforms.modelViewProjectionMatrix * position;

  vec3 result = vec3(0.2, 0.2, 0.2) + light.diffuse * lambert(color.rgb, light.position);

  fragColor = vec4(result.rgb, 1.0);
}