import { removeWhitespaces } from "./util.mjs";

export class RotatingShape {
  constructor(shape) {
    this.shape = shape.split("\n").map((row) => removeWhitespaces(row));
  }

  toString() {
    return this.shape.join("\n") + "\n";
  }
}
