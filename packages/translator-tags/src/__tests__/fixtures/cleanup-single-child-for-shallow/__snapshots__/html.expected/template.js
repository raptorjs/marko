import { markResumeNode as _markResumeNode, register as _register, write as _write, peekNextScope as _peekNextScope, markResumeControlSingleNodeEnd as _markResumeControlSingleNodeEnd, writeScope as _writeScope, nextScopeId as _nextScopeId, getScopeById as _getScopeById, writeEffect as _writeEffect, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _child from "./components/child.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const items = [1, 2, 3];
  const el = () => {
    throw new Error("Cannot reference DOM node from server");
  };
  const write = _register(function (msg) {
    el().innerHTML += '\n' + msg;
  }, "packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-for-shallow/template.marko_0/_", _scope0_id);
  _write(`<button>Toggle</button>${_markResumeNode(_scope0_id, "#button/0")}<div></div>${_markResumeNode(_scope0_id, "#div/1")}`);
  const _forScopeIds = [],
    _scope1_ = new Map();
  let _i2 = 0;
  for (const item of items) {
    const _scope1_id = _nextScopeId();
    let _i = _i2++;
    const _childScope = _peekNextScope();
    _child._({
      write: write,
      name: item
    });
    _forScopeIds.push(_scope1_id);
    _writeScope(_scope1_id, {
      "#childScope/0": _childScope
    });
    _scope1_.set(_i, _getScopeById(_scope1_id));
  }
  _write(`${_markResumeControlSingleNodeEnd(_scope0_id, "#text/2", _forScopeIds)}`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-for-shallow/template.marko_0_items");
  _writeScope(_scope0_id, {
    "items": items,
    "write": write,
    "#text/2(": _scope1_.size ? _scope1_ : undefined
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-for-shallow/template.marko");