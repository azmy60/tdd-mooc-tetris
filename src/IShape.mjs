import { RotatingShape } from "./RotatingShape.mjs";

export class IShape extends RotatingShape {
  constructor(isVertical) {
    const shape = isVertical
      ? `..I..
         ..I..
         ..I..
         ..I..
         .....`
      : `.....
         .....
         IIII.
         .....
         .....`;

    super(shape, "I");
    this.isVertical = isVertical;
  }

  rotateRight() {
    return new IShape(!this.isVertical);
  }

  rotateLeft = this.rotateRight;
}
