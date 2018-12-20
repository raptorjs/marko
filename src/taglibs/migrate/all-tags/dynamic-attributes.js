module.exports = function migrate(el, context) {
    el.forEachAttribute((attr, index) => {
        const name = attr.name;
        const value = attr.value;
        if (
            name == undefined &&
            (value.type == "MemberExpression" || value.type == "Identifier") &&
            !attr.spread
        ) {
            context.deprecate(
                'The "${attributes}" is deprecated. Please use "...attributes" modifier instead. See: https://github.com/marko-js/marko/wiki/Deprecation:-w-*-Atrributes'
            );
            attr.spread = true;
            el.attributes.splice(index, 1);
            el.addAttribute(attr);
        }
    });
};
