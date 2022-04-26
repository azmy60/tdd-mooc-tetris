import { Bounds } from "./Bounds";
import { Matrix } from "./Matrix";
import { Vector2 } from "./Vector2";

const RE_MINO = /[^\.]/;
export class Collision {
  constructor(
    private readonly pos: Vector2,
    private readonly bounds: Bounds,
    private readonly matrix: Matrix
  ) {}

  isLanded() {
    return this.isLandedOnBlock() || this.isLandedOnFloor();
  }

  isTouchingLeft() {
    return this.isTouchingLeftBlock() || this.isTouchingLeftWall();
  }

  isTouchingRight() {
    return this.right === this.matrix.width;
  }

  private isLandedOnBlock() {
    const bottomRow = this.matrix
      .row(this.bottom)
      ?.slice(this.left, this.right);
    return !!bottomRow && this.containsMino(bottomRow);
  }

  private isLandedOnFloor() {
    return this.bottom === this.matrix.height;
  }

  private isTouchingLeftBlock() {
    const leftCol = this.matrix
      .col(this.left - 1)
      ?.slice(this.top, this.bottom);
    return !!leftCol && this.containsMino(leftCol);
  }

  private isTouchingLeftWall() {
    return this.left === this.matrix.x;
  }

  private containsMino(strings: string[]) {
    return RE_MINO.test(strings.join(""));
  }

  private get left() {
    return this.pos.x + this.bounds.left;
  }

  private get right() {
    return this.pos.x + this.bounds.right + 1;
  }

  private get bottom() {
    return this.pos.y + this.bounds.bottom + 1;
  }

  private get top() {
    return this.pos.y + this.bounds.top;
  }
}
