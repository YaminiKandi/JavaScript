### Contents:
Object Oriented JavaScript and Prototypal Inheritance
1. Classical Vs Prototypal Inheritance
2. Understanding the prototype
3. Everything is an object.
4. Reflection and Extend

#### Classical Vs Prototypal Inheritance:
* Inheritance - One object gets access to the properties and methods of another object.
* Prototypal - Simple, flexible, extensible, easy to understand
* Classical - verbose, protected, private, hard to understand

### Understanding the Prototype:
* Every object in JavaScript has a built-in property, which is called its prototype. 
* The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. 
* The chain ends when we reach a prototype that has null for its own prototype. 
* If we have an object named 'obj', it contains
    1. property, prop1 - which can be called by obj.prop1
    2. proto{}, which again contains
        - property, prop2 - obj.prop2
        - proto{}
            * property, prop3 - obj.prop3 ..... and so on
* This is called prototype chain
* Another object with name 'obj2' can point to the prototype which obj pointed to.
* Objects can the share all the prototypes.
* obj.prop2 and obj2.prop2 are similar
```js
var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname
    }
}
var jackie = {
    firstname: 'Jackie',
    lastname: 'Kandi'
}
// Don't do this EVER! for demo purposes only..!!!!
// Causes Performance issue
jackie.__proto__ = person;
console.log(jackie.getFullName());
console.log(jackie.firstname); // First checks in the object and then goes to prototype
var yam = {
    firstname:'Yam'
}
yam.__proto__ = person;
console.log(yam.getFullName());
// Jackie Kandi
// Jackie
// Yam Default
```

### Everything is an object (or primitive):
```js
var a = {};
var b = function() {};
var c = [];
console.log(a.__proto__)            // [object Object]
console.log(b.__proto__)            // function() { [native code] }
console.log(c.__proto__)            //  []
console.log(c.__proto__.__proto__)  // [object Object]
```

### Reflection and Extend:
* Reflection - An object can look at itself, listing and changing its properties and methods.
```js
var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname
    }
}
var jackie = {
    firstname: 'Jackie',
    lastname: 'Kandi'
}
jackie.__proto__ = person;

for (var prop in jackie){
    if(jackie.hasOwnProperty(prop)){
        console.log(prop + ': ' + jackie[prop])
    }
}
// firstname: Jackie
// lastname: Kandi
```
