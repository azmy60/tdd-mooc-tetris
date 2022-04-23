import { Vector2 } from "../../src/Vector2";

describe("Vector2", () => {
  it("initial values", () => {
    const v = new Vector2();

    expect(v.x).toBe(0);
    expect(v.y).toBe(0);
  });

  it("addition between 2 vectors", () => {
    const v = new Vector2();
    v.add(new Vector2(2, 3));

    expect(v.x).toBe(2);
    expect(v.y).toBe(3);
  });

  it("subtraction between 2 vectors", () => {
    const v = new Vector2();
    v.add(new Vector2(2, 3));
    v.subtract(new Vector2(5, 1));

    expect(v.x).toBe(-3);
    expect(v.y).toBe(2);
  });
});
