import { Vector2 } from "./Vector2";

export class Rect {
  constructor(public readonly pos: Vector2, public readonly size: Vector2) {}

  contains(point: Vector2) {
    return (
      point.x >= this.x &&
      point.y >= this.y &&
      point.x < this.x + this.width &&
      point.y < this.y + this.height
    );
  }

  get x() {
    return this.pos.x;
  }

  get y() {
    return this.pos.y;
  }

  get width() {
    return this.size.x;
  }

  get height() {
    return this.size.y;
  }
}
