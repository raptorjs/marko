export const _template_ = "<button><!> <!></button>";
export const _walks_ = /* get, next(1), replace, over(2), replace, out(1) */" D%c%l";
const createWrapper = _createWrapper;
import * as _$ from "@marko/runtime-tags/debug/dom";
const _b = (_scope, b) => {
  _$.data(_scope["#text/2"], b);
};
const _a = /* @__PURE__ */_$.value("a", (_scope, a) => {
  _$.data(_scope["#text/1"], a);
  _b(_scope, a);
});
const _pattern_ = /* @__PURE__ */_$.value("_pattern_", (_scope, _pattern_) => _a(_scope, _pattern_.a));
const _count_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/same-source-non-alias/template.marko_0_count", (_scope, {
  count
}) => _$.on(_scope["#button/0"], "click", function () {
  _count(_scope, count + 1), count;
}));
const _count = /* @__PURE__ */_$.state("count", (_scope, count) => {
  _count_effect(_scope);
  _pattern_(_scope, createWrapper(count));
});
export function _setup_(_scope) {
  _count(_scope, 0);
}
function _createWrapper(a) {
  return {
    a
  };
}
_$.register("packages/translator-tags/src/__tests__/fixtures/same-source-non-alias/template.marko_0/createWrapper", _createWrapper);
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/same-source-non-alias/template.marko", _template_, _walks_, _setup_);