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
    shape.collision.bounds.attachMatrix(matrix);
    shape.collision.bounds.attachPosition(shape.pos);

    expect(shape.collision.bounds.left).toStrictEqual(["A", "B"]);
    expect(shape.collision.bounds.right).toStrictEqual(["C", "D"]);
    expect(shape.collision.bounds.bottom).toStrictEqual(["E", "F"]);
  });

  it("T Shape", () => {
    const shape = new TShape();
    const matrix = new Matrix(
      new MatrixString(str2d`.A.C.
                             B...D
                             .EFG.`)
    );
    shape.collision.bounds.attachMatrix(matrix);
    shape.collision.bounds.attachPosition(shape.pos);

    expect(shape.collision.bounds.left).toStrictEqual(["A", "B"]);
    expect(shape.collision.bounds.right).toStrictEqual(["C", "D"]);
    expect(shape.collision.bounds.bottom).toStrictEqual(["E", "F", "G"]);
  });

  it("I Shape", () => {
    const shape = new IShape();
    const matrix = new Matrix(
      new MatrixString(str2d`A....B
                             .CDEF.`)
    );
    shape.collision.bounds.attachMatrix(matrix);
    shape.collision.bounds.attachPosition(shape.pos);

    shape.place(0, -2);

    expect(shape.collision.bounds.left).toStrictEqual(["A"]);
    expect(shape.collision.bounds.right).toStrictEqual(["B"]);
    expect(shape.collision.bounds.bottom).toStrictEqual(["C", "D", "E", "F"]);
  });
});
