import { attrs as _attrs, attrsEvents as _attrsEvents, conditional as _conditional, register as _register, queueEffect as _queueEffect, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _dynamicTagName = /* @__PURE__ */_conditional("#text/1");
const _attrs__effect = _register("packages/translator-tags/src/__tests__/fixtures/body-content-new/components/FancyButton.marko_0_attrs", _scope => _attrsEvents(_scope, "#button/0"));
export const _attrs_ = /* @__PURE__ */_value("attrs", (_scope, attrs) => {
  _attrs(_scope, "#button/0", attrs);
  _queueEffect(_scope, _attrs__effect);
});
export const _renderBody_ = /* @__PURE__ */_value("renderBody", (_scope, renderBody) => _dynamicTagName(_scope, renderBody), void 0, _dynamicTagName);
const _destructure2 = (_scope, _destructure, _clean) => {
  let renderBody, attrs;
  if (!_clean) ({
    renderBody,
    ...attrs
  } = _destructure);
  _renderBody_(_scope, renderBody, _clean);
  _attrs_(_scope, attrs, _clean);
};
export const _input_ = /* @__PURE__ */_value("input", (_scope, input) => _destructure2(_scope, input), void 0, _destructure2);
export const _template_ = "<button><!></button>";
export const _walks_ = /* get, next(1), replace, out(1) */" D%l";
export const _setup_ = function () {};
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, (_scope, _destructure3, _clean) => {
  let input;
  if (!_clean) [input] = _destructure3;
  _input_(_scope, input, _clean);
}), "packages/translator-tags/src/__tests__/fixtures/body-content-new/components/FancyButton.marko");