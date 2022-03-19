const removeWhitespaces = (str) => str.replaceAll(/\s/g, "");
const blockIsAt = (block, x, y) =>
  block && block.pos.x === x && block.pos.y == y;

export { removeWhitespaces, blockIsAt };
