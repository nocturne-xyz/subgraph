import { Address, BigInt, Bytes, ethereum, crypto, ByteArray } from "@graphprotocol/graph-ts";

const { Value } = ethereum;

export const DEPOSIT_REQUEST_TYPEHASH = Bytes.fromHexString("0xAAAAAA");
export const ENCODED_ASSET_TYPEHASH = Bytes.fromHexString("0xBBBBBB");
export const STEALTH_ADDRESS_TYPEHASH = Bytes.fromHexString("0xCCCCCC");

export interface DepositRequestStruct {
  spender: Address;
  encodedAssetAddr: BigInt;
  encodedAssetId: BigInt;
  value: BigInt;
  depositAddrH1: BigInt;
  depositAddrH2: BigInt;
  nonce: BigInt;
  gasCompensation: BigInt;
}

export function hashDepositRequest(depositRequest: DepositRequestStruct): Bytes {
  const typehash = Value.fromFixedBytes(DEPOSIT_REQUEST_TYPEHASH);
  const spender = Value.fromAddress(depositRequest.spender);
  const assetHash = Value.fromFixedBytes(hashAsset(depositRequest.encodedAssetAddr, depositRequest.encodedAssetId));
  const value = Value.fromUnsignedBigInt(depositRequest.value);
  const depositAddrHash = Value.fromFixedBytes(hashStealthAddress(depositRequest.depositAddrH1, depositRequest.depositAddrH2));
  const nonce = Value.fromUnsignedBigInt(depositRequest.nonce);
  const gasCompensation = Value.fromUnsignedBigInt(depositRequest.gasCompensation);

  const abiEncoded = ethereum.encode(Value.fromTuple([
    typehash,
    spender,
    assetHash,
    value,
    depositAddrHash,
    nonce,
    gasCompensation
  ])) as Bytes;

  return crypto.keccak256(abiEncoded);
}

function hashAsset(encodedAssetAddr: BigInt, encodedAssetId: BigInt): Bytes {
  const typehash = Value.fromFixedBytes(ENCODED_ASSET_TYPEHASH); 
  const encodedAssetAddrValue = Value.fromUnsignedBigInt(encodedAssetAddr);
  const encodedAssetIdValue = Value.fromUnsignedBigInt(encodedAssetId);
  const abiEncoded = ethereum.encode(Value.fromTuple([
    typehash,
    encodedAssetAddrValue,
    encodedAssetIdValue
  ])) as Bytes;

  return crypto.keccak256(abiEncoded);
}

function hashStealthAddress(h1: BigInt, h2: BigInt): Bytes {
  const typehash = Value.fromFixedBytes(STEALTH_ADDRESS_TYPEHASH);
  const h1Value = Value.fromUnsignedBigInt(h1);
  const h2Value = Value.fromUnsignedBigInt(h2);

  // ! cannot be null
  const abiEncoded = ethereum.encode(Value.fromTuple([
    typehash,
    h1Value,
    h2Value
  ])) as Bytes;

  return crypto.keccak256(abiEncoded);
}
