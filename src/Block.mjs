import { Collider } from "./Collider.mjs";

export class Block extends Collider {
  color;
  dim = 1;

  constructor(color, { offsetX = 0, offsetY = 0, width = 1, height = 1 } = {}) {
    super({ offsetX, offsetY, width, height });
    this.color = color;
    this.shape = [[color]];
  }

  toString() {
    return this.color;
  }
}
