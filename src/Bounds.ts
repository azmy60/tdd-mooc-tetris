import { Shape } from "./Shapes";
import { findLastIndex } from "./utils";

export class Bounds {
  public readonly left: number;
  public readonly right: number;
  public readonly top: number;
  public readonly bottom: number;

  constructor(shape: Shape) {
    this.left = shape.minos.cols.findIndex((col) => col.includes(shape.mino));
    this.top = shape.minos.rows.findIndex((row) => row.includes(shape.mino));
    this.right =
      this.left +
      findLastIndex(shape.minos.cols, (col) => col.includes(shape.mino)) -
      1;
    this.bottom =
      this.top +
      findLastIndex(shape.minos.rows, (row) => row.includes(shape.mino)) -
      1;
  }
}
