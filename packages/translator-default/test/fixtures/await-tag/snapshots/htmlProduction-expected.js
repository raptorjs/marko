const _marko_template = _t();

export default _marko_template;
import { x as _marko_escapeXml } from "marko/dist/runtime/html/helpers/escape-xml";
import _await from "../../../../marko/src/core-tags/core/await/renderer.js";
import _marko_tag from "marko/dist/runtime/helpers/render-tag";
import _marko_renderer from "marko/dist/runtime/components/renderer";
import { t as _t } from "marko/dist/runtime/html";
const _marko_componentType = "Jif94jIs",
      _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  _marko_tag(_await, {
    "_provider": promise,
    "_name": "promise",
    "then": {
      "renderBody": (out, result) => {
        out.w(_marko_escapeXml(result));
      }
    }
  }, out, _component, "0");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);