import { RotatingShape } from "./RotatingShape.mjs";

export class TShape extends RotatingShape {
  constructor() {
    super(
      `.T.
       TTT
       ...`,
      "T",
      { offsetX: 0, offsetY: 0, width: 3, height: 2 }
    );
  }
}
