// size: 178 (min) 143 (brotli)

import {
  effect as o,
  state as t,
  data as m,
  init as r,
} from "@marko/runtime-tags/dom";
import i from "./test-log";
const s = t(2, (o, t) => m(o[0], t));
o("a0", (o) => s(o, JSON.stringify(i))), r();
