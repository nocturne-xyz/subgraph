import { BigInt } from "@graphprotocol/graph-ts";

export const ZERO = BigInt.fromI32(0);
export const ONE = BigInt.fromI32(1);
export const TWO = BigInt.fromI32(2);
export const BN254_SCALAR_FIELD_MODULUS = BigInt.fromString(
  "21888242871839275222246405745257275088548364400416034343698204186575808495617"
);
export const P_MINUS_1_OVER_2 = BN254_SCALAR_FIELD_MODULUS.minus(ONE).div(TWO);
export const NON_QR = BigInt.fromI32(5);
export const TWO_ADICITY = BigInt.fromI32(28);
export const TWO_ADIC_SUBGROUP_COFACTOR = BigInt.fromString("81540058820840996586704275553141814055101440848469862132140264610111");

function reduce(a: BigInt): BigInt {
  return a.mod(BN254_SCALAR_FIELD_MODULUS).plus(BN254_SCALAR_FIELD_MODULUS).mod(BN254_SCALAR_FIELD_MODULUS);
}

export function FAdd(a: BigInt, b: BigInt): BigInt {
  const sum = a.plus(b);
  const sumOverflow = sum.minus(BN254_SCALAR_FIELD_MODULUS);
  return sum.ge(BN254_SCALAR_FIELD_MODULUS) ? sumOverflow : sum;
}

export function FSub(a: BigInt, b: BigInt): BigInt {
  if (a.ge(b)) {
    return a.minus(b);
  } else {
    return BN254_SCALAR_FIELD_MODULUS.minus(b).plus(a);
  }
}

export function FNeg(x: BigInt): BigInt {
  return x.isZero() ? x : BN254_SCALAR_FIELD_MODULUS.minus(x);
}

export function FMul(a: BigInt, b: BigInt): BigInt {
  return reduce(a.times(b));
}

export function FSquare(a: BigInt): BigInt {
  return FMul(a, a);
}

export function FDiv(a: BigInt, b: BigInt): BigInt {
  return FMul(a, FInv(b));
}

export function FInv(x: BigInt): BigInt {
  if (x.isZero()) {
    throw new Error("attempted to invert 0");
  }
  return FInvOrZero(x);
}

export function FInvOrZero(x: BigInt): BigInt {
  if (x.isZero()) {
    return ZERO;
  }

  let t = ZERO;
  let r = BN254_SCALAR_FIELD_MODULUS;
  let newt = ONE;
  let newr = x;
  while (!newr.isZero()) {
    const q = r.div(newr);

    let tmp = newt;
    newt = t.minus(q.times(newt));
    t = tmp;

    tmp = newr;
    newr = r.minus(q.times(newr));
    r = tmp;
  }

  if (t.lt(ZERO)) t = t.plus(BN254_SCALAR_FIELD_MODULUS);

  return t;
}

export function FPow(base: BigInt, exponent: BigInt): BigInt {
  let mask = exponent;
  const exponentBits: Array<bool> = new Array();
  while (mask.gt(ZERO)) {
    exponentBits.push(mask.bitAnd(ONE).notEqual(ZERO));
    mask = mask.rightShift(1);
  }

  let res = ONE;
  for (let i = exponentBits.length - 1; i >= 0; i--) {
    res = FSquare(res);
    if (exponentBits[i]) {
      res = FMul(res, base);
    }
  }

  return res;
}

export function FSqrt(x: BigInt): BigInt | null {
  const legendre = FLegendre(x);

  if (legendre.isZero()) {
    return ZERO;
  }

  if (legendre.equals(BN254_SCALAR_FIELD_MODULUS.minus(ONE))) {
    return null;
  }

  if (legendre.equals(ONE)) {
    let m = TWO_ADICITY;
    let c = FPow(NON_QR, TWO_ADIC_SUBGROUP_COFACTOR);
    let t = FPow(x, TWO_ADIC_SUBGROUP_COFACTOR);
    let r = FPow(x, TWO_ADIC_SUBGROUP_COFACTOR.plus(ONE).div(TWO));

    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (t.isZero()) return ZERO;
      if (t.equals(ONE)) return r;

      let i = ZERO;
      let curr = t;
      while (curr.notEqual(ONE)) {
        curr = FSquare(curr);
        i = i.plus(ONE);
      }

      // i is guaranteed to be < m if lhs is a quadratic residue.
      // since we already chcked legende symbol, it's guaranteed to be one
      if (i.ge(m)) {
        throw new Error("unreachable - i >= m");
      }

      const b = FPow(c, FPow(TWO, FSub(FSub(m, i), ONE)));
      m = i;
      c = FSquare(b);
      t = FMul(t, c);
      r = FMul(r, b);
    }  
  }

  throw new Error("unreachable - legendre symbol is neither 0, 1, nor -1");
}

function FLegendre(x: BigInt): BigInt {
  return FPow(x, P_MINUS_1_OVER_2);
}