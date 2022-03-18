function getPosHash(x, y) {
  return `${x}|${y}`;
}

function hashToXY(str) {
  return str.split("|").map((n) => Number(n));
}

export class Board {
  width;
  height;
  isBlockFalling = false;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.blocks = {};
  }

  hasFalling() {
    return this.isBlockFalling;
  }

  drop(block) {
    if (this.isBlockFalling) {
      throw Error("already falling");
    }

    // drops from the top middle
    this.blocks[getPosHash(Math.floor(this.width / 2), 0)] = block;
    this.isBlockFalling = true;
  }

  tick() {
    for (const hash in this.blocks) {
      const [x, y] = hashToXY(hash);
      if (y === this.height - 1) {
        this.isBlockFalling = false;
        continue; // block hits the bottom
      }
      this.blocks[getPosHash(x, y + 1)] = this.blocks[hash];
      delete this.blocks[hash];
    }
  }

  toString() {
    let str = "";
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        str += this.blocks[getPosHash(x, y)] ?? ".";
      }
      str += "\n";
    }
    return str;
  }
}
