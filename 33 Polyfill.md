#### Polyfill:
* Code that adds a feature which the engine may lack.
```js
if (!Object.create) {   // if Object.create doesn't exists 
// if Object.create exists then the whole `if` statement will be skipped
    Object.create = function (o) {
        if (arguments.length > 1) {
            throw new Error('Object.create implementation'
            + ' only accepts the first parameter.')
        }
        function F() {}
        F.prototype = o;    // Prototype gets the function we have passed
        return new F();     // Creates an empty object
    }
}
var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function(){
        return 'Hi ' + this.firstname
    }
}
var yam = Object.create(person)
yam.firstname = 'Yamini'
yam.lastname = 'Kandi'
console.log(yam)
```
