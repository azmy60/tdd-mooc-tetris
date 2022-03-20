import { blockIsAt } from "./util.mjs";

export class Board {
  width;
  height;
  fallingBlock = null;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.rows = Array(height)
      .fill(null)
      .map(() => Array(width).fill("."));
  }

  hasFalling() {
    return Boolean(this.fallingBlock);
  }

  drop(block) {
    if (this.hasFalling()) {
      throw Error("already falling");
    }

    block.moveTo(Math.floor((this.width - block.dim) / 2), 0);
    this.fallingBlock = block;
  }

  tick() {
    const block = this.fallingBlock;

    if (!block) {
      return;
    }

    const lastRow = this.rows[block.pos.y + 1];

    if (!lastRow || lastRow[block.pos.x] !== ".") {
      this.rows[block.pos.y][block.pos.x] = block.toString();
      return this.clearFallingBlock();
    }

    block.moveTo(0, 1);
  }

  clearFallingBlock() {
    this.fallingBlock = null;
  }

  toString() {
    let str = "";
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        str += blockIsAt(this.fallingBlock, x, y)
          ? this.fallingBlock.color
          : this.rows[y][x];
      }
      str += "\n";
    }
    return str;
  }
}
