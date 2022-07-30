import WorldGenerator, {generatePoints} from './world-generator';

describe('World Generator', () => {
  let worldGenerator: WorldGenerator;

  beforeEach(() => {
    worldGenerator = new WorldGenerator(8);
  });

  describe('when init is called', () => {
    let info;
    beforeEach(() => {
      info = worldGenerator.init(3, 20, 43);
    });

    it('position is rounded to nearest stride', async () => {
      expect(info.x).toEqual(0);
      expect(info.y).toEqual(24);
      expect(info.z).toEqual(40);
    });

    it('current stride defaults to minimum stride', () => {
      expect(info.stride).toEqual(8);
    });
  });

  describe('when next is called', () => {
    it('returns origin position', () => {
      let [result, info] = worldGenerator.next({
        x: 0, y: 0, z: 0, stride: 8, iteration: 0, layer: 1, previousOffset: -4
      });

      expect(result).toEqual({
        x: -4, y: -4, z: -4, stride: 8
      });

      expect(info).toEqual({
        x: 0, y: 0, z: 0, stride: 8, iteration: 1, layer: 1, previousOffset: -4
      });
    });

    it('offsets position by root', () => {
      let [result, info] = worldGenerator.next({
        x: 40, y: 24, z: 32, stride: 8, iteration: 0, layer: 1, previousOffset: -4
      });

      expect(result).toEqual({
        x: 36, y: 20, z: 28, stride: 8
      });

      expect(info).toEqual({
        x: 40, y: 24, z: 32, stride: 8, iteration: 1, layer: 1, previousOffset: -4
      });
    });

    it('offsets position by iteration', () => {
      let [result, info] = worldGenerator.next({
        x: 40, y: 24, z: 32, stride: 8, iteration: 1, layer: 1, previousOffset: -4
      });

      expect(result).toEqual({
        x: 36, y: 20, z: 36, stride: 8
      });

      expect(info).toEqual({
        x: 40, y: 24, z: 32, stride: 8, iteration: 2, layer: 1, previousOffset: -4
      });
    });

    it('offsets position by last iteration', () => {
      let [result, info] = worldGenerator.next({
        x: 40, y: 24, z: 32, stride: 8, iteration: 7, layer: 1, previousOffset: -4
      });

      expect(result).toEqual({
        x: 44, y: 28, z: 36, stride: 8
      });

      expect(info).toEqual({
        x: 40, y: 24, z: 32, stride: 8, iteration: 0, layer: 2, previousOffset: -4
      });
    });

    it('offsets position by last layer', () => {
      let [result, info] = worldGenerator.next({
        x: 40, y: 24, z: 32, stride: 8, iteration: 55, layer: 2, previousOffset: -4
      });

      expect(result).toEqual({
        x: 48, y: 32, z: 40, stride: 8
      });

      expect(info).toEqual({
        x: 40, y: 24, z: 32, stride: 16, iteration: 0, layer: 1, previousOffset: 8
      });
    });
  });

  describe('when radius is called', () => {
    let expectedResults = [
      { layer: 1, stride: 8, previousOffset: -4, result: 4},
      { layer: 2, stride: 8, previousOffset: -4, result: 12},
      { layer: 1, stride: 16, previousOffset: 8, result: 24},
      { layer: 2, stride: 16, previousOffset: 8, result: 40},
      { layer: -2, stride: 16, previousOffset: 8, result: -40},
    ];

    for (let i = 0; i < expectedResults.length; i++) {
      const {layer, stride, previousOffset, result} = expectedResults[i];
      it(`then ring ${i+1} is correct`, () => {
        expect(worldGenerator.radius(layer, stride, previousOffset)).toEqual(result);
      });
    }
  });

  describe('when layerRadius is called', () => {
    let expectedResults = [
      { layer: 1, stride: 8, result: 1},
      { layer: 2, stride: 8, result: 2},
      { layer: 1, stride: 16, result: 2},
      { layer: 2, stride: 16, result: 3},
      { layer: 3, stride: 16, result: 4},
      { layer: 1, stride: 32, result: 3},
      { layer: 2, stride: 32, result: 4},
    ];

    for (let i = 0; i < expectedResults.length; i++) {
      const {layer, stride, result} = expectedResults[i];
      it(`then ring ${i+1} is correct`, () => {
        expect(worldGenerator.layerRadius(layer, stride)).toEqual(result);
      });
    }
  });

  describe('when layerCount is called', () => {
    it('returns 2 for first stride', () => {
      expect(worldGenerator.layerCount(8)).toEqual(2);
    });

    it('returns 3 for second stride', () => {
      expect(worldGenerator.layerCount(16)).toEqual(3);
    });

    it('returns 2 for subsequent strides', () => {
      for (let i = 32; i < 1024; i+=i) {
        expect(worldGenerator.layerCount(i)).toEqual(2);
      }
    });
  });

  describe('generate points', () => {
    it('returns the correct values', () => {
      expect(generatePoints(1)).toEqual([
        { x: -1, y: -1, z: -1 },
        { x: -1, y: -1, z: 1 },
        { x: -1, y: 1, z: -1 },
        { x: -1, y: 1, z: 1 },
        { x: 1, y: -1, z: -1 },
        { x: 1, y: -1, z: 1 },
        { x: 1, y: 1, z: -1 },
        { x: 1, y: 1, z: 1 },
      ]);
    });

    it('returns the correct values 2', () => {
      expect(generatePoints(2).length).toEqual(56);
    });
  })
});