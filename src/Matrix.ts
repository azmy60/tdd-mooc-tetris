import { MatrixString } from "./MatrixString";
import { Rect } from "./Rect";
import { Shape } from "./Shapes";
import { make2DArray } from "./utils";
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
    this.fill(shape.mino, shape.contains, shape);
  }

  fill(char: string, filter: (pos: Vector2) => boolean, thisArg?: any) {
    this.strings.rows.forEach((row, y) =>
      row
        .map((_, x) => new Vector2(x, y))
        .filter((pos) => filter.call(thisArg, pos))
        .forEach((pos) => this.put(char, pos))
    );
  }

  put(char: string, pos: Vector2) {
    this.strings.rows[pos.y][pos.x] = char;
  }

  copy() {
    return new Matrix(this.size, this.strings.copy());
  }

  row(index: number) {
    return this.strings.rows[index];
  }

  toString() {
    return this.strings.toString();
  }
}
