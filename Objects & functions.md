### Objects and the dot:
* Objects are collection of name-value pairs and those values can be other collection of name-value pairs.
* object can have properties and methods.
    1. primitive property (Boolean, number, string, etc...)
    2. object property - an object could have another object connected to it as a child
    3. function method
```js
var person = new Object();
person["firstname"] = "Yamini";
person["lastname"] = "Kandi";
var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);
```
```
Output:
>Object
Yamini
```
* Using dot operator
```js
var person = new Object();
person["firstname"] = "Yamini";
person["lastname"] = "Kandi";
var firstNameProperty = "firstname";
console.log(person.firstname); // Yamini
console.log(person.lastname); // Kandi
```

* Object inside an object
```js
var person = new Object();
person["firstname"] = "Yamini";
person["lastname"] = "kandi";

person.address = new Object();
person.address.street = "RR Nagar";
person.address.city = "Kakinada";
person.address.state = "Andhra Pradesh";

console.log(person.address.street); //RR Nagar
console.log(person.address.city); //Kakinada
console.log(person.address.state); //Andhra Pradesh
console.log(person["address"]["state"]); //Andhra Pradesh
```

### Object literals:
```js
var person = new Object();
var person = {};
```
Both are same
```js
var person = {};
console.log(person); // {}
```
```js
var person = { firstname:'Yamini', lastname:'Kandi'};
console.log(person.firstname); //Yamini
```
```js
var person = { 
    firstname:'Yamini', 
    lastname:'Kandi',
    address: {
        street: 'RR Nagar',
        city: 'Kakinada',
        state: 'Andhra Pradesh'
    }
};
console.log(person.address.state); //Andhra Pradesh
```
* passing the object to function
```js
var yamini = { 
    firstname:'Yamini', 
    lastname:'Kandi',
    address: {
        street: 'RR Nagar',
        city: 'Kakinada',
        state: 'Andhra Pradesh'
    }
};
function greet(person) {
    console.log('Hi ' + person.firstname + '!');
}
greet(yamini);
// Output: Hi Yamini!
```
* We could call the greet function and create an object on the fly.
```js
greet({
    firstname:'Vamsi',
    lastname:'Kandi'
});
yamini.address2: { 
    street: 'Srinagar'
}
console.log(yamini.address2.street); // Srinagar
```

### Faking Namespaces:
##### Namespace:
* A container for variables and functions.
* Typically trying to keep variables and functions with the same name separate.
```js
var greet = 'Hello!';
var greet = 'Hola!';
console.log(greet); // Hola!
```
Here the two variables are overwriting or colliding eachother.
```js
var greet;
var english = {};
var spanish = {};
english.greet = 'Hello!';
spanish.greet = 'Hola!';
console.log(english.greet); // Hello!
console.log(english); // {greet: 'Hello!'}
```
```js
var greet;
var english = {};
var spanish = {};
english.greetings.greet = 'Hello!';
spanish.greet = 'Hola!';
console.log(english.greetings.greet);// uncaught error undefined
```
resolving the above uncaught error
```js
var greet;
var english = {};
var spanish = {};
english.greetings = {};
english.greetings.greet = 'Hello!';
spanish.greet = 'Hola!';
console.log(english.greet); // undefined
console.log(english.greetings.greet); // Hello!
```
```js
var greet;
var english = {
    greetings: {
        greet: 'Hello!'
    }
};
var spanish = {};
spanish.greet = 'Hola!';
console.log(english.greet); // undefined
console.log(english.greetings.greet); // Hello!
```

### JSON:
JSON - JavaScript Object Notation
* JSON is technically a subset of the object literal syntax.(Meaning - anything that is JSON valid is also valid JavaScript object literal syntax)
* So JSON has stricter rules about what it can be.
* JSON, isn't really a part of JavaScript but its so easy for JavaScript what JSON is, JavaScript come with some built-in functionality to transfer between the two. 
* So, for any object we can do JSON.
* JSON.stringify convert the object to a JSON string.

```js
var objectLiteral={
    firstname:'Mary',
    isAProgrammer:true
}
console.log(JSON.stringify(objectLiteral));
var jsonValue = JSON.parse('{ "firstname" : "Mary", "isAProgrammer" : true }');
console.log(jsonValue);
```
```
Output:
{"firstname":"Mary","isAProgrammer":true}
Object{firstname: 'Mary', isAProgrammer: true}
```
Here, we are converting an object into an JSON string and then converting that JSON string again to an object.

### Functions are Objects:
#### First Class Functions:
Everything you can do with other types, you can do with Functions
Assign them to variables,pass them around, create them on the fly.
function is a special type of object because it has all the features of a normal object and has some other special properties
We can attach methods and properties to a function because it's an object.
A function can be attached to 
* primitive (name-value)
* Object
* other functions
* name of the function (optional, can be anonymous)
* Code (the function is an object with other properties and the code we write is just one of those properties that we're adding onto it. The special with this property is "INVOCABLE". This is where exceution and running code happens.)
```js
function greet(){
    console.log('hi');
}
greet.language='english';
console.log(greet.language); //english
```
The above function:
* It has a name called greet
* It has a code property `console.log()` and Invocable
#### In JavaScript, Functions are Objects.
