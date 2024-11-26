import {
  type Accessor,
  AccessorChar,
  NodeType,
  type Scope,
} from "../common/types";
import { setConditionalRendererOnlyChild } from "./control-flow";
import { attrs } from "./dom";
import { parseHTMLOrSingleNode as parseHTMLFragmentOrFirstNode } from "./parse-html";
import { $scope, createScope, withScope } from "./scope";
import {
  CLEAN,
  DIRTY,
  type IntersectionSignal,
  MARK,
  type SignalOp,
  type ValueSignal,
} from "./signals";
import { trimWalkString, walk } from "./walker";

export type Renderer = {
  ___id: symbol;
  ___template: string;
  ___walks: string;
  ___setup: SetupFn | undefined;
  ___closureSignals: Set<IntersectionSignal>;
  ___clone: () => Node;
  ___sourceNode: Node | undefined;
  ___args: ValueSignal | undefined;
  ___owner: Scope | undefined;
};

type SetupFn = (scope: Scope) => void;

export function createScopeWithRenderer(
  renderer: Renderer,
  $global: Scope["___global"],
  ownerScope?: Scope, // This is only needed when creating a renderer without an owner (template and control flow)
) {
  const newScope = createScope($global);
  newScope._ = newScope.___cleanupOwner = renderer.___owner || ownerScope;
  newScope.___renderer = renderer;
  initRenderer(renderer, newScope);
  if (renderer.___closureSignals) {
    for (const signal of renderer.___closureSignals) {
      signal.___subscribe?.(newScope);
    }
  }
  return newScope;
}

export function createScopeWithTagNameOrRenderer(
  tagNameOrRenderer: Renderer | string,
  $global: Scope["___global"],
  ownerScope?: Scope,
) {
  if (typeof tagNameOrRenderer !== "string") {
    return createScopeWithRenderer(tagNameOrRenderer, $global, ownerScope);
  }

  const newScope = createScope($global);
  newScope._ = newScope.___cleanupOwner = ownerScope;
  newScope[MARKO_DEBUG ? `#${tagNameOrRenderer}/0` : 0] =
    newScope.___startNode =
    newScope.___endNode =
      document.createElement(tagNameOrRenderer);
  return newScope;
}

export function initRenderer(renderer: Renderer, scope: Scope) {
  const dom = renderer.___clone();
  walk(
    dom.nodeType === NodeType.DocumentFragment ? dom.firstChild! : dom,
    renderer.___walks,
    scope,
  );
  scope.___startNode =
    dom.nodeType === NodeType.DocumentFragment
      ? dom.firstChild!
      : (dom as ChildNode);
  scope.___endNode =
    dom.nodeType === NodeType.DocumentFragment
      ? dom.lastChild!
      : (dom as ChildNode);
  if (renderer.___setup) {
    withScope(scope, renderer.___setup, scope, scope as never);
  }
  return dom;
}

export function dynamicTagAttrs(
  nodeAccessor: Accessor,
  getRenderBody?: (scope: Scope) => Renderer,
  inputIsArgs?: boolean,
) {
  return (attrsOrOp: (() => Record<string, unknown>) | SignalOp) => {
    const renderer: Renderer | string | undefined =
      $scope[nodeAccessor + AccessorChar.ConditionalRenderer];

    if (!renderer || attrsOrOp === DIRTY) {
      return;
    }

    const childScope = $scope[nodeAccessor + AccessorChar.ConditionalScope];
    const attrsIsOp = attrsOrOp === MARK || attrsOrOp === CLEAN;
    const renderBody = !attrsIsOp && getRenderBody?.($scope);
    return withScope(childScope, () => {
      if (attrsIsOp) {
        return (renderer as Renderer).___args?.(attrsOrOp);
      }

      if (typeof renderer === "string") {
        // This will always be 0 because in dynamicRenderer we used WalkCodes.Get
        const nodeAccessor = MARKO_DEBUG ? `#${renderer}/0` : 0;

        if (MARKO_DEBUG && renderer === "textarea" && renderBody) {
          throw new Error(
            "A dynamic tag rendering a `<textarea>` cannot have a `renderBody` and must use the `value` attribute instead.",
          );
        }

        setConditionalRendererOnlyChild(nodeAccessor, renderBody);
        attrs(nodeAccessor, attrsOrOp());
      } else if (renderer.___args) {
        const attributes = attrsOrOp();
        renderer.___args(
          inputIsArgs
            ? attributes
            : [
                renderBody
                  ? {
                      ...attributes,
                      renderBody,
                    }
                  : attributes,
              ],
        );
      }
    });
  };
}

export function createRendererWithOwner(
  template: string,
  rawWalks?: string,
  setup?: SetupFn,
  getClosureSignals?: () => IntersectionSignal[],
  getArgs?: () => ValueSignal,
) {
  let args: ValueSignal | undefined;
  let closureSignals: Set<IntersectionSignal> | undefined;
  const id = MARKO_DEBUG ? Symbol("Marko Renderer") : ({} as any as symbol);
  const walks = rawWalks ? /* @__PURE__ */ trimWalkString(rawWalks) : " ";
  return (owner?: Scope): Renderer => {
    return {
      ___id: id,
      ___template: template,
      ___walks: walks,
      ___setup: setup,
      ___clone: _clone,
      ___owner: owner,
      ___sourceNode: undefined,
      get ___args() {
        return (args ||= getArgs?.());
      },
      get ___closureSignals() {
        return (closureSignals ||= new Set(getClosureSignals?.()));
      },
    };
  };
}

export function createRenderer(
  template: string,
  walks?: string,
  setup?: SetupFn,
  getClosureSignals?: () => IntersectionSignal[],
  getArgs?: () => ValueSignal,
) {
  return createRendererWithOwner(
    template,
    walks,
    setup,
    getClosureSignals,
    getArgs,
  )();
}

function _clone(this: Renderer) {
  return (this.___sourceNode ||= parseHTMLFragmentOrFirstNode(
    this.___template,
  )).cloneNode(true);
}
