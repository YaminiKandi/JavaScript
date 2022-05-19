# <span style="color:cyan">DON'T IMITATE, UNDERSTAND</span>

### Syntax Parser:
* A Program that reads your code and determines what it does and if its grammar is valid.
* Your code isn't magic. Someone else wrote a program to translate it for the computer.

### Lexical Environment:
* Where something sits physically in the code you write.
* "Lexical" means 'having to do with words or grammar'.
* A lexical environment exists in programming languages in which where you write something is important.

### Execution Context:
* A wrapper to help, manage the code that is running.
* There are lots of lexical environments. Which one is currently running is managed via execution contexts. 
* It can contain things beyond what you've written in your code.

### Name-Value pair:
* A name which maps to a unique value
* The name may be defined more than once, but only can have one value in any given context.
* That value may be more name/value pairs.
Example: Address '100 Main St.' II

### Object:
* A collection of Name-Value pairs
* The simplest definition when talking about Javascript.
Example:
```
Address:
    {
        Street: 'Main'
        Number: 100
        Apartment:
        {
             Floor: 3,
             Number: 301
        }
    }
```
* The Global Execution Context creates 2 things
    1. Global Object (collection of name-value pairs)
    2. "this"
* Global: Not inside a function.

### Execution Content:
### Undefined:
##### Example1:
index.html
```html
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <script src="app.js"></script>
    </body>
</html>
```
app.js
```js
var a = 'Hello World';
function b() {
    console.log('Called b!')
}
b();
console.log(a);
```
Output:
called b!
Hello World

```js
var a = 'Hello World';
console.log(a);
```
Output: Hello World
```js
var a;
console.log(a);
```
Output: Undefined
```js
console.log(a);
```
Output: Error: a is not deifned
* undefined and not defined are not same.

##### Example2:
```js
var a = "Hello World";
console.log(a);
if (a === undefined) {
    console.log('a is not defined!');
}
else {
    console.log('a is defined!');
}
```

```
Output:
Hello World
a is defined!
```
```js
var a;
console.log(a);
if (a === undefined) {
    console.log('a is not defined!');
}
else {
    console.log('a is defined!');
}
```
```
Output:
undefined 
a is not defined!
```
```js
var a = 'Hello World';
console.log(a);
a = undefined;
if (a === undefined) {
    console.log('a is not defined!');
}
else {
    console.log('a is defined!');
}
```
```
Output:
Hello World
a is not defined!
```
### Code Execution:

```js
function b() {
    console.log('Called b!');
}
b(); //Execution
console.log(a);
var a = 'Hello World';
console.log(a);
```
```
Output:
Called b!
undefined
Hello world
```

### Single Threaded:
* One command at a time.
* Javascript behaves in a single threaded manner and maynot be under the hood.
* Synchronous execution - similar to single threaded.

### Function Invocation and The Execution stack:
* Function Invocation - Running a function, in javascript by using parenthesis.

Example 1:
```js
function b() {
}
function a() {
    b();
}
a();
```
Execution stack for Example 1:
1. Global execution context (Created and code is executed)
2. a() execution context (create and execute)
3. b() execution context (Create and execute)

#### Variable Environment:
* Where the variables live and how they relate to each other in memory.

```js
function b() {
    var myvar;
}
function a() {
    var myvar = 2;
    b();
}
var myvar = 1;
a();
console.log(a());
```
```
Output:
undefined
```
```js
function b() {
    var myvar;
    console.log(myvar);
}
function a() {
    var myvar = 2;
    console.log(myvar);
    b();
}
var myvar = 1;
console.log(myvar);
a();
```
```
Output:
1
2
undefined
```
```js
function b() {
    var myvar;
    console.log(myvar);
}
function a() {
    var myvar = 2;
    console.log(myvar);
    b();
}
var myvar = 1;
console.log(myvar);
a();
console.log(myvar);
```
```
Output:
1
2
undefined
1
```
### Scope chain:
```js
function b() {
    console.log(myvar);
}
function a() {
    var myvar = 2;
    b();
}
var myvar = 1;
a();
```
```
Output:
1
```
##### Explanation:
* Execution stack:
    1. Global execution context (Created and code is executed) myvar = 1;
    2. a() execution context (create and execute) myvar = 2;
    3. b() execution context (Create and execute) empty
* In function b() we didnot declare any variable, but we called for a variable to console.
* Every Execution context has a reference to its outer environment.
* For function b(), its outer environment is global execution context and same for function a().
* Here, the outer environment we are reffering to is the "Lexical Environment".

---
Lexical Environment:

