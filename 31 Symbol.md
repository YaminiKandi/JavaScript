### Symbol:

* symbols are a primitive data type introduced in ECMAScript 6 (ES6).
* A symbol is an immutable, unique value that can be used as an identifier for object properties.
* Symbols are created with Symbol() call with an optional description (name).
* Symbols are always different values, even if they have the same name. 
* If we want same-named symbols to be equal, then we should use the global symbol registry: `Symbol.for(key)`
* It returns (creates if needed) a global symbol with key as the name. Multiple calls of Symbol.for with the same key return exactly the same symbol.

Symbols are created using the `Symbol()` function, which returns a unique symbol value. 
```js
const symbol1 = Symbol();
const symbol2 = Symbol('mySymbol');
console.log(typeof symbol1); // Output: "symbol"
console.log(symbol2.toString()); // Output: "Symbol(mySymbol)"

const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");
// Note that Symbol("foo") does not coerce the string "foo" into a Symbol. 
// It creates a new Symbol each time
console.log(Symbol("foo") === Symbol("foo")); // false
```

Symbols can also be used as property keys in objects:
```js
const myObj = {};
const key1 = Symbol('key1');
const key2 = Symbol('key2');
myObj[key1] = 'Value 1';
myObj[key2] = 'Value 2';
console.log(myObj[key1]); // Output: "Value 1"
console.log(myObj[key2]); // Output: "Value 2"
```

If you really want to create a Symbol wrapper object, you can use the Object() function:
```js
const sym = Symbol("foo");
console.log(typeof sym); // "symbol"
const symObj = Object(sym);
console.log(typeof symObj); // "object"
```

#### Symbol.keyFor: 
* For global symbols, not only `Symbol.for(key)` returns a symbol by name, but there’s a reverse call: `Symbol.keyFor(sym)`, that does the reverse: returns a name by a global symbol.

#### Hidden object properties: 
* If we want to add a property into an object that "belongs" to another script or a library, we can create a symbol and use it as a property key. 
* A symbolic property does not appear in `for..in`, so it won’t be accidentally processed together with other properties.
* There are many system symbols used by JavaScript which are accessible as `Symbol.*`. We can use them to alter some built-in behaviors.
