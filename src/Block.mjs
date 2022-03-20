import { Collider } from "./Collider.mjs";
import { Vector2 } from "./Vector2.mjs";

export class Block extends Collider {
  color;
  dim = 1;

  constructor(
    color,
    { offset = new Vector2(0, 0), size = new Vector2(1, 1) } = {}
  ) {
    super(offset, size);
    this.color = color;
    this.shape = [color];
  }

  /**
   * Is point contained in this shape?
   * @param {import('./Vector2.mjs').Vector2} point
   * @returns {Boolean}
   */
  contains(point) {
    return (
      super.contains(point) &&
      this.shape[point.y - this.pos.y][point.x - this.pos.x] === this.color
    );
  }

  toString() {
    return this.color;
  }
}
