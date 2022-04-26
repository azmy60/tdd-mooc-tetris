export class MatrixString {
  constructor(private readonly string2D: string[][]) {}

  get rows() {
    return this.string2D;
  }

  get cols() {
    const cols = [];
    for (let i = 0; i < this.height; i++) {
      cols.push(this.rows.map((row) => row[i]));
    }
    return cols;
  }

  get width() {
    return this.string2D.length;
  }

  get height() {
    return this.rows[0].length;
  }

  toString() {
    return `${this.rows.flatMap((row) => row.join("")).join("\n")}\n`;
  }

  copy() {
    return new MatrixString(this.rows.map((row) => row.slice(0)));
  }
}
