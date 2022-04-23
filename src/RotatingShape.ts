import { removeWhitespaces } from "./util";
import { Block } from "./Block";
import { Vector2 } from "./Vector2";

type ConstructorType = {
  shape: string | string[]; // FIXME bad union
  color?: string;
  offset?: Vector2;
  size?: Vector2;
};

export class RotatingShape extends Block {
  constructor({ shape, color, offset, size }: ConstructorType) {
    super({ color, offset, size });

    if (typeof shape === "string") {
      shape = shape.split("\n").map((row) => removeWhitespaces(row));
    }

    this.shape = shape;
    this.dimension = this.shape.length;
  }

  public rotateRight(): RotatingShape {
    const rotated = Array(this.dimension).fill("");
    for (let i = 0; i < this.dimension; i++) {
      for (let j = this.dimension - 1; j >= 0; j--) {
        rotated[i] += this.shape[j][i];
      }
    }
    return new RotatingShape({ shape: rotated, color: this.color });
  }

  public rotateLeft(): RotatingShape {
    const rotated = Array(this.dimension).fill("");
    for (let i = this.dimension - 1; i >= 0; i--) {
      for (let j = 0; j < this.dimension; j++) {
        rotated[this.dimension - 1 - i] += this.shape[j][i];
      }
    }
    return new RotatingShape({ shape: rotated, color: this.color });
  }

  public toString(): string {
    return `${this.shape.join("\n")}\n`;
  }
}
