import { BigInt } from "@graphprotocol/graph-ts";
import { FSub, FMul, P_MINUS_1_OVER_2, BN254_SCALAR_FIELD_MODULUS, ONE, FDiv, FSquare, FSqrt, ZERO, FNeg } from "./BN254ScalarField";

export class Point {
  x: BigInt;
  y: BigInt;

  constructor(x: BigInt, y: BigInt) {
    this.x = x;
    this.y = y;
  }
}

const A = BigInt.fromI32(168700);
const D = BigInt.fromI32(168696);

const SIGN_MASK = BigInt.fromI32(1).leftShift(254);
const MAX_COMPRESSED_VALUE = BN254_SCALAR_FIELD_MODULUS.minus(ONE).bitOr(SIGN_MASK);

export function compressPoint(point: Point): BigInt {
  if (point.x > P_MINUS_1_OVER_2) {
    return SIGN_MASK.bitOr(point.y);
  } else {
    return point.y;
  }
}

export function decompressPoint(
  c: BigInt 
): Point | null {
  if (c.gt(MAX_COMPRESSED_VALUE)) return null;

  // unpack sign bit and Y coordinate
  const sign = c.bitAnd(SIGN_MASK);
  const y = c.bitAnd(SIGN_MASK.minus(ONE));
  if (y.ge(BN254_SCALAR_FIELD_MODULUS)) return null;

  // compute X^2 using curve equation
  const ySquared = FSquare(y);
  const xSquared = FDiv(
    FSub(ONE, ySquared),
    FSub(A, FMul(D, ySquared))
  );
  
  if (xSquared === null) return null;

  // get X by computing square root
  // circuit-utils sqrt returns undefined if sqrt DNE (i.e. legendre symbol is -1)
  let x = FSqrt(xSquared);

  // if sqrt does not exist, the encoding is invalid
  // if sqrt is 0 and sign is nonzero, the encoding is invalid
  if (x === null || (sign && x.isZero())) return null;

  // select the root whose sign matches the sign bit
  if (x.gt(P_MINUS_1_OVER_2) !== (sign.notEqual(ZERO))) {
    x = FNeg(x);
  }

  return new Point(x, y);
}
