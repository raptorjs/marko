import { t as _t } from "marko/src/runtime/html";

const _marko_componentType = "packages/translator-default/test/fixtures/tag-with-default-attr/template.marko",
      _marko_template = _t(_marko_componentType);

export default _marko_template;
import _marko_attr from "marko/src/runtime/html/helpers/attr";
import _marko_renderer from "marko/src/runtime/components/renderer";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.w("<div default></div>");
  out.w("<div></div>");
  out.w(`<div${_marko_attr("default", abc)}></div>`);
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);