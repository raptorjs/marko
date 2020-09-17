"use strict";

exports.__esModule = true;
exports.default = void 0;

var _b = _interopRequireDefault(require("b"));

var _escapeStylePlaceholder = _interopRequireDefault(require("marko/src/runtime/html/helpers/escape-style-placeholder"));

var _escapeScriptPlaceholder = _interopRequireDefault(require("marko/src/runtime/html/helpers/escape-script-placeholder"));

var _attr = _interopRequireDefault(require("marko/src/runtime/html/helpers/attr"));

var _classValue = _interopRequireDefault(require("marko/src/runtime/helpers/class-value"));

var _dynamicTag = _interopRequireDefault(require("marko/src/runtime/helpers/dynamic-tag"));

var _index = _interopRequireDefault(require("./components/other/index.marko"));

var _renderTag = _interopRequireDefault(require("marko/src/runtime/helpers/render-tag"));

var _escapeXml = require("marko/src/runtime/html/helpers/escape-xml");

var _attrs = _interopRequireDefault(require("marko/src/runtime/html/helpers/attrs"));

var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer"));

var _html = require("marko/src/runtime/html");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _marko_template = (0, _html.t)();

var _default = _marko_template;
exports.default = _default;
doThings();
andStuff();

function more() {
  abc();
}

const _marko_componentType = "packages/translator-default/test/fixtures/sanity-check/template.marko",
      _marko_component = {
  onCreate() {
    this.stuff();
  }

};
_marko_template._ = (0, _renderer.default)(function (input, out, _component, component, state) {
  out.w("<style id=css>");
  out.w("\n  div {\n    color: ");
  out.w((0, _escapeStylePlaceholder.default)(x));
  out.w(";\n  }\n");
  out.w("</style>");
  out.w("<script>");
  out.w("\n  var y = ");
  out.w((0, _escapeScriptPlaceholder.default)(x));
  out.w(";\n");
  out.w("</script>");

  function _thing(out, stuff) {
    out.w(`<div${(0, _attr.default)("x", stuff.x)}></div>`);
  }

  var b = thing;
  let c = thing;
  out.w(`<div${(0, _attr.default)("b", b)}${(0, _attr.default)("c", c)}>`);
  {
    var d = thing;
    let e = thing;
    out.w(`<div${(0, _attr.default)("d", d)}${(0, _attr.default)("e", e)}></div>`);
  }
  out.w("</div>");
  out.w("<div></div>");
  out.w(`<div${(0, _attr.default)("id", _component.elId("1"))}></div>`);
  out.w(`<div${(0, _attr.default)("class", (0, _classValue.default)(["a", {
    b: c,
    d
  }]))} style=a:b;></div>`);
  out.w("<input type=text>");
  (0, _dynamicTag.default)(out, _b.default, null, out => {
    out.w("<div></div>");
  }, null, null, _component, "@x");
  (0, _dynamicTag.default)(out, _thing, () => ({
    "x": 1
  }), null, null, null, _component, "12");
  (0, _renderTag.default)(_index.default, {
    "renderBody": (out, a) => {
      out.w("<div></div>");
    }
  }, out, _component, "13", [["click", "handleClick", false, [_b.default, b, ...d]]]);
  (0, _renderTag.default)(_index.default, {
    "x": 1,
    ...thing,
    "b": {
      a: 1
    },
    ...c,
    "c": {
      "c": 1,
      "d": {
        "d": 1,
        "renderBody": out => {
          out.w("<div></div>");
        }
      },
      "renderBody": out => {
        out.w("<div></div>");
      }
    },
    "renderBody": (out, b) => {
      out.w("<div></div>");
    }
  }, out, _component, "15");
  out.w(`<div${(0, _attrs.default)({
    "class": "b c",
    "a": {
      a: 1
    },
    "c": "${d}",
    ...e,
    ...f(),
    "id": "a"
  })}>`);
  out.w((0, _escapeXml.x)(_b.default));
  out.w("<!--");
  out.w("abc");
  out.w("-->");
  out.w("<div c=1></div>");
  out.w("<div d=1></div>");

  if (x === _b.default) {
    out.w("a ");
    out.w((0, _escapeXml.x)(b));
  } else if (x === 2) {
    out.w("b");
  } else {
    out.w("c");
  }

  out.w("</div>");
  out.w("<div b=1></div>");
  out.w("<div>");
  out.w("123 abc 123");
  out.w("</div>");
  out.w(`<span${(0, _attrs.default)(abc)}></span>`);

  if (cond) {
    out.w("Hello ");
    out.w((0, _escapeXml.x)(planet));
  }

  for (let _steps = (10 - 0) / 2, _step = 0; _step <= _steps; _step++) {
    const i = 0 + _step * 2;
    const _keyScope = `[${i}]`;
    out.w("<div c=1></div>");
  }

  for (const key in obj) {
    const val = obj[key];
    const _keyScope2 = `[${key}]`;
    out.w("<div c=1></div>");
  }
}, {
  t: _marko_componentType
}, _marko_component);