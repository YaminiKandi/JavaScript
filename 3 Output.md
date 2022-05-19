JavaScript Display Possibilities
JavaScript can "display" data in different ways:

Writing into an HTML element, using innerHTML.
Writing into the HTML output using document.write().
Writing into an alert box, using window.alert().
Writing into the browser console, using console.log().

Using innerHTML
To access an HTML element, JavaScript can use the document.getElementById(id) method.

The id attribute defines the HTML element. The innerHTML property defines the HTML content:
```html
<body>
    <p id="demo"></p>
    <script>
        document.getElementById("demo").innerHTML = 5 + 6;
    </script>
</body>
```
Using document.write()
For testing purposes, it is convenient to use document.write():
```js
<script>
    document.write(5 + 6);
</script>
```
Using window.alert()
You can use an alert box to display data:
<script>
window.alert(5 + 6);
</script>
JavaScript Print
window.print() method in the browser to print the content of the current window.
<body>

<button onclick="window.print()">Print this page</button>

</body>

JavaScript Keywords
JavaScript statements often start with a keyword to identify the JavaScript action to be performed.

Our Reserved Words Reference lists all JavaScript keywords.

Here is a list of some of the keywords you will learn about in this tutorial:

Keyword	Description
var	Declares a variable
let	Declares a block variable
const	Declares a block constant
if	Marks a block of statements to be executed on a condition
switch	Marks a block of statements to be executed in different cases
for	Marks a block of statements to be executed in a loop
function	Declares a function
return	Exits a function
try	Implements error handling to a block of statements
JavaScript keywords are reserved words. Reserved words cannot be used as names for variables.

