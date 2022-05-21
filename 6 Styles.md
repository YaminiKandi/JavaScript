### Styles in Javascript
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Styles in Javascript</title>
        <script>
            function addCss(){
                document.getElementById("txt").style.color="red";
                document.getElementById("txt").style.backgroundColor="yellow";
                document.getElementById("txt").style.textAlign="center";
            }
        </script>
    </head>
    <body>
        <h1 id="txt">Welcome to JavaScript styles</h1>
        <button type="button" onclick="addCss()">Css</button>
    </body>
</html>
```

### Multiple Css properties in Single Line:
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Styles in Javascript</title>
        <script>
            function addCss(){
               document.getElementById("txt").setAttribute("style","color:white;background-color:teal;text-align:center");
            }
        </script>
    </head>
    <body>
        <h1 id="txt">Java Script</h1>
        <button type="button" onclick="addCss()">Css</button>
    </body>
</html>
```

### Mouse Events:
onmouseover, onmouseout
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Styles in Javascript</title>
        <script>
            function mouseEnter(){
               document.getElementById("txt").setAttribute("style","color:white;background-color:teal;text-align:center");
            }
            function mouseLeave(){
                document.getElementById("txt").setAttribute("style","color:red;background-color:yellow;text-align:center");
            }
        </script>
    </head>
    <body>
        <h1 id="txt" onmouseover="mouseEnter()" onmouseout="mouseLeave()">Java Script</h1>
    </body>
</html>
```
onload:
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Styles in Javascript</title>
        <script>
            function bodyLoad(){
                document.getElementById("txt").setAttribute("style","color:fuchsia;background-color:aqua;text-align:center")
            }
        </script>
    </head>
    <body onload="bodyLoad()">
        <h1 id="txt">Javascript</h1>
    </body>
</html>
```


ondblclick:
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Styles in Javascript</title>
        <script>
            function btnClick(){
                document.getElementById("txt").setAttribute("style","color:fuchsia;background-color:aqua;text-align:center")
            }
        </script>
    </head>
    <body>
        <h1 id="txt">JavaScript</h1>
        <button type="button" ondblclick="btnClick()">DblClick</button>
    </body>
</html>
```

### MIME type for Javascript:
```html
<script type="text/javascript"></script>
<script lang="javascript"></script>
```

### StrictMode in Javascript?
* Javascript language provides various programming techniques and approaches.
* Developers working on same project from different locations may follow various shortcuts in programs to handle any Functionality.
* This Leads to Code Inconsistency.
* Hence it is recommended to turn on "strict mode" for Javascript and define the rules for programming.
* You can turn on strict mode by using the keyword "strict mode".

```js
"use strict";
function f1(){
    var x = 100;
    document.write(x);
}
f1();
```