import { RotatingShape } from "./RotatingShape.mjs";
import { Vector2 } from "./Vector2.mjs";

export class TShape extends RotatingShape {
  constructor() {
    super(
      `.T.
       TTT
       ...`,
      "T",
      {
        offset: new Vector2(0, 0),
        size: new Vector2(3, 2),
      }
    );
  }
}
