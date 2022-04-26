import { Shape } from "./Shape";
import { sqr } from "../utils";

export class TShape extends Shape {
  constructor() {
    super(
      sqr`.T.
          TTT
          ...`,
      "T"
    );
  }
}
