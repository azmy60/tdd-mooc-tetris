import { Bounds } from "../../src/Bounds";
import { Shape } from "../../src/Shapes";
import { mns } from "../../src/utils";

describe("Rotating 3x3 shape", () => {
  let shape: Shape;

  beforeEach(() => {
    shape = new Shape(
      mns`ABC
          DEF
          GHI`,
      new Bounds([], [], [])
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
