import { Shape } from "./Shape";
import { mns } from "../utils";

export class OShape extends Shape {
  constructor() {
    super(mns`.OO
              .OO
              ...`);
  }

  rotateLeft = this.rotateRight;

  rotateRight() {
    return new OShape();
  }
}
