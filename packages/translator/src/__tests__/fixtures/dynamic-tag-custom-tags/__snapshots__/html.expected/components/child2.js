import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
const _renderer = ({
  value
}, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  _write(`<div>Child 2 has <!>${_escapeXML(value)}${_markResumeNode(_scope0_id, "#text/0")}</div>`);
};
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/dynamic-tag-custom-tags/components/child2.marko");