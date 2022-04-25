import { Rect } from "./Rect";
import { Shape } from "./Shapes";
import { make2DArray } from "./utils";
import { Vector2 } from "./Vector2";

export class Matrix extends Rect {
  private pixels: string[][];

  constructor(size: Vector2) {
    super(Vector2.zero, size);
    this.pixels = make2DArray(size, ".");
  }

  apply(shape: Shape) {
    this.fill(shape.mino, shape.contains, shape);
  }

  fill(char: string, filter: (pos: Vector2) => boolean, thisArg?: any) {
    this.pixels.forEach((row, y) =>
      row
        .map((_, x) => new Vector2(x, y))
        .filter((pos) => filter.call(thisArg, pos))
        .forEach((pos) => this.put(char, pos))
    );
  }

  put(char: string, pos: Vector2) {
    this.pixels[pos.y][pos.x] = char;
  }

  copy() {
    const matrix = new Matrix(this.size);
    matrix.pixels = Array.from(this.pixels);
    return matrix;
  }

  row(index: number) {
    return this.pixels.at(index);
  }

  toString() {
    return this.pixels.reduce((prev, curr) => `${prev}${curr.join("")}\n`, "");
  }
}
