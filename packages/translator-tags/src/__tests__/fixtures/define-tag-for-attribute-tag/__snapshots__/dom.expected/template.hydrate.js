// size: 571 (min) 314 (brotli)

import {
  dynamicTagAttrs as e,
  value as n,
  classAttr as t,
  conditional as r,
  register as o,
  createRendererWithOwner as c,
  effect as d,
  on as i,
  state as s,
  inChild as g,
  init as h,
} from "@marko/runtime-tags/dom";
const m = e(1),
  a = r(
    1,
    (e) => m(e, () => ({})),
    () => m,
  ),
  l = n(
    3,
    (e, n) => {
      t(e[0], { selected: n.thing.selected }), a(e, n.thing.renderBody);
    },
    () => a,
  ),
  p = o("b0", c("<span>The thing</span>", "")),
  u = n(
    3,
    (e, n) => l(e[0], { thing: n }),
    () => g(0, l),
  ),
  b = d("b1", (e) =>
    i(
      e[1],
      "click",
      ((e) => {
        const { 2: n } = e;
        return function () {
          f(e, !n);
        };
      })(e),
    ),
  ),
  f = s(
    2,
    (e, n) => {
      b(e), u(e, { selected: n, renderBody: p(e) });
    },
    () => u,
  );
h();
