// size: 326 (min) 205 (brotli)
const _message$ifBody = _$.closure(3, (_scope, message) =>
    _$.data(_scope[0], message),
  ),
  _ifBody = _$.register(
    "a0",
    _$.createRenderer("<span> </span>", "D ", void 0, () => [_message$ifBody]),
  ),
  _if = _$.conditional(1, 0),
  _message = _$.state(3, 0, () => _$.inConditionalScope(_message$ifBody, 1)),
  _show_effect = _$.effect("a1", (_scope, { 2: show }) =>
    _$.on(_scope[0], "click", function () {
      _message(_scope, "bye"), _show(_scope, !show);
    }),
  ),
  _show = _$.state(
    2,
    (_scope, show) => {
      _show_effect(_scope), _if(_scope, show ? _ifBody : null);
    },
    () => _if,
  );
init();
