import { expect } from "chai";
import { Vector2 } from "../src/Vector2.mjs";

describe("Vector2", () => {
  let vector2;

  it("initial values", () => {
    vector2 = new Vector2();
    expect(vector2.x).to.equal(0);
    expect(vector2.y).to.equal(0);
  });

  it("addition between 2 vectors", () => {
    vector2.add(new Vector2(2, 3));
    expect(vector2.x).to.equal(2);
    expect(vector2.y).to.equal(3);
  });

  it("subtraction between 2 vectors", () => {
    vector2.subtract(new Vector2(5, 1));
    expect(vector2.x).to.equal(-3);
    expect(vector2.y).to.equal(2);
  });
});
