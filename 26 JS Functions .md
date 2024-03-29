### Contents:
1. Automatic Semicolon Insertion
2. Immediately Invoked Functions
3. Closures
4. Function factory
5. Closures and callbacks
6. call(), apply() and bind() 
7. Function Borrowing
8. Function Curring
9. Functional Programming

### Automatic Semicolon Insertion:
```js
function getPerson() {
    return;
    {
        firstname: 'Yamini'
    }
}
console.log(getPerson()) // undefined
```
```js
function getPerson() {
    return {
        firstname: 'Yamini'
    }
}
console.log(getPerson()) // Yamini
```

### Immediately Invoked Function Expressions (IIFE) :
* We can invoke a function in the fly. 
* That means they are invoked immediately after creation.

```js
// function statement
function greet(name) {
    document.write('Hello ' + name + '<br>')
}
greet('yamini');
// function expression
var greetFunc = function(name) {
    document.write('Hello ' + name);
}
greet('Jackie');
// Immediately Invoked Function Expressions
var greeting = function (name) {
    document.write("Hello " + name)
}('yamini');
```
```js
var greeting = function (name) {
    return "Hello " + name
}
document.write(greeting('yamini'));
// IIFE
var greeting = function (name) {
    return "Hello " + name
}('yamini');
document.write(greeting);
```
```js
// Even though not used for anything, they are valid in JS
3;
"I am a string";
{
    firstname: 'yamini',
    lastname: 'kandi'
};
```
```js
function (name) {
    return "Hello " + name;
}
// Uncaught SyntaxError: Function statements require a function name
```
```js
(function (name) {
    return "Hello " + name;
});
// No error and does nothing
```
```js
var firstname = 'Yamini';
(function (name) {
    var greeting = 'Inside IIFE: Hello';
    document.write(greeting + ' ' + name);
}(firstname));
// Inside IIFE: Hello Yamini
(function (name) {
    var firstname = 'Yamini';
    var greeting = 'Inside IIFE: Hello';
    document.write(greeting + ' ' + name);
}(firstname));
// No output
(function (name) {
    var greeting = 'Inside IIFE: Hello';
    document.write(greeting + ' ' + name);
}('Yamini'));
// Inside IIFE: Hello Yamini
```
```js
var greeting = "Hola";
(function (name) {
    var greeting = 'Hello';
    document.write(greeting + ' ' + name + '<br>');
}('Yamini'));
document.write(greeting);
// Hello Yamini
// Hola

var greeting = "Hola";
(function (global, name) {
    var greeting = 'Hello';
    global.greeting = 'Hello'; // Intentionally effecting the global greeting 'Hola'
    document.write(greeting + ' ' + name + '<br>');
}(window, 'Yamini'));
document.write(greeting);
// Hello Yamini
// Hello
```

### Closures:
* A closure is a function that remembers its outer variables and can access them. 
* Function along with its lexical scope bundled together forms a closure.
* All functions remember the Lexical Environment in which they were made. 
* Technically, there’s no magic here: all functions have the hidden property named `[[Environment]]`, that keeps the reference to the Lexical Environment where the function was created

```js
function greet(whattosay) {
    return function(name) {
        document.write(whattosay + ' ' + name);
    }
}
greet('Hi')('Yamini');
// Hi Yamini
```
It doesn't matter when we invoke a function. We don't have to worry if its outer environments are still running. The JavaScript engine will always make sure that whatever function I'm running, that it will have access to the variables that it's supposed to have access to. That its scope is intact. 

```js
function greet(whattosay) {
    return function(name) {
        document.write(whattosay + ' ' + name);
    }
}
var sayHi = greet('Hi');
sayHi('Yamini');
// Hi Yamini
```

In the hood:
* Global execution context will be created.
* When it invokes `var sayHi = greet('Hi');` then creates a new execution context greet()
* And the variable that passed to `greet(whattosay)` is sitting in its variable environment, it returns a new function object (creates a function on the fly and returns it)
* After that return, the greet execution context is popped out of the stack.
* But we know that, Every execution context has its space in the memory where the variables and functions created inside of it live. What happens to that memory space when the execution context goes away?
* Under normal circumstances, the javascript engine would eventually clear it out with a process called garbage collection.
* But at the moment the execution context finishes, that memory space is still there. The execution context may be gone but it's just sitting somewhere in memory.
* Now we're inside the global execution context again and then we invoke the function `sayHi('Yamini');`(anonymous function). This creates a new execution context and passed a name variable 'Yamini' so that it will end up in its memory
* When we hit the line `document.write(whattosay + ' ' + name);`. when its code is invoked, and Javascript engine sees the `whattosay` variable and it goes up the scope chain.<br><br>
* There's an outer lexical environment reference. In other words it goes next point oustside where the function was created to look for that variable, since it couldnot find it inside the function itself.
* And even though the execution context of that function greet is gone, was popped out the stack. the sayHi execution context still has a reference to the variables, to the memory space of its outer environment.
* In other words, even though greet function ended, it finished, any functions created inside of it. When they are called, will still have a reference to that greet function's memory. To what was in its memory, its execution contexts memory space.
* And this way we say that the execution context has closed in its outer variables, the variables that it would normally have reference to anyway even though that execution contexts are gone.
* This phenomenon of it closing in all the variables that its supposed to have access to, is called a closure.
* closures are simply a feature of the javascript programming language. They just happen. It doesn't matter when we invoke a function.
* We don't have to worry if its outer environments are still running 
* The javascript engine will always make sure that whatever function im running, that it will have access to the variables that its supposed to have access to. That its scope is intact.
* This is the feature of the language that's extraordinarily important and powerful.