Where something written physically in our code is important, it determines certain things that how the javascript engine will decide and interpret where things live, where things will sit in memory and how'll they connect to each other.

---

* function b() lexically sits on the top of the global environment i.e., it is not inside function a().
* Execution contexts don't matter where something is sitting physically in the code or not and doesn't matter the order (a could be above b or b could be above a). 
* But Javascript cares about the lexical environment.
* When we invoke a function, the javascript engine creates an outer reference for that execution context and it looks at where the code was physically sitting and then it creates the appropriate outer reference based on where our function was physically written in our javascript file.
* This execution chain is called scope chain.(scope - where we can access a variable and the chain is those links of outer environment references)

function inside a function:
```js
function a() {
    var myvar = 2;
    b();
    function b() {
        console.log(myvar);
    }
}
var myvar = 1;
a();
```
```
Output:
2
```

#### Scope:
* Where a variable is available in our code. And if its truly the same variable or a new copy.
#### Let:
* Recent version of Javascript is ECMA Script 6 or ECMA Script 2015 or ES6, is introducing a new way of declaring variables
* This is used or can be used instead of "var"
* "Let" allows the javascript engine to use "Block scoping"
```js
if (a > b) {
    let c = true;
}
```
* We can declare a variable just like we do with "var" and during the execution phase where it's created, the variable is still placed into memory and set to undefined.
* However, we're not allowed to use "let" until the line of code is run during the execution phase that actually declares the variable.
* In the above example, if we tried to use c=true; before the "let c=true;", we would get an error. Now its still in the memory but the engine wont allow it. The other important thing is its declared inside a block, when that variable is inside the block, its only available inside that block at that period of time for the running code. This is true even for "for loops".
* If we have a loop and are running the same code over and over but we have a let statement, we'll actually get a different variable in memory each time the loop is running. so this allows for block scoping.

### Asynchronous Callbacks:
* Asynchronous - more than one at a time.
* Javascript is synchronous.

#### Javascript is synchronous but how it is handling asynchronous events?

* The Javascript engine itself doesn't exists inside an internet browser. There are other elements and other engines and running pieces of code that are happening outside.
* Rendering engine that actually renders or prints or paints the screen whatever the webpage is that you're looking at.
* HTTP Request, these elements of browser that have to do with going out and getting HTTP request responses
* The Javascript engine has hooks that it can talk to the rendering engine and change the webpage look like, or going out and request data.
* All that is running may be running asynchronously meaning that the rendering engine, Javascript engine and request are running asynchronously inside the browser.
* Whats happening just inside the Javascript engine is synchronous.
* Lists that sit inside the Javascript engine is called the event queue. This will be full of events. notifications of events, that might be happening 
* So when the browser somewhere outside the javascript engine has an event, that inside the javascript engine we want to be notified of, it gets placed on the queue. And whether or not if we have a function that needs to respond to it.
* The event queue gets looked at bu Javascript when the execution stack is empty.
```js
// long running functions
function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms){}
    console.log('Finished function!')
}
function clickHandler() {
    console.log('click event!')
}
// listen for the click event 
document.addEventListener('click', clickHandler);
waitThreeSeconds();
console.log('Finished Execution');
```
```
Output:
Finished function!
Finished Execution
```
If we reload and click somewhere on the webpage we get:
```
Output:
Finished function!
Finished Execution
click event!
```
If we click twice:
```
Output:
Finished function!
Finished Execution
2 click event!
```

### Javascript:
* Javascript is an opensource, crossplatform language that supports functional, imperative, structural and object-oriented programming.
* It is light weight, Interpreted or just-in-time compiled programming language
* It is interpreter when it is used with browsers, an interpreter is responsible for line-by-line execution.
* It is compiled when it is used with server-side or database. The frequently used compiler for javascript is "V8"
* Javascript is used,
    a. client-side with HTML
    b. server-side with NodeJS
    c. Database with MongoDB
    d. Animations with Flash, etc..
* It is most popularly known as client-side Scipting language. client-side Script is the script that executes on browser level.
* It is Loosely Coupled or Weekly Typed Language.
* It is Case-Sensitive Language.

#### Scripting:
* The process of execution of programming on the web is known as "Scripting"
* Scripting is two types: 
    a. Client-side Scripting - The process of execution of the programming on the web-browser - Ex: JavaScript
    b. Server-side scripting - The process of execution of the programming on the web-server - Ex: Python, Java, PHP, nodeJS, .net, Asp.net, etc..

