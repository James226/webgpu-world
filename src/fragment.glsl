#version 450
layout(set = 1, binding = 0) uniform sampler mySampler;
layout(set = 1, binding = 1) uniform texture2D myTexture;

layout(location = 1) in vec2 fragUV;
layout(location = 0) in vec4 fragColor;
layout(location = 0) out vec4 outColor;


// vec3 getTriPlanarBlend(vec3 _wNorm){
// 	// in wNorm is the world-space normal of the fragment
// 	vec3 blending = abs( _wNorm );
// 	blending = normalize(max(blending, 0.00001)); // Force weights to sum to 1.0
// 	float b = (blending.x + blending.y + blending.z);
// 	blending /= vec3(b, b, b);
// 	return blending;
// }

void main() {
    outColor =  texture(sampler2D(myTexture, mySampler), fragUV / 2048.0);
    //outColor = fragColor;
}