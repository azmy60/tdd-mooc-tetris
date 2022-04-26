export class MatrixString {
  public readonly size = this.string2D.length;

  constructor(private readonly string2D: string[][]) {}

  rotateLeft() {
    return new MatrixString(this.cols.reverse());
  }

  rotateRight() {
    return new MatrixString(this.cols.map((col) => col.reverse()));
  }

  get rows() {
    return this.string2D;
  }

  get cols() {
    return this.rows.map((_, i, rows) => rows.map((row) => row[i]));
  }

  toString() {
    return `${this.rows.flatMap((row) => row.join("")).join("\n")}\n`;
  }

  copy() {
    return new MatrixString(this.rows.map((row) => row.slice(0)));
  }
}
