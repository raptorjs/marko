export const _template_ = "<div>x=<span> </span>, was=<!></div><button id=increment>Increment</button>";
export const _walks_ = /* next(1), over(1), next(1), get, out(1), over(1), replace, out(1), get, over(1) */"DbD lb%l b";
import { lifecycle as _lifecycle, data as _data, on as _on, state as _state, effect as _effect, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _prev = /* @__PURE__ */_state("prev", (_scope, prev) => _data(_scope["#text/1"], prev));
const _onMount = _scope => {
  const {
    x
  } = _scope;
  return function () {
    this.cur = x;
  };
};
const _onUpdate = _scope => {
  const {
    x
  } = _scope;
  return function () {
    _prev(_scope, this.cur);
    this.cur = x;
  };
};
const _onClick = _scope => {
  const {
    x
  } = _scope;
  return function () {
    _x(_scope, x + 1);
  };
};
const _x_effect = _effect("packages/translator-tags/src/__tests__/fixtures/lifecycle-tag-assignment/template.marko_0_x", _scope => {
  _lifecycle(_scope, "_lifecycle", {
    onMount: _onMount(_scope),
    onUpdate: _onUpdate(_scope)
  });
  _on(_scope["#button/2"], "click", _onClick(_scope));
});
const _x = /* @__PURE__ */_state("x", (_scope, x) => {
  _data(_scope["#text/0"], x);
  _x_effect(_scope);
});
export function _setup_(_scope) {
  _x(_scope, 0);
  _prev(_scope, false);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/lifecycle-tag-assignment/template.marko");