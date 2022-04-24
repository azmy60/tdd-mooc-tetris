import { Vector2 } from "./Vector2";

export class Rect {
  public pos: Vector2;
  public size: Vector2;

  constructor(pos: Vector2, size: Vector2);
  constructor(x: number, y: number, width: number, height: number);
  constructor(xposrect: any, ysize?: any, width?: number, height?: number) {
    if (typeof xposrect === "number") {
      this.pos = new Vector2(xposrect, ysize);
      this.size = new Vector2(width!, height!);
    } else {
      this.pos = xposrect as Vector2;
      this.size = ysize as Vector2;
    }
  }

  public contains(point: Vector2): boolean {
    return (
      point.x >= this.x &&
      point.y >= this.y &&
      point.x < this.x + this.width &&
      point.y < this.y + this.height
    );
  }

  public get x(): number {
    return this.pos.x;
  }

  public get y(): number {
    return this.pos.y;
  }

  public get width(): number {
    return this.size.x;
  }

  public get height(): number {
    return this.size.y;
  }
}
