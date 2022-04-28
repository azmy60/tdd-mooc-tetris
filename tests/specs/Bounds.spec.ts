import { Matrix } from "../../src/Matrix";
import { MatrixString } from "../../src/MatrixString";
import { IShape, OShape, TShape } from "../../src/Shapes";
import { str2d } from "../../src/utils";

describe("Bounds", () => {
  it("O Shape", () => {
    const shape = new OShape();
    const matrix = new Matrix(
      new MatrixString(str2d`A..C
                             B..D
                             .EF.`)
    );
    shape.bounds?.attachMatrix(matrix);

    expect(shape.bounds?.leftOf(shape.pos)).toStrictEqual(["A", "B"]);
    expect(shape.bounds?.rightOf(shape.pos)).toStrictEqual(["C", "D"]);
    expect(shape.bounds?.bottomOf(shape.pos)).toStrictEqual(["E", "F"]);
  });

  it("T Shape", () => {
    const shape = new TShape();
    const matrix = new Matrix(
      new MatrixString(str2d`.A.C.
                             B...D
                             .EFG.`)
    );
    shape.bounds?.attachMatrix(matrix);

    expect(shape.bounds?.leftOf(shape.pos)).toStrictEqual(["A", "B"]);
    expect(shape.bounds?.rightOf(shape.pos)).toStrictEqual(["C", "D"]);
    expect(shape.bounds?.bottomOf(shape.pos)).toStrictEqual(["E", "F", "G"]);
  });

  it("I Shape", () => {
    const shape = new IShape();
    const matrix = new Matrix(
      new MatrixString(str2d`A....B
                             .CDEF.`)
    );
    shape.bounds?.attachMatrix(matrix);
    shape.place(0, -2);

    expect(shape.bounds?.leftOf(shape.pos)).toStrictEqual(["A"]);
    expect(shape.bounds?.rightOf(shape.pos)).toStrictEqual(["B"]);
    expect(shape.bounds?.bottomOf(shape.pos)).toStrictEqual([
      "C",
      "D",
      "E",
      "F",
    ]);
  });
});
