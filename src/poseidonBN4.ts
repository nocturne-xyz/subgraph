import { BigInt } from "@graphprotocol/graph-ts";
import { Fadd, Fmul, FSquare } from "./BN254ScalarField";
import { C, M, P, S } from "./poseidonBNConstants";

const N_ROUNDS_F = 8;
const N_ROUNDS_P = 60;

function pow5(a: BigInt): BigInt {
  let aSquare: BigInt = FSquare(a);
  return Fmul(a, FSquare(aSquare));
}

const NUM_INPUTS = 4;
const STATE_WIDTH = NUM_INPUTS + 1;

export function poseidonBN(inputs: StaticArray<BigInt>): BigInt {
  const nRoundsF = N_ROUNDS_F;
  const nRoundsP = N_ROUNDS_P;
  const zero = BigInt.fromI32(0);

  let state: StaticArray<BigInt> = new StaticArray(STATE_WIDTH);
  state[0] = zero;
  for (let i = 0; i < inputs.length; i++) {
    state[i + 1] = inputs[i];
  }

  for (let i = 0; i < STATE_WIDTH; i++) {
    state[i] = Fadd(state[i], C[i]);
  }

  for (let r = 0; r < nRoundsF / 2 - 1; r++) {
    for (let i = 0; i < STATE_WIDTH; i++) {
      state[i] = pow5(state[i]);
      state[i] = Fadd(state[i], C[(r + 1) * STATE_WIDTH + i]);
    }

    let newState: StaticArray<BigInt> = new StaticArray(STATE_WIDTH);
    for (let i = 0; i < STATE_WIDTH; i++) {
      newState[i] = zero;
      for (let j = 0; j < STATE_WIDTH; j++) {
        newState[i] = Fadd(newState[i], Fmul(M[j][i], state[j]));
      }
    }
    state = newState;
  }

  for (let i = 0; i < STATE_WIDTH; i++) {
    state[i] = pow5(state[i]);
    state[i] = Fadd(state[i], C[(nRoundsF / 2 - 1 + 1) * STATE_WIDTH + i]);
  }

  let newState: StaticArray<BigInt> = new StaticArray(STATE_WIDTH);
  for (let i = 0; i < STATE_WIDTH; i++) {
    newState[i] = zero;
    for (let j = 0; j < STATE_WIDTH; j++) {
      newState[i] = Fadd(newState[i], Fmul(P[j][i], state[j]));
    }
  }
  state = newState;

  for (let r = 0; r < nRoundsP; r++) {
    state[0] = pow5(state[0]);
    state[0] = Fadd(state[0], C[(nRoundsF / 2 + 1) * STATE_WIDTH + r]);

    let s0 = zero;
    for (let j = 0; j < STATE_WIDTH; j++) {
      s0 = Fadd(s0, Fmul(S[(STATE_WIDTH * 2 - 1) * r + j], state[j]));
    }

    for (let k = 1; k < STATE_WIDTH; k++) {
      state[k] = Fadd(
        state[k],
        Fmul(state[0], S[(STATE_WIDTH * 2 - 1) * r + STATE_WIDTH + k - 1])
      );
    }
    state[0] = s0;
  }

  for (let r = 0; r < nRoundsF / 2 - 1; r++) {
    for (let i = 0; i < STATE_WIDTH; i++) {
      state[i] = pow5(state[i]);
      state[i] = Fadd(
        state[i],
        C[(nRoundsF / 2 + 1) * STATE_WIDTH + nRoundsP + r * STATE_WIDTH + i]
      );
    }

    let newState: StaticArray<BigInt> = new StaticArray(STATE_WIDTH);
    for (let i = 0; i < STATE_WIDTH; i++) {
      newState[i] = zero;
      for (let j = 0; j < STATE_WIDTH; j++) {
        newState[i] = Fadd(newState[i], Fmul(M[j][i], state[j]));
      }
    }
    state = newState;
  }

  for (let i = 0; i < STATE_WIDTH; i++) {
    state[i] = pow5(state[i]);
  }

  let res = zero;
  for (let j = 0; j < STATE_WIDTH; j++) {
    res = Fadd(res, Fmul(M[j][0], state[j]));
  }
  return res;
}
