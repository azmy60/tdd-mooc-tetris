import { Bounds } from "../Bounds";
import { Collision } from "../Collision";
import { Rect } from "../Rect";
import { ShapeListener } from "./ShapeListener";
import { Vector2 } from "../Vector2";
import { Minos } from "../Minos";
import { vec2 } from "../utils";

export class Shape extends Rect {
  private landed: boolean = false;
  private listener?: ShapeListener;
  public readonly collision: Collision;

  constructor(public readonly minos: Minos, bounds: Bounds) {
    super(Vector2.zero, vec2(minos.width, minos.height));
    this.collision = new Collision(bounds);
  }

  attachListener(listener: ShapeListener) {
    this.listener = listener;
  }

  place(x: number, y: number) {
    this.pos.set(x, y);
  }

  moveDown() {
    if (this.landed) return;

    if (this.collision.collidingDown()) {
      this.landed = true;
      this.listener?.onLanded();
      return;
    }

    this.pos.add(Vector2.down);
  }

  moveLeft() {
    if (this.collision.collidingLeft()) return;
    this.pos.add(Vector2.left);
  }

  moveRight() {
    if (this.collision.collidingRight()) return;
    this.pos.add(Vector2.right);
  }

  rotateRight() {
    return new Shape(this.minos.rotateRight(), this.collision.bounds);
  }

  rotateLeft() {
    return new Shape(this.minos.rotateLeft(), this.collision.bounds);
  }

  toString() {
    return this.minos.toString();
  }

  contains(point: Vector2) {
    return (
      super.contains(point) &&
      this.minos.contains(vec2(point.x - this.x, point.y - this.y))
    );
  }
}
