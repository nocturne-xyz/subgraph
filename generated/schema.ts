// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class DepositEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save DepositEvent entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type DepositEvent must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("DepositEvent", id.toString(), this);
    }
  }

  static loadInBlock(id: string): DepositEvent | null {
    return changetype<DepositEvent | null>(
      store.get_in_block("DepositEvent", id)
    );
  }

  static load(id: string): DepositEvent | null {
    return changetype<DepositEvent | null>(store.get("DepositEvent", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get type(): string {
    let value = this.get("type");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set type(value: string) {
    this.set("type", Value.fromString(value));
  }

  get spender(): Bytes {
    let value = this.get("spender");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set spender(value: Bytes) {
    this.set("spender", Value.fromBytes(value));
  }

  get encodedAssetAddr(): BigInt {
    let value = this.get("encodedAssetAddr");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set encodedAssetAddr(value: BigInt) {
    this.set("encodedAssetAddr", Value.fromBigInt(value));
  }

  get encodedAssetId(): BigInt {
    let value = this.get("encodedAssetId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set encodedAssetId(value: BigInt) {
    this.set("encodedAssetId", Value.fromBigInt(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }

  get depositAddrH1(): BigInt {
    let value = this.get("depositAddrH1");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set depositAddrH1(value: BigInt) {
    this.set("depositAddrH1", Value.fromBigInt(value));
  }

  get depositAddrH2(): BigInt {
    let value = this.get("depositAddrH2");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set depositAddrH2(value: BigInt) {
    this.set("depositAddrH2", Value.fromBigInt(value));
  }

  get nonce(): BigInt {
    let value = this.get("nonce");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set nonce(value: BigInt) {
    this.set("nonce", Value.fromBigInt(value));
  }

  get gasCompensation(): BigInt {
    let value = this.get("gasCompensation");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set gasCompensation(value: BigInt) {
    this.set("gasCompensation", Value.fromBigInt(value));
  }
}

export class DepositRequest extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save DepositRequest entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type DepositRequest must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("DepositRequest", id.toString(), this);
    }
  }

  static loadInBlock(id: string): DepositRequest | null {
    return changetype<DepositRequest | null>(
      store.get_in_block("DepositRequest", id)
    );
  }

  static load(id: string): DepositRequest | null {
    return changetype<DepositRequest | null>(store.get("DepositRequest", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get createdAtTotalEntityIndex(): BigInt {
    let value = this.get("createdAtTotalEntityIndex");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set createdAtTotalEntityIndex(value: BigInt) {
    this.set("createdAtTotalEntityIndex", Value.fromBigInt(value));
  }

  get instantiationTxHash(): Bytes {
    let value = this.get("instantiationTxHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set instantiationTxHash(value: Bytes) {
    this.set("instantiationTxHash", Value.fromBytes(value));
  }

  get completionTxHash(): Bytes | null {
    let value = this.get("completionTxHash");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set completionTxHash(value: Bytes | null) {
    if (!value) {
      this.unset("completionTxHash");
    } else {
      this.set("completionTxHash", Value.fromBytes(<Bytes>value));
    }
  }

  get retrievalTxHash(): Bytes | null {
    let value = this.get("retrievalTxHash");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set retrievalTxHash(value: Bytes | null) {
    if (!value) {
      this.unset("retrievalTxHash");
    } else {
      this.set("retrievalTxHash", Value.fromBytes(<Bytes>value));
    }
  }

  get status(): string {
    let value = this.get("status");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set status(value: string) {
    this.set("status", Value.fromString(value));
  }

  get spender(): Bytes {
    let value = this.get("spender");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set spender(value: Bytes) {
    this.set("spender", Value.fromBytes(value));
  }

  get encodedAssetAddr(): BigInt {
    let value = this.get("encodedAssetAddr");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set encodedAssetAddr(value: BigInt) {
    this.set("encodedAssetAddr", Value.fromBigInt(value));
  }

  get encodedAssetId(): BigInt {
    let value = this.get("encodedAssetId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set encodedAssetId(value: BigInt) {
    this.set("encodedAssetId", Value.fromBigInt(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }

  get depositAddrH1(): BigInt {
    let value = this.get("depositAddrH1");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set depositAddrH1(value: BigInt) {
    this.set("depositAddrH1", Value.fromBigInt(value));
  }

  get depositAddrH2(): BigInt {
    let value = this.get("depositAddrH2");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set depositAddrH2(value: BigInt) {
    this.set("depositAddrH2", Value.fromBigInt(value));
  }

  get nonce(): BigInt {
    let value = this.get("nonce");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set nonce(value: BigInt) {
    this.set("nonce", Value.fromBigInt(value));
  }

  get gasCompensation(): BigInt {
    let value = this.get("gasCompensation");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set gasCompensation(value: BigInt) {
    this.set("gasCompensation", Value.fromBigInt(value));
  }
}

export class EncodedOrEncryptedNote extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save EncodedOrEncryptedNote entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type EncodedOrEncryptedNote must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("EncodedOrEncryptedNote", id.toString(), this);
    }
  }

  static loadInBlock(id: string): EncodedOrEncryptedNote | null {
    return changetype<EncodedOrEncryptedNote | null>(
      store.get_in_block("EncodedOrEncryptedNote", id)
    );
  }

  static load(id: string): EncodedOrEncryptedNote | null {
    return changetype<EncodedOrEncryptedNote | null>(
      store.get("EncodedOrEncryptedNote", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get merkleIndex(): BigInt {
    let value = this.get("merkleIndex");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set merkleIndex(value: BigInt) {
    this.set("merkleIndex", Value.fromBigInt(value));
  }

  get note(): string | null {
    let value = this.get("note");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set note(value: string | null) {
    if (!value) {
      this.unset("note");
    } else {
      this.set("note", Value.fromString(<string>value));
    }
  }

  get encryptedNote(): string | null {
    let value = this.get("encryptedNote");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set encryptedNote(value: string | null) {
    if (!value) {
      this.unset("encryptedNote");
    } else {
      this.set("encryptedNote", Value.fromString(<string>value));
    }
  }
}

export class EncodedNote extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save EncodedNote entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type EncodedNote must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("EncodedNote", id.toString(), this);
    }
  }

  static loadInBlock(id: string): EncodedNote | null {
    return changetype<EncodedNote | null>(
      store.get_in_block("EncodedNote", id)
    );
  }

  static load(id: string): EncodedNote | null {
    return changetype<EncodedNote | null>(store.get("EncodedNote", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get ownerH1(): BigInt {
    let value = this.get("ownerH1");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set ownerH1(value: BigInt) {
    this.set("ownerH1", Value.fromBigInt(value));
  }

  get ownerH2(): BigInt {
    let value = this.get("ownerH2");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set ownerH2(value: BigInt) {
    this.set("ownerH2", Value.fromBigInt(value));
  }

  get nonce(): BigInt {
    let value = this.get("nonce");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set nonce(value: BigInt) {
    this.set("nonce", Value.fromBigInt(value));
  }

  get encodedAssetAddr(): BigInt {
    let value = this.get("encodedAssetAddr");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set encodedAssetAddr(value: BigInt) {
    this.set("encodedAssetAddr", Value.fromBigInt(value));
  }

  get encodedAssetId(): BigInt {
    let value = this.get("encodedAssetId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set encodedAssetId(value: BigInt) {
    this.set("encodedAssetId", Value.fromBigInt(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }
}

export class EncryptedNote extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save EncryptedNote entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type EncryptedNote must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("EncryptedNote", id.toString(), this);
    }
  }

  static loadInBlock(id: string): EncryptedNote | null {
    return changetype<EncryptedNote | null>(
      store.get_in_block("EncryptedNote", id)
    );
  }

  static load(id: string): EncryptedNote | null {
    return changetype<EncryptedNote | null>(store.get("EncryptedNote", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get ciphertextBytes(): Bytes {
    let value = this.get("ciphertextBytes");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set ciphertextBytes(value: Bytes) {
    this.set("ciphertextBytes", Value.fromBytes(value));
  }

  get encapsulatedSecretBytes(): Bytes {
    let value = this.get("encapsulatedSecretBytes");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set encapsulatedSecretBytes(value: Bytes) {
    this.set("encapsulatedSecretBytes", Value.fromBytes(value));
  }

  get commitment(): BigInt {
    let value = this.get("commitment");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set commitment(value: BigInt) {
    this.set("commitment", Value.fromBigInt(value));
  }
}

export class Nullifier extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Nullifier entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Nullifier must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Nullifier", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Nullifier | null {
    return changetype<Nullifier | null>(store.get_in_block("Nullifier", id));
  }

  static load(id: string): Nullifier | null {
    return changetype<Nullifier | null>(store.get("Nullifier", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get nullifier(): BigInt {
    let value = this.get("nullifier");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set nullifier(value: BigInt) {
    this.set("nullifier", Value.fromBigInt(value));
  }
}

export class SubtreeCommit extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save SubtreeCommit entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type SubtreeCommit must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("SubtreeCommit", id.toString(), this);
    }
  }

  static loadInBlock(id: string): SubtreeCommit | null {
    return changetype<SubtreeCommit | null>(
      store.get_in_block("SubtreeCommit", id)
    );
  }

  static load(id: string): SubtreeCommit | null {
    return changetype<SubtreeCommit | null>(store.get("SubtreeCommit", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get newRoot(): BigInt {
    let value = this.get("newRoot");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set newRoot(value: BigInt) {
    this.set("newRoot", Value.fromBigInt(value));
  }

  get subtreeBatchOffset(): BigInt {
    let value = this.get("subtreeBatchOffset");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set subtreeBatchOffset(value: BigInt) {
    this.set("subtreeBatchOffset", Value.fromBigInt(value));
  }
}

export class FilledBatchWithZerosEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save FilledBatchWithZerosEvent entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type FilledBatchWithZerosEvent must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("FilledBatchWithZerosEvent", id.toString(), this);
    }
  }

  static loadInBlock(id: string): FilledBatchWithZerosEvent | null {
    return changetype<FilledBatchWithZerosEvent | null>(
      store.get_in_block("FilledBatchWithZerosEvent", id)
    );
  }

  static load(id: string): FilledBatchWithZerosEvent | null {
    return changetype<FilledBatchWithZerosEvent | null>(
      store.get("FilledBatchWithZerosEvent", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get startIndex(): BigInt {
    let value = this.get("startIndex");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set startIndex(value: BigInt) {
    this.set("startIndex", Value.fromBigInt(value));
  }

  get numZeros(): BigInt {
    let value = this.get("numZeros");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set numZeros(value: BigInt) {
    this.set("numZeros", Value.fromBigInt(value));
  }
}

export class TreeInsertionEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TreeInsertionEvent entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type TreeInsertionEvent must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("TreeInsertionEvent", id.toString(), this);
    }
  }

  static loadInBlock(id: string): TreeInsertionEvent | null {
    return changetype<TreeInsertionEvent | null>(
      store.get_in_block("TreeInsertionEvent", id)
    );
  }

  static load(id: string): TreeInsertionEvent | null {
    return changetype<TreeInsertionEvent | null>(
      store.get("TreeInsertionEvent", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get encodedOrEncryptedNote(): string | null {
    let value = this.get("encodedOrEncryptedNote");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set encodedOrEncryptedNote(value: string | null) {
    if (!value) {
      this.unset("encodedOrEncryptedNote");
    } else {
      this.set("encodedOrEncryptedNote", Value.fromString(<string>value));
    }
  }

  get filledBatchWithZerosEvent(): string | null {
    let value = this.get("filledBatchWithZerosEvent");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set filledBatchWithZerosEvent(value: string | null) {
    if (!value) {
      this.unset("filledBatchWithZerosEvent");
    } else {
      this.set("filledBatchWithZerosEvent", Value.fromString(<string>value));
    }
  }
}

export class SDKEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save SDKEvent entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type SDKEvent must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("SDKEvent", id.toString(), this);
    }
  }

  static loadInBlock(id: string): SDKEvent | null {
    return changetype<SDKEvent | null>(store.get_in_block("SDKEvent", id));
  }

  static load(id: string): SDKEvent | null {
    return changetype<SDKEvent | null>(store.get("SDKEvent", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get encodedOrEncryptedNote(): string | null {
    let value = this.get("encodedOrEncryptedNote");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set encodedOrEncryptedNote(value: string | null) {
    if (!value) {
      this.unset("encodedOrEncryptedNote");
    } else {
      this.set("encodedOrEncryptedNote", Value.fromString(<string>value));
    }
  }

  get nullifier(): string | null {
    let value = this.get("nullifier");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set nullifier(value: string | null) {
    if (!value) {
      this.unset("nullifier");
    } else {
      this.set("nullifier", Value.fromString(<string>value));
    }
  }
}

export class TreeFrontier extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TreeFrontier entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type TreeFrontier must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("TreeFrontier", id.toString(), this);
    }
  }

  static loadInBlock(id: string): TreeFrontier | null {
    return changetype<TreeFrontier | null>(
      store.get_in_block("TreeFrontier", id)
    );
  }

  static load(id: string): TreeFrontier | null {
    return changetype<TreeFrontier | null>(store.get("TreeFrontier", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get merkleIndex(): BigInt {
    let value = this.get("merkleIndex");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set merkleIndex(value: BigInt) {
    this.set("merkleIndex", Value.fromBigInt(value));
  }

  get root(): BigInt {
    let value = this.get("root");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set root(value: BigInt) {
    this.set("root", Value.fromBigInt(value));
  }

  get rightmostPath(): Array<Array<BigInt>> {
    let value = this.get("rightmostPath");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigIntMatrix();
    }
  }

  set rightmostPath(value: Array<Array<BigInt>>) {
    this.set("rightmostPath", Value.fromBigIntMatrix(value));
  }
}
