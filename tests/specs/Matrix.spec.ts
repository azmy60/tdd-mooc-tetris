import { Matrix } from "../../src/Matrix";
import { TShape } from "../../src/Shapes";
import { vec2 } from "../../src/utils";

describe("Matrix", () => {
  let matrix: Matrix;

  beforeEach(() => {
    matrix = new Matrix(vec2(3, 3));
  });

  it("initial state", () => {
    expect(matrix.toString()).toEqualShape(
      `...
       ...
       ...`
    );
  });

  it("can draw a shape", () => {
    matrix.apply(new TShape());

    expect(matrix.toString()).toEqualShape(
      `.T.
       TTT
       ...`
    );
  });
});
