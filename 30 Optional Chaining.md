### Optional Chaining:

The optional chaining ?. syntax has three forms:

1. obj?.prop: returns obj.prop if obj exists, otherwise undefined.
2. obj?.[prop]: returns obj[prop] if obj exists, otherwise undefined.
3. obj.method?.(): calls obj.method() if obj.method exists, otherwise returns undefined.

* As we can see, all of them are straightforward and simple to use. The ?. checks the left part for null/undefined and allows the evaluation to proceed if it’s not so.
* A chain of ?. allows to safely access nested properties.
* Still, we should apply ?. carefully, only where it’s acceptable that the left part doesn’t exist. So that it won’t hide programming errors from us, if they occur.

#### Optional Chaining with expressions:
* You can also use the optional chaining operator with bracket notation, which allows passing an expression as the property name
```js
const nestedProp = obj?.["prop" + "Name"];
```

* This is particularly useful for arrays, since array indices must be accessed with brackets.
```js
function printMagicIndex(arr) {
  console.log(arr?.[42]);
}

printMagicIndex([0, 1, 2, 3, 4, 5]); // undefined
printMagicIndex(); // undefined; if not using ?., this would throw
```

* Optional chaining not valid on the left-hand side of an assignment.
* When using optional chaining with expressions, if the left operand is null or undefined, the expression will not be evaluated.

```js
const potentiallyNullObj = null;
let x = 0;
const prop = potentiallyNullObj?.[x++];
console.log(x); // 0 as x was not incremented
```

* Subsequent property accesses will not be evaluated either.

```js
const potentiallyNullObj = null;
const prop = potentiallyNullObj?.a.b;
// This does not throw, because evaluation has already stopped at
// the first optional chain
```
This is equivalent to:
```js
const potentiallyNullObj = null;
const prop =
  potentiallyNullObj === null || potentiallyNullObj === undefined
    ? undefined
    : potentiallyNullObj.a.b;
```












