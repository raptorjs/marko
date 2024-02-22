import { write as _write, escapeXML as _escapeXML, markResumeNode as _markResumeNode, serializedScope as _serializedScope, markResumeControlSingleNodeEnd as _markResumeControlSingleNodeEnd, writeScope as _writeScope, nextScopeId as _nextScopeId, maybeFlush as _maybeFlush, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const arrA = [1, 2, 3];
  _write("<div>");
  const _forScopeIds = [],
    _scope1_ = new Map();
  let _i2 = 0;
  for (const val of arrA) {
    const _scope1_id = _nextScopeId();
    let _i = _i2++;
    _forScopeIds.push(_scope1_id);
    _write(`<div>${_escapeXML(val)}${_markResumeNode(_scope1_id, "#text/0")}</div>`);
    _writeScope(_scope1_id, (_s => (_scope1_.set(_i, _s), _s))({
      "_": _serializedScope(_scope0_id)
    }));
    _maybeFlush();
  }
  _write(`${_markResumeControlSingleNodeEnd(_scope0_id, "#div/0", _forScopeIds)}</div>${_markResumeNode(_scope0_id, "#div/0")}<div>`);
  const _forScopeIds2 = [],
    _scope2_ = new Map();
  let _i4 = 0;
  for (const val of arrA) {
    const _scope2_id = _nextScopeId();
    let _i3 = _i4++;
    _forScopeIds2.push(_scope2_id);
    _write(`<div>${_escapeXML(val)}${_markResumeNode(_scope2_id, "#text/0")}</div>`);
    _writeScope(_scope2_id, (_s2 => (_scope2_.set(_i3, _s2), _s2))({
      "_": _serializedScope(_scope0_id)
    }));
    _maybeFlush();
  }
  _write(`${_markResumeControlSingleNodeEnd(_scope0_id, "#text/1", _forScopeIds2)}<div></div></div>`);
  _writeScope(_scope0_id, {
    "#div/0(": _scope1_.size ? _scope1_ : undefined,
    "#text/1(": _scope2_.size ? _scope2_ : undefined
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/for-tag-siblings/template.marko");