var w10NOOP = require("warp10/constants").NOOP;
var RENDER_BODY_TO_JSON = function() {
    return w10NOOP;
};

var FLAG_WILL_RERENDER_IN_BROWSER = 1;
var IS_SERVER = typeof window === "undefined";

function doInclude(input, out, throwError) {
    var target = input._target;
    var arg = input._arg || input;
    var renderBody = (target && target.renderBody) || target;

    if (target) {
        if (target.renderer) {
            return target.renderer(arg, out), true;
        } else if (target.render) {
            return target.render(arg, out), true;
        } else if (target.safeHTML) {
            return out.write(target.safeHTML), true;
        } else if (typeof renderBody !== "function") {
            if (typeof target === "string") {
                // TODO: deprecate this
                return target && out.text(target), true;
            } else if (throwError) {
                out.error("Invalid include target");
            }
        }
    }

    if (renderBody) {
        var isFn = renderBody !== w10NOOP;
        var componentsContext = out.___components;
        var componentDef =
            out.___assignedComponentDef ||
            (componentsContext && componentsContext.___componentDef);
        var willRerenderInBrowser =
            componentDef &&
            componentDef.___flags & FLAG_WILL_RERENDER_IN_BROWSER;
        var preserve = (IS_SERVER && willRerenderInBrowser) || !isFn;
        out.___beginFragment(
            out.___assignedKey,
            componentDef && componentDef.___component,
            preserve
        );
        if (isFn) {
            renderBody.toJSON = RENDER_BODY_TO_JSON;
            renderBody(out, arg);
        }
        out.___endFragment();
    }
}

function includeTag(input, out) {
    doInclude(input, out, true);
}

includeTag.___doInclude = doInclude;

module.exports = includeTag;
