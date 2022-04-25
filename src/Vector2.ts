export class Vector2 {
  static get zero() {
    return new Vector2(0, 0);
  }

  static get left() {
    return new Vector2(-1, 0);
  }

  static get right() {
    return new Vector2(1, 0);
  }

  constructor(public x: number, public y: number) {}

  add(v: Vector2): void;
  add(x: number, y: number): void;
  add(vx: any, y?: number): void {
    if (typeof vx === "number") {
      this.x += vx;
      this.y += y!;
    } else {
      this.x += vx.x;
      this.y += vx.y;
    }
  }

  subtract(v: Vector2): void;
  subtract(x: number, y: number): void;
  subtract(vx: any, y?: number): void {
    if (typeof vx === "number") {
      this.x -= vx;
      this.y -= y!;
    } else {
      this.x -= vx.x;
      this.y -= vx.y;
    }
  }
}
