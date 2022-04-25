import { Bounds } from "./Bounds";
import { Matrix } from "./Matrix";

export class Collision {
  constructor(
    private readonly bounds: Bounds,
    private readonly matrix: Matrix
  ) {}

  isLanded() {
    return this.isLandedOnBlock() || this.isLandedOnFloor();
  }

  isTouchingLeft() {
    return this.bounds.left === this.matrix.x;
  }

  isTouchingRight() {
    return this.bounds.right === this.matrix.width;
  }

  private isLandedOnBlock() {
    const nextRow = this.matrix.row(this.bounds.bottom)?.join("");
    return !!nextRow && /[^\.]/.test(nextRow);
  }

  private isLandedOnFloor() {
    return this.bounds.bottom === this.matrix.height;
  }
}
