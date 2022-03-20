export class Vector2 {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  add(vector2) {
    this.x += vector2.x;
    this.y += vector2.y;
  }

  subtract(vector2) {
    this.x -= vector2.x;
    this.y -= vector2.y;
  }
}