#### Closure examples:
```js
function buildFunctions() {
    var arr = [];
    for (var i = 0; i < 3; i++){
      document.write(i + '<br>')
    }
    return arr;
}
var fs = buildFunctions();
fs[0](); //0
fs[1](); //1
fs[2](); //2

function buildFunctions() {
    var arr = [];
    for (var i = 0; i < 3; i++){
        arr.push(
            function(){
                document.write(i + '<br>')
            }
        )
    }
    return arr;
}
var fs = buildFunctions();
fs[0](); //3
fs[1](); //3
fs[2](); //3

function buildFunctions() {
    var arr = [];
    for (var i = 0; i < 3; i++){
        let j = i;
        arr.push(
            function(){
                document.write(j + '<br>')
            }
        )
    }
    return arr;
}
var fs = buildFunctions();
fs[0](); //0
fs[1](); //1
fs[2](); //2

function buildFunctions() {
    var arr = [];
    for (var i = 0; i < 3; i++){
        var j = i;
        arr.push(
            function(){
                document.write(j + '<br>')
            }
        )
    }
    return arr;
}
var fs = buildFunctions();
fs[0](); //2
fs[1](); //2
fs[2](); //2

// Immediately Invoked Function Expressions (IIFE)
function buildFunctions() {
    var arr = [];
    for (var i = 0; i < 3; i++){
        arr.push(
            (function(j){
                document.write(j + '<br>')
            }(i))
        )
    }
    return arr;
}
var fs = buildFunctions();
fs[0](); //0
fs[1](); //1
fs[2](); //2
```

#### Uses of Closures
1. Module Design Pattern
2. Currying
3. Functions like once
4. Memoize
5. Maintaining state in async world
6. setTimeouts
7. Data hiding and Encapsulation
8. Iterators … and many more

#### Disadvantages of closures
- Memory issues if garbage collection is not done properly

### Function Factories:
```js
function makeGreeting(language) {
    return function(firstname, lastname){
        if(language === 'en'){
            document.write('Hello ' + firstname + ' ' + lastname + '<br>')
        }
        if(language === 'es'){
            document.write('Hola ' + firstname + ' ' + lastname)
        }
    }
}
var greetEnglish = makeGreeting('en')
var greetSpanish = makeGreeting('es')
greetEnglish('Yamini','Kandi') // Hello Yamini Kandi
greetSpanish('Yamini','Kandi') // Hola Yamini Kandi
```
* greetEnglish and greetSpanish are closures here.

### Closures and Callbacks:
```js
function sayHiLater() {
    var greeting = "Hi";
    setTimeout(function(){
        document.write(greeting);
    }, 3000);
}
sayHiLater();
```
* Incase of jQuery
```js
// jQuery uses function expressions and first class functions!
$("button").click(function(){
});
```
#### Callbacks:
* A function we give to another function, to be run when the other function is finished.
* So the function we call (i.e., invoke), 'calls back' by the calling function we gave it when it finishes.
```js
function tellMeWhenDone(callback) {
    var a = 1000; // some work
    var b = 2000; // some work
    callback(); // the 'callback', it runs the function we give it!
}
tellMeWhenDone(function(){
    document.write('I am done!' + '<br>')
});
tellMeWhenDone(function(){
    document.write('All done!')
});
// I am done!
// All done!
```

### call(), apply() and bind():
* `bind()` - creates a copy of the function with its this keyword set to provided value. It also accepts parameters.
* `call()` - same as bind but the function is invoked immediately with its this keyword set to provided value. It also accepts parameters.
* `apply()` - same as call but it parameters are passed in an array. 
* All functions will have access to call(), apply(), bind().

