import { Rect } from "../../src/Rect";
import { Shape } from "../../src/Shapes";
import { str } from "../../src/utils";

describe("Rotating 3x3 shape", () => {
  let shape: Shape;

  beforeEach(() => {
    shape = new Shape(
      str`ABC
          DEF
          GHI`,
      "",
      new Rect(0, 0, 3, 3)
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
