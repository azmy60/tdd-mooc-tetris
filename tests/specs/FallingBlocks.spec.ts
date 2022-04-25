import { Board } from "../../src/Board";
import { OShape } from "../../src/Shapes";

describe("Falling blocks", () => {
  let board: Board;

  beforeEach(() => {
    board = new Board(4, 4);
  });

  it("The board starts empty", () => {
    expect(board.toString()).toEqualShape(
      `....
       ....
       ....
       ....`
    );
  });

  describe("When a block is dropped", () => {
    beforeEach(() => {
      board.drop(new OShape());
    });

    it("it starts from the top middle", () => {
      expect(board.toString()).toEqualShape(
        `.OO.
         .OO.
         ....
         ....`
      );
    });

    it("it moves down one row per tick", () => {
      board.tick();

      expect(board.toString()).toEqualShape(
        `....
         .OO.
         .OO.
         ....`
      );
    });

    it("at most one block may be falling at a time", () => {
      const before = board.toString();
      expect(() => board.drop(new OShape())).toThrow("already falling");
      const after = board.toString();
      expect(after).toEqual(before);
    });
  });

  describe("When a block reaches the bottom", () => {
    beforeEach(() => {
      board.drop(new OShape());
      board.tick();
      board.tick();
    });

    it("it is still moving on the last row", () => {
      expect(board.toString()).toEqualShape(
        `....
         ....
         .OO.
         .OO.`
      );
      expect(board.hasFallingShape()).toBeTruthy();
    });

    it("it stops when it hits the bottom", () => {
      board.tick();

      expect(board.toString()).toEqualShape(
        `....
         ....
         .OO.
         .OO.`
      );
      expect(board.hasFallingShape()).toBeFalsy();
    });
  });
});
