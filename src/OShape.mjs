import { RotatingShape } from "./RotatingShape.mjs";

export class OShape extends RotatingShape {
  constructor() {
    super(
      `.OO
       .OO
       ...`,
      "O"
    );
  }

  rotateRight() {
    return new OShape();
  }

  rotateLeft = this.rotateRight;
}
