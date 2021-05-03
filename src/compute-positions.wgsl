

[[block]] struct VoxelMaterials {
  voxelMaterials : array<u32>;
};
[[binding(2), group(0)]] var<storage> voxelMaterials: [[access(read)]] VoxelMaterials;

[[block]] struct CornerIndex {
  cornerCount : u32;
  cornerIndexes : array<u32>;
};
[[binding(3), group(0)]] var<storage> cornerIndex: [[access(read_write)]] CornerIndex;


[[stage(compute), workgroup_size(1)]]
fn main([[builtin(global_invocation_id)]] GlobalInvocationID : vec3<u32>) {
	var position: u32 = 0u;

	var i : u32 = 0u;
	loop {
		if (i >= 32u * 32u * 32u) { break; }
		
		if (voxelMaterials.voxelMaterials[i] != 0u && voxelMaterials.voxelMaterials[i] != 255u) {
			cornerIndex.cornerIndexes[position] = i;
			position = position + 1u;  
		}
			
		continuing {  
			i = i + 1u;
		}
	}

	cornerIndex.cornerCount = position;
}