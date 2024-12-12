import { t as _t } from "marko/src/runtime/vdom/index.js";
const _marko_componentType = "__tests__/template.marko",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _marko_dynamic_tag from "marko/src/runtime/helpers/dynamic-tag.js";
import _of_fallback from "marko/src/runtime/helpers/of-fallback.js";
import _marko_renderer from "marko/src/runtime/components/renderer.js";
import { r as _marko_registerComponent } from "marko/src/runtime/components/registry.js";
_marko_registerComponent(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  function _renderTree(out, node) {
    out.t("Name: ", _component);
    out.t(node.name, _component);
    out.t(" Children: ", _component);
    if (node.children) {
      out.be("ul", null, "1", _component, null, 0);
      {
        let _keyValue = 0;
        for (const child of _of_fallback(node.children)) {
          const _keyScope = `[${_keyValue++}]`;
          out.be("li", null, "2" + _keyScope, _component, null, 0);
          _marko_dynamic_tag(out, _renderTree, () => child, null, null, null, _componentDef, "3" + _keyScope);
          out.ee();
        }
      }
      out.ee();
    }
  }
  _marko_dynamic_tag(out, _renderTree, () => input.node, null, null, null, _componentDef, "4");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);
import _marko_defineComponent from "marko/src/runtime/components/defineComponent.js";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);