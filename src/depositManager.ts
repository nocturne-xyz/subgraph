import {
  DepositCompleted,
  DepositInstantiated,
  DepositRetrieved,
} from "../generated/DepositManager/DepositManager";
import { DepositEvent, DepositRequest } from "../generated/schema";
import { hashDepositRequest } from "./eip712Hash";
import {
  toPaddedHexString,
  getTotalLogIndex,
  getTotalEntityIndex,
} from "./utils";

export function handleDepositInstantiated(event: DepositInstantiated): void {
  const totalLogIndex = getTotalLogIndex(event);
  const idx = getTotalEntityIndex(totalLogIndex, 0);
  const id = toPaddedHexString(idx);

  // make DepositEvent entity (for syncing SDK and offchain actors)

  const depositEvent = new DepositEvent(id);
  depositEvent.txHash = event.transaction.hash;
  depositEvent.type = "Instantiated";
  depositEvent.spender = event.params.spender;
  depositEvent.encodedAssetAddr = event.params.encodedAsset.encodedAssetAddr;
  depositEvent.encodedAssetId = event.params.encodedAsset.encodedAssetId;
  depositEvent.value = event.params.value;
  depositEvent.depositAddrH1 = event.params.depositAddr.h1;
  depositEvent.depositAddrH2 = event.params.depositAddr.h2;
  depositEvent.nonce = event.params.nonce;
  depositEvent.gasCompensation = event.params.gasCompensation;
  depositEvent.save();

  // make DepositRequest entity

  const hash = hashDepositRequest(
    event.params.spender,
    event.params.encodedAsset.encodedAssetAddr,
    event.params.encodedAsset.encodedAssetId,
    event.params.value,
    event.params.depositAddr.h1,
    event.params.depositAddr.h2,
    event.params.nonce,
    event.params.gasCompensation
  );
  const depositRequest = new DepositRequest(hash.toHexString());
  depositRequest.status = "Pending";
  depositRequest.createdAtTotalEntityIndex = idx;
  depositRequest.instantiationTxHash = event.transaction.hash;
  depositRequest.spender = event.params.spender;
  depositRequest.encodedAssetAddr = event.params.encodedAsset.encodedAssetAddr;
  depositRequest.encodedAssetId = event.params.encodedAsset.encodedAssetId;
  depositRequest.value = event.params.value;
  depositRequest.depositAddrH1 = event.params.depositAddr.h1;
  depositRequest.depositAddrH2 = event.params.depositAddr.h2;
  depositRequest.nonce = event.params.nonce;
  depositRequest.gasCompensation = event.params.gasCompensation;
  depositRequest.noteMerkleIndex = null;
  depositRequest.save();
}

export function handleDepositCompleted(event: DepositCompleted): void {
  const depositRequest = DepositRequest.load(
    event.params.depositHash.toHexString()
  )!;

  depositRequest.status = "Completed";
  depositRequest.completionTxHash = event.transaction.hash;
  depositRequest.noteMerkleIndex = event.params.merkleIndex;
  depositRequest.actualGasPaid = event.params.gasPaid;
  depositRequest.save();
}

export function handleDepositRetrieved(event: DepositRetrieved): void {
  const depositRequest = DepositRequest.load(
    event.params.depositHash.toHexString()
  )!;
  depositRequest.status = "Retrieved";
  depositRequest.retrievalTxHash = event.transaction.hash;
  depositRequest.save();
}
