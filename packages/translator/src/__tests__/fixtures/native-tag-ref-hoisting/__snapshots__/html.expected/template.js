import { markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, writeEffect as _writeEffect, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  if (true) {
    const _scope1_id = _nextScopeId();
    const el = () => {
      throw new Error("Cannot reference DOM node from server");
    };
    _write(`<div></div>${_markResumeNode(_scope1_id, "#div/0")}`);
  }
  _writeEffect(_scope0_id, "packages/translator/src/__tests__/fixtures/native-tag-ref-hoisting/template.marko_0");
};
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/native-tag-ref-hoisting/template.marko");