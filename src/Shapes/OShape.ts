import { Rect } from "../Rect";
import { Shape } from "./Shape";
import { str } from "../utils";

export class OShape extends Shape {
  constructor() {
    super(
      str`.OO
          .OO
          ...`,
      "O",
      new Rect(1, 0, 2, 2)
    );
  }

  rotateLeft = this.rotateRight;

  rotateRight() {
    return new OShape();
  }
}
