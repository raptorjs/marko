// size: 585 (min) 319 (brotli)

import {
  effect as t,
  getAbortSignal as n,
  value as o,
  resetAbortSignal as r,
  register as i,
  createRenderer as e,
  on as c,
  state as d,
  conditional as u,
  init as m,
} from "@marko/runtime-tags/dom";
const s = t("a0", (t) => {
    const { 1: o } = t;
    o.write("mounted"),
      (n(t, 0).onabort = ((t) => {
        const { 1: n } = t;
        return () => {
          n.write("destroyed");
        };
      })(t));
  }),
  b = o(1, (t, n) => {
    r(t, 0), s(t);
  }),
  a = i(
    "b0",
    (t) =>
      function (n) {
        t._[1].innerHTML = n;
      },
  ),
  l = i(
    "b1",
    e("<div>child</div>", "/b&", (t) => {
      t[0], b(t[0], { write: a(t) });
    }),
  ),
  f = u(2),
  w = t("b2", (t) =>
    c(
      t[0],
      "click",
      ((t) => {
        const { 3: n } = t;
        return function () {
          k(t, !n);
        };
      })(t),
    ),
  ),
  k = d(3, (t, n) => {
    w(t), f(t, n ? l : null);
  });
m();
