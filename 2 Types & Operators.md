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

|Precedence	| Operator type	| Associativity	| Individual operators |
|:--------: | :----------:  | :-----------: | :------------------: |
|19	| Grouping |  n/a	|  ( … )  |
|18	| Member Access |	left-to-right	| … . … |
| |Computed Member Access |	left-to-right	| … [ … ] |
| |new (with argument list)	| n/a	| new … ( … ) |
| |Function Call |	left-to-right	| … ( … ) |
| | Optional chaining	| left-to-right	| ?. |
| 17 |	new (without argument list)	|right-to-left	| new … |
| 16 |	Postfix Increment |	n/a	| … ++ |
| | Postfix Decrement	| n/a | … -- |
| 15 |	Logical NOT (!) |	right-to-left	| ! … |
| |Bitwise NOT (~) | right-to-left |	~ … |
| |Unary plus (+) | right-to-left	|+ … | 
| |Unary negation (-) | right-to-left |	- … |
| |Prefix Increment | right-to-left	| ++ … |
| |Prefix Decrement	 | right-to-left |-- … |
| |typeof |  right-to-left |	typeof… |
| |void	| right-to-left | void… |
| |delete	| right-to-left  | delete…|
| |await	| right-to-left  | await… |
|14	|Exponentiation (**) |	right-to-left	|… ** …|
|13	|Multiplication (*)	|left-to-right	| … * … |
| | Division (/) 	|left-to-right	| 	… / … 	|
| | Remainder (%)	|left-to-right	| … % …
|12 | 	Addition (+)|	left-to-right |	… + … |
| | Subtraction (-)	 |left-to-right| … - … |
|11| Bitwise Left Shift (<<) |	left-to-right	 | … << …|
| | Bitwise Right Shift (>>) |	left-to-right	 |	… >> … |
| |Bitwise Unsigned Right Shift (>>>) |	left-to-right	 |	… >>> … |
|10| Less Than (<)|	left-to-right	|… < … |
| | Less Than Or Equal (<=)| left-to-right | … <= … |
| | Greater Than (>) | left-to-right |	… > … |
| | Greater Than Or Equal (>=) | left-to-right |… >= … |
| | in	| left-to-right | … in … |
| | instanceof | left-to-right | … instanceof … |
| 9	| Equality (==) |	left-to-right |	… == … |
| | Inequality (!=)	 |	left-to-right |	… != … |
| | Strict Equality (===) |	left-to-right |		… === … |
| | Strict Inequality (!==)	 |	left-to-right |	… !== … |
|8|	Bitwise AND (&)	| left-to-right	| … & … | 
|7|	Bitwise XOR (^)	|left-to-right	 | … ^ … |
|6|	Bitwise OR (`|`)	|left-to-right |	… `|` … |
|5|	Logical AND (&&)	|left-to-right |	… && … |
|4|	Logical OR (`||`)	|left-to-right	 | … `||`… |
| | Nullish coalescing operator (??)	|left-to-right|	… ?? … |
|3|	Conditional (ternary) operator	|right-to-left	| … ? … : … |
|2|	Assignment	| right-to-left |	… = … |
| | |  right-to-left  | … += …|
| | |  right-to-left | … -= … |
| | |  right-to-left  | … **= … |
| | |  right-to-left  | … *= … |
| | |  right-to-left  | … /= … |
| | |  right-to-left  | … %= … |
| | |  right-to-left  | … <<= … |
| | |  right-to-left  | … >>= … |
| | |  right-to-left | … >>>= … |
| | |  right-to-left  |… &= … |
| | |  right-to-left  | … ^= … |
| | |  right-to-left  |… |= … |
| | |  right-to-left  |… &&= … |
| | |  right-to-left  |… ||= …|
| | |  right-to-left  |… ??= …|
| |yield  |	right-to-left	| yield … |
| |yield* |  right-to-left |	yield* … |
|1|	Comma / Sequence	| left-to-right |	… , … |