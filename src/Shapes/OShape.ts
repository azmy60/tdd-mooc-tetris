import { Shape } from "./Shape";
import { sqr } from "../utils";

export class OShape extends Shape {
  constructor() {
    super(
      sqr`.OO
          .OO
          ...`,
      "O"
    );
  }

  rotateLeft = this.rotateRight;

  rotateRight() {
    return new OShape();
  }
}
