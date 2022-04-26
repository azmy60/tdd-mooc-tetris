import { Shape } from "../../src/Shapes";
import { sqr } from "../../src/utils";

describe("Rotating 3x3 shape", () => {
  let shape: Shape;

  beforeEach(() => {
    shape = new Shape(
      sqr`ABC
          DEF
          GHI`,
      ""
    );
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
