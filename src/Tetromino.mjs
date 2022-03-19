import { IShape } from "./IShape.mjs";
import { TShape } from "./TShape.mjs";

export class Tetromino {
  static get T_SHAPE() {
    return new TShape();
  }

  static get I_SHAPE() {
    return new IShape();
  }
}
