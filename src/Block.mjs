export class Block {
  color;
  pos = { x: 0, y: 0 };

  constructor(color) {
    this.color = color;
  }

  moveTo(x, y) {
    this.pos.x += x;
    this.pos.y += y;
  }

  toString() {
    return this.color;
  }
}
