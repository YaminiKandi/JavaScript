### Contents:
Building Objects:
1. Function Constructors, 'new'
2. Function Constructors and '.prototype'
3. Built-In Function Constructors
4. Why we shouldnot use Function Constructors

### Function Constructors, 'new':
* JavaScript will be somewhat similar to java.
* Function Constructors are just functions

---
Function Constructor:

Constructor functions technically are regular functions. There are two conventions though:

They are named with capital letter first.
They should be executed only with "new" operator.
When a function is executed with new, it does the following steps:

A new empty object is created and assigned to this.
The function body executes. Usually it modifies this, adds new properties to it.
The value of this is returned.

---

```js
function Person() {
    console.log(this)
    this.firstname = 'Yamini',
    this.lastname = 'Kandi'
    console.log('This function is invoked!')
}
var jackie = new Person();
console.log(jackie)
// Person {}
// This function is invoked!
// Person{firstname:'Yamini', lastname:'Kandi'}

function Person() {
    console.log(this)
    this.firstname = 'Yamini',
    this.lastname = 'Kandi'
    console.log('This function is invoked!')
    return { greeting: 'I got in the way!'}
}
var jackie = new Person();
console.log(jackie)
// Person {}
// This function is invoked!
// {greeting: 'I got in the way!'}
function Person() {
    console.log(this)
    this.firstname = 'Yamini',
    this.lastname = 'Kandi'
    console.log('This function is invoked!')
}
var jackie = new Person();
console.log(jackie)
var john = new Person();
console.log(john)
// Person {}
// This function is invoked!
// Person{firstname:'Yamini', lastname:'Kandi'}// Person{}
// Person {}
// This function is invoked!
// Person{firstname:'Yamini', lastname:'Kandi'}

function Person(firstname, lastname) {
    console.log(this)
    this.firstname = firstname,
    this.lastname = lastname,
    console.log('This function is invoked!')
}
var jackie = new Person('Jackie', 'Kandi');
console.log(jackie)
// Person {}
// This function is invoked!
// Person {firstname:'Jackie', lastname:'Kandi'}
```
* Inside a function, we can check whether it was called with new or without it, using a special new.target property.
```js
function Car(color) {
  if (!new.target) {
    // Called as function.
    return `${color} car`;
  }
  // Called with new.
  this.color = color;
}
const a = Car("red"); // a is "red car"
const b = new Car("red"); // b is `Car { color: "red" }`
```

Usually, constructors do not have a return statement. Their task is to write all necessary stuff into this, and it automatically becomes the result. But if there is a return statement, then the rule is simple:
    * If return is called with an object, then the object is returned instead of this.
    * If return is called with a primitive, it’s ignored.

### Function Constructors and '.prototype':
* Every function, a special type of object contains
    1. NAME - Optional, can be anonymous
    2. CODE - Invocable()
    3. Prototype - property, that starts off its life as an empty object - Used only by the 'new' operator
        And unless we're using the funxtion as a function constructor, it just hangs out. It's never used.

```js
function Person(firstname, lastname) {
    console.log(this)
    this.firstname = firstname,
    this.lastname = lastname,
    console.log('This function is invoked!')
}
Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
}
var yam = new Person('Yamini', 'Kandi');
console.log(yam)
Person.prototype.getFormalFullName = function() {
    return this.lastname + ' ' + this.firstname;
}
console.log(yam.getFormalFullName());
// Person {}
// This function is invoked!
// Person {firstname:'Yamini', lastname:'Kandi'}
// Kandi Yamini
```

### Built-In Function Constructors:
```js
var a = new Number(3)
console.log(a)
Output:
Number {3}
[[Prototype]]: Number
[[PrimitiveValue]]: 3
```

```js
var a = new String("Hello")
console.log(a)
Output:
String {'Hello'}
    0: "H"
    1: "e"
    2: "l"
    3: "l"
    4: "o"
    length: 5
    [[Prototype]]: String
    [[PrimitiveValue]]: "Hello"
```
```js
var a = new String("Hello")
console.log(String.prototype.indexOf('o'))   // -1
console.log(String.prototype.indexOf('He'))  // -1
console.log(a.indexOf('e'))         // 1
// here string is not a primitive its an object
// The value in string is primitive
```
* function constructors looks like we're creating primitive types, but we're actually creating objects that contain primitives and give them extra abilities
```js
console.log('Yamini Kandi'.length)  // 12
var a = new String("Yamini")
console.log(a.length)               // 6
```
```js
var a = new Date("7/25/1999")
console.log(a)                  // Sun Jul 25 1999 00:00:00 GMT+0530 (India Standard Time)
console.log(a.getDate())        // 25
console.log(a.getFullYear())    // 1999
```
```js
String.prototype.isLengthGreaterThan = function(limit) {
    return this.length > limit;
}
document.write("Yamini".isLengthGreaterThan(4)); // true
```
* The primitive string ("Yamini") was automatically converted to a string object generated by the string prototype function.
* `String` is a function, returns an object because i put a dot after and i added a method to the prototype, so all strings instantly have access to this method (all strings everywhere).
* That's the power of prototypal inheritance.
* here String is automatically converted to objects
* Can we do that with numbers?
```js
Number.prototype.isPositive = function(){
    return this > 0;
}
document.write(3.isPositive()) // Error
// numbers will not be converted to objects automatically
Number.prototype.isPositive = function(){
    return this > 0;
}
var a = 3;
document.write(a.isPositive()) // true
```

### Why we shouldnot use Function Constructors:
* Built-in function constructors for primitive types especially like boolean, number, string, are dangerous.
```js
var a = 3;
var b = new Number(3);
document.write(a == b) // true
// The == operator looks at 'a' and sees a primitive, looks at 'b' and sees an object 
// and tries to convert them to the same type
document.write(a===b) // false
// As 'a'- primitive and 'b'- object created with function constructor
```
* With built-in functions strange things can happen during comparision with operators and coercion.
* In general, its better not to use built-in function constructors.

###### momentjs.com
