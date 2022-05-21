### Javascript can change the content of the HTML element:
* One of many JavaScript HTML methods is getElementById().
* The example below "finds" an HTML element (with id="demo"), and changes the element content (innerHTML) to "Hello JavaScript"
```html
<!DOCTYPE html>
<html>
    <body>
        <h2>What Can JavaScript Do?</h2>
        <p id="demo">JavaScript can change HTML content.</p>
        <button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>Click Me!</button>
    </body>
</html>
```
##### get and set content in Textfields - readable element:
```html
<!DOCTYPE html>
<html>
    <body>
        <h2>What Can JavaScript Do?</h2>
        <p id="demo">JavaScript can change HTML content.</p>
        <script>
            function getContent() {
               var name = document.getElementById("demo").innerHTML;
               document.getElementById("demo2").innerHTML = "Hello JavaScript";
            }
            function setContent() {
                document.getElementById("demo").innerHTML = "Hello JavaScript";
            }
        </script>
        <h3 id="demo2"></h3>
        <button type="button" onclick='getContent()'>Get Content</button>
        <button type="button" onclick='setContent()'>Set Content</button>
    </body>
</html>
```
##### get and set content in textbox - writable elements:
```html
<!DOCTYPE html>
<html>
    <body>
        <h2>What Can JavaScript Do?</h2>
        <p id="demo">JavaScript can change HTML content.</p>
        <script>
            function getContent() {
               var name = document.getElementById("demo").value;
               document.getElementById("demo2").innerHTML = "Hello JavaScript";
            }
            function setContent() {
                document.getElementById("txtbox").value = "Hello JavaScript";
            }
        </script>
        <h3 id="demo2"></h3>
        <input type="text" id="txtbox"><br><br>
        <button type="button" onclick='getContent()'>Get Content</button>
        <button type="button" onclick='setContent()'>Set Content</button>
    </body>
</html>
```

### Javascript can change HTML attribute values:
```html
<!DOCTYPE html>
<html>
    <body>
        <h2>What Can JavaScript Do?</h2>
        <p>JavaScript can change HTML attribute values.</p>
        <p>In this case JavaScript changes the value of the src (source) attribute of an image.</p>
        <button onclick="document.getElementById('myImage').src='./assets/pic_bulbon.gif'">Turn on the light</button>
        <img id="myImage" src="./assets/pic_bulboff.gif" style="width:100px">
        <button onclick="document.getElementById('myImage').src='./assets/pic_bulboff.gif'">Turn off the light</button>
    </body>
</html>
```

### Javascript can change HTML styles (CSS):
```html
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <h2>What Can JavaScript Do?</h2>
        <p id="demo">JavaScript can change the style of an HTML element.</p>
        <button type="button" onclick="document.getElementById('demo').style.fontSize = '35px'";>Click Me!</button>
    </body>
</html>
```

### Javascript can hide HTML elements:
```html
<!DOCTYPE html>
<html>
    <body>
        <h2>What Can JavaScript Do?</h2>
        <p id="demo">JavaScript can hide HTML elements.</p>
        <button type="button" onclick="document.getElementById('demo').style.display='none'">Click Me!</button>
    </body>
</html> 
```

### Javascript can show HTML elements:
```html
<!DOCTYPE html>
<html>
    <body>
        <h2>What Can JavaScript Do?</h2>
        <p>JavaScript can show hidden HTML elements.</p>
        <p id="demo" style="display:none">Hello JavaScript!</p>
        <button type="button" onclick="document.getElementById('demo').style.display='block'">Click Me!</button>
    </body>
</html>
```

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
#### onload:
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

#### ondblclick:
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