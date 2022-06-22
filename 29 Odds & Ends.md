### Initialization:
* Large Inittialization
```js
var people = [
    {
        // the 'Yamini' Object
        firstname: 'Yamini',
        lastname: 'Kandi',
        addresses: [
            'Temple Street',
            'Kakinada'
        ]
    },
    {
        // the 'Vamsi' Object
        firstname: 'Vamsi',
        lastname: 'Kandi',
        addresses: [
            'HSR Layout',
            'Bangalore'
        ],
        greet: function(){
            return 'Hello!'
        }
    }
]
```
### typeof, instanceof, and figuring out what something is!
* JavaScript comes with some utilitiesto help us with that, but they aren't perfect.
* typeof - which is an operator that accepts parameter, but its essentially a function returning a string. And tells us what something is.
* instanceof - if we are dealing with object chains, will tell us what something has in its prototype chain.


```js
var a = 3
console.log(typeof a)   // number, we get output in a string format

var b = 'Hello'
console.log(typeof b)   // string

var c = {}
console.log(typeof c)   // object

var d = []
console.log(typeof d)   // object - weird! 
console.log(d.toString())   // empty String
// It tries to convert the content of the array to a string
console.log(Object.prototype.toString())    // [object object]
console.log(Object.prototype.toString.call(d))   // [object Array] better!

function Person(name){
    this.name = name
}

var e = new Person('Yam')
console.log(typeof e)               // object
console.log(e instanceof Person)    // true
// instanceof tells us if any object is down the prototype chain.

console.log(typeof undefined)   // undefined - that makes sense
console.log(typeof null)        // object
// a bug since, like, forever

var f = function() {}
console.log(typeof f)   // function
```

### Strict Mode:
* JavaScript is some what liberal in taking things, etc
* It is also a flexible language, and with flexibility, comes a lack of rules, sometimes.
* But strict mode can help us prevent errors under certain circumstances.
