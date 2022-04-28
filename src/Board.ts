import { Matrix } from "./Matrix";
import { Shape } from "./Shapes";
import { Timer } from "./Timer";
import { ShapeListener } from "./Shapes/ShapeListener";

export class Board extends Timer implements ShapeListener {
  private _shape: Shape | undefined;

  constructor(private readonly matrix: Matrix) {
    super();
  }

  drop(shape: Shape) {
    if (this._shape) {
      throw Error("already falling");
    }

    shape.attachListener(this);
    shape.bounds.attachMatrix(this.matrix);
    shape.place(Math.floor((this.matrix.width - shape.width) / 2), 0);

    this._shape = shape;
  }

  protected onUpdate() {
    this.shape?.moveDown();
  }

  onLanded() {
    this.lockDown();
  }

  private lockDown() {
    this.matrix.apply(this._shape!);
    this._shape = undefined;
  }

  toString() {
    if (!this._shape) return this.matrix.toString();

    const matrix = this.matrix.copy();
    matrix.apply(this._shape);
    return matrix.toString();
  }

  get shape() {
    return this._shape;
  }
}
