import { Collision } from "./Collision";
import { Rect } from "./Rect";
import { ShapeListener } from "./ShapeListener";
import { Vector2 } from "./Vector2";

export class Shape {
  private listener?: ShapeListener;
  private _collision?: Collision;
  private readonly dimension: number;
  public readonly rect: Rect;
  // public readonly innerRect: Rect // TODO dont use innerRect. collision should be detected based on the letters

  constructor(
    public readonly minos: string[],
    public readonly mino: string,
    public readonly innerRect: Rect
  ) {
    this.dimension = minos.length;
    this.rect = new Rect(0, 0, this.dimension, this.dimension);
  }

  public attachListener(listener: ShapeListener) {
    this.listener = listener;
  }

  public attachCollision(collision: Collision) {
    this._collision = collision;
  }

  public get collision(): Collision | undefined {
    return this._collision;
  }

  public moveDown() {
    if (this.landed) return;

    this.rect.pos.add(new Vector2(0, 1));
    if (this.landed) this.listener?.onLanded();
  }

  public place(x: number, y: number) {
    this.rect.pos.x = x;
    this.rect.pos.y = y;
  }

  public rotateRight(): Shape {
    return new Shape(
      Array(this.dimension)
        .fill("")
        .map((_, i) =>
          this.minos.reduceRight((prev, curr) => prev + curr[i], "")
        ),
      this.mino,
      this.innerRect
    );
  }

  public rotateLeft(): Shape {
    return new Shape(
      Array(this.dimension)
        .fill("")
        .map((_, i, { length }) =>
          this.minos.reduce((prev, curr) => prev + curr[length - 1 - i], "")
        ),
      this.mino,
      this.innerRect
    );
  }

  public toString(): string {
    return `${this.minos.join("\n")}\n`;
  }

  public contains(point: Vector2): boolean {
    return (
      this.rect.contains(point) &&
      this.minos[point.y - this.rect.y][point.x - this.rect.x] === this.mino
    );
  }

  public get landed() {
    return this.collision?.isLanded();
  }
}
