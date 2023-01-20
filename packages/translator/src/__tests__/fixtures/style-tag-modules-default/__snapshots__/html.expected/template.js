import myStyles from "virtual:./template.marko.module.css \n  .content {\n    color: green;\n  }\n";
import { classAttr as _classAttr, markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope = _nextScopeId();
  _write(`<div${_classAttr(myStyles.content)}>Hello</div>${_markHydrateNode(_scope, "#div/1")}`);
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);