import { Shape } from "./Shape";
import { bnd, mns } from "../utils";
import { Bounds } from "../Bounds";

export class IShape_A extends Shape {
  constructor() {
    super(
      mns`......
          ......
          .IIII.
          ......
          ......`,
      new Bounds(
        bnd`......
            ......
            +IIII.
            ......
            ......`,
        bnd`......
            ......
            .IIII+
            ......
            ......`,
        bnd`......
            ......
            .IIII.
            .++++.
            ......`
      )
    );
  }

  rotateLeft = this.rotateRight;

  rotateRight() {
    return new IShape_B();
  }
}

export class IShape_B extends Shape {
  constructor() {
    super(
      mns`...I..
          ...I..
          ...I..
          ...I..
          ......`,
      new Bounds(
        bnd`..+I..
            ..+I..
            ..+I..
            ..+I..
            ......`,
        bnd`...I+.
            ...I+.
            ...I+.
            ...I+.
            ......`,
        bnd`...I..
            ...I..
            ...I..
            ...I..
            ...+..`
      )
    );
  }

  rotateLeft = this.rotateRight;

  rotateRight() {
    return new IShape_A();
  }
}
