import { Board } from "./Board";
import { Vector2 } from "./Vector2";

export class Collider {
  private board: Board = null;
  public pos: Vector2 = new Vector2();

  constructor(public offset: unknown, public size: Vector2) {}

  attachBoard(board: Board) {
    this.board = board;
  }

  move(point: Vector2) {
    this.pos.add(point);
  }

  // TODO refactor this
  contains(point: Vector2): boolean {
    return (
      point.x >= this.pos.x &&
      point.y >= this.pos.y &&
      point.x < this.pos.x + this.size.x &&
      point.y < this.pos.y + this.size.y
    );
  }

  isLanded(): boolean {
    const nextRow = this.board.rows[this.pos.y + this.size.y]?.join("") ?? "";
    const landedOnBlock = /[^\.]/.test(nextRow);

    return landedOnBlock || this.pos.y + this.size.y >= this.board.height;
  }
}
