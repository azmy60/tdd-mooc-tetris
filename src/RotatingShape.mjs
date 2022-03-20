import { removeWhitespaces } from "./util.mjs";
import { Block } from "./Block.mjs";

export class RotatingShape extends Block {
  constructor(shape, color, { offset, size } = {}) {
    super(color, { offset, size });

    if (typeof shape === "string") {
      shape = shape.split("\n").map((row) => removeWhitespaces(row));
    }

    this.shape = shape;
    this.dim = this.shape.length;
  }

  rotateRight() {
    const rotated = Array(this.dim).fill("");
    for (let i = 0; i < this.dim; i++) {
      for (let j = this.dim - 1; j >= 0; j--) {
        rotated[i] += this.shape[j][i];
      }
    }
    return new RotatingShape(rotated, this.color);
  }

  rotateLeft() {
    const rotated = Array(this.dim).fill("");
    for (let i = this.dim - 1; i >= 0; i--) {
      for (let j = 0; j < this.dim; j++) {
        rotated[this.dim - 1 - i] += this.shape[j][i];
      }
    }
    return new RotatingShape(rotated, this.color);
  }

  toString() {
    return this.shape.join("\n") + "\n";
  }
}
