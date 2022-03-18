export class Block {
  color;
  falling = true;

  constructor(color) {
    this.color = color;
  }

  setFalling(b) {
    return (this.falling = b);
  }

  toString() {
    return this.color;
  }
}
