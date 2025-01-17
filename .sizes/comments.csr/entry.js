// size: 612 (min) 356 (brotli)
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
  _input_path$for_content = closure(4, 0),
  _for = loopOf(
    0,
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
  ),
  _input_path_ = value(4, 0, () => (void 0)(_input_path$for_content, 0)),
  _input_comments_ = value(
    3,
    (_scope, input_comments) => _for(_scope, [input_comments]),
    () => _for,
  ),
  _input_ = value(
    2,
    (_scope, input) => {
      const _comments_input_spread = input;
      _input_comments_(_scope[0], _comments_input_spread.comments),
        _input_path_(_scope[0], _comments_input_spread.path);
    },
    () =>
      intersections([inChild(0, _input_comments_), inChild(0, _input_path_)]),
  ),
  _params__ = value(
    1,
    (_scope, _params_) => _input_(_scope, _params_[0]),
    () => _input_,
  );
function _setup_(_scope) {
  _scope[0];
}
createTemplate(
  "b",
  "<ul></ul>",
  "/ b&",
  _setup_,
  void 0,
  () => _params__,
).mount();
