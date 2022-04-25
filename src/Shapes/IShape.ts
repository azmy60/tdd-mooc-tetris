import { Rect } from "../Rect";
import { Shape } from "./Shape";
import { str } from "../utils";

export class IShape_A extends Shape {
  constructor() {
    const rect = new Rect(0, 2, 4, 1);
    const shape = str`.....
                      .....
                      IIII.
                      .....
                      .....`;
    super(shape, "I", rect);
  }

  rotateLeft = this.rotateRight;

  rotateRight() {
    return new IShape_B();
  }
}

export class IShape_B extends Shape {
  constructor() {
    const rect = new Rect(2, 0, 1, 4);
    const shape = str`..I..
                      ..I..
                      ..I..
                      ..I..
                      .....`;
    super(shape, "I", rect);
  }

  rotateLeft = this.rotateRight;

  rotateRight() {
    return new IShape_A();
  }
}
