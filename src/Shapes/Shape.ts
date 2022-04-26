import { Bounds } from "../Bounds";
import { Collision } from "../Collision";
import { Matrix } from "../Matrix";
import { Rect } from "../Rect";
import { ShapeListener } from "./ShapeListener";
import { Vector2 } from "../Vector2";
import { MatrixString } from "../MatrixString";

export class Shape {
  readonly rect: Rect;
  private landed: boolean = false;
  private listener?: ShapeListener;
  private collision?: Collision;

  constructor(
    public readonly minos: MatrixString,
    public readonly mino: string
  ) {
    this.rect = new Rect(0, 0, minos.size, minos.size);
  }

  attachListener(listener: ShapeListener) {
    this.listener = listener;
  }

  setupCollision(matrix: Matrix) {
    this.collision = new Collision(this.rect.pos, new Bounds(this), matrix);
  }

  moveDown() {
    if (this.landed) return;

    if (this.collision?.isLanded()) {
      return this.onLanded();
    }

    this.rect.pos.add(new Vector2(0, 1));
  }

  private onLanded() {
    this.landed = true;
    this.listener?.onLanded();
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
    return new Shape(this.minos.rotateRight(), this.mino);
  }

  rotateLeft() {
    return new Shape(this.minos.rotateLeft(), this.mino);
  }

  toString() {
    return this.minos.toString();
  }

  contains(point: Vector2) {
    return (
      this.rect.contains(point) &&
      this.minos.rows[point.y - this.rect.y][point.x - this.rect.x] ===
        this.mino
    );
  }
}
