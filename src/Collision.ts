import { Bounds } from "./Bounds";
import { Vector2 } from "./Vector2";

const RE_CONTAINS_MINO = /[^\.]/;

export class Collision {
  constructor(private readonly pos: Vector2, private readonly bounds: Bounds) {}

  collidingDown() {
    return this.colliding(this.bounds.bottomOf(this.pos));
  }

  collidingLeft() {
    return this.colliding(this.bounds.leftOf(this.pos));
  }

  collidingRight() {
    return this.colliding(this.bounds.rightOf(this.pos));
  }

  private colliding(cells: string[]) {
    if (cells.length === 0) return true;
    return RE_CONTAINS_MINO.test(cells.join(""));
  }
}
