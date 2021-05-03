#version 310 es
#define OctreeSize 32

layout (local_size_x = 1, local_size_y = 1, local_size_z = 1) in;

layout (std430, binding = 1) buffer CORNERMATERIALS {
    uint cornerMaterials[(OctreeSize + 1) * (OctreeSize + 1) * (OctreeSize + 1)];
};

layout (std430, binding = 2) buffer VOXELMATERIALS {
    uint voxelMaterials[OctreeSize * OctreeSize * OctreeSize];
};

// layout (std430, binding = 3) buffer SSBOOUT3 {
//   int cornerCount;
// };

const uvec3 CHILD_MIN_OFFSETS[8] = uvec3[]
(
  uvec3(0, 0, 0),
  uvec3(0, 0, 1),
  uvec3(0, 1, 0),
  uvec3(0, 1, 1),
  uvec3(1, 0, 0),
  uvec3(1, 0, 1),
  uvec3(1, 1, 0),
  uvec3(1, 1, 1)
);

void main() {
  uint index = gl_GlobalInvocationID.z * 32u * 32u + gl_GlobalInvocationID.y * 32u + gl_GlobalInvocationID.x;

  uvec3 nodePos = uvec3(gl_GlobalInvocationID.x, gl_GlobalInvocationID.y, gl_GlobalInvocationID.z);

  uint corners = 0u;
  for (int j = 0; j < 8; j++)
  {
    uvec3 cornerPos = nodePos + CHILD_MIN_OFFSETS[j];
    uint material = cornerMaterials[cornerPos.z * 33u * 33u + cornerPos.y * 33u + cornerPos.x];
    corners |= (material << j);
  }
  
  voxelMaterials[index] = corners;
  
  // if (corners != 0u && corners != 255u)
  // {
  //   cornerCount = cornerCount + 1;
  // }
}