import { Shape } from "./Shape";
import { mns } from "../utils";

export class IShape_A extends Shape {
  constructor() {
    super(mns`.....
              .....
              IIII.
              .....
              .....`);
  }

  rotateLeft = this.rotateRight;

  rotateRight() {
    return new IShape_B();
  }
}

export class IShape_B extends Shape {
  constructor() {
    super(mns`..I..
              ..I..
              ..I..
              ..I..
              .....`);
  }

  rotateLeft = this.rotateRight;

  rotateRight() {
    return new IShape_A();
  }
}
