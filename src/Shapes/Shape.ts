import { Bounds } from "../Bounds";
import { Collision } from "../Collision";
import { Matrix } from "../Matrix";
import { Rect } from "../Rect";
import { ShapeListener } from "./ShapeListener";
import { Vector2 } from "../Vector2";
import { Minos } from "../Minos";

export class Shape extends Rect {
  private landed: boolean = false;
  private listener?: ShapeListener;
  private collision?: Collision;

  constructor(public readonly minos: Minos) {
    super(0, 0, minos.size, minos.size);
  }

  attachListener(listener: ShapeListener) {
    this.listener = listener;
  }

  setupCollision(matrix: Matrix) {
    this.collision = new Collision(this.pos, new Bounds(this), matrix);
  }

  moveDown() {
    if (this.landed) return;

    if (this.collision?.collidingDown()) {
      this.landed = true;
      this.listener?.onLanded();
      return;
    }

    this.pos.add(Vector2.down);
  }

  moveLeft() {
    if (this.collision?.collidingLeft()) return;
    this.pos.add(Vector2.left);
  }

  moveRight() {
    if (this.collision?.collidingRight()) return;
    this.pos.add(Vector2.right);
  }

  rotateRight() {
    return new Shape(this.minos.rotateRight());
  }

  rotateLeft() {
    return new Shape(this.minos.rotateLeft());
  }

  toString() {
    return this.minos.toString();
  }

  contains(point: Vector2) {
    return (
      super.contains(point) &&
      this.minos.contains(new Vector2(point.x - this.x, point.y - this.y))
    );
  }
}
