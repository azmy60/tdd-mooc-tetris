import { vec2 } from "./utils";
import { Vector2 } from "./Vector2";

export class Rect {
  pos: Vector2;
  size: Vector2;

  constructor(pos: Vector2, size: Vector2);
  constructor(x: number, y: number, width: number, height: number);
  constructor(xposrect: any, ysize?: any, width?: number, height?: number) {
    if (typeof xposrect === "number") {
      this.pos = vec2(xposrect, ysize);
      this.size = vec2(width!, height!);
    } else {
      this.pos = xposrect as Vector2;
      this.size = ysize as Vector2;
    }
  }

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
