import { IShape } from "./IShape.mjs";
import { OShape } from "./OShape.mjs";
import { TShape } from "./TShape.mjs";

export class Tetromino {
  static get T_SHAPE() {
    return new TShape();
  }

  static get I_SHAPE() {
    return new IShape();
  }

  static get O_SHAPE() {
    return new OShape();
  }
}
