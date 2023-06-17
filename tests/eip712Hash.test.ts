import { describe, test, assert } from "matchstick-as/assembly/index"
import { hashDepositRequest } from "../src/eip712Hash";
import { Address, Bytes, BigInt } from "@graphprotocol/graph-ts";

describe("eip712Hash", () => {
  test("matches fixture", () => {
    const spender = Address.fromString("0x7E5F4552091A69125d5DfCb7b8C2659029395Bdf");
    const encodedAssetAddr = BigInt.fromI32(291);
    const encodedAssetId = BigInt.fromI32(0);
    const value = BigInt.fromI32(1000);
    const depositAddrH1 = BigInt.fromI32(1);
    const depositAddrH2 = BigInt.fromI32(2);
    const nonce = BigInt.fromI32(0);
    const gasCompensation = BigInt.fromI32(50);


    const expected = Bytes.fromHexString("0x93642c99bdb2709afaf581efa9970c7119d45017495bed34e670ef525dbb4a2b");
    const actual = hashDepositRequest(
      spender,
      encodedAssetAddr,
      encodedAssetId,
      value,
      depositAddrH1,
      depositAddrH2,
      nonce,
      gasCompensation
    );
    assert.bytesEquals(expected, actual);
  })
})