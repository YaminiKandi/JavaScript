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
```js
const myFunction = new Function("a", "b", "return a * b");
    var res = myFunction(4, 3);
    document.write(res);
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
```js
function demo(){
    var  x = 200;
    var  y = 200;
    var  z = x+y;
    document.write(z);
}
demo();
```
##### console.log():
```js
function demo(){
    var  x = 200;
    var  y = 300;
    var  z = x+y;
    console.log(z)
}
demo();
```
##### window.alert():
```js
function demo(){
    var  x = 200;
    var  y = 300;
    var  z = x+y;
    window.alert(z)
}
demo();
```

#### 2. Function with parametres:
```js
function demo(a,b){
    var c = a+b;
    document.write(c);
}
demo(10,20);
```

#### 3. Function with Return type:
```html
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
console.log(a);     //39
```

### 'this':
* Every time when we invoke a function, new execution context will be created.

##### 1. 'this' Alone:
* When used alone, this refers to the global object. Because 'this' is running in the global scope.
* In a browser window, the global object is `[object Window]`
```js
console.log(this); // Window (object)
```
##### 2. 'this' inside a function:
* In a function, the global object is the default binding for this.
```js
function a() {
    console.log(this);  // Window (object)
}
a();
```
##### 3. 'this' inside a method:
* When used in an object method, this refers to the object.
```js
function a() {
    console.log(this);
    this.newvariable = 'hello';
}
a();  // Window (object)
console.log(newvariable);   // hello
```
##### 4. 'this' inside an object:
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
```js
var c = {
    name: 'The c object',
    log: function() {
        this.name = 'Updated c object';
        console.log(this);  //{name: 'Updated c object', log: ƒ}
        var setname = function(newname) {
            this.name = newname;
        }
        setname('Updated again! The c object')
        console.log(this); //{name: 'Updated c object', log: ƒ}
    }
}
c.log();
```
```js
var c = {
    name: 'The c object',
    log: function() {
        var self = this;
        self.name = 'Updated c object';
        console.log(self); //{name: 'Updated c object', log: ƒ}
        var setname = function(newname) {
            self.name = newname;
        }
        setname('Updated again! The c object')
        console.log(self); //{name: 'Updated again! The c object', log: ƒ}
    }
}
c.log(); 
```
##### 5. 'this' in a function (strict mode):
* when used in a function, in strict mode, this is undefined.
```js
"use strict";
function myFunction() {
  return this;      // undefined
}
```
