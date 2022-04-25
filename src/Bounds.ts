import { Shape } from "./Shapes";

export class Bounds {
  constructor(private readonly shape: Shape) {}

  get left() {
    return this.shape.rect.x + this.shape.innerRect.x;
  }

  get right() {
    return this.left + this.shape.innerRect.width;
  }

  get top() {
    return this.shape.rect.y + this.shape.innerRect.y;
  }

  get bottom() {
    return this.top + this.shape.innerRect.height;
  }
}
