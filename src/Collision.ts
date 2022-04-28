import { Bounds } from "./Bounds";

const RE_CONTAINS_MINO = /[^\.]/;

export class Collision {
  constructor(public readonly bounds: Bounds) {}

  collidingDown() {
    return this.colliding(this.bounds.bottom);
  }

  collidingLeft() {
    return this.colliding(this.bounds.left);
  }

  collidingRight() {
    return this.colliding(this.bounds.right);
  }

  private colliding(cells: string[]) {
    if (cells.length === 0) return true;
    return RE_CONTAINS_MINO.test(cells.join(""));
  }
}
