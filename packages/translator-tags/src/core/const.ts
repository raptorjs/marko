import { type Tag, assertNoParams } from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import { assertNoBodyContent } from "../util/assert";
import { isOutputDOM } from "../util/marko-config";
import { BindingType, trackVarReferences } from "../util/references";
import { getSection } from "../util/sections";
import { addValue, getTagVarSignal } from "../util/signals";
import translateVar from "../util/translate-var";

export default {
  analyze: {
    enter(tag: t.NodePath<t.MarkoTag>) {
      assertNoParams(tag);
      assertNoBodyContent(tag);
      const { node } = tag;
      const [defaultAttr] = node.attributes;

      if (!node.var) {
        throw tag
          .get("name")
          .buildCodeFrameError("The 'const' tag requires a tag variable.");
      }

      if (!defaultAttr) {
        throw tag
          .get("name")
          .buildCodeFrameError("The 'const' tag requires a default attribute.");
      }

      if (
        node.attributes.length > 1 ||
        !t.isMarkoAttribute(defaultAttr) ||
        (!defaultAttr.default && defaultAttr.name !== "value")
      ) {
        throw tag
          .get("name")
          .buildCodeFrameError(
            "The 'const' tag only supports the 'default' attribute.",
          );
      }

      const upstreamAlias = t.isIdentifier(defaultAttr.value)
        ? tag.scope.getBinding(defaultAttr.value.name)?.identifier.extra
            ?.binding
        : undefined;

      trackVarReferences(
        tag,
        BindingType.derived,
        upstreamAlias,
        (defaultAttr.value.extra ??= {}),
      );
    },
  },
  translate(tag) {
    const { node } = tag;
    const [defaultAttr] = node.attributes;
    const { value } = defaultAttr;

    if (isOutputDOM()) {
      const section = getSection(tag);
      const derivation = getTagVarSignal(tag.get("var"))!;

      // TODO: optimize for cases like `const/x=y`
      addValue(section, value.extra?.referencedBindings, derivation, value);
    } else {
      translateVar(tag, value);
    }

    tag.remove();
  },
  attributes: {},
  autocomplete: [
    {
      description: "Use to create an constant binding.",
      descriptionMoreURL: "https://markojs.com/docs/core-tags/#const",
    },
  ],
  types: "@marko/translator-tags/tag-types/const.d.marko",
} as Tag;
