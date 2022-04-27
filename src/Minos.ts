import { MatrixString } from "./MatrixString";
import { Vector2 } from "./Vector2";

export class Minos extends MatrixString {
  constructor(string2D: string[][], readonly mino: string) {
    super(string2D);
  }

  rotateLeft() {
    return new Minos(this.cols().reverse(), this.mino);
  }

  rotateRight() {
    return new Minos(
      this.cols().map((col) => col.reverse()),
      this.mino
    );
  }

  contains(point: Vector2) {
    return this.rows[point.y][point.x] === this.mino;
  }
}
