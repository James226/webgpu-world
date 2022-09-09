struct Actor {
  position: vec3<f32>,
  velocity: vec3<f32>
};

struct Physics {
  actors: array<Actor>
};

@binding(6) @group(0)
var<storage, read_write> physics : Physics;

#import density

@compute @workgroup_size(1)
fn computePhysics(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {
  let actor: u32 = GlobalInvocationID.x;

  if (getDensity(physics.actors[actor].position) < 0.0) {
    physics.actors[actor].position = physics.actors[actor].position + vec3<f32>(10.0, 0.0, 0.0);
  }

  let direction = normalize(physics.actors[actor].velocity);
  let pos = physics.actors[actor].position + physics.actors[actor].velocity;

  if (getDensity(pos + (direction * 50.0)) >= 0.0) {
    physics.actors[actor].position = pos;
  }
}