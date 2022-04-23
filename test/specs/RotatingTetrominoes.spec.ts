import { RotatingShape } from "../../src/RotatingShape";
import Tetromino from "../../src/Tetromino";

function distinctOrientations(shape: RotatingShape) {
  const distinct = new Set();
  let goingRight = shape;
  let goingLeft = shape;
  for (let i = 0; i < 10; i++) {
    distinct.add(goingRight.toString());
    goingRight = goingRight.rotateRight();
    distinct.add(goingLeft.toString());
    goingLeft = goingLeft.rotateLeft();
  }
  return distinct;
}

describe("The T shape", () => {
  const shape: RotatingShape = new Tetromino.TShape();

  it("initial orientation", () => {
    expect(shape.toString()).toEqualShape(
      `.T.
       TTT
       ...`
    );
  });

  it("can be rotated right/clockwise", () => {
    expect(shape.rotateRight().toString()).toEqualShape(
      `.T.
       .TT
       .T.`
    );
  });

  it("can be rotated left/counter-clockwise", () => {
    expect(shape.rotateLeft().toString()).toEqualShape(
      `.T.
       TT.
       .T.`
    );
  });

  it("has 4 distinct orientations", () => {
    expect(distinctOrientations(shape).size).toEqual(4);
  });
});

describe("The I shape", () => {
  const shape = new Tetromino.IShape();

  it("initial orientation", () => {
    expect(shape.toString()).toEqualShape(
      `.....
       .....
       IIII.
       .....
       .....`
    );
  });

  it("can be rotated right/clockwise", () => {
    expect(shape.rotateRight().toString()).toEqualShape(
      `..I..
       ..I..
       ..I..
       ..I..
       .....`
    );
  });

  it("can be rotated left/counter-clockwise", () => {
    expect(shape.rotateLeft().toString()).toEqualShape(
      `..I..
       ..I..
       ..I..
       ..I..
       .....`
    );
  });

  it("has 2 distinct orientations", () => {
    expect(distinctOrientations(shape).size).toEqual(2);
  });
});

describe("The O shape", () => {
  const shape = new Tetromino.OShape();

  it("initial orientation", () => {
    expect(shape.toString()).toEqualShape(
      `.OO
       .OO
       ...`
    );
  });

  it("cannot be rotated right/clockwise", () => {
    expect(shape.rotateRight().toString()).toEqualShape(
      `.OO
       .OO
       ...`
    );
  });

  it("cannot be rotated left/counter-clockwise", () => {
    expect(shape.rotateLeft().toString()).toEqualShape(
      `.OO
       .OO
       ...`
    );
  });

  it("has 1 distinct orientations", () => {
    expect(distinctOrientations(shape).size).toEqual(1);
  });
});
