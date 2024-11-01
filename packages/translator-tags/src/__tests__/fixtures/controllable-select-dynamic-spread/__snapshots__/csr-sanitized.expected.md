# Render {}
```html
<select>
  <option
    value="a"
  >
    A
  </option>
  <option
    selected=""
    value="b"
  >
    B
  </option>
  <option
    value="c"
  >
    C
  </option>
</select>
<span>
  b
</span>
```


# Render 
const select = container.querySelector(`select`);
  const window = select.ownerDocument.defaultView;
  select.value = "c";
  select.dispatchEvent(new window.Event("change", {
bubbles: true
  }))

```html
<select>
  <option
    value="a"
  >
    A
  </option>
  <option
    value="b"
  >
    B
  </option>
  <option
    selected=""
    value="c"
  >
    C
  </option>
</select>
<span>
  b
</span>
```