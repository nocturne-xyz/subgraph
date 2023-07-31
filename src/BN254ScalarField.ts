import { BigInt } from "@graphprotocol/graph-ts";

const P = BigInt.fromString(
  "21888242871839275222246405745257275088548364400416034343698204186575808495617"
);

export function Fadd(a: BigInt, b: BigInt): BigInt {
  return a.plus(b).mod(P).plus(P).mod(P);
}

export function Fmul(a: BigInt, b: BigInt): BigInt {
  return a.times(b).mod(P).plus(P).mod(P);
}

export function Fsub(a: BigInt, b: BigInt): BigInt {
  return a.minus(b).mod(P).plus(P).mod(P);
}

export function FSquare(a: BigInt): BigInt {
  return a.times(a).mod(P).plus(P).mod(P);
}
