import { normalize } from "./util";

expect.extend({
  toEqualShape(received: string, shape: string) {
    shape = normalize(shape);
    const pass = received === shape;
    const passMsg = `expected\n${received}\nto equal\n${shape}`;
    const failMsg = `expected\n${received}\nto not equal\n${shape}`;

    return {
      message: () => (!pass ? passMsg : failMsg),
      pass,
    };
  },
});
