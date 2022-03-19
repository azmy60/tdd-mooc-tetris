import { RotatingShape } from "./RotatingShape.mjs";

export class IShape extends RotatingShape {
  isVertical = false;

  constructor(shape) {
    super(
      shape ??
        `.....
         .....
         IIII.
         .....
         .....`
    );
  }

  rotateRight() {
    const shape = this.isVertical
      ? `.....
         .....
         IIII.
         .....
         .....`
      : `..I..
         ..I..
         ..I..
         ..I..
         .....`;
    const rotated = new IShape(shape);
    rotated.isVertical = !this.isVertical;
    return rotated;
  }

  rotateLeft() {
    return this.rotateRight();
  }
}
