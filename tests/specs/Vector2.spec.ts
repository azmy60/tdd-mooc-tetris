import { vec2 } from "../../src/utils";
import { Vector2 } from "../../src/Vector2";

describe("Vector2", () => {
  it("initial values", () => {
    const v = Vector2.zero;

    expect(v.x).toBe(0);
    expect(v.y).toBe(0);
  });

  it("addition between 2 vectors", () => {
    const v = Vector2.zero;
    v.add(vec2(2, 3));

    expect(v.x).toBe(2);
    expect(v.y).toBe(3);
  });

  it("subtraction between 2 vectors", () => {
    const v = Vector2.zero;
    v.subtract(vec2(5, 1));

    expect(v.x).toBe(-5);
    expect(v.y).toBe(-1);
  });
});
