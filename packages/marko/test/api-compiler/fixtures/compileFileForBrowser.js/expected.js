"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");exports.__esModule = true;exports.default = void 0;var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer"));var _vdom = require("marko/src/runtime/vdom");var _registryBrowser = require("marko/src/runtime/components/registry-browser");var _defineComponent = _interopRequireDefault(require("marko/src/runtime/components/defineComponent"));const _marko_template = (0, _vdom.t)();var _default = _marko_template;exports.default = _default;const _marko_componentType = (0, _registryBrowser.r)("packages/marko/test/api-compiler/fixtures/compileFileForBrowser.js/template.marko", () => _marko_template),_marko_component = {};_marko_template._ = (0, _renderer.default)(function (input, out, _component, component, state) {out.t("Hello ", component);out.t(input.name, component);out.t("!", component);}, { t: _marko_componentType, i: true }, _marko_component);_marko_template.Component = (0, _defineComponent.default)(_marko_component, _marko_template._);