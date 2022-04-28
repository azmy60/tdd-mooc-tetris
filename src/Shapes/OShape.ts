import { Shape } from "./Shape";
import { bnd, mns } from "../utils";
import { Bounds } from "../Bounds";

export class OShape extends Shape {
  constructor() {
    super(
      mns`.OO.
          .OO.
          ....`,
      new Bounds(
        bnd`+OO.
            +OO.
            ....`,
        bnd`.OO+
            .OO+
            ....`,
        bnd`.OO.
            .OO.
            .++.`
      )
    );
  }

  rotateLeft = this.rotateRight;

  rotateRight() {
    return new OShape();
  }
}
