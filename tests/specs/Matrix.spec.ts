import { Matrix } from "../../src/Matrix";
import { TShape } from "../../src/Shapes";

describe("Matrix", () => {
  it("initial state", () => {
    expect(Matrix.of(3, 3).toString()).toEqualShape(
      `...
       ...
       ...`
    );
  });

  it("can draw a shape", () => {
    const matrix = Matrix.of(5, 3);
    matrix.apply(new TShape());

    expect(matrix.toString()).toEqualShape(
      `..T..
       .TTT.
       .....`
    );
  });
});
