### ECMA SCRIPT 6 (ES6) and Classes:
#### ES6:
* New Concept.
* Its just another way to create objects, and to set the prototype.
#### Classes:
* Classes in other programming languages are extraordinarily popular.
* They're a way of defining an object, defining whats its methods and properties should be.
* JavaScript doesn't have classes.
* However in the next version it will, but in a different way.
* A JavaScript Class defines an object
    - It will have a constructor (which acts somewhat like the constructor functions that we've seen, in that we can preset the values)
    - It can also have methods like greet in the following example

```js
class Person {
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    greet(){
        return 'Hi ' + this.firstname;
    }
}
var yam = new Person('Yamini', 'Kandi');
document.write(yam.firstname)
```
* In other programming languages, class is not an object, its just a definition, its like a template.
* It tells us how object looks like