### History of Javascript:
* In early 1990's, ECMA[European Computer Manufature Association] developed their own script called ECMA Script (ES) for the browser called "MOSAIC" with GML, SGML.
* In 1992, a company called NETSCAPE Communications came to existence and assigned task to their employee "Brendan-Eich" to develop their own script.
* He developed a script named MOCHA and later NETSCAPE communications published with name called "LIVESCRIPT" IN 1994.
* In 2000's, Microsoft came to existence and developed their ownscript for browser called "Internet Explorer", And gave their browser to users for free of cost.
* In 2004, NETSCAPE Communications stopped its services and gave their LIVESCRIPT to "SUN Microsystems", and later they published LIVESCRIPT with another name called "JAVASCRIPT"
* Brendan-Eich started his own organisation and he developed a browser called "MOzilla Firefox"

### What is the purpose of using Javascript with HTML in WebDevelopment?
* Javascript reduces burden on server by managing Interactions client-side.
* It works as a Client-Side Script.
* Client-Side Script is the Script that run on client browser and it is used to manipulate HTML DOM.
    1. Adding Elements into Page
    2. Removing Elements from Page
    3. Modifying Data in Elements
    4. Managing the Validations for data in Elements etc,..
* Client-side Script can handle browser level operations

### What are the Issues with Javascript?
1. Browser Compatibility
2. Security - Memory Leak
3. It is Complex in References
4. Lot of DOM Manipulations
5. Navigational Issues 
6. It is Tedious (slow, long)
7. It will not support all OOP Features
8. Extensibility Issues 
9. It is not strongly type language
10. Data Binding

### How Javascript is used for HTML Page?
HTML page can use Javascript - Inline, Embedded, External File

#### Inline Technique:
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Inline Technique</title>
    </head>
    <body>
        <h1>Welcome to Javascript Inline Technique</h1>
        <button type="button" onclick="window.print()">Print</button>
        <button type="button" onclick="window.alert('welcome to Javascript Inline Technique')">Alert</button>
        <button type="button">Print</button>
    </body>
</html>
```
#### Embedded Technique:
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Embedded Technique</title>
        <script>
            function btnClick(){
                window.print();
            }
        </script>
    </head>
    <body>
        <h1>Welcome to Javascript Embedded Technique</h1>
        <button type="button" onclick="btnClick()">Print</button>
        <button type="button" onclick="btnClick()">Print</button>
    </body>
</html>
```
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Embedded Technique</title>
    </head>
    <body>
        <h1>Welcome to Javascript Embedded Technique</h1>
        <button type="button" onclick="btnClick()">Print</button>
        <button type="button" onclick="btnClick()">Print</button>
        <script>
            function btnClick(){
                window.print();
            }
        </script>
    </body>
</html>
```
##### Where to Embed Script, head or body?
* You can Embed script in head, body and outside HTML Document Scope.
* Script in Head Section is defined when developer wants the functionality to load into Memory but perform only when requested.
* script in Body Section is defined when developer wants the functionality Immediately on page load.
* Script outside HTML Document Scope is Not Recommended

#### Javascript from External File:
```html
<!DOCTYPE html>
<html>
    <head>
        <title>External Technique</title>
        <script src="external.js"></script>
    </head>
    <body>
        <h1>Welcome to Javascript External File</h1>
        <button type="button" onclick="btnClick()">Print</button>
    </body>
</html>
```
external.js:
```js
function btnClick(){
    window.print()
}
```

### Javascript can change the content of the HTML element:
* One of many JavaScript HTML methods is getElementById().
* The example below "finds" an HTML element (with id="demo"), and changes the element content (innerHTML) to "Hello JavaScript":

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

### Javascript Whereto:
* In HTML, JavaScript code is inserted between `<script>` and `</script>` tags.
```html
<!DOCTYPE html>
<html>
    <body>
        <h2>JavaScript in Body</h2>
        <p id="demo"></p>
        <script>
            document.getElementById("demo").innerHTML = "My First JavaScript";
        </script>
    </body>
</html>
```

### JavaScript Functions and Events:
* A JavaScript function is a block of JavaScript code, that can be executed when "called" for.
* For example, a function can be called when an event occurs, like when the user clicks a button.
* You can place any number of scripts in an HTML document.
* Scripts can be placed in the `<body>`, or in the `<head>` section of an HTML page, or in both.

### External JavaScript
* Scripts can also be placed in external files
* External scripts are practical when the same code is used in many different web pages.

### External JavaScript Advantages
Placing scripts in external files has some advantages:
* It separates HTML and code
* It makes HTML and JavaScript easier to read and maintain
* Cached JavaScript files can speed up page loads