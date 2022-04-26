import { Board } from "../../src/Board";
import { OShape, TShape } from "../../src/Shapes";

function moveFarLeft(board: Board) {
  for (let i = 0; i < 10; i++) board.moveLeft();
}

function moveFarRight(board: Board) {
  for (let i = 0; i < 10; i++) board.moveRight();
}

function moveFarDown(board: Board) {
  for (let i = 0; i < 10; i++) board.moveDown();
}

describe("Moving tetrominoes", () => {
  let board: Board;

  beforeEach(() => {
    board = new Board(8, 4);
  });

  it("can be moved", () => {
    board.drop(new OShape());

    board.moveLeft();
    expect(board.toString()).toEqualShape(
      `..OO....
       ..OO....
       ........
       ........`
    );

    board.moveRight();
    expect(board.toString()).toEqualShape(
      `...OO...
       ...OO...
       ........
       ........`
    );

    board.moveDown();
    expect(board.toString()).toEqualShape(
      `........
       ...OO...
       ...OO...
       ........`
    );
  });

  it("cannot be moved beyond the board", () => {
    board.drop(new OShape());

    moveFarLeft(board);
    expect(board.toString()).toEqualShape(
      `OO......
       OO......
       ........
       ........`
    );

    moveFarRight(board);
    expect(board.toString()).toEqualShape(
      `......OO
       ......OO
       ........
       ........`
    );

    moveFarDown(board);
    expect(board.toString()).toEqualShape(
      `........
       ........
       ......OO
       ......OO`
    );
    expect(board.hasFallingShape).toBeFalsy();
  });

  it("cannot be moved through other blocks", () => {
    board.drop(new OShape());
    moveFarLeft(board);
    moveFarDown(board);

    board.drop(new TShape());
    board.moveDown();
    moveFarLeft(board);
    expect(board.toString()).toEqualShape(
      `........
       ...T....
       OOTTT...
       OO......`
    );

    moveFarRight(board);
    moveFarDown(board);

    board.drop(new OShape());
    board.moveDown();
    moveFarRight(board);
    expect(board.toString()).toEqualShape(
      `........
       ....OO..
       OO..OOT.
       OO...TTT`
    );

    moveFarDown(board);
    expect(board.toString()).toEqualShape(
      `........
       ....OO..
       OO..OOT.
       OO...TTT`
    );
    expect(board.hasFallingShape).toBeFalsy();
  });
});
