import { Matrix } from "./Matrix";
import { Collision } from "./Collision";
import { Shape } from "./Shapes";
import { Timer } from "./Timer";
import { Vector2 } from "./Vector2";
import { ShapeListener } from "./ShapeListener";
import { centerOf } from "./utils";

export class Board extends Timer implements ShapeListener {
  private readonly matrix: Matrix;
  private shape!: Shape;
  private isIdle = true;

  constructor(width: number, height: number) {
    super();
    this.matrix = new Matrix(new Vector2(width, height));
  }

  drop(shape: Shape) {
    if (!this.isIdle) {
      throw Error("already falling");
    }

    this.isIdle = false;

    this.shape = shape;
    shape.attachCollision(new Collision(shape, this.matrix));
    shape.attachListener(this);
    shape.place(centerOf(this.matrix, shape.rect).x, 0);
  }

  protected onUpdate() {
    if (this.shape.landed) return;

    this.shape.moveDown();
  }

  onLanded() {
    this.nextTick(this.lockDown, this);
  }

  private lockDown() {
    this.matrix.apply(this.shape);
    this.isIdle = true;
  }

  toString(): string {
    if (!this.shape) {
      return this.matrix.toString();
    }

    const matrix = this.matrix.copy();
    matrix.apply(this.shape);
    return matrix.toString();
  }

  hasFallingShape() {
    return !this.isIdle;
  }
}
