import {
  Address,
  BigInt,
  Bytes,
  ethereum,
  crypto,
} from "@graphprotocol/graph-ts";

export const DEPOSIT_REQUEST_TYPEHASH = Bytes.fromHexString(
  "0x9a8b76499925b1382e5e342faa019bad779d0900dfd40b53118a03adf205a6a3"
);
export const ENCODED_ASSET_TYPEHASH = Bytes.fromHexString(
  "0xa707f92ebe5bcecfbef399229bf3acedaf435815f572a1f2a716607a200753ae"
);
export const STEALTH_ADDRESS_TYPEHASH = Bytes.fromHexString(
  "0x0b8fd92970709e094f6461cb1a258bc5dad96431ceac3635ba90da7e52b8b9db"
);

export function hashDepositRequest(
  _spender: Address,
  _encodedAssetAddr: BigInt,
  _encodedAssetId: BigInt,
  _value: BigInt,
  _depositAddrH1: BigInt,
  _depositAddrH2: BigInt,
  _nonce: BigInt,
  _gasCompensation: BigInt
): Bytes {
  const typehash = ethereum.Value.fromFixedBytes(DEPOSIT_REQUEST_TYPEHASH);
  const spender = ethereum.Value.fromAddress(_spender);
  const _assetHash = hashAsset(_encodedAssetAddr, _encodedAssetId);
  const assetHash = ethereum.Value.fromFixedBytes(_assetHash);
  const value = ethereum.Value.fromUnsignedBigInt(_value);
  const _depositAddrHash = hashStealthAddress(_depositAddrH1, _depositAddrH2);
  const depositAddrHash = ethereum.Value.fromFixedBytes(_depositAddrHash);
  const nonce = ethereum.Value.fromUnsignedBigInt(_nonce);
  const gasCompensation = ethereum.Value.fromUnsignedBigInt(_gasCompensation);

  const struct = new ethereum.Tuple(7);
  struct[0] = typehash;
  struct[1] = spender;
  struct[2] = assetHash;
  struct[3] = value;
  struct[4] = depositAddrHash;
  struct[5] = nonce;
  struct[6] = gasCompensation;

  const abiEncoded = ethereum.encode(ethereum.Value.fromTuple(struct))!;
  return Bytes.fromByteArray(crypto.keccak256(abiEncoded));
}

function hashAsset(encodedAssetAddr: BigInt, encodedAssetId: BigInt): Bytes {
  const typehash = ethereum.Value.fromFixedBytes(ENCODED_ASSET_TYPEHASH);
  const encodedAssetAddrValue =
    ethereum.Value.fromUnsignedBigInt(encodedAssetAddr);
  const encodedAssetIdValue = ethereum.Value.fromUnsignedBigInt(encodedAssetId);

  const struct = new ethereum.Tuple(3);
  struct[0] = typehash;
  struct[1] = encodedAssetAddrValue;
  struct[2] = encodedAssetIdValue;

  const abiEncoded = ethereum.encode(ethereum.Value.fromTuple(struct))!;
  return Bytes.fromByteArray(crypto.keccak256(abiEncoded));
}

function hashStealthAddress(h1: BigInt, h2: BigInt): Bytes {
  const typehash = ethereum.Value.fromFixedBytes(STEALTH_ADDRESS_TYPEHASH);
  const h1Value = ethereum.Value.fromUnsignedBigInt(h1);
  const h2Value = ethereum.Value.fromUnsignedBigInt(h2);

  const struct = new ethereum.Tuple(3);
  struct[0] = typehash;
  struct[1] = h1Value;
  struct[2] = h2Value;

  const abiEncoded = ethereum.encode(ethereum.Value.fromTuple(struct))!;
  return Bytes.fromByteArray(crypto.keccak256(abiEncoded));
}
