import { RotatingShape } from "./RotatingShape";

export class OShape extends RotatingShape {
  constructor() {
    super({
      shape: `.OO
              .OO
              ...`,
      color: "O",
    });
  }

  rotateLeft(): RotatingShape {
    return this.rotateRight();
  }

  rotateRight(): RotatingShape {
    return new OShape();
  }
}
