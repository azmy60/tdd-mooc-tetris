const removeWhitespaces = (str) => str.replaceAll(/\s/g, "");

const blockIsAt = (block, x, y) => {
  if (!block) {
    return false;
  }

  const left = block.pos.x;
  const top = block.pos.y;

  const within = posIsWithin({
    x,
    y,
    left,
    top,
    right: left + block.dim - 1,
    bottom: top + block.dim - 1,
  });

  return within && block.shape[y - top][x - left] === block.color;
};

const posIsWithin = ({ x, y, left, top, right, bottom }) =>
  x >= left && x <= right && y >= top && y <= bottom;

export { removeWhitespaces, blockIsAt };
