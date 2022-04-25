import { Matrix } from "./Matrix";
import { Shape } from "./Shapes";

export class Collision {
  constructor(private readonly shape: Shape, private readonly matrix: Matrix) {}

  isLanded() {
    return this.isLandedOnBlock() || this.isLandedOnFloor();
  }

  private isLandedOnBlock() {
    const nextRow = this.matrix?.row(this.rightBelow())?.join("");
    return !!nextRow && /[^\.]/.test(nextRow);
  }

  private isLandedOnFloor() {
    return this.rightBelow() >= this.matrix?.height!;
  }

  private rightBelow() {
    return (
      this.shape.rect.y + this.shape.innerRect.y + this.shape.innerRect.height
    );
  }
}
