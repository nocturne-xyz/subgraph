// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class DepositCompleted extends ethereum.Event {
  get params(): DepositCompleted__Params {
    return new DepositCompleted__Params(this);
  }
}

export class DepositCompleted__Params {
  _event: DepositCompleted;

  constructor(event: DepositCompleted) {
    this._event = event;
  }

  get spender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get encodedAsset(): DepositCompletedEncodedAssetStruct {
    return changetype<DepositCompletedEncodedAssetStruct>(
      this._event.parameters[1].value.toTuple()
    );
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get depositAddr(): DepositCompletedDepositAddrStruct {
    return changetype<DepositCompletedDepositAddrStruct>(
      this._event.parameters[3].value.toTuple()
    );
  }

  get nonce(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get gasCompensation(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get merkleIndex(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }
}

export class DepositCompletedEncodedAssetStruct extends ethereum.Tuple {
  get encodedAssetAddr(): BigInt {
    return this[0].toBigInt();
  }

  get encodedAssetId(): BigInt {
    return this[1].toBigInt();
  }
}

export class DepositCompletedDepositAddrStruct extends ethereum.Tuple {
  get h1(): BigInt {
    return this[0].toBigInt();
  }

  get h2(): BigInt {
    return this[1].toBigInt();
  }
}

export class DepositInstantiated extends ethereum.Event {
  get params(): DepositInstantiated__Params {
    return new DepositInstantiated__Params(this);
  }
}

export class DepositInstantiated__Params {
  _event: DepositInstantiated;

  constructor(event: DepositInstantiated) {
    this._event = event;
  }

  get spender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get encodedAsset(): DepositInstantiatedEncodedAssetStruct {
    return changetype<DepositInstantiatedEncodedAssetStruct>(
      this._event.parameters[1].value.toTuple()
    );
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get depositAddr(): DepositInstantiatedDepositAddrStruct {
    return changetype<DepositInstantiatedDepositAddrStruct>(
      this._event.parameters[3].value.toTuple()
    );
  }

  get nonce(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get gasCompensation(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class DepositInstantiatedEncodedAssetStruct extends ethereum.Tuple {
  get encodedAssetAddr(): BigInt {
    return this[0].toBigInt();
  }

  get encodedAssetId(): BigInt {
    return this[1].toBigInt();
  }
}

export class DepositInstantiatedDepositAddrStruct extends ethereum.Tuple {
  get h1(): BigInt {
    return this[0].toBigInt();
  }

  get h2(): BigInt {
    return this[1].toBigInt();
  }
}

export class DepositRetrieved extends ethereum.Event {
  get params(): DepositRetrieved__Params {
    return new DepositRetrieved__Params(this);
  }
}

export class DepositRetrieved__Params {
  _event: DepositRetrieved;

  constructor(event: DepositRetrieved) {
    this._event = event;
  }

  get spender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get encodedAsset(): DepositRetrievedEncodedAssetStruct {
    return changetype<DepositRetrievedEncodedAssetStruct>(
      this._event.parameters[1].value.toTuple()
    );
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get depositAddr(): DepositRetrievedDepositAddrStruct {
    return changetype<DepositRetrievedDepositAddrStruct>(
      this._event.parameters[3].value.toTuple()
    );
  }

  get nonce(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get gasCompensation(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class DepositRetrievedEncodedAssetStruct extends ethereum.Tuple {
  get encodedAssetAddr(): BigInt {
    return this[0].toBigInt();
  }

  get encodedAssetId(): BigInt {
    return this[1].toBigInt();
  }
}

export class DepositRetrievedDepositAddrStruct extends ethereum.Tuple {
  get h1(): BigInt {
    return this[0].toBigInt();
  }

  get h2(): BigInt {
    return this[1].toBigInt();
  }
}

export class EIP712DomainChanged extends ethereum.Event {
  get params(): EIP712DomainChanged__Params {
    return new EIP712DomainChanged__Params(this);
  }
}

export class EIP712DomainChanged__Params {
  _event: EIP712DomainChanged;

  constructor(event: EIP712DomainChanged) {
    this._event = event;
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class OwnershipTransferStarted extends ethereum.Event {
  get params(): OwnershipTransferStarted__Params {
    return new OwnershipTransferStarted__Params(this);
  }
}

export class OwnershipTransferStarted__Params {
  _event: OwnershipTransferStarted;

  constructor(event: OwnershipTransferStarted) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ScreenerPermissionSet extends ethereum.Event {
  get params(): ScreenerPermissionSet__Params {
    return new ScreenerPermissionSet__Params(this);
  }
}

export class ScreenerPermissionSet__Params {
  _event: ScreenerPermissionSet;

  constructor(event: ScreenerPermissionSet) {
    this._event = event;
  }

  get screener(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get permission(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class DepositManager___computeDigestInputReqStruct extends ethereum.Tuple {
  get spender(): Address {
    return this[0].toAddress();
  }

  get encodedAsset(): DepositManager___computeDigestInputReqEncodedAssetStruct {
    return changetype<DepositManager___computeDigestInputReqEncodedAssetStruct>(
      this[1].toTuple()
    );
  }

  get value(): BigInt {
    return this[2].toBigInt();
  }

  get depositAddr(): DepositManager___computeDigestInputReqDepositAddrStruct {
    return changetype<DepositManager___computeDigestInputReqDepositAddrStruct>(
      this[3].toTuple()
    );
  }

  get nonce(): BigInt {
    return this[4].toBigInt();
  }

  get gasCompensation(): BigInt {
    return this[5].toBigInt();
  }
}

export class DepositManager___computeDigestInputReqEncodedAssetStruct extends ethereum.Tuple {
  get encodedAssetAddr(): BigInt {
    return this[0].toBigInt();
  }

  get encodedAssetId(): BigInt {
    return this[1].toBigInt();
  }
}

export class DepositManager___computeDigestInputReqDepositAddrStruct extends ethereum.Tuple {
  get h1(): BigInt {
    return this[0].toBigInt();
  }

  get h2(): BigInt {
    return this[1].toBigInt();
  }
}

export class DepositManager___erc20CapsResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: i32;
  value5: i32;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: i32,
    value5: i32
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set(
      "value4",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value4))
    );
    map.set(
      "value5",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value5))
    );
    return map;
  }

  getRunningGlobalDeposited(): BigInt {
    return this.value0;
  }

  getGlobalCapWholeTokens(): BigInt {
    return this.value1;
  }

  getMaxDepositSizeWholeTokens(): BigInt {
    return this.value2;
  }

  getLastResetTimestamp(): BigInt {
    return this.value3;
  }

  getResetWindowHours(): i32 {
    return this.value4;
  }

  getPrecision(): i32 {
    return this.value5;
  }
}

export class DepositManager__eip712DomainResult {
  value0: Bytes;
  value1: string;
  value2: string;
  value3: BigInt;
  value4: Address;
  value5: Bytes;
  value6: Array<BigInt>;

  constructor(
    value0: Bytes,
    value1: string,
    value2: string,
    value3: BigInt,
    value4: Address,
    value5: Bytes,
    value6: Array<BigInt>
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromFixedBytes(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromAddress(this.value4));
    map.set("value5", ethereum.Value.fromFixedBytes(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigIntArray(this.value6));
    return map;
  }

  getFields(): Bytes {
    return this.value0;
  }

  getName(): string {
    return this.value1;
  }

  getVersion(): string {
    return this.value2;
  }

  getChainId(): BigInt {
    return this.value3;
  }

  getVerifyingContract(): Address {
    return this.value4;
  }

  getSalt(): Bytes {
    return this.value5;
  }

  getExtensions(): Array<BigInt> {
    return this.value6;
  }
}

export class DepositManager extends ethereum.SmartContract {
  static bind(address: Address): DepositManager {
    return new DepositManager("DepositManager", address);
  }

  COMPRESSED_STEALTH_ADDRESS_TYPEHASH(): Bytes {
    let result = super.call(
      "COMPRESSED_STEALTH_ADDRESS_TYPEHASH",
      "COMPRESSED_STEALTH_ADDRESS_TYPEHASH():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_COMPRESSED_STEALTH_ADDRESS_TYPEHASH(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "COMPRESSED_STEALTH_ADDRESS_TYPEHASH",
      "COMPRESSED_STEALTH_ADDRESS_TYPEHASH():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  DEPOSIT_REQUEST_TYPEHASH(): Bytes {
    let result = super.call(
      "DEPOSIT_REQUEST_TYPEHASH",
      "DEPOSIT_REQUEST_TYPEHASH():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_DEPOSIT_REQUEST_TYPEHASH(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DEPOSIT_REQUEST_TYPEHASH",
      "DEPOSIT_REQUEST_TYPEHASH():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  ENCODED_ASSET_TYPEHASH(): Bytes {
    let result = super.call(
      "ENCODED_ASSET_TYPEHASH",
      "ENCODED_ASSET_TYPEHASH():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_ENCODED_ASSET_TYPEHASH(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "ENCODED_ASSET_TYPEHASH",
      "ENCODED_ASSET_TYPEHASH():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  _computeDigest(req: DepositManager___computeDigestInputReqStruct): Bytes {
    let result = super.call(
      "_computeDigest",
      "_computeDigest((address,(uint256,uint256),uint256,(uint256,uint256),uint256,uint256)):(bytes32)",
      [ethereum.Value.fromTuple(req)]
    );

    return result[0].toBytes();
  }

  try__computeDigest(
    req: DepositManager___computeDigestInputReqStruct
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "_computeDigest",
      "_computeDigest((address,(uint256,uint256),uint256,(uint256,uint256),uint256,uint256)):(bytes32)",
      [ethereum.Value.fromTuple(req)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  _erc20Caps(param0: Address): DepositManager___erc20CapsResult {
    let result = super.call(
      "_erc20Caps",
      "_erc20Caps(address):(uint128,uint32,uint32,uint32,uint8,uint8)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new DepositManager___erc20CapsResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toI32(),
      result[5].toI32()
    );
  }

  try__erc20Caps(
    param0: Address
  ): ethereum.CallResult<DepositManager___erc20CapsResult> {
    let result = super.tryCall(
      "_erc20Caps",
      "_erc20Caps(address):(uint128,uint32,uint32,uint32,uint8,uint8)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new DepositManager___erc20CapsResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toI32(),
        value[5].toI32()
      )
    );
  }

  _nonce(): BigInt {
    let result = super.call("_nonce", "_nonce():(uint256)", []);

    return result[0].toBigInt();
  }

  try__nonce(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("_nonce", "_nonce():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _outstandingDepositHashes(param0: Bytes): boolean {
    let result = super.call(
      "_outstandingDepositHashes",
      "_outstandingDepositHashes(bytes32):(bool)",
      [ethereum.Value.fromFixedBytes(param0)]
    );

    return result[0].toBoolean();
  }

  try__outstandingDepositHashes(param0: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "_outstandingDepositHashes",
      "_outstandingDepositHashes(bytes32):(bool)",
      [ethereum.Value.fromFixedBytes(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  _screeners(param0: Address): boolean {
    let result = super.call("_screeners", "_screeners(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try__screeners(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("_screeners", "_screeners(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  _teller(): Address {
    let result = super.call("_teller", "_teller():(address)", []);

    return result[0].toAddress();
  }

  try__teller(): ethereum.CallResult<Address> {
    let result = super.tryCall("_teller", "_teller():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  _weth(): Address {
    let result = super.call("_weth", "_weth():(address)", []);

    return result[0].toAddress();
  }

  try__weth(): ethereum.CallResult<Address> {
    let result = super.tryCall("_weth", "_weth():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  eip712Domain(): DepositManager__eip712DomainResult {
    let result = super.call(
      "eip712Domain",
      "eip712Domain():(bytes1,string,string,uint256,address,bytes32,uint256[])",
      []
    );

    return new DepositManager__eip712DomainResult(
      result[0].toBytes(),
      result[1].toString(),
      result[2].toString(),
      result[3].toBigInt(),
      result[4].toAddress(),
      result[5].toBytes(),
      result[6].toBigIntArray()
    );
  }

  try_eip712Domain(): ethereum.CallResult<DepositManager__eip712DomainResult> {
    let result = super.tryCall(
      "eip712Domain",
      "eip712Domain():(bytes1,string,string,uint256,address,bytes32,uint256[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new DepositManager__eip712DomainResult(
        value[0].toBytes(),
        value[1].toString(),
        value[2].toString(),
        value[3].toBigInt(),
        value[4].toAddress(),
        value[5].toBytes(),
        value[6].toBigIntArray()
      )
    );
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  pendingOwner(): Address {
    let result = super.call("pendingOwner", "pendingOwner():(address)", []);

    return result[0].toAddress();
  }

  try_pendingOwner(): ethereum.CallResult<Address> {
    let result = super.tryCall("pendingOwner", "pendingOwner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class AcceptOwnershipCall extends ethereum.Call {
  get inputs(): AcceptOwnershipCall__Inputs {
    return new AcceptOwnershipCall__Inputs(this);
  }

  get outputs(): AcceptOwnershipCall__Outputs {
    return new AcceptOwnershipCall__Outputs(this);
  }
}

export class AcceptOwnershipCall__Inputs {
  _call: AcceptOwnershipCall;

  constructor(call: AcceptOwnershipCall) {
    this._call = call;
  }
}

export class AcceptOwnershipCall__Outputs {
  _call: AcceptOwnershipCall;

  constructor(call: AcceptOwnershipCall) {
    this._call = call;
  }
}

export class CompleteErc20DepositCall extends ethereum.Call {
  get inputs(): CompleteErc20DepositCall__Inputs {
    return new CompleteErc20DepositCall__Inputs(this);
  }

  get outputs(): CompleteErc20DepositCall__Outputs {
    return new CompleteErc20DepositCall__Outputs(this);
  }
}

export class CompleteErc20DepositCall__Inputs {
  _call: CompleteErc20DepositCall;

  constructor(call: CompleteErc20DepositCall) {
    this._call = call;
  }

  get req(): CompleteErc20DepositCallReqStruct {
    return changetype<CompleteErc20DepositCallReqStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }

  get signature(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class CompleteErc20DepositCall__Outputs {
  _call: CompleteErc20DepositCall;

  constructor(call: CompleteErc20DepositCall) {
    this._call = call;
  }
}

export class CompleteErc20DepositCallReqStruct extends ethereum.Tuple {
  get spender(): Address {
    return this[0].toAddress();
  }

  get encodedAsset(): CompleteErc20DepositCallReqEncodedAssetStruct {
    return changetype<CompleteErc20DepositCallReqEncodedAssetStruct>(
      this[1].toTuple()
    );
  }

  get value(): BigInt {
    return this[2].toBigInt();
  }

  get depositAddr(): CompleteErc20DepositCallReqDepositAddrStruct {
    return changetype<CompleteErc20DepositCallReqDepositAddrStruct>(
      this[3].toTuple()
    );
  }

  get nonce(): BigInt {
    return this[4].toBigInt();
  }

  get gasCompensation(): BigInt {
    return this[5].toBigInt();
  }
}

export class CompleteErc20DepositCallReqEncodedAssetStruct extends ethereum.Tuple {
  get encodedAssetAddr(): BigInt {
    return this[0].toBigInt();
  }

  get encodedAssetId(): BigInt {
    return this[1].toBigInt();
  }
}

export class CompleteErc20DepositCallReqDepositAddrStruct extends ethereum.Tuple {
  get h1(): BigInt {
    return this[0].toBigInt();
  }

  get h2(): BigInt {
    return this[1].toBigInt();
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get contractName(): string {
    return this._call.inputValues[0].value.toString();
  }

  get contractVersion(): string {
    return this._call.inputValues[1].value.toString();
  }

  get teller(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get weth(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class InstantiateETHMultiDepositCall extends ethereum.Call {
  get inputs(): InstantiateETHMultiDepositCall__Inputs {
    return new InstantiateETHMultiDepositCall__Inputs(this);
  }

  get outputs(): InstantiateETHMultiDepositCall__Outputs {
    return new InstantiateETHMultiDepositCall__Outputs(this);
  }
}

export class InstantiateETHMultiDepositCall__Inputs {
  _call: InstantiateETHMultiDepositCall;

  constructor(call: InstantiateETHMultiDepositCall) {
    this._call = call;
  }

  get values(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }

  get depositAddr(): InstantiateETHMultiDepositCallDepositAddrStruct {
    return changetype<InstantiateETHMultiDepositCallDepositAddrStruct>(
      this._call.inputValues[1].value.toTuple()
    );
  }
}

export class InstantiateETHMultiDepositCall__Outputs {
  _call: InstantiateETHMultiDepositCall;

  constructor(call: InstantiateETHMultiDepositCall) {
    this._call = call;
  }
}

export class InstantiateETHMultiDepositCallDepositAddrStruct extends ethereum.Tuple {
  get h1(): BigInt {
    return this[0].toBigInt();
  }

  get h2(): BigInt {
    return this[1].toBigInt();
  }
}

export class InstantiateErc20MultiDepositCall extends ethereum.Call {
  get inputs(): InstantiateErc20MultiDepositCall__Inputs {
    return new InstantiateErc20MultiDepositCall__Inputs(this);
  }

  get outputs(): InstantiateErc20MultiDepositCall__Outputs {
    return new InstantiateErc20MultiDepositCall__Outputs(this);
  }
}

export class InstantiateErc20MultiDepositCall__Inputs {
  _call: InstantiateErc20MultiDepositCall;

  constructor(call: InstantiateErc20MultiDepositCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get values(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get depositAddr(): InstantiateErc20MultiDepositCallDepositAddrStruct {
    return changetype<InstantiateErc20MultiDepositCallDepositAddrStruct>(
      this._call.inputValues[2].value.toTuple()
    );
  }
}

export class InstantiateErc20MultiDepositCall__Outputs {
  _call: InstantiateErc20MultiDepositCall;

  constructor(call: InstantiateErc20MultiDepositCall) {
    this._call = call;
  }
}

export class InstantiateErc20MultiDepositCallDepositAddrStruct extends ethereum.Tuple {
  get h1(): BigInt {
    return this[0].toBigInt();
  }

  get h2(): BigInt {
    return this[1].toBigInt();
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RetrieveDepositCall extends ethereum.Call {
  get inputs(): RetrieveDepositCall__Inputs {
    return new RetrieveDepositCall__Inputs(this);
  }

  get outputs(): RetrieveDepositCall__Outputs {
    return new RetrieveDepositCall__Outputs(this);
  }
}

export class RetrieveDepositCall__Inputs {
  _call: RetrieveDepositCall;

  constructor(call: RetrieveDepositCall) {
    this._call = call;
  }

  get req(): RetrieveDepositCallReqStruct {
    return changetype<RetrieveDepositCallReqStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class RetrieveDepositCall__Outputs {
  _call: RetrieveDepositCall;

  constructor(call: RetrieveDepositCall) {
    this._call = call;
  }
}

export class RetrieveDepositCallReqStruct extends ethereum.Tuple {
  get spender(): Address {
    return this[0].toAddress();
  }

  get encodedAsset(): RetrieveDepositCallReqEncodedAssetStruct {
    return changetype<RetrieveDepositCallReqEncodedAssetStruct>(
      this[1].toTuple()
    );
  }

  get value(): BigInt {
    return this[2].toBigInt();
  }

  get depositAddr(): RetrieveDepositCallReqDepositAddrStruct {
    return changetype<RetrieveDepositCallReqDepositAddrStruct>(
      this[3].toTuple()
    );
  }

  get nonce(): BigInt {
    return this[4].toBigInt();
  }

  get gasCompensation(): BigInt {
    return this[5].toBigInt();
  }
}

export class RetrieveDepositCallReqEncodedAssetStruct extends ethereum.Tuple {
  get encodedAssetAddr(): BigInt {
    return this[0].toBigInt();
  }

  get encodedAssetId(): BigInt {
    return this[1].toBigInt();
  }
}

export class RetrieveDepositCallReqDepositAddrStruct extends ethereum.Tuple {
  get h1(): BigInt {
    return this[0].toBigInt();
  }

  get h2(): BigInt {
    return this[1].toBigInt();
  }
}

export class RetrieveETHDepositCall extends ethereum.Call {
  get inputs(): RetrieveETHDepositCall__Inputs {
    return new RetrieveETHDepositCall__Inputs(this);
  }

  get outputs(): RetrieveETHDepositCall__Outputs {
    return new RetrieveETHDepositCall__Outputs(this);
  }
}

export class RetrieveETHDepositCall__Inputs {
  _call: RetrieveETHDepositCall;

  constructor(call: RetrieveETHDepositCall) {
    this._call = call;
  }

  get req(): RetrieveETHDepositCallReqStruct {
    return changetype<RetrieveETHDepositCallReqStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class RetrieveETHDepositCall__Outputs {
  _call: RetrieveETHDepositCall;

  constructor(call: RetrieveETHDepositCall) {
    this._call = call;
  }
}

export class RetrieveETHDepositCallReqStruct extends ethereum.Tuple {
  get spender(): Address {
    return this[0].toAddress();
  }

  get encodedAsset(): RetrieveETHDepositCallReqEncodedAssetStruct {
    return changetype<RetrieveETHDepositCallReqEncodedAssetStruct>(
      this[1].toTuple()
    );
  }

  get value(): BigInt {
    return this[2].toBigInt();
  }

  get depositAddr(): RetrieveETHDepositCallReqDepositAddrStruct {
    return changetype<RetrieveETHDepositCallReqDepositAddrStruct>(
      this[3].toTuple()
    );
  }

  get nonce(): BigInt {
    return this[4].toBigInt();
  }

  get gasCompensation(): BigInt {
    return this[5].toBigInt();
  }
}

export class RetrieveETHDepositCallReqEncodedAssetStruct extends ethereum.Tuple {
  get encodedAssetAddr(): BigInt {
    return this[0].toBigInt();
  }

  get encodedAssetId(): BigInt {
    return this[1].toBigInt();
  }
}

export class RetrieveETHDepositCallReqDepositAddrStruct extends ethereum.Tuple {
  get h1(): BigInt {
    return this[0].toBigInt();
  }

  get h2(): BigInt {
    return this[1].toBigInt();
  }
}

export class SetErc20CapCall extends ethereum.Call {
  get inputs(): SetErc20CapCall__Inputs {
    return new SetErc20CapCall__Inputs(this);
  }

  get outputs(): SetErc20CapCall__Outputs {
    return new SetErc20CapCall__Outputs(this);
  }
}

export class SetErc20CapCall__Inputs {
  _call: SetErc20CapCall;

  constructor(call: SetErc20CapCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get globalCapWholeTokens(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get maxDepositSizeWholeTokens(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get resetWindowHours(): i32 {
    return this._call.inputValues[3].value.toI32();
  }

  get precision(): i32 {
    return this._call.inputValues[4].value.toI32();
  }
}

export class SetErc20CapCall__Outputs {
  _call: SetErc20CapCall;

  constructor(call: SetErc20CapCall) {
    this._call = call;
  }
}

export class SetScreenerPermissionCall extends ethereum.Call {
  get inputs(): SetScreenerPermissionCall__Inputs {
    return new SetScreenerPermissionCall__Inputs(this);
  }

  get outputs(): SetScreenerPermissionCall__Outputs {
    return new SetScreenerPermissionCall__Outputs(this);
  }
}

export class SetScreenerPermissionCall__Inputs {
  _call: SetScreenerPermissionCall;

  constructor(call: SetScreenerPermissionCall) {
    this._call = call;
  }

  get screener(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get permission(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetScreenerPermissionCall__Outputs {
  _call: SetScreenerPermissionCall;

  constructor(call: SetScreenerPermissionCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
