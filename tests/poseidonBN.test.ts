import { describe, test, assert } from "matchstick-as/assembly/index"
import { poseidonBN } from "../src/poseidonBN4";
import { hexStringToBigIntBE } from "../src/utils";

const TEST_VECTORS_4_INPUTS = [
  [
    hexStringToBigIntBE("0x025b8facf7056de522733b048cb6a40af23441fbd16ad8d5fed8f961534f51c6"),
    hexStringToBigIntBE("0x282b9699eff45073c16dc0d8aed8ac4b272e720d7271c26e527c2daeceba7eb5"),
    hexStringToBigIntBE("0x076e9e6a91f16112b868da867415e17d244e56657cba870214b0be5ca5b70a1b"),
    hexStringToBigIntBE("0xda4851f239f935465b6766eef5d55f9a5192c635f7b1b15ec0b3626cf5dcde")
  ],
  [
    hexStringToBigIntBE("0x11b02d29c5312b80d495e0749566704178dc315d973fe2ec27a8829815b72c00"),
    hexStringToBigIntBE("0x2cba8b9456834b2d8d72c203a00c623b4d332909d0e8ee470c9b5cb3bd0e93b8"),
    hexStringToBigIntBE("0x0402f7fbcc50da8d59894f4d18fdd6ec88ef14f3b98caeb36e602d0f5dd95c24"),
    hexStringToBigIntBE("0x21add3f2a65bd75501ace92d300773297adb41a2326306bd58dba3f34f5d7be5")
  ],
  [
    hexStringToBigIntBE("0x2d45395e9cfda69dd0d2f25f3a68b6741c859fde87037558a62d5b8b4a26213c"),
    hexStringToBigIntBE("0x22b3f5b913e29a49db607903b9c97c058250679d0679b49febba2066719b2135"),
    hexStringToBigIntBE("0x1ea484976c6cc02e014520a03bab74fe6d1303aa615028b9ba518f8dd313cfa1"),
    hexStringToBigIntBE("0x0843638bb9a1ab0e2641c34e49464dcaf6ee753394b4e50de50d11647fb6978b")
  ],
  [
    hexStringToBigIntBE("0x1cb50e5df550ed107b3e8e1a3648e09dfb1d6f104185fdf71189b923c4d5ef3c"),
    hexStringToBigIntBE("0x0f0b7fa4da27ac7bee6e8dfa4a24d33439d5e18e70a5d40695e822bfdf30b3c8"),
    hexStringToBigIntBE("0x16d0c1a5f3ba8526613697e8a370ceea2de67f734a123da0f8e395c6f7f38370"),
    hexStringToBigIntBE("0x0a765ed76de4948f70f89ff3e1c66fb8f4b35cfa6900b35fc81a4e5bb9a43888")
  ],
  [
    hexStringToBigIntBE("0x250d1008f15087405aeee255b9522ae6c9c05e4b7dadb307c061539bae7ea10c"),
    hexStringToBigIntBE("0x27fff4c2b365d70c8289464b8167e07bb0f311910846fa9284514a1a02b5ce5c"),
    hexStringToBigIntBE("0x1ef2df380886126eeb0db91fe2c3b112c11818a7f42f1ae4010bd78bfb69ec13"),
    hexStringToBigIntBE("0x1f79418be42506aed6ddf22c03299e5c9ec078c898697d48d9d87810eb1b0e20")
  ]
]

const TEST_VECTORS_4_OUTPUTS = [
  hexStringToBigIntBE("0x20125c4da07a5df71b2a08f8ad2bcff87fcee53b2ceeed4474aaefa2c2d07a9b"),
  hexStringToBigIntBE("0x1b6de584d57a68e15849c8f3d99eaf2e9bdfbe573fb879e83db0011ba2948721"),
  hexStringToBigIntBE("0x0efbd503553ca38d247479d7b4edc944d98a821aca1eaafc79656717b1730002"),
  hexStringToBigIntBE("0x07afb9cb979201deb43849339c868e57dbfab7d777dc874d2256d658cf91c554"),
  hexStringToBigIntBE("0x2b8eee489fb6b629210b662aa65943ee03339d356914958dea6ab14db0962517")
]

describe("poseidonBN4", () => {
  test("matches crypto-utils test cases for 4 inputs", () => {
    for (let i = 0; i < TEST_VECTORS_4_INPUTS.length; i++) {
      const inputs = StaticArray.fromArray(TEST_VECTORS_4_INPUTS[i]);
      const expected = TEST_VECTORS_4_OUTPUTS[i];
      const actual = poseidonBN(inputs);
      assert.bigIntEquals(expected, actual);
    }
  });
});