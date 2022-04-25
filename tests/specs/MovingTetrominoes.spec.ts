import { Board } from "../../src/Board";
import { OShape } from "../../src/Shapes";

describe("Moving tetrominoes", () => {
  let board: Board;

  beforeEach(() => {
    board = new Board(8, 5);
    board.drop(new OShape());
  });

  it("can be moved", () => {
    board.moveLeft();
    expect(board.toString()).toEqualShape(
      `..OO....
       ..OO....
       ........
       ........
       ........`
    );

    board.moveRight();
    expect(board.toString()).toEqualShape(
      `...OO...
       ...OO...
       ........
       ........
       ........`
    );

    board.moveDown();
    expect(board.toString()).toEqualShape(
      `........
       ...OO...
       ...OO...
       ........
       ........`
    );
  });

  it("cannot be moved left beyond the board", () => {
    for (let i = 0; i < 10; i++) {
      board.moveLeft();
    }

    expect(board.toString()).toEqualShape(
      `OO......
       OO......
       ........
       ........
       ........`
    );
  });

  it("cannot be moved right beyond the board", () => {
    for (let i = 0; i < 10; i++) {
      board.moveRight();
    }

    expect(board.toString()).toEqualShape(
      `......OO
       ......OO
       ........
       ........
       ........`
    );
  });
});
