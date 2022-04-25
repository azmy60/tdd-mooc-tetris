import { Board } from "../../src/Board";
import { TShape } from "../../src/Shapes";

function fallToBottom(board: Board) {
  for (let i = 0; i < 10; i++) {
    board.tick();
  }
}

describe("Falling tetrominoes", () => {
  let board: Board;

  beforeEach(() => {
    board = new Board(10, 6);
  });

  it("stop when they hit the bottom", () => {
    board.drop(new TShape());
    fallToBottom(board);

    expect(board.toString()).toEqualShape(
      `..........
       ..........
       ..........
       ..........
       ....T.....
       ...TTT....`
    );
  });

  it("stop when they land on another block", () => {
    board.drop(new TShape());
    fallToBottom(board);
    board.drop(new TShape());
    fallToBottom(board);

    expect(board.toString()).toEqualShape(
      `..........
       ..........
       ....T.....
       ...TTT....
       ....T.....
       ...TTT....`
    );
  });
});
