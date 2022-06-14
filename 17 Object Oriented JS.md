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
* If we have an object named 'obj', it contains
    1. property, prop1 - which can be called by obj.prop1
    2. proto{}, which again contains
        - property, prop2 - obj.prop2
        - proto{}
            * property, prop3 - obj.prop3 ..... and so on
* This is called prototype chain
* Each object can have its own prototype.
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
jackie.__proto__ = person;
document.write(jackie.getFullName() + '<br>');
document.write(jackie.firstname + '<br>'); // First checks in the object and then goes to prototype
var yam = {
    firstname:'Yam'
}
yam.__proto__ = person;
document.write(yam.getFullName());
// Jackie Kandi
// Jackie
// Yam Default
```

### Everything is an object (or primitive):
```js
var a = {};
var b = function() {};
var c = [];
document.write(a.__proto__ + '<br>')            // [object Object]
document.write(b.__proto__ + '<br>')            // function() { [native code] }
document.write(c.__proto__ + '<br>')            //  []
document.write(c.__proto__.__proto__ + '<br>')  // [object Object]
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
        document.write(prop + ': ' + jackie[prop] + '<br>')
    }
}
// firstname: Jackie
// lastname: Kandi
```
