// size: 337 (min) 227 (brotli)
const _id$if_content = closure(10, 0),
  _comment_comments$if_content = closure(8, 0);
register(
  "a0",
  createRenderer(
    "<ul></ul>",
    "/ b&",
    (_scope) => {
      _scope[0];
    },
    () => [_id$if_content, _comment_comments$if_content],
  ),
);
const _open$for_content_effect = effect("a1", (_scope, { 11: open }) =>
    on(_scope[2], "click", function () {
      _open$for_content(_scope, !open);
    }),
  ),
  _open$for_content = state(11, (_scope, open) => {
    attr(_scope[0], "hidden", !open),
      data(_scope[3], open ? "[-]" : "[+]"),
      _open$for_content_effect(_scope);
  }),
  _input_path$for_content = closure(4, 0);
register(
  "a2",
  createRenderer(
    "<li><span> </span><button> </button><!></li>",
    " E l D l%",
    (_scope) => {
      _open$for_content(_scope, !0);
    },
    () => [_input_path$for_content],
  ),
),
  init();
