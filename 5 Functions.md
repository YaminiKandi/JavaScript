### JavaScript Functions:
* A JavaScript function is a block of code designed to perform a particular task and is executed when "something" invokes it (calls it).

### Function Statement:
```js
function greet(){
    console.log('hi!');
}
```
The above function is placed into memory but its just a statement. It doen't return a value until the function is executed.
* We can call the greet before we declare it, before we make that function's statement.
```js
greet();
function greet() {
    console.log('hi!');
}
// Output: hi!
```

### Function Expressions:
* A JavaScript function can also be defined using an expression.
* A function expression can be stored in a variable and after storing, the variable can be used as a function.
* This function doesn't want any name.
```js
var anonymousGreet = function() {
    console.log('hi!');
}
anonymousGreet();
```
Here we cannot call the anonymousGreet() before assigning function to it. As it puts function statements and variables into memory first.
```js
anonymousGreet();
var anonymousGreet = function() {
    console.log('hi!');
}
// Output: uncaught type error: anonymousGreet is not a function
```
```js
var anonymousGreet = function(){
    console.log('hi');
}
anonymousGreet();   
function log(a){
    console.log(a);
}
log(function (){
    console.log('hi');
});
```
```js
Output:
hi
function (){
    console.log('hi');
}
```
```html
<body>   
    <h2>JavaScript Functions</h2>
    <p>A function can be stored in a variable:</p>
    <h4 id="demo"></h4>
    <h4 id="d1"></h4>
    <script>
        const x = function (a, b) {return a * b};
        document.getElementById("demo").innerHTML = x;
        document.getElementById("d1").innerHTML = x(30, 20);
    </script>
</body>
```
##### Note:
* The function above is actually an anonymous function (a function without a name).
* Functions stored in variables do not need function names. They are always invoked (called) using the variable name.
* The function above ends with a semicolon because it is a part of an executable statement.

### Function Constructor:
* Functions can also be defined with a built-in JavaScript function constructor called Function().
```html
<body>
    <h2>JavaScript Functions</h2>
    <p>JavaScript has an built-in function constructor.</p>
    <p id="demo"></p>
    <script>
        const myFunction = new Function("a", "b", "return a * b");
        document.getElementById("demo").innerHTML = myFunction(4, 3);
    </script>
</body>
```
##### Note: We actually don't have to use the function constructor. The example above is the same as writing
```js
const myFunction = function (a, b) {return a * b}
document.getElementById("demo").innerHTML = myFunction(4, 3);
```

### Types of Functions:
1.Function without parametres 
2.Function with parametres
3.Function with returntype   

#### 1. Function without parametres:
##### document.write():
```js
<script>
    function demo(){
        var  x = 100;
        var  y = 200;
        var  z = x+y;
        document.write(z)
    }
    demo();
</script>
```
##### innerHTML:
```html
<body>
    <h1 id="txt"></h1>
    <script>
        function demo(){
            var  x = 200;
            var  y = 200;
            var  z = x+y;
            document.getElementById("txt").innerHTML = z;
        }
        demo();
    </script>    
</body>

```
##### console.log():
```js
<script>
    function demo(){
        var  x = 200;
        var  y = 300;
        var  z = x+y;
        console.log(z)
    }
    demo();
</script>
```
##### window.alert():
```js
<script>
    function demo(){
        var  x = 200;
        var  y = 300;
        var  z = x+y;
        window.alert(z)
    }
    demo();
</script>
```

#### 2. Function with parametres:
```html
<!DOCTYPE html>
<html>
    <head>
        <title>function with parametres</title>
    </head>
    <body>
        <h1 id="res"></h1>
        <script>
            function demo(a,b){
                var c = a+b;
                document.getElementById("res").innerHTML = c;
            }
            demo(10,20);
        </script>
    </body>
</html>
```

#### 3. Function with Return type:
```html
<!DOCTYPE html>
<html>
    <head>
        <title>function with return type</title>
    </head>
    <body>
        <h1 id="res"></h1>
        <script>
            function demo(a,b){
                var c = a+b;
                return c;
            }
            document.getElementById("res").innerHTML = demo(100,200);
        </script>
    </body>
</html>
```

### Self-Invoking Functions
* Function expressions can be made "self-invoking".
* A self-invoking expression is invoked (started) automatically, without being called.
* Function expressions will execute automatically if the expression is followed by ().
* You cannot self-invoke a function declaration.
* You have to add parentheses around the function to indicate that it is a function expression:

```html
<body>
    <h3>Functions can be invoked automatically without being called:</h3>
    <p id="demo"></p>
    <script>
        (function () {
        document.getElementById("demo").innerHTML = "Hello! I called myself";
        })();
    </script>
</body>
```
```js
var a = 4 + 7 * 5;
console.log(a);
```
Output: 39

### 'this':
* Every time when we invoke a function, new execution context will be created.
* When We just invoke a function, 'this' points to the global level.
```js
console.log(this); // Window (object)
```
```js
function a() {
    console.log(this);  // Window (object)
}
a();
```
```js
function a() {
    console.log(this);
    this.newvariable = 'hello';
}
a();  // Window (object)
console.log(newvariable);   // hello
```

```js
var c = {
    name: 'The c object',
    log: function() {
        console.log(this);
    }
}
c.log();
```
```js
Output:
{name: 'The c object', log: ƒ}
log: ƒ ()
name: "The c object"
[[Prototype]]: Object
```
```js
var c = {
    name: 'The c object',
    log: function() {
        this.name = 'Updated c object'
        console.log(this);
    }
}
c.log();
```
```js
Output:
{name: 'Updated c object', log: ƒ}
log: ƒ ()
name: "Updated c object"
[[Prototype]]: Object
```
