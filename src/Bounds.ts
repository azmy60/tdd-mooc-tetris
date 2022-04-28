import { Matrix } from "./Matrix";
import { vec2 } from "./utils";
import { Vector2 } from "./Vector2";

export class Bounds {
  private matrix?: Matrix;

  constructor(
    private readonly left: Vector2[],
    private readonly right: Vector2[],
    private readonly bottom: Vector2[]
  ) {}

  attachMatrix(matrix: Matrix) {
    this.matrix = matrix;
  }

  leftOf(shape: Vector2) {
    return this.cellsFromMatrixByPoints(shape, this.left);
  }

  rightOf(shape: Vector2) {
    return this.cellsFromMatrixByPoints(shape, this.right);
  }

  bottomOf(shape: Vector2) {
    return this.cellsFromMatrixByPoints(shape, this.bottom);
  }

  private cellsFromMatrixByPoints(shape: Vector2, points: Vector2[]) {
    return points
      .map((bound) => vec2(bound.x + shape.x, bound.y + shape.y))
      .map((pos) => this.matrix?.cell(pos))
      .filter((defined) => defined) as string[];
  }
}
