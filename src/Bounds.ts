import { Matrix } from "./Matrix";
import { vec2 } from "./utils";
import { Vector2 } from "./Vector2";

export class Bounds {
  private matrix?: Matrix;
  private pos?: Vector2;

  constructor(
    private readonly _left: Vector2[],
    private readonly _right: Vector2[],
    private readonly _bottom: Vector2[]
  ) {}

  attachMatrix(matrix: Matrix) {
    this.matrix = matrix;
  }

  attachPosition(pos: Vector2) {
    this.pos = pos;
  }

  get left() {
    return this.getMatrixCells(this._left);
  }

  get right() {
    return this.getMatrixCells(this._right);
  }

  get bottom() {
    return this.getMatrixCells(this._bottom);
  }

  private getMatrixCells(points: Vector2[]) {
    if (!this.pos) throw Error("Position is not attached.");
    if (!this.matrix) throw Error("Matrix is not attached.");

    return points
      .map((bound) => vec2(bound.x + this.pos!.x, bound.y + this.pos!.y))
      .map((pos) => this.matrix!.cell(pos))
      .filter((defined) => defined) as string[];
  }
}
