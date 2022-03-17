function getPosHash(x, y) {
  return `${x}|${y}`;
}

export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.blocks = {};
  }

  drop(block) {
    // drops from the top middle
    this.blocks[getPosHash(Math.floor(this.width / 2), 0)] = block;
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
