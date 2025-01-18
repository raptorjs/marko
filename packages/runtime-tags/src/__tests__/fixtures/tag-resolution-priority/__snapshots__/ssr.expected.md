# Write
```html
  <div></div><span></span><!--M_[2--><div></div><!--M_]0 #text/1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c={0:{"#childScope/0":_.a={},"#text/1!":_.b={},"#text/1(":"div"},1:_.a,2:_.b}),0]</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div />
    <span />
    <!--M_[2-->
    <div />
    <!--M_]0 #text/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:{"#childScope/0":_.a={},"#text/1!":_.b={},"#text/1(":"div"},1:_.a,2:_.b}),0]
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/div0
INSERT html/body/span
INSERT html/body/#comment0
INSERT html/body/div1
INSERT html/body/#comment1
INSERT html/body/script
INSERT html/body/script/#text
```