// size: 1331 (min) 551 (brotli)
const _expr_name_write_effect = _$.effect("a0", (_scope) => {
    _$.getAbortSignal(_scope, 0).onabort = ((_scope) => {
      const { 3: name, 4: write } = _scope;
      return () => {
        write(`destroyed ${name}`);
      };
    })(_scope);
  }),
  _expr_name_write = _$.intersection(2, (_scope) => {
    _$.resetAbortSignal(_scope, 0), _expr_name_write_effect(_scope);
  }),
  _write_ = _$.value(4, 0, () => _expr_name_write),
  _name_ = _$.value(
    3,
    (_scope, name) => _$.data(_scope[0], name),
    () => _expr_name_write,
  );
_$.register(
  "b0",
  (_scope) =>
    function (msg) {
      _scope[1].innerHTML += "\n" + msg;
    },
);
const _expr_outerItem_middleItem$forBody = _$.intersection(
    2,
    (_scope) => {
      const {
        _: { 3: outerItem },
        2: middleItem,
      } = _scope;
      _name_(_scope[0], `${outerItem}.${middleItem}`);
    },
    () => _$.inChild(0, _name_),
  ),
  _write$forBody2 = _$.dynamicClosure(
    5,
    (_scope, write) => _write_(_scope[0], write),
    (_scope) => _scope._._,
    () => _$.inChild(0, _write_),
  ),
  _outerItem$forBody2 = _$.closure(
    3,
    0,
    void 0,
    () => _expr_outerItem_middleItem$forBody,
  ),
  _middleItem$forBody = _$.value(
    2,
    0,
    () => _expr_outerItem_middleItem$forBody,
  ),
  _params_3$forBody = _$.value(
    1,
    (_scope, _params_3) => _middleItem$forBody(_scope, _params_3[0]),
    () => _middleItem$forBody,
  ),
  _setup$forBody2 = (_scope) => {
    _scope[0];
  },
  _forBody2 = _$.register(
    "b1",
    _$.createRenderer(
      "<div><div> </div></div>",
      "D/D l&",
      _setup$forBody2,
      () => [_write$forBody2, _outerItem$forBody2],
      () => _params_3$forBody,
    ),
  ),
  _for$forBody = _$.loopOf(1, _forBody2),
  _write$forBody = _$.closure(
    5,
    (_scope, write) => _write_(_scope[0], write),
    void 0,
    () => _$.inChild(0, _write_),
  ),
  _outerItem$forBody = _$.value(
    3,
    (_scope, outerItem) => _name_(_scope[0], `${outerItem}`),
    () =>
      _$.intersections([
        _$.inChild(0, _name_),
        _$.inLoopScope(_outerItem$forBody2, 1),
      ]),
  ),
  _items$forBody = _$.closure(
    3,
    (_scope, items) => _for$forBody(_scope, [items]),
    void 0,
    () => _for$forBody,
  ),
  _params_2$forBody = _$.value(
    2,
    (_scope, _params_2) => _outerItem$forBody(_scope, _params_2[0]),
    () => _outerItem$forBody,
  ),
  _setup$forBody = (_scope) => {
    _scope[0];
  },
  _forBody = _$.register(
    "b2",
    _$.createRenderer(
      "<div><div> </div><!></div>",
      "D/D l&%",
      _setup$forBody,
      () => [_write$forBody, _items$forBody],
      () => _params_2$forBody,
    ),
  ),
  _expr_items_items_length_effect = _$.effect("b3", (_scope) =>
    _$.on(
      _scope[0],
      "click",
      ((_scope) => {
        const { 3: items, 4: items_length } = _scope;
        return function () {
          _items(_scope, items_length ? items.slice(0, -1) : [1, 2, 3]);
        };
      })(_scope),
    ),
  ),
  _expr_items_items_length = _$.intersection(2, (_scope) => {
    _expr_items_items_length_effect(_scope);
  }),
  _for = _$.loopOf(2, _forBody),
  _items_length = _$.value(4, 0, () => _expr_items_items_length),
  _items = _$.state(
    3,
    (_scope, items) => {
      _items_length(_scope, items?.length), _for(_scope, [items]);
    },
    () =>
      _$.intersections([
        _expr_items_items_length,
        _items_length,
        _for,
        _$.inLoopScope(_items$forBody, 2),
      ]),
  );
init();
