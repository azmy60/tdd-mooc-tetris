import { Vector2 } from "./Vector2";
import { Minos } from "./Minos";

export function removeWhitespaces(str: string) {
  return str.replaceAll(/[\s]*/g, "");
}

export function make2DArray(width: number, height: number, fill?: any) {
  return new Array(height).fill(null).map(() => Array(width).fill(fill));
}

export function mns(strings: TemplateStringsArray) {
  const str = strings.raw[0];
  const str2d = str
    .split("\n")
    .map(removeWhitespaces)
    .map((row) => row.split(""));
  const mino = str.replace(/[\s\.]*/g, "")[0];

  return new Minos(str2d, mino);
}

/**
 * Returns the index of the last element in the array where predicate is true, and -1
 * otherwise.
 * @param array The source array to search in
 * @param predicate find calls predicate once for each element of the array, in descending
 * order, until it finds one where predicate returns true. If such an element is found,
 * findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1.
 * source: https://stackoverflow.com/a/53187807/10012118
 */
export function findLastIndex<T>(
  array: Array<T>,
  predicate: (value: T, index: number, obj: T[]) => boolean
): number {
  let l = array.length;
  while (l--) {
    if (predicate(array[l], l, array)) return l;
  }
  return -1;
}

export function vec2(x: number, y: number) {
  return new Vector2(x, y);
}
