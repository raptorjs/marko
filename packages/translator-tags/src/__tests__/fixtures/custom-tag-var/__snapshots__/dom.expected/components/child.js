export const _template_ = "<button class=inc> </button>";
export const _walks_ = /* get, next(1), get, out(1) */" D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _x_effect = _$.effect("__tests__/components/child.marko_0_x", (_scope, {
  x
}) => _$.on(_scope["#button/0"], "click", function () {
  _x(_scope, x + 1), x;
}));
const _x = /* @__PURE__ */_$.state("x", (_scope, x) => {
  _$.data(_scope["#text/1"], x);
  _x_effect(_scope);
  _$.tagVarSignal(_scope, x);
}, () => _$.tagVarSignal);
export function _setup_(_scope) {
  _x(_scope, 1);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/components/child.marko", _template_, _walks_, _setup_);