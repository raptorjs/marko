import { data as _data, value as _value, createRenderer as _createRenderer, register as _register, loopOf as _loopOf, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _child$forBody = /* @__PURE__ */_value("child", (_scope, child) => _data(_scope["#text/0"], child.text));
const _forBody = _register("packages/translator-tags/src/__tests__/fixtures/move-and-clear-top-level/template.marko_1_renderer", /* @__PURE__ */_createRenderer(" ", /* get */" ", void 0, void 0, void 0, (_scope, _destructure, _clean) => {
  let child;
  if (!_clean) [child] = _destructure;
  _child$forBody(_scope, child, _clean);
}));
const _for = /* @__PURE__ */_loopOf("#text/0", _forBody);
const _by = _scope => function (c) {
  return c.id;
};
export const _input_ = /* @__PURE__ */_value("input", (_scope, input) => _for(_scope, [input.children, _by(_scope)]));
export const _template_ = "<!><!><!>";
export const _walks_ = /* replace, over(1) */"D%bD";
export const _setup_ = function () {};
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, (_scope, _destructure2, _clean) => {
  let input;
  if (!_clean) [input] = _destructure2;
  _input_(_scope, input, _clean);
}), "packages/translator-tags/src/__tests__/fixtures/move-and-clear-top-level/template.marko");