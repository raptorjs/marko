import baz from "./components/baz.marko";
import foo from "./components/foo.marko";
import { conditional as _conditional, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0");
const _x = /* @__PURE__ */_value("x", (_scope, x) => _dynamicTagName(_scope, x === 1 ? baz : foo), void 0, _dynamicTagName);
const _setup = _scope => {
  _x(_scope, 1);
};
export const template = "<!>";
export const walks = /* replace, over(1) */"%b";
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator-tags/src/__tests__/fixtures/import-tag-ternary/template.marko");