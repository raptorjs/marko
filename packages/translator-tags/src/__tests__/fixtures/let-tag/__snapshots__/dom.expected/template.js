export const _template_ = "<button> </button><!>";
export const _walks_ = /* get, next(1), get, out(1), replace, over(1) */" D l%b";
import { on as _on, data as _data, effect as _effect, intersection as _intersection, state as _state, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _onClick = _scope => {
  const {
    x,
    y
  } = _scope;
  return () => _x(_scope, _y(_scope, x + y));
};
const _expr_x_y_effect = _effect("packages/translator-tags/src/__tests__/fixtures/let-tag/template.marko_0_x_y", _scope => _on(_scope["#button/0"], "click", _onClick(_scope)));
const _expr_x_y = /* @__PURE__ */_intersection(2, _scope => {
  const {
    x,
    y
  } = _scope;
  _expr_x_y_effect(_scope);
});
const _y = /* @__PURE__ */_state("y", (_scope, y) => _data(_scope["#text/2"], y), () => _expr_x_y);
const _x = /* @__PURE__ */_state("x", (_scope, x) => _data(_scope["#text/1"], x), () => _expr_x_y);
export function _setup_(_scope) {
  _x(_scope, 1);
  _y(_scope, 1);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/let-tag/template.marko");