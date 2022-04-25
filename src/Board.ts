import { Matrix } from "./Matrix";
import { Shape } from "./Shapes";
import { Timer } from "./Timer";
import { Vector2 } from "./Vector2";
import { ShapeListener } from "./ShapeListener";
import { centerOf } from "./utils";

export class Board extends Timer implements ShapeListener {
  private readonly matrix: Matrix;
  private shape: Shape | undefined;

  constructor(width: number, height: number) {
    super();
    this.matrix = new Matrix(new Vector2(width, height));
  }

  drop(shape: Shape) {
    if (this.hasFallingShape) {
      throw Error("already falling");
    }

    shape.attachListener(this);
    shape.setupCollision(this.matrix);
    shape.rect.pos.x = centerOf(this.matrix, shape.rect).x;
    this.shape = shape;
  }

  moveLeft() {
    this.shape?.moveLeft();
  }

  moveRight() {
    this.shape?.moveRight();
  }

  moveDown() {
    this.shape?.moveDown();
  }

  protected onUpdate() {
    this.shape?.moveDown();
  }

  onLanded() {
    this.nextUpdate(this.lockDown, this);
  }

  private lockDown() {
    this.matrix.apply(this.shape!);
    this.shape = undefined;
  }

  toString() {
    if (!this.shape) return this.matrix.toString();

    const matrix = this.matrix.copy();
    matrix.apply(this.shape);
    return matrix.toString();
  }

  get hasFallingShape() {
    return !!this.shape;
  }
}
