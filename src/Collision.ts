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
    return this.position.x + this.bounds.right + 1 === this.matrix.width;
  }

  private isLandedOnBlock() {
    const nextRow = this.matrix.row(this.position.y + this.bounds.bottom + 1);
    return !!nextRow && /[^\.]/.test(nextRow?.join(""));
  }

  private isLandedOnFloor() {
    return this.position.y + this.bounds.bottom + 1 === this.matrix.height;
  }
}
