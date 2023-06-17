### Contents:
1. Callbacks
2. Asynchronous
3. Promises
4. Async/Await

#### 1. Call backs:
* A callback is a function passed as an argument to another function.
* It takes 3 arguments - current element, the index and the original array
* When to Use a Callback - In asynchronous functions, where one function has to wait for another function (like waiting for a file to load).

```js
// Creating a function similar to map()

function createdMap(array, callback) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray.push(callback(array[i], i, array))
    }
    return newArray;
}

var numbers = [1, 2, 3, 4, 5];
var squaredNumbers = createdMap(numbers, function(num) {
  return num * num;
});
console.log(squaredNumbers);    // Output: [1, 4, 9, 16, 25]

var squaredN = numbers.map(function(num) {
  return num * num;
});
console.log(squaredN);          // Output: [1, 4, 9, 16, 25]
```

#### 2. Asynchronous:
* "I will finish later!"
* Functions running in parallel with other functions are called asynchronous
* A good example is JavaScript setTimeout()
* Asynchronus programmes are difficult to write and difficult to debug.
* Because of this, most modern asynchronous JavaScript methods don't use callbacks.
* Instead, in JavaScript, asynchronous programming is solved using Promises instead.

#### 3. Promises:

---

"I Promise a Result!"
"Producing code" is code that can take some time
"Consuming code" is code that must wait for the result
A Promise is a JavaScript object that links producing code and consuming code

---


