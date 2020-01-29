"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {},
    marko_componentType = "/marko-test$1.0.0/components-compilation/fixtures-html/boundary-multi-root-html-els-ids-dynamic/index.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_attr = require("marko/src/runtime/html/helpers/attr");

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<h1" +
    marko_attr("id", input.myStart) +
    "></h1><div" +
    marko_attr("id", input.myEnd) +
    "></div>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.meta = {
    id: "/marko-test$1.0.0/components-compilation/fixtures-html/boundary-multi-root-html-els-ids-dynamic/index.marko",
    component: "./"
  };