```js
var person = {
    firstname: "Yamini",
    lastname: "Kandi",
    getFullName: function() {
        var fullname = this.firstname + ' ' + this.lastname
        return fullname;
    }
}
var logName = function(lang1, lang2) {
    document.write('Logged: ' + this.getFullName())
}
logName();              // Uncaught TypeError: this.getFullName is not a function 
var logPersonName = logName.bind(person);
logPersonName();       // Logged: Yamini Kandi

// OR
var logName = function(lang1, lang2) {
    document.write('Logged: ' + this.getFullName())
}.bind(person);
logName();              // Logged: Yamini Kandi

// OR
var logName = function(lang1, lang2) {
    document.write('Logged: ' + person.getFullName())
}
logName();              // Logged: Yamini Kandi
```

```js
var person = {
    firstname: "Yamini",
    lastname: "Kandi",
    getFullName: function() {
        var fullname = this.firstname + ' ' + this.lastname
        return fullname;
    }
}
var logName = function(lang1, lang2) {
    document.write('Logged: ' + this.getFullName() + '<br>')
    document.write('Arguments: ' + lang1 + ', ' + lang2)
}
var logPersonName = logName.bind(person);
logPersonName('English', 'Telugu');
// Logged: Yamini Kandi
// Arguments: English, Telugu

logName.call(person, 'English', 'Telugu')
logName.apply(person, ['English', 'Telugu']) // apply wants arguments in an array

// Function on the fly
(function(lang1, lang2) {
    document.write('Logged: ' + this.getFullName() + '<br>')
    document.write('Arguments: ' + lang1 + ', ' + lang2 + '<br>')
}).apply(person, ['Telugu', 'English'])

(function(lang1, lang2) {
    document.write('Logged: ' + this.getFullName() + '<br>')
    document.write('Arguments: ' + lang1 + ', ' + lang2 + '<br>')
}).apply(person)
//Uncaught TypeError: {(intermediate value)(intermediate value)(intermediate value)} is not a function

logName.apply(person)
//Logged: Yamini Kandi
// Arguments: undefined, undefined
```

### Function Borrowing:
* Function borrowing is borrowing a functionn from an object rather than redefining it.
* Functions should have similar property names.
```js
var person = {
    firstname: "Yamini",
    lastname: "Kandi",
    getFullName: function() {
        var fullname = this.firstname + ' ' + this.lastname
        return fullname;
    }
}
var person2 = {
    firstname: 'Vamsi',
    lastname: 'Kandi'
}
document.write(person.getFullName.apply(person) + '<br>');
document.write(person.getFullName.apply(person2));
// Yamini Kandi
// Vamsi Kandi
```
### Function Curring:
* Creating a copy of a function but with some preset parameters.
* Very useful in mathematical situations.
```js
function multiply(a, b) {
    document.write((a*b) + '<br>');
}
var multiplyByTwo = multiply.bind(this, 2) // bind here is permanently setting the var a = 2
multiply(10, 20)    // 200
multiplyByTwo(20)   // 40
var multiplyFixed = multiply.bind(this, 2, 3) // bind here is permanently setting the var a = 2 and var b = 3
multiplyFixed()     // 6
var multiplyVar = multiply.bind(this)
multiplyVar(5, 2)   // 10
var multiplyByThree = multiply.bind(this, 3)
multiplyByThree(5)  // 15
```

### Functional Programming
* Functional Programming is a programming paradigm where you mostly construct and structure your code using functions.

```js
var arr1 = [1, 2, 3];
console.log(arr1 + '<br>')
var arr2 = [];
for (var i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i] * 2);
}
console.log(arr2);
// 1,2,3
// 2,4,6
```
```js
function mapForEach(arr, func){
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(
            func(arr[i])
        )
    }
    return newArr;
}
var arr1 = [1,2,3]
console.log(arr1)   // [ 1, 2, 3 ]
var arr2 = mapForEach(arr1, function(item){
    return item*2;
})
console.log(arr2);  // [ 2, 4, 6 ]
var arr3 = mapForEach(arr1, function(item){
    return item > 2;
})
console.log(arr3);  // [ false, false, true ]
var arr4 = mapForEach(arr2, function(item){
    return item > 2;
})
console.log(arr4);  // [ false, true, true ]
// this can be further modified

var logic = function(multiplier, item){
    return item * multiplier;
}
var arr5 = mapForEach(arr1, logic.bind(this, 4))
// bindis required because 'func' in mapMe takes only one input 
// and our logic function takes 2 inputs
console.log(arr5)    // [ 4, 8, 12 ]

var logicModified = function(multiplier){
    return function(multiplierX, item){
        return item * multiplierX;
        // multiplierX is used just to differentiate
    }.bind(this, multiplier);
};
// logicModified(5)(item) is same as logic.bind(this, 4)(item) and that is same as logic(4, item)
var arr5 = mapForEach(arr1, logicModified(5)); // Now this looks clean
console.log(arr5);  // [ 5, 10, 15 ]
```
