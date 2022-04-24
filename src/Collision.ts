import { Matrix } from "./Matrix";
import { Shape } from "./Shape";

export class Collision {
  constructor(private readonly shape: Shape, private readonly matrix: Matrix) {}

  public isLanded(): boolean {
    return this.isLandedOnBlock() || this.isLandedOnFloor();
  }

  private isLandedOnBlock(): boolean {
    const nextRow = this.matrix?.row(this.rightBelow())?.join("");
    return !!nextRow && /[^\.]/.test(nextRow);
  }

  private isLandedOnFloor(): boolean {
    return this.rightBelow() >= this.matrix?.height!;
  }

  private rightBelow(): number {
    return (
      this.shape.rect.y + this.shape.innerRect.y + this.shape.innerRect.height
    );
  }
}
