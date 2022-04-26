import { Shape } from "./Shape";
import { sqr } from "../utils";

export class IShape_A extends Shape {
  constructor() {
    const shape = sqr`.....
                      .....
                      IIII.
                      .....
                      .....`;
    super(shape, "I");
  }

  rotateLeft = this.rotateRight;

  rotateRight() {
    return new IShape_B();
  }
}

export class IShape_B extends Shape {
  constructor() {
    const shape = sqr`..I..
                      ..I..
                      ..I..
                      ..I..
                      .....`;
    super(shape, "I");
  }

  rotateLeft = this.rotateRight;

  rotateRight() {
    return new IShape_A();
  }
}
