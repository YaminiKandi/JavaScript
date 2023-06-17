### Contents:
1. JavaScript Functions
2. Function Statements
3. Function Expressions
4. Function Constructor
5. Types of Functions
6. Self Invoking Functions
7. 'this' Operator
8. Function Hoisting
9. Arguments
10. rest parameters and spread operator

### 1. JavaScript Functions:
* A JavaScript function is a block of code designed to perform a particular task and is executed when "something" invokes it (calls it).

### 2. Function Statements:
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

### 3. Function Expressions:
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

### 4. Function Constructor:
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

* We can use Number(), String(), Date() etc functions and use their constructors but what we have to remember is..

If we use
```js
var a = Number(3);
```
It is still a number. But if we use
```js
var a = new Number(3);
```
It is now an object.

### 5. Types of Functions:
1. Function without parametres 
2. Function with parametres
3. Function with returntype   

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

### 6. Self-Invoking Functions
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

### 7. 'this':
* The value of _this_ is defined at run-time (how a function is called). When a function is declared, it may use _this_, but that _this_ has no value until the function is called.
* Every time when we invoke a function, new execution context will be created.
* Arrow functions are special: they have no _this_. When _this_ is accessed inside an arrow function, it is taken from outside.
* Value - In non–strict mode, this is always a reference to an object. In strict mode, it can be any value. For more information on how the value is determined, see the description below.
* The value of this depends on in which context it appears: function, class, or global.

#### 1. Global Context:
* When used alone, this refers to the global object. Because 'this' is running in the global scope.
* In a browser window, the global object is `[object Window]`
```js
console.log(this); // Window (object)
```
#### 2. Function Context:
* In a function, the global object is the default binding for this.
* Inside a function, the value of _this_ depends on how the function is called. 
* Think about _this_ as a hidden parameter of a function - similar to the parameters explicitly declared in the function definition (it means that the parameters are specifically listed and defined within the function's signature or definition)
* When a function is defined, the language automatically creates the this binding for you when the function body is evaluated. This means that this is a reference or pointer to an object that is determined at runtime, depending on how the function is called or how a method is invoked.
* The language binds this to the object that is responsible for the function call. In other words, this represents the context or the instance of an object that is associated with the function invocation.

```
regular function - refers to how function is called
standalone function - refers to global object
(A standalone function refers to a function that is not associated with any object or class,
that exists independently and can be called directly without being invoked as a method of an object.)
If function is called as a method of an object - refers to that object
```

```js
function a() {
  console.log(this);  // Window (object)
}
a();

function getThis() {
  return this;
}
const obj1 = { name: "obj1" };
const obj2 = { name: "obj2" };
obj1.getThis = getThis;
obj2.getThis = getThis;
console.log(obj1.getThis()); // { name: 'obj1', getThis: [Function: getThis] }
console.log(obj2.getThis()); // { name: 'obj2', getThis: [Function: getThis] }

// As method of an object
const obj3 = {
  __proto__: obj1,
  name: "obj3",
};
console.log(obj3.getThis()); // { name: 'obj3' }

// The value of this always changes based on how a function is called
// even when the function was defined on an object at creation
const obj4 = {
  name: "obj4",
  getThis() {
    return this;
  },
};

const obj5 = { name: "obj5" };
obj5.getThis = obj4.getThis;
console.log(obj5.getThis()); // { name: 'obj5', getThis: [Function: getThis] }

```

* When used in an <b>object method</b>, this refers to the object.
```js
function a() {
    console.log(this);
    this.newvariable = 'hello';
}
a();  // Window (object)
console.log(newvariable);   // hello
```

* If the value that the method is accessed on is a primitive, this will be a primitive value as well — but only if the function is in strict mode.
```js
function getThisStrict() {
  "use strict"; 
  return this;
}
Number.prototype.getThisStrict = getThisStrict;
console.log(typeof(1).getThisStrict()); // "number"
```

* If the function is called without being accessed on anything, this will be undefined — but only if the function is in strict mode.
```js
console.log(typeof getThisStrict()); // "undefined"
// OR
"use strict";
function myFunction() {
  return this;      // undefined
}
```

* <b> inside an object </b>
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

<b> _this_ in Arrow Functions </b>
* Unlike regular functions, arrow functions do not have their own this binding. Instead, they inherit the value of this from the surrounding or enclosing lexical context. The lexical context is determined by where the arrow function is defined, not where it is called.
* The _this_ value in an arrow function refers to the same value as _this_ value in the surrounding code where the arrow function is defined. It doesn't matter how or where the arrow function is invoked; its _this_ value will remain the same as the enclosing context's this.
* This behavior can be particularly useful when we want to maintain the value of this from an outer scope within the arrow function, especially in cases where this would typically change its value within regular functions.
```js
const obj = {
  name: "John",
  sayHello: function() {
    setTimeout(() => {
      console.log("Hello, " + this.name);
    }, 5000);
  }
};
obj.sayHello(); // Output: Hello, John
```

### 8. Function Hoisting:
* JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.
* Hoisting allows functions to be safely used in code before they are declared.
* Declarations are hoisted, but assignments are not. The declaration is processed at the start of function execution (hoisted), but the assignment always works at the place where it appears.
* Variable and class declarations are also hoisted, so they too can be referenced before they are declared. Note that doing so can lead to unexpected errors, and is not generally recommended.

```js
console.log(a); // undefined
a = 10;
console.log(a); // 10
var a;
console.log(a); // 10

greet("peter"); // Hello peter
function greet(name) {
  console.log("Hello " + name);
}
```

Hoisting is different in case of let and const. In case of let and const, memory is assigned but we cannot access them till they are initialized with some value.

* If you try to access let or const before assignment, you will get a REFERENCE ERROR.
* Temporal Dead Zone – The time between memory allocation for let and const and assigning a value.
* If we do not assign a value to const while declaring or if we do duplicate declaration for let or const, we get SYNTAX ERROR.
* If we reassign a different value to const, we get TYPE ERROR.

### 9. Arguments:
*  `arguments` is an array which can be used in any function. 
*  It contains all arguments that are passed to that function as its elements.

```js
function greeting(firstname, lastname, language = 'es', ...others){
    // setting default values
    // '... others' is used for unnamed arguments that user passes that are still available by arguments[x]

    console.log(arguments);
    // 'arguments' is an array of all parameters passed to the function
    if(arguments.length==0){
        console.log('Missing parameters');
        console.log('----------');
        return;
    }
    console.log('Hello ' + firstname + ' ' + lastname, 'language: '+ language);
    console.log('Hello ' + arguments[0] + ' ' + arguments[1], 'language: '+ arguments[2]);
    console.log('----------');
}

greeting();
greeting('vamsi');
greeting('vamsi', 'krishna');
// error wont show up even if you dont pass some parameters
greeting('vamsi', 'krishna', 'en');
greeting('vamsi', 'krishna', 'en', 'Noida', 'UP');
```

### 10. rest parameters and spread operator:
* When we see "..." in the code, it is either rest parameters or the spread syntax.
* There’s an easy way to distinguish between them:
    - When ... is at the end of function parameters, it’s rest parameters and gathers the rest of the list of arguments into an array.
    - When ... occurs in a function call or alike, it’s called a spread syntax and expands an array into a list.

##### Use patterns:
* Rest parameters are used to create functions that accept any number of arguments.
* The spread syntax is used to pass an array to functions that normally require a list of many arguments.
* Rest parameters are not counted in fn.length
