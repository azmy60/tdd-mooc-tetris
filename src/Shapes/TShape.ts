import { Shape } from "./Shape";
import { bnd, mns } from "../utils";
import { Bounds } from "../Bounds";

export class TShape extends Shape {
  constructor() {
    super(
      mns`..T..
          .TTT.
          .....`,
      new Bounds(
        bnd`.+T..
            +TTT.
            .....`,
        bnd`..T+.
            .TTT+
            .....`,
        bnd`..T..
            .TTT.
            .+++.`
      )
    );
  }
}
