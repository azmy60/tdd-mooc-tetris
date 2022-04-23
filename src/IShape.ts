import { RotatingShape } from "./RotatingShape";

export class IShape extends RotatingShape {
  constructor(public isVertical: boolean = false) {
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

    super({ shape, color: "I" });
  }

  rotateRight() {
    return new IShape(!this.isVertical);
  }

  rotateLeft = this.rotateRight;
}
