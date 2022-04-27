export class MatrixString {
  constructor(public readonly rows: string[][]) {}

  cols() {
    const cols = [];
    for (let i = 0; i < this.height; i++) {
      cols.push(this.rows.map((row) => row[i]));
    }
    return cols;
  }

  get width() {
    return this.rows[0].length;
  }

  get height() {
    return this.rows.length;
  }

  toString() {
    return `${this.rows.flatMap((row) => row.join("")).join("\n")}\n`;
  }

  copy() {
    return new MatrixString(this.rows.map((row) => row.slice(0)));
  }
}
