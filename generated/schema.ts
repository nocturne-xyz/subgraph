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

  get noteMerkleIndex(): BigInt | null {
    let value = this.get("noteMerkleIndex");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set noteMerkleIndex(value: BigInt | null) {
    if (!value) {
      this.unset("noteMerkleIndex");
    } else {
      this.set("noteMerkleIndex", Value.fromBigInt(<BigInt>value));
    }
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

  get noteMerkleIndex(): BigInt | null {
    let value = this.get("noteMerkleIndex");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set noteMerkleIndex(value: BigInt | null) {
    if (!value) {
      this.unset("noteMerkleIndex");
    } else {
      this.set("noteMerkleIndex", Value.fromBigInt(<BigInt>value));
    }
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

  get encodedNoteOwnerH1(): BigInt | null {
    let value = this.get("encodedNoteOwnerH1");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set encodedNoteOwnerH1(value: BigInt | null) {
    if (!value) {
      this.unset("encodedNoteOwnerH1");
    } else {
      this.set("encodedNoteOwnerH1", Value.fromBigInt(<BigInt>value));
    }
  }

  get encodedNoteOwnerH2(): BigInt | null {
    let value = this.get("encodedNoteOwnerH2");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set encodedNoteOwnerH2(value: BigInt | null) {
    if (!value) {
      this.unset("encodedNoteOwnerH2");
    } else {
      this.set("encodedNoteOwnerH2", Value.fromBigInt(<BigInt>value));
    }
  }

  get encodedNoteNonce(): BigInt | null {
    let value = this.get("encodedNoteNonce");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set encodedNoteNonce(value: BigInt | null) {
    if (!value) {
      this.unset("encodedNoteNonce");
    } else {
      this.set("encodedNoteNonce", Value.fromBigInt(<BigInt>value));
    }
  }

  get encodedNoteEncodedAssetAddr(): BigInt | null {
    let value = this.get("encodedNoteEncodedAssetAddr");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set encodedNoteEncodedAssetAddr(value: BigInt | null) {
    if (!value) {
      this.unset("encodedNoteEncodedAssetAddr");
    } else {
      this.set("encodedNoteEncodedAssetAddr", Value.fromBigInt(<BigInt>value));
    }
  }

  get encodedNoteEncodedAssetId(): BigInt | null {
    let value = this.get("encodedNoteEncodedAssetId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set encodedNoteEncodedAssetId(value: BigInt | null) {
    if (!value) {
      this.unset("encodedNoteEncodedAssetId");
    } else {
      this.set("encodedNoteEncodedAssetId", Value.fromBigInt(<BigInt>value));
    }
  }

  get encodedNoteValue(): BigInt | null {
    let value = this.get("encodedNoteValue");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set encodedNoteValue(value: BigInt | null) {
    if (!value) {
      this.unset("encodedNoteValue");
    } else {
      this.set("encodedNoteValue", Value.fromBigInt(<BigInt>value));
    }
  }

  get encryptedNoteCiphertextBytes(): Bytes | null {
    let value = this.get("encryptedNoteCiphertextBytes");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set encryptedNoteCiphertextBytes(value: Bytes | null) {
    if (!value) {
      this.unset("encryptedNoteCiphertextBytes");
    } else {
      this.set("encryptedNoteCiphertextBytes", Value.fromBytes(<Bytes>value));
    }
  }

  get encryptedNoteEncapsulatedSecretBytes(): Bytes | null {
    let value = this.get("encryptedNoteEncapsulatedSecretBytes");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set encryptedNoteEncapsulatedSecretBytes(value: Bytes | null) {
    if (!value) {
      this.unset("encryptedNoteEncapsulatedSecretBytes");
    } else {
      this.set(
        "encryptedNoteEncapsulatedSecretBytes",
        Value.fromBytes(<Bytes>value)
      );
    }
  }

  get encryptedNoteCommitment(): BigInt | null {
    let value = this.get("encryptedNoteCommitment");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set encryptedNoteCommitment(value: BigInt | null) {
    if (!value) {
      this.unset("encryptedNoteCommitment");
    } else {
      this.set("encryptedNoteCommitment", Value.fromBigInt(<BigInt>value));
    }
  }

  get filledBatchWithZerosStartIndex(): BigInt | null {
    let value = this.get("filledBatchWithZerosStartIndex");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set filledBatchWithZerosStartIndex(value: BigInt | null) {
    if (!value) {
      this.unset("filledBatchWithZerosStartIndex");
    } else {
      this.set(
        "filledBatchWithZerosStartIndex",
        Value.fromBigInt(<BigInt>value)
      );
    }
  }

  get filledBatchWithZerosNumZeros(): BigInt | null {
    let value = this.get("filledBatchWithZerosNumZeros");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set filledBatchWithZerosNumZeros(value: BigInt | null) {
    if (!value) {
      this.unset("filledBatchWithZerosNumZeros");
    } else {
      this.set("filledBatchWithZerosNumZeros", Value.fromBigInt(<BigInt>value));
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

  get encodedNoteOwnerH1(): BigInt | null {
    let value = this.get("encodedNoteOwnerH1");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set encodedNoteOwnerH1(value: BigInt | null) {
    if (!value) {
      this.unset("encodedNoteOwnerH1");
    } else {
      this.set("encodedNoteOwnerH1", Value.fromBigInt(<BigInt>value));
    }
  }

  get encodedNoteOwnerH2(): BigInt | null {
    let value = this.get("encodedNoteOwnerH2");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set encodedNoteOwnerH2(value: BigInt | null) {
    if (!value) {
      this.unset("encodedNoteOwnerH2");
    } else {
      this.set("encodedNoteOwnerH2", Value.fromBigInt(<BigInt>value));
    }
  }

  get encodedNoteNonce(): BigInt | null {
    let value = this.get("encodedNoteNonce");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set encodedNoteNonce(value: BigInt | null) {
    if (!value) {
      this.unset("encodedNoteNonce");
    } else {
      this.set("encodedNoteNonce", Value.fromBigInt(<BigInt>value));
    }
  }

  get encodedNoteEncodedAssetAddr(): BigInt | null {
    let value = this.get("encodedNoteEncodedAssetAddr");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set encodedNoteEncodedAssetAddr(value: BigInt | null) {
    if (!value) {
      this.unset("encodedNoteEncodedAssetAddr");
    } else {
      this.set("encodedNoteEncodedAssetAddr", Value.fromBigInt(<BigInt>value));
    }
  }

  get encodedNoteEncodedAssetId(): BigInt | null {
    let value = this.get("encodedNoteEncodedAssetId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set encodedNoteEncodedAssetId(value: BigInt | null) {
    if (!value) {
      this.unset("encodedNoteEncodedAssetId");
    } else {
      this.set("encodedNoteEncodedAssetId", Value.fromBigInt(<BigInt>value));
    }
  }

  get encodedNoteValue(): BigInt | null {
    let value = this.get("encodedNoteValue");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set encodedNoteValue(value: BigInt | null) {
    if (!value) {
      this.unset("encodedNoteValue");
    } else {
      this.set("encodedNoteValue", Value.fromBigInt(<BigInt>value));
    }
  }

  get encryptedNoteCiphertextBytes(): Bytes | null {
    let value = this.get("encryptedNoteCiphertextBytes");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set encryptedNoteCiphertextBytes(value: Bytes | null) {
    if (!value) {
      this.unset("encryptedNoteCiphertextBytes");
    } else {
      this.set("encryptedNoteCiphertextBytes", Value.fromBytes(<Bytes>value));
    }
  }

  get encryptedNoteEncapsulatedSecretBytes(): Bytes | null {
    let value = this.get("encryptedNoteEncapsulatedSecretBytes");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set encryptedNoteEncapsulatedSecretBytes(value: Bytes | null) {
    if (!value) {
      this.unset("encryptedNoteEncapsulatedSecretBytes");
    } else {
      this.set(
        "encryptedNoteEncapsulatedSecretBytes",
        Value.fromBytes(<Bytes>value)
      );
    }
  }

  get encryptedNoteCommitment(): BigInt | null {
    let value = this.get("encryptedNoteCommitment");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set encryptedNoteCommitment(value: BigInt | null) {
    if (!value) {
      this.unset("encryptedNoteCommitment");
    } else {
      this.set("encryptedNoteCommitment", Value.fromBigInt(<BigInt>value));
    }
  }

  get nullifier(): BigInt | null {
    let value = this.get("nullifier");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set nullifier(value: BigInt | null) {
    if (!value) {
      this.unset("nullifier");
    } else {
      this.set("nullifier", Value.fromBigInt(<BigInt>value));
    }
  }

  get filledBatchWithZerosUpToMerkleIndex(): BigInt | null {
    let value = this.get("filledBatchWithZerosUpToMerkleIndex");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set filledBatchWithZerosUpToMerkleIndex(value: BigInt | null) {
    if (!value) {
      this.unset("filledBatchWithZerosUpToMerkleIndex");
    } else {
      this.set(
        "filledBatchWithZerosUpToMerkleIndex",
        Value.fromBigInt(<BigInt>value)
      );
    }
  }
}
