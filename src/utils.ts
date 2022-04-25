import { Rect } from "./Rect";
import { Vector2 } from "./Vector2";

export function removeWhitespaces(str: string) {
  return str.replaceAll(/\s/g, "");
}

export function make2DArray(size: Vector2, fill?: any) {
  return Array(size.y)
    .fill(null)
    .map(() => Array(size.x).fill(fill));
}

export function str(strings: TemplateStringsArray) {
  return strings.raw[0].split("\n").map(removeWhitespaces);
}

export function centerOf(rect: Rect, relativeTo: Rect) {
  return new Vector2(
    Math.floor((rect.width - relativeTo.width) / 2),
    Math.floor((rect.height - relativeTo.height) / 2)
  );
}
