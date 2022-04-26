import { mns } from "../../src/utils";

describe("Minos", () => {
  const minos = mns`BRU
                    HH.
                    ...`;

  it("return size", () => {
    expect(minos.size).toBe(3);
  });

  it("return rows", () => {
    expect(minos.rows).toStrictEqual([
      "BRU".split(""),
      "HH.".split(""),
      "...".split(""),
    ]);
  });

  it("return columns", () => {
    expect(minos.cols).toStrictEqual([
      "BH.".split(""),
      "RH.".split(""),
      "U..".split(""),
    ]);
  });

  it("can rotate", () => {
    expect(minos.rotateLeft().rows).toStrictEqual([
      "U..".split(""),
      "RH.".split(""),
      "BH.".split(""),
    ]);

    expect(minos.rotateRight().rows).toStrictEqual([
      ".HB".split(""),
      ".HR".split(""),
      "..U".split(""),
    ]);
  });
});
