import { normalize } from "../util";

it("normalize", () => {
  expect(normalize("")).toBe("\n");
  expect(normalize("  x  ")).toBe("x\n");
  expect(normalize("   x\n   x")).toBe("x\nx\n");
  expect(normalize("   x\n   x\n")).toBe("x\nx\n");
  expect(normalize("\n   x\n   x")).toBe("x\nx\n");
});
