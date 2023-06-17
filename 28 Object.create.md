#### Object.create and pure Prototypal Inheritance
```js
var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function(){
        return 'Hi ' + this.firstname
    }
}
var yam = Object.create(person)
console.log(yam)
Output:
{}
[[Prototype]]: Object
```
* So `Object.create` creates an empty object with its prototype pointing at whatever we passed into `Object.create` 

```js
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
console.log(yam.greet())
console.log(person.greet())

Output:
Object
firstname: "Yamini"
lastname: "Kandi"
[[Prototype]]: Object
Hi Yamini
Hi Default
```
* So We can add new methods and properties to my base object and all my created objects using `Object.create` will suddenly get them
* This is pure prototypal inheritance and it drives some people crazy cuz its so simple.(Even in real world scenarios)
* We dont have any confusion its very straight forward and its powerful because we can mutate, we can change the prototype along the way.

------- 

* This concept is a newer thing that modern browsers, that's javascript engines and more newer browsers are implementing.
* But what if we are involved in a project that requires us to support users that are on older browsers, or maybe an older environment where the javascript engine doesn't support Object.create, it doesn't have it.
* Well, We can use `Polyfill`.
* For Polyfill refer [notes](./29%20Polyfill.md)

-------
