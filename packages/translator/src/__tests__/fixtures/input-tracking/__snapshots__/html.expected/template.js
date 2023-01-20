import { escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope = _nextScopeId();
  const {
    a,
    b
  } = input;
  _write(`${_escapeXML(a)}${_markHydrateNode(_scope, "#text/0")} <!>${_escapeXML(b)}${_markHydrateNode(_scope, "#text/1")}`);
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);