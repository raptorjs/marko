// size: 296 (min) 172 (brotli)
const _expr_input_count = _$.intersection(2, (_scope) => {
    const { 3: input, 4: count } = _scope;
    _$.data(_scope[1], input.format(count));
  }),
  _count_effect = _$.effect("a0", (_scope, { 4: count }) =>
    _$.on(_scope[0], "click", function () {
      _count(_scope, count + 1);
    }),
  ),
  _count = _$.state(
    4,
    (_scope, count) => _count_effect(_scope),
    () => _expr_input_count,
  );
_$.register("b0", function (n) {
  return "$" + n.toFixed(2);
}),
  _$.register("b1", function (n) {
    return "$" + n.toFixed(2);
  }),
  init();
