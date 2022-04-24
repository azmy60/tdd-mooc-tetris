import { Rect } from "./Rect";
import { Shape } from "./Shape";
import { make2DArray } from "./utils";
import { Vector2 } from "./Vector2";

export class Matrix extends Rect {
  private pixels: string[][];

  constructor(size: Vector2) {
    super(Vector2.zero, size);
    this.pixels = make2DArray(size, ".");
  }

  public apply(shape: Shape) {
    this.fill(shape.mino, (pos) => shape.contains(pos));
  }

  public fill(char: string, filter: (pos: Vector2) => boolean) {
    this.pixels.forEach((row, y) =>
      row
        .map((_, x) => new Vector2(x, y))
        .filter((pos) => filter(pos))
        .forEach((pos) => this.put(char, pos))
    );
  }

  public put(char: string, pos: Vector2) {
    this.pixels[pos.y][pos.x] = char;
  }

  public copy(): Matrix {
    const matrix = new Matrix(this.size);
    matrix.pixels = Array.from(this.pixels);
    return matrix;
  }

  public row(index: number): string[] | undefined {
    return this.pixels.at(index);
  }

  public toString(): string {
    return this.pixels.reduce((prev, curr) => `${prev}${curr.join("")}\n`, "");
  }
}
