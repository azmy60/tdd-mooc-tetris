import { Board } from "../../src/Board";
import { Matrix } from "../../src/Matrix";
import { TShape } from "../../src/Shapes";

describe("Falling tetrominoes", () => {
  it("The board starts empty", () => {
    expect(new Board(Matrix.of(3, 3)).toString()).toEqualShape(
      `...
       ...
       ...`
    );
  });

  describe("When a tetromino is dropped", () => {
    let board: Board;

    beforeEach(() => {
      board = new Board(Matrix.of(6, 4));
      board.drop(new TShape());
    });

    it("it starts from the top middle", () => {
      expect(board.toString()).toEqualShape(
        `..T...
         .TTT..
         ......
         ......`
      );
    });

    it("it moves down one row per tick", () => {
      board.tick();

      expect(board.toString()).toEqualShape(
        `......
         ..T...
         .TTT..
         ......`
      );
    });

    it("it is still moving on the last row", () => {
      board.tick();
      board.tick();
      expect(board.toString()).toEqualShape(
        `......
         ......
         ..T...
         .TTT..`
      );
      expect(board.shape).toBeTruthy();
    });

    it("at most one block may be falling at a time", () => {
      const before = board.toString();
      expect(() => board.drop(new TShape())).toThrow("already falling");
      const after = board.toString();
      expect(after).toEqual(before);
    });
  });

  describe("When a tetromino reaches the bottom", () => {
    let board: Board;

    beforeEach(() => {
      board = new Board(Matrix.of(10, 6));
    });

    function dropAndFall() {
      board.drop(new TShape());
      for (let i = 0; i < 10; i++) {
        board.tick();
      }
    }

    it("it stops when it hits the bottom", () => {
      dropAndFall();
      expect(board.toString()).toEqualShape(
        `..........
         ..........
         ..........
         ..........
         ....T.....
         ...TTT....`
      );
      expect(board.shape).toBeFalsy();
    });

    it("stop when they land on another tetromino", () => {
      dropAndFall();
      dropAndFall();
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
});
