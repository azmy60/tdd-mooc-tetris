import { Bounds } from "../../src/Bounds";
import { IShape, OShape, TShape } from "../../src/Shapes";

describe("Bounds", () => {
  it("should calculate the boundary of a shape", () => {
    const obounds = new Bounds(new OShape());

    expect(obounds.left).toBe(1);
    expect(obounds.right).toBe(2);
    expect(obounds.top).toBe(0);
    expect(obounds.bottom).toBe(1);

    const tbounds = new Bounds(new TShape());

    expect(tbounds.left).toBe(0);
    expect(tbounds.right).toBe(2);
    expect(tbounds.top).toBe(0);
    expect(tbounds.bottom).toBe(1);

    const ibounds = new Bounds(new IShape());

    expect(ibounds.left).toBe(0);
    expect(ibounds.right).toBe(3);
    expect(ibounds.top).toBe(2);
    expect(ibounds.bottom).toBe(2);
  });
});
