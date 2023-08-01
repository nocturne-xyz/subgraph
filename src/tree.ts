import { EncodedNote, TreeFrontier } from "../generated/schema";
import { BigInt } from "@graphprotocol/graph-ts";
import { poseidonBN } from "./poseidonBN";
import { decompressPoint } from "./pointCompression";

export const TREE_FRONTIER_ID = "TREE_FRONTIER";
export const EMPTY_TREE_ROOT = BigInt.fromString("14425423529089750832921210739722026857026797579827942712639385657619324990872");
export const ZERO_VALUE = BigInt.fromString("11826002903343228749062904299844230482823860030613873531382924534593825466831");
export const ZERO_HASHES = [
  ZERO_VALUE,
  BigInt.fromString("18976526655739891330006438091239345653786580698771395013387516227782539497274"),
  BigInt.fromString("6810774033780416412415162199345403563615586099663557224316660575326988281139"),
  BigInt.fromString("21745244905142647641801082610043355327463010697056761874154500198256382364611"),
  BigInt.fromString("15118792212976428366391662155758260441268866662736242815890196935075527605215"),
  BigInt.fromString("18545075795962574799240605675059520132606003497982954159813420238423481696999"),
  BigInt.fromString("1067096418489854561598159630642697860380144975524212157430407233737698032502"),
  BigInt.fromString("6830427094050253283566356267904418095254950135498542124870290000312982284751"),
  BigInt.fromString("5756377837938215939039578692124328519393761633168416344812362213876873171726"),
  BigInt.fromString("18449328801709801121449416866311367018762176413057353523286715895678476961367"),
  BigInt.fromString("13320088335567132192625969517631562222406267904801447974032617423622933454431"),
  BigInt.fromString("18748097177133601558950596780771120805530535704395311450546302489829376212864"),
  BigInt.fromString("15274811199669470946278627858460465064704054125804522998529144488437924652602"),
  BigInt.fromString("5970040816423495949297578095020641893587423755969281895631256844665627025314"),
  BigInt.fromString("12214409165609378712954248716397495697308954530150884765212305631602621194502"),
  BigInt.fromString("6257585344230574057676148678208895789918718212055778708819622723184718397468"),
  EMPTY_TREE_ROOT
]
const DEPTH = 16;

export function updateTreeFrontier(newLeaves: Array<BigInt>): void {
  let frontier = TreeFrontier.load(TREE_FRONTIER_ID);

  if (frontier == null) {
    // init new tree frontier
    frontier = new TreeFrontier(TREE_FRONTIER_ID);
    frontier.merkleIndex = BigInt.fromI32(0);
    frontier.rightmostPath = [ZERO_HASHES, ZERO_HASHES, ZERO_HASHES, ZERO_HASHES];
  }

  let merkleIndex = frontier.merkleIndex.toI64();
  for (let i = 0; i < newLeaves.length; i++) {
    let pathMask = merkleIndex;
    let curr = newLeaves[i];
    for (let j = 0; j < DEPTH - 1; j++) {
      // get path index
      const pathIndex = i32(pathMask & 0b11);
      pathMask >>= 2;

      // if it's a left child, all the sblings at this level to 0
      if (pathIndex == 0) {
        frontier.rightmostPath[j] = ZERO_HASHES;
      }
      
      frontier.rightmostPath[j][pathIndex] = curr;
      curr = poseidonBN(frontier.rightmostPath[j]);
    }

    merkleIndex += 1;
  }

  frontier.merkleIndex = BigInt.fromI64(merkleIndex);
  frontier.save();
}

export function computeNoteCommitment(note: EncodedNote): BigInt {
  const h1 = decompressPoint(note.ownerH1);
  const h2 = decompressPoint(note.ownerH2);

  if (h1 == null || h2 == null) {
    throw new Error("invalid note");
  }

  const addrHash = poseidonBN([h1.x, h1.y, h2.x, h2.y]);
  return poseidonBN([
    addrHash,
    note.nonce,
    note.encodedAssetAddr,
    note.encodedAssetId,
    note.value
  ])
}
