#version 310 es

layout (local_size_x = 1, local_size_y = 1, local_size_z = 1) in;

layout (std430, binding = 2) buffer VOXELMATERIALS {
    uint voxelMaterials[];
};

layout (std430, binding = 3) buffer CORNERINDEX {
	uint cornerCount;
  uint cornerIndexes[];
};

void main()
{
	uint position = 0u;

	for (uint i = 0u; i < 32u * 32u * 32u; i++) {
		if (voxelMaterials[i] != 0u && voxelMaterials[i] != 255u) {
			cornerIndexes[position++] = i;
		}
	}

	cornerCount = position;
}