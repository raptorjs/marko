// size: 374 (min) 223 (brotli)

import {
  effect as o,
  on as t,
  value as n,
  data as c,
  register as r,
  state as m,
  intersections as i,
  inChild as s,
  init as a,
} from "@marko/runtime-tags/dom";
const u = n(5, (o, t) => c(o[1], t)),
  e = o("a0", (o) => {
    const { 4: n } = o;
    t(o[0], "click", n);
  }),
  f = n(4, (o, t) => e(o)),
  k = r("b0", (o) => {
    const { 1: t } = o;
    return function () {
      b(o, t + 1);
    };
  }),
  b = m(
    1,
    (o, t) => {
      u(o[0], t), f(o[0], k(o));
    },
    () => i([s(0, u), s(0, f)]),
  );
a();
