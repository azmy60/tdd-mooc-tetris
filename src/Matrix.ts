import { MatrixString } from "./MatrixString";
import { Rect } from "./Rect";
import { Shape } from "./Shapes";
import { make2DArray, vec2 } from "./utils";
import { Vector2 } from "./Vector2";

export class Matrix extends Rect {
  // FIXME update MatrixString so it can be used for rectangles (non-square).
  private strings: MatrixString;

  constructor(size: Vector2, strings?: MatrixString) {
    super(Vector2.zero, size);

    if (!strings) strings = new MatrixString(make2DArray(this.size, "."));
    this.strings = strings;
  }

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
    return new Matrix(this.size, this.strings.copy());
  }

  row(index: number) {
    return this.strings.rows.at(index);
  }

  col(index: number) {
    return this.strings.cols.at(index);
  }

  toString() {
    return this.strings.toString();
  }
}
