import { write as _write, nextScopeId as _nextScopeId, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  _write("Hello John &amp; Suzy Invalid Entity: &b ; Valid Numeric Entity: &#34; Valid Hexadecimal Entity: &#x00A2;");
};
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/entities/template.marko");