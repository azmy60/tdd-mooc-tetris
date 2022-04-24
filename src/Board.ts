import { Matrix } from "./Matrix";
import { Collision } from "./Collision";
import { Shape } from "./Shape";
import { Timer } from "./Timer";
import { Vector2 } from "./Vector2";
import { ShapeListener } from "./ShapeListener";
import { centerOf } from "./utils";

export class Board extends Timer implements ShapeListener {
  private readonly matrix: Matrix;
  private shape!: Shape;
  private isIdle = true;

  constructor(size: Vector2) {
    super();
    this.matrix = new Matrix(size);
  }

  public drop(shape: Shape) {
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

  public onLanded() {
    this.nextTick(() => this.lockDown());
  }

  private lockDown() {
    this.matrix.apply(this.shape);
    this.isIdle = true;
  }

  public toString(): string {
    if (!this.shape) {
      return this.matrix.toString();
    }

    const matrix = this.matrix.copy();
    matrix.apply(this.shape);
    return matrix.toString();
  }

  public hasFallingShape() {
    return !this.isIdle;
  }
}
