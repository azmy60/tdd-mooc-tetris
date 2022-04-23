import { Collider } from "./Collider";
import { Vector2 } from "./Vector2";

type ConstructorType = {
  color: string;
  offset?: Vector2;
  size?: Vector2;
};

export class Block extends Collider {
  public dimension: number = 1;
  public color: string;
  public shape: string[];

  constructor({
    color,
    offset = new Vector2(0, 0),
    size = new Vector2(1, 1),
  }: ConstructorType) {
    super(offset, size);

    this.color = color;
    this.shape = [color];
  }

  // TODO refactor this
  public contains(point: Vector2): boolean {
    return (
      super.contains(point) &&
      this.shape[point.y - this.pos.y][point.x - this.pos.x] === this.color
    );
  }

  public toString(): string {
    return this.color;
  }
}
