import { RotatingShape } from "../../src/RotatingShape";

describe("Rotating 3x3 shape", () => {
  const shape = new RotatingShape({
    shape: `ABC
            DEF
            GHI`,
  });

  it("initial orientation", () => {
    expect(shape.toString()).toEqualShape(
      `ABC
       DEF
       GHI`
    );
  });

  it("can be rotated right/clockwise", () => {
    expect(shape.rotateRight().toString()).toEqualShape(
      `GDA
       HEB
       IFC`
    );
  });

  it("can be rotated left/counter-clockwise", () => {
    expect(shape.rotateLeft().toString()).toEqualShape(
      `CFI
       BEH
       ADG`
    );
  });
});
