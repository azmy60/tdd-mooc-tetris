import { Vector2 } from "./Vector2.mjs";

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

    block.attachBoard(this);
    this.attachFalling(block);

    const middle = new Vector2(Math.floor((this.width - block.dim) / 2), 0);
    block.move(middle);
  }

  tick() {
    const block = this.fallingBlock;

    if (!block) {
      return;
    }

    if (block.isLanded()) {
      this.fillWithBlock();
      return this.clearFalling();
    }

    block.move(new Vector2(0, 1));
  }

  fillWithBlock() {
    this.rows.forEach((row, y, rows) =>
      row.forEach(
        (_, x) =>
          this.fallingBlock?.contains(new Vector2(x, y)) &&
          (rows[y][x] = this.fallingBlock.color)
      )
    );
  }

  attachFalling(block) {
    this.fallingBlock = block;
  }

  clearFalling() {
    this.fallingBlock = null;
  }

  toString() {
    let str = "";
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        str += this.fallingBlock?.contains(new Vector2(x, y))
          ? this.fallingBlock.color
          : this.rows[y][x];
      }
      str += "\n";
    }
    return str;
  }
}
