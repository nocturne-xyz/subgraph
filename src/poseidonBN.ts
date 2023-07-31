import { BigInt } from "@graphprotocol/graph-ts";
import { Fadd, Fmul, FSquare } from "./BN254ScalarField";
import { getCi, getMi, getPi, getSi } from "./poseidonBNConstants";

const N_ROUNDS_F = 8;
const N_ROUNDS_P = [
  56, 57, 56, 60, 60, 63, 64, 63, 60, 66, 60, 65, 70, 60, 64, 68,
];
const ZERO = BigInt.fromI32(0);

function pow5(a: BigInt): BigInt {
  let aSquare: BigInt = FSquare(a);
  return Fmul(a, FSquare(aSquare));
}

export function poseidonBN(inputs: StaticArray<BigInt>): BigInt {
  const stateWidth = inputs.length + 1;
  const nRoundsP = N_ROUNDS_P[stateWidth - 2];

  const C = getCi(stateWidth - 2);
  const M = getMi(stateWidth - 2);
  const P = getPi(stateWidth - 2);
  const S = getSi(stateWidth - 2);


  let state: StaticArray<BigInt> = new StaticArray(stateWidth);
  state[0] = ZERO;
  for (let i = 0; i < inputs.length; i++) {
    state[i + 1] = inputs[i];
  }

  for (let i = 0; i < stateWidth; i++) {
    state[i] = Fadd(state[i], C[i]);
  }

  for (let r = 0; r < N_ROUNDS_F / 2 - 1; r++) {
    for (let i = 0; i < stateWidth; i++) {
      state[i] = pow5(state[i]);
      state[i] = Fadd(state[i], C[(r + 1) * stateWidth + i]);
    }

    let newState: StaticArray<BigInt> = new StaticArray(stateWidth);
    for (let i = 0; i < stateWidth; i++) {
      newState[i] = ZERO;
      for (let j = 0; j < stateWidth; j++) {
        newState[i] = Fadd(newState[i], Fmul(M[j][i], state[j]));
      }
    }
    state = newState;
  }

  for (let i = 0; i < stateWidth; i++) {
    state[i] = pow5(state[i]);
    state[i] = Fadd(state[i], C[(N_ROUNDS_F / 2 - 1 + 1) * stateWidth + i]);
  }

  let newState: StaticArray<BigInt> = new StaticArray(stateWidth);
  for (let i = 0; i < stateWidth; i++) {
    newState[i] = ZERO;
    for (let j = 0; j < stateWidth; j++) {
      newState[i] = Fadd(newState[i], Fmul(P[j][i], state[j]));
    }
  }
  state = newState;

  for (let r = 0; r < nRoundsP; r++) {
    state[0] = pow5(state[0]);
    state[0] = Fadd(state[0], C[(N_ROUNDS_F / 2 + 1) * stateWidth + r]);

    let s0 = ZERO;
    for (let j = 0; j < stateWidth; j++) {
      s0 = Fadd(s0, Fmul(S[(stateWidth * 2 - 1) * r + j], state[j]));
    }

    for (let k = 1; k < stateWidth; k++) {
      state[k] = Fadd(
        state[k],
        Fmul(state[0], S[(stateWidth * 2 - 1) * r + stateWidth + k - 1])
      );
    }
    state[0] = s0;
  }

  for (let r = 0; r < N_ROUNDS_F / 2 - 1; r++) {
    for (let i = 0; i < stateWidth; i++) {
      state[i] = pow5(state[i]);
      state[i] = Fadd(
        state[i],
        C[(N_ROUNDS_F / 2 + 1) * stateWidth + nRoundsP + r * stateWidth + i]
      );
    }

    let newState: StaticArray<BigInt> = new StaticArray(stateWidth);
    for (let i = 0; i < stateWidth; i++) {
      newState[i] = ZERO;
      for (let j = 0; j < stateWidth; j++) {
        newState[i] = Fadd(newState[i], Fmul(M[j][i], state[j]));
      }
    }
    state = newState;
  }

  for (let i = 0; i < stateWidth; i++) {
    state[i] = pow5(state[i]);
  }

  let res = ZERO;
  for (let j = 0; j < stateWidth; j++) {
    res = Fadd(res, Fmul(M[j][0], state[j]));
  }
  return res;
}
