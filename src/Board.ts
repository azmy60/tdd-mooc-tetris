import { Matrix } from "./Matrix";
import { Shape } from "./Shapes";
import { Timer } from "./Timer";
import { ShapeListener } from "./Shapes/ShapeListener";
import { centerOf, vec2 } from "./utils";

export class Board extends Timer implements ShapeListener {
  private readonly matrix: Matrix;
  private shape: Shape | undefined;

  constructor(width: number, height: number) {
    super();
    this.matrix = new Matrix(vec2(width, height));
  }

  drop(shape: Shape) {
    if (this.shape) {
      throw Error("already falling");
    }

    shape.attachListener(this);
    shape.setupCollision(this.matrix);
    shape.pos.x = centerOf(this.matrix, shape).x;

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
    this.lockDown();
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
