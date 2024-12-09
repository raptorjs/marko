import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const count = 0;
  _$.write(`<script type=importmap>
  {
    "imports": {
      "${_$.escapeScript(count)}": "https://markojs.com",
    }
  }
</script>${_$.markResumeNode(_scope0_id, "#script/0")}`);
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/html-script/template.marko_0_count");
  _$.writeScope(_scope0_id, {
    "count": count
  });
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/html-script/template.marko", _renderer);