import { Bounds } from "../Bounds";
import { Collision } from "../Collision";
import { Matrix } from "../Matrix";
import { Rect } from "../Rect";
import { ShapeListener } from "../ShapeListener";
import { Vector2 } from "../Vector2";

export class Shape {
  readonly rect: Rect;
  private listener?: ShapeListener;
  private collision?: Collision;
  private readonly dimension: number;
  // public readonly innerRect: Rect // TODO dont use innerRect. collision should be detected based on the letters

  constructor(
    public readonly minos: string[],
    public readonly mino: string,
    public readonly innerRect: Rect
  ) {
    this.dimension = minos.length;
    this.rect = new Rect(0, 0, this.dimension, this.dimension);
  }

  attachListener(listener: ShapeListener) {
    this.listener = listener;
  }

  setupCollision(matrix: Matrix) {
    this.collision = new Collision(new Bounds(this), matrix);
  }

  moveDown() {
    if (this.collision?.isLanded()) return;

    this.rect.pos.add(new Vector2(0, 1));
    if (this.collision?.isLanded()) this.listener?.onLanded();
  }

  moveLeft() {
    if (this.collision?.isTouchingLeft()) return;
    this.rect.pos.add(Vector2.left);
  }

  moveRight() {
    if (this.collision?.isTouchingRight()) return;
    this.rect.pos.add(Vector2.right);
  }

  rotateRight() {
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

  rotateLeft() {
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

  toString() {
    return `${this.minos.join("\n")}\n`;
  }

  contains(point: Vector2) {
    return (
      this.rect.contains(point) &&
      this.minos[point.y - this.rect.y][point.x - this.rect.x] === this.mino
    );
  }
}
