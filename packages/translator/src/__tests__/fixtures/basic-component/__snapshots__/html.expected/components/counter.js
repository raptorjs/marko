import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, writeEffect as _writeEffect, writeScope as _writeScope, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const clickCount = 0;
  _write(`<button>${_escapeXML(clickCount)}${_markResumeNode(_scope0_id, "#text/1")}</button>${_markResumeNode(_scope0_id, "#button/0")}`);
  _writeEffect(_scope0_id, "packages/translator/src/__tests__/fixtures/basic-component/components/counter.marko_0_clickCount");
  _writeScope(_scope0_id, {
    "clickCount": clickCount
  }, _scope0_);
};
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/basic-component/components/counter.marko");