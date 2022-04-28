import { MatrixString } from "./MatrixString";
import { Shape } from "./Shapes";
import { make2DArray, vec2 } from "./utils";
import { Vector2 } from "./Vector2";

export class Matrix {
  static of(width: number, height: number) {
    return new Matrix(new MatrixString(make2DArray(width, height, ".")));
  }

  constructor(private readonly strings: MatrixString) {}

  apply(shape: Shape) {
    this.strings.rows.forEach((row, y) =>
      row
        .map((_, x) => vec2(x, y))
        .filter((pos) => shape.contains(pos))
        .forEach((pos) => this.put(shape.minos.mino, pos))
    );
  }

  private put(char: string, pos: Vector2) {
    this.strings.rows[pos.y][pos.x] = char;
  }

  copy() {
    return new Matrix(this.strings.copy());
  }

  row(index: number) {
    return this.strings.rows.at(index);
  }

  col(index: number) {
    return this.strings.cols().at(index);
  }

  cell(pos: Vector2) {
    if (pos.x < 0 || pos.y < 0) return undefined;
    return this.row(pos.y)?.at(pos.x);
  }

  get width() {
    return this.strings.width;
  }

  get height() {
    return this.strings.height;
  }

  toString() {
    return this.strings.toString();
  }
}
