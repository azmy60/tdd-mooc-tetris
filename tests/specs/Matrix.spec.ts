import { Matrix } from "../../src/Matrix";
import { Vector2 } from "../../src/Vector2";

describe("Canvas", () => {
  let matrix: Matrix;

  beforeEach(() => {
    matrix = new Matrix(new Vector2(3, 3));
  });

  it("initial state", () => {
    expect(matrix.toString()).toEqualShape(
      `...
       ...
       ...`
    );
  });

  it("can put characters", () => {
    matrix.put("X", new Vector2(1, 0));
    matrix.put("Y", new Vector2(2, 2));

    expect(matrix.toString()).toEqualShape(
      `.X.
       ...
       ..Y`
    );
  });

  it("can fill each cells with characters by filter, like Array.filter (not really but kinda)", () => {
    matrix.fill("X", (pos) => pos.x > 0 && pos.y < 2);

    expect(matrix.toString()).toEqualShape(
      `.XX
       .XX
       ...`
    );
  });
});
