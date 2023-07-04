### Currying:
* It is a technique in functional programming, that transforms the function of multiple arguments into several functions of a single argument in sequence. 
* The translation of function happens something like this,

```js
function simpleFunction(param1, param2, param3, .....) => function 
curriedFunction(param1)(param2)(param3)(....
```

### Why is currying useful in JavaScript?
* It helps us to create a higher-order function
* It reduces the chances of error in our function by dividing it into multiple smaller functions that can handle one responsibility.
* It is very useful in building modular and reusable code
* It helps us to avoid passing the same variable multiple times
* It makes the code more readable

```js
// Example
function calculateVolume(length, breadth, height) {
    return length * breadth * height;
}
console.log(calculateVolume(4, 5, 6));
// Currying Function
function calculateVolume(length) {
	return function (breadth) {
		return function (height) {
			return length * breadth * height;
		}
	}
}
console.log(calculateVolume(4)(5)(6));
```
