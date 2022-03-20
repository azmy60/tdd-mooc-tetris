import { Vector2 } from "./Vector2.mjs";

export class Collider {
  pos = new Vector2();

  constructor(offset, size) {
    this.offset = offset;
    this.size = size;
  }

  register(board) {
    this.board = board;
  }

  /**
   * Move by point
   * @param {Vector2} point
   */
  move(point) {
    this.pos.add(point);
  }

  /**
   * Is point contained in this shape?
   * @param {Vector2} point
   * @returns {Boolean}
   */
  contains(point) {
    return (
      point.x >= this.pos.x &&
      point.y >= this.pos.y &&
      point.x < this.pos.x + this.size.x &&
      point.y < this.pos.y + this.size.y
    );
  }

  isLanded() {
    const nextRow = this.board.rows[this.pos.y + this.size.y]?.join("") ?? "";
    const landedOnBlock = /[^\.]/.test(nextRow);

    return landedOnBlock || this.pos.y + this.size.y >= this.board.height;
  }
}
