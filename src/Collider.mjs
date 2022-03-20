export class Collider {
  pos = { x: 0, y: 0 };

  constructor({ offsetX, offsetY, width, height }) {
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    this.width = width;
    this.height = height;
  }

  register(board) {
    this.board = board;
  }

  moveTo(x, y) {
    this.pos.x += x;
    this.pos.y += y;
  }

  isLanded() {
    const nextRow = this.board.rows[this.pos.y + this.height]?.join("") ?? "";
    const landedOnBlock = /[^\.]/.test(nextRow);

    return landedOnBlock || this.pos.y + this.height >= this.board.height;
  }
}
