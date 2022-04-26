import { Bounds } from "../../src/Bounds";
import { Shape } from "../../src/Shapes";
import { sqr } from "../../src/utils";

describe("Bounds", () => {
  it("should calculate the boundary of a shape", () => {
    const shape = new Shape(
      sqr`....
          .T..
          .TT.
          .T..`,
      "T"
    );
    const bounds = new Bounds(shape);

    expect(bounds.left).toBe(1);
    expect(bounds.right).toBe(2);
    expect(bounds.top).toBe(1);
    expect(bounds.bottom).toBe(3);
  });
});
