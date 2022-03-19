import { RotatingShape } from "./RotatingShape.mjs";

export class TShape extends RotatingShape {
  constructor() {
    super(
      `.T.
       TTT
       ...`,
      "T"
    );
  }
}
