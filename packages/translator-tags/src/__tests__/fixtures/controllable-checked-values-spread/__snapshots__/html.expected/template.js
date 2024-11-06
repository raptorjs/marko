import * as _$ from "@marko/runtime-tags/debug/html";
import _checkbox from "./components/checkbox.marko";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const checkedValue = ["a", "b"];
  const _childScope = _$.peekNextScope();
  _checkbox({
    checkedValue: checkedValue,
    checkedValueChange: _$.register(function (_new_checkedValue) {
      checkedValue = _new_checkedValue;
    }, "packages/translator-tags/src/__tests__/fixtures/controllable-checked-values-spread/template.marko_0/checkedValueChange", _scope0_id),
    value: "a"
  });
  const _childScope2 = _$.peekNextScope();
  _checkbox({
    checkedValue: checkedValue,
    checkedValueChange: _$.register(function (_new_checkedValue2) {
      checkedValue = _new_checkedValue2;
    }, "packages/translator-tags/src/__tests__/fixtures/controllable-checked-values-spread/template.marko_0/checkedValueChange_0", _scope0_id),
    value: "b"
  });
  const _childScope3 = _$.peekNextScope();
  _checkbox({
    checkedValue: checkedValue,
    checkedValueChange: _$.register(function (_new_checkedValue3) {
      checkedValue = _new_checkedValue3;
    }, "packages/translator-tags/src/__tests__/fixtures/controllable-checked-values-spread/template.marko_0/checkedValueChange_0", _scope0_id),
    value: "c"
  });
  _$.write(`<span>${_$.escapeXML(checkedValue)}${_$.markResumeNode(_scope0_id, "#text/3")}</span>`);
  _$.writeScope(_scope0_id, {
    "#childScope/0": _$.writeExistingScope(_childScope),
    "#childScope/1": _$.writeExistingScope(_childScope2),
    "#childScope/2": _$.writeExistingScope(_childScope3)
  });
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/controllable-checked-values-spread/template.marko", _renderer);