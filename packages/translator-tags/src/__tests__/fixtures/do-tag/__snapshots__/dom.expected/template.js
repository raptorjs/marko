export const _template_ = "<!><!>";
export const _walks_ = /* replace, over(1) */"D%b";
_register("packages/translator-tags/src/__tests__/fixtures/do-tag/template.marko_0/fromStatic", fromStatic);
import log from "./test-log";
function fromStatic() {
  log.static += "rendered";
}
import { register as _register, data as _data, state as _state, value as _value, effect as _effect, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _fromConst = _register("packages/translator-tags/src/__tests__/fixtures/do-tag/template.marko_0/fromConst", _scope => function () {
  log.const += "rendered";
});
const _logOutput = /* @__PURE__ */_state("logOutput", (_scope, logOutput) => _data(_scope["#text/0"], logOutput));
const _str = /* @__PURE__ */_state("str", (_scope, str) => log.let += str);
const _fromConst2 = /* @__PURE__ */_value("fromConst", (_scope, fromConst) => fromConst(_scope));
const _setup__effect = _effect("packages/translator-tags/src/__tests__/fixtures/do-tag/template.marko_0", _scope => _logOutput(_scope, JSON.stringify(log)));
export function _setup_(_scope) {
  log.block += "rendered";
  fromStatic(_scope);
  _setup__effect(_scope);
  _fromConst2(_scope, _fromConst(_scope));
  _str(_scope, "rendered");
  _logOutput(_scope, JSON.stringify(log));
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/do-tag/template.marko");