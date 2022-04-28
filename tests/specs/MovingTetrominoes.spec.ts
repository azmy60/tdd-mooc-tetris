import { Board } from "../../src/Board";
import { Matrix } from "../../src/Matrix";
import { MatrixString } from "../../src/MatrixString";
import { IShape, OShape, Shape, TShape } from "../../src/Shapes";
import { str2d } from "../../src/utils";

function moveDown(shape?: Shape, repeatCount: number = 1) {
  for (let i = 0; i < repeatCount; i++) shape?.moveDown();
}

function moveLeft(shape?: Shape, repeatCount: number = 1) {
  for (let i = 0; i < repeatCount; i++) shape?.moveLeft();
}

function moveRight(shape?: Shape, repeatCount: number = 1) {
  for (let i = 0; i < repeatCount; i++) shape?.moveRight();
}

describe("Moving tetrominoes", () => {
  it("can be moved", () => {
    const board = new Board(Matrix.of(6, 4));
    board.drop(new OShape());

    moveLeft(board.shape, 1);
    expect(board.toString()).toEqualShape(
      `.OO...
       .OO...
       ......
       ......`
    );

    moveRight(board.shape, 1);
    expect(board.toString()).toEqualShape(
      `..OO..
       ..OO..
       ......
       ......`
    );

    moveDown(board.shape, 1);
    expect(board.toString()).toEqualShape(
      `......
       ..OO..
       ..OO..
       ......`
    );
  });

  it("cannot be moved beyond the board", () => {
    const board = new Board(Matrix.of(6, 4));
    board.drop(new OShape());

    moveLeft(board.shape, 10);
    expect(board.toString()).toEqualShape(
      `OO....
       OO....
       ......
       ......`
    );

    moveRight(board.shape, 10);
    expect(board.toString()).toEqualShape(
      `....OO
       ....OO
       ......
       ......`
    );

    moveDown(board.shape, 10);
    expect(board.toString()).toEqualShape(
      `......
       ......
       ....OO
       ....OO`
    );
    expect(board.shape).toBeFalsy();
  });

  it("cannot be moved through other blocks", () => {
    const board = new Board(
      new Matrix(
        new MatrixString(str2d`........
                               ........
                               ........
                               ........
                               ........
                               OO....T.
                               OO...TTT`)
      )
    );

    board.drop(new OShape());
    moveDown(board.shape, 4);
    moveLeft(board.shape, 10);
    expect(board.toString()).toEqualShape(
      `........
       ........
       ........
       ........
       ..OO....
       OOOO..T.
       OO...TTT`
    );

    moveRight(board.shape, 10);
    expect(board.toString()).toEqualShape(
      `........
       ........
       ........
       ........
       ....OO..
       OO..OOT.
       OO...TTT`
    );

    moveDown(board.shape, 10);
    expect(board.toString()).toEqualShape(
      `........
       ........
       ........
       ........
       ....OO..
       OO..OOT.
       OO...TTT`
    );
    expect(board.shape).toBeFalsy();

    board.drop(new IShape());
    moveRight(board.shape, 1);
    moveDown(board.shape, 10);
    expect(board.toString()).toEqualShape(
      `........
       ........
       ........
       ...IIII.
       ....OO..
       OO..OOT.
       OO...TTT`
    );

    board.drop(new TShape());
    moveLeft(board.shape, 10);
    moveDown(board.shape, 3);
    moveRight(board.shape, 10);
    moveDown(board.shape, 10);
    expect(board.toString()).toEqualShape(
      `........
       ........
       ........
       ..TIIII.
       .TTTOO..
       OO..OOT.
       OO...TTT`
    );

    board.drop(new OShape());
    moveLeft(board.shape, 10);
    moveDown(board.shape, 10);
    expect(board.toString()).toEqualShape(
      `........
       ........
       OO......
       OOTIIII.
       .TTTOO..
       OO..OOT.
       OO...TTT`
    );
  });
});
