### Dynamic Typing:
* You Don't tell the engine what type of datavariable holds, it figures it out while our code is running.
* Variables can hold different types of values because it's all figured out during execution.  

Static Typing:
```js
bool isNew 'hello'; // an error
```
Dynamic Typing:
```js
var isNew = true; // no errors
isNew = 'yup!'; 
isNew 1;
```

### Primitive Types:
* A type of data that represents a single value. That is not an object.
* There are 6 primitive types in Javascript.

|Primitive type | Description |
|:------------: | :---------: |
|undefined | It represents lack of existence (we shouldn't set a variable to this) |
|null | It also represents lack of existence (we can set a variable to this) |
|boolean | true or false |
|number | Only floating point number (there's always some decimals) |
|string | A sequence of characters (both '' and "" can be used) |
|symbol | It is used in ES6 |

### Operators:
* A special function that is syntactically (written) differently. 
* Generally, operators take two parameters and return one result.

|Operator |	Description |
|:------: | :---------: |
|+  |	Addition  |
|-  |	Subtraction | 
|*  |	Multiplication  |
|** |	Exponentiation (ES2016)  |
|/  |	Division  |
|%  |	Modulus (Division Remainder)
|++ |	Increment |
|-- |	Decrement |

#### Assignment Operators:

|Operator	| Example	| Same As |
|:------:   | :-----:   | :-----: |
|= | x = y	| x = y |
|+=	| x += y  |	x = x + y |
|-=	| x -= y  | x = x - y |
|*=	| x *= y  |	x = x * y |
|/=	| x /= y  |	x = x / y |
|%=	| x %= y  | x = x % y |
|**= |	x **= y	| x = x ** y|

```js
var a = 3 + 4;
console.log(a);
```
Output: 7

```js
var a = 3 > 4;
console.log(a);
```
Output: false 

### Operator precedence and Associativity:
#### Operator precedence:
* Which operator function gets called first. 
* Functions are called in order of precedence (HIGHER precedence wins).
#### Operator Associativity:
* What order operator functions gets called in. (left to right or right to left)
* when functions have the same precedence.
