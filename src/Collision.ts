import { Bounds } from "./Bounds";
import { Matrix } from "./Matrix";
import { Vector2 } from "./Vector2";

export class Collision {
  constructor(
    private readonly position: Vector2,
    private readonly bounds: Bounds,
    private readonly matrix: Matrix
  ) {}

  isLanded() {
    return this.isLandedOnBlock() || this.isLandedOnFloor();
  }

  isTouchingLeft() {
    return this.position.x + this.bounds.left === this.matrix.x;
  }

  isTouchingRight() {
    return this.position.x + this.bounds.right === this.matrix.width - 1;
  }

  private isLandedOnBlock() {
    const nextRow = this.matrix
      .row(this.position.y + this.bounds.bottom + 2)
      ?.join("");
    return !!nextRow && /[^\.]/.test(nextRow);
  }

  private isLandedOnFloor() {
    return this.position.y + this.bounds.bottom === this.matrix.height - 2;
  }
}
