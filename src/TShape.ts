import { RotatingShape } from "./RotatingShape";
import { Vector2 } from "./Vector2";

export class TShape extends RotatingShape {
  constructor() {
    super({
      shape: `.T.
              TTT
              ...`,
      color: "T",
      offset: new Vector2(0, 0),
      size: new Vector2(3, 2),
    });
  }
}
