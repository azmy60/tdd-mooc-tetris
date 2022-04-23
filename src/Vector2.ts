export class Vector2 {
  constructor(public x: number = 0, public y: number = 0) {}

  add(v: Vector2) {
    this.x += v.x;
    this.y += v.y;
  }

  subtract(v: Vector2) {
    this.x -= v.x;
    this.y -= v.y;
  }
}
