export function normalize(s: string): string {
  return s.replaceAll(" ", "").trim() + "\n";
}
