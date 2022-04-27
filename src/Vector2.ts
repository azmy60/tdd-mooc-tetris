import { vec2 } from "./utils";

export class Vector2 {
  static get zero() {
    return vec2(0, 0);
  }

  static get left() {
    return vec2(-1, 0);
  }

  static get right() {
    return vec2(1, 0);
  }

  static get down() {
    return vec2(0, 1);
  }

  constructor(public x: number, public y: number) {}

  set(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  add(v: Vector2) {
    this.x += v.x;
    this.y += v.y;
  }

  subtract(v: Vector2) {
    this.x -= v.x;
    this.y -= v.y;
  }
}
