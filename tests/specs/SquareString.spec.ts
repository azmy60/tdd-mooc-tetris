import { sqr } from "../../src/utils";

describe("SquareString", () => {
  const square = sqr`BRU
                     HH.
                     ...`;

  it("return size", () => {
    expect(square.size).toBe(3);
  });

  it("return rows", () => {
    expect(square.rows).toStrictEqual([
      "BRU".split(""),
      "HH.".split(""),
      "...".split(""),
    ]);
  });

  it("return columns", () => {
    expect(square.cols).toStrictEqual([
      "BH.".split(""),
      "RH.".split(""),
      "U..".split(""),
    ]);
  });

  it("can rotate", () => {
    expect(square.rotateLeft().rows).toStrictEqual([
      "U..".split(""),
      "RH.".split(""),
      "BH.".split(""),
    ]);

    expect(square.rotateRight().rows).toStrictEqual([
      ".HB".split(""),
      ".HR".split(""),
      "..U".split(""),
    ]);
  });
});
