import { Rect } from "../Rect";
import { Shape } from "./Shape";
import { str } from "../utils";

export class TShape extends Shape {
  constructor() {
    super(
      str`.T.
          TTT
          ...`,
      "T",
      new Rect(0, 0, 3, 2)
    );
  }
}
