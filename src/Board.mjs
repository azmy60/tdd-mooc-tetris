function stringifyPosition(x, y) {
  return `${x}|${y}`;
}

function parsePosition(str) {
  return str.split("|").map((n) => Number(n));
}

export class Board {
  width;
  height;
  falling = false;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.blocks = {};
  }

  hasFalling() {
    return this.falling;
  }

  drop(block) {
    if (this.falling) {
      throw Error("already falling");
    }

    // drops from the top middle
    this.setBlockPosition(block, Math.floor(this.width / 2), 0);
    this.falling = true;
  }

  tick() {
    for (const hash in this.blocks) {
      const [x, y] = parsePosition(hash);
      const block = this.blocks[hash];

      if (!block.falling) {
        continue;
      }

      if (y === this.height - 1) {
        this.falling = block.setFalling(false);
        continue; // block hits the bottom
      }

      this.moveBlockTo(hash, x, y + 1);
    }
  }

  moveBlockTo(hash, x, y) {
    this.setBlockPosition(this.blocks[hash], x, y);
    delete this.blocks[hash];
  }

  setBlockPosition(block, x, y) {
    this.blocks[stringifyPosition(x, y)] = block;
  }

  toString() {
    let str = "";
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        str += this.blocks[stringifyPosition(x, y)] ?? ".";
      }
      str += "\n";
    }
    return str;
  }
}
