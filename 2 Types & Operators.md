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
    1. Arithematic Operators
    2. Assignment Operators
    3. Comparision Operators
    4. Logical Operators
    5. Conditional Operators (Ternary Operators)

#### 1. Arithematic Operators:
|Operator |	Description |
|:------: | :---------: |
|+  |	Addition  |
|-  |	Subtraction | 
|*  |	Multiplication  |
|** |	Exponentiation (ES2016) or Math.pow(2,3) = 8 |
|/  |	Division  |
|%  |	Modulus (Division Remainder) |
|++ |	Increment |
|-- |	Decrement |
##### Example:
```js
var a = 3 + 4;
console.log(a); // 7
```
#### 2. Assignment Operators:
|Operator	| Example	| Same As | 
|:------:   | :-----:   | :-----: |
|= | x = y	| x = y |
|+=	| x += y  |	x = x + y |
|-=	| x -= y  | x = x - y |
|*=	| x *= y  |	x = x * y |
|/=	| x /= y  |	x = x / y |
|%=	| x %= y  | x = x % y |
|**= |	x **= y	| x = x ** y|
##### Example:
```js
var a = 3;
var b = 4;
document.write(a+=b); // 7
```
#### 3. Comparision Operators:
|Operator | Description |
|:------: | :---------: |
|== | Equal |
|!= | Not Equal |
|=== | Strict Equal |
|!=== | Strict Not Equal |
| > | Greaterthan |
| < | Lessthan |
| >= | Greaterthan or equal |
| <= | Lessthan or equal |

```js
function f1() {
    var a = 20;
    var b = '20';
    if(a===b){
        document.write(true);
    }else{
        document.write(false);
    }
}
f1()
```
```js
var a = 3 > 4;
console.log(a); // false
```

#### 4. Logical Operators:
|Operator | Description |
|:------: | :---------: |
| && | Logical And |
| &#124; &#124; | Logical Or |
| ! | Logical Not Equal |

##### Syntax:
Exp1 && Exp2 = true when both expressions evaluates true. <br>
Exp1 || Exp2 = true when only one expression evaluate TRUE.

```js
var Users = [
    {
        UserName : "john",
        UserPassword : "john123"
    },
    {
        UserName : "david",
        UserPassword : "david123"
    }
]
function loginClick(){
    var name = document.getElementById("txtName").value;
    var password = document.getElementById("txtPassword").value;
    var msg = document.getElementById("msg");

    var searchedUser = Users.find(function(user){
            return user.UserName==name && user.UserPassword==password
    })
    if(name = searchedUser.UserName && password== searchedUser.UserPassword){
            document.write("Login Success")
    }
}
```
```html
<body>
    <fieldset>
        <legend>Enter Log-In Details</legend>
        <dl>
            <dt>Enter Your Name</dt>
            <dd>
                <input type="text" id="txtName"/>
            </dd>
            <dt>Enter Your Password</dt>
            <dd>
                <input type="text" id="txtPassword"/>
            </dd>
        </dl>
        <button type="button" onclick="loginClick()">Log-In</button>
    </fieldset>
    <h1 id="msg"></h1>
</body>
```

### 5. Ternary (?) (Conditional) Operator:
* It defines statements to execute on Condition true and false 
* It is Decision Making Operator.

Syntax: `(condition)?"statement_if_true":"statement_if_false";`

```js
function f1(){
    var product = {
        Name : "LG Tv",
        Price : 55000.55,
        Stock : false
    }
    document.write(`
    Name : ${product.Name} <br>
    Price : ${product.Price} <br>
    Stock : ${(product.Stock==true)?"In Stock":"Out Of Stock"}
    `)
}
f1()
```

## Delete:
* It is used to delete any property of an Object.
* You can delete only the properties of custom Object[user defined]
* You can't delete the properties of built-in object,as they are marked as read-only.
Ex: Date, Array, Map, Math, etc...

Syntax: `delete object.property`

```js
function f1(){
    var product = {
        Name : "LG Tv",
        Price : 55000.55,
        Stock : false
    }
    delete product.price;

    if(product.price==undefined){
        document.write(`
    Name : ${product.Name} <br>
    Stock : ${(product.Stock==true)?"In Stock":"Out Of Stock"}
    `)
    }
    else{
        document.write(`
    Name : ${product.Name} <br>
    Price : ${product.Price} <br>
    Stock : ${(product.Stock==true)?"In Stock":"Out Of Stock"}
    `)
    }
}
f1()
```

## type of:
* It returns the data type of property of an object.

```js
function f1(){
    var product = {
        Name : "LG Tv",
        Price : 55000.55,
        Stock : false
    }
    document.write(`
    Name is ${typeof product.Name}<br>
    Price is ${typeof product.Price} <br>
    Stock is ${typeof product.Stock}
    `)
}
f1()
```

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

Assignment:
```js
var a = 2, b = 3, c = 4;
a = b = c;
console.log(a);
console.log(b);
console.log(c);
```
```
Output:
4
4
4
```
```js
var a = 3 + 4 * 5; 
var b = (3 + 4) * 5; // (..) indicates Grouping (comes 1st)
console.log(a);
console.log(b);
```
```
Output:
23
35
```

### Coercion:
* Converting a value from one type to another.
* This happens quite often in JavaScript because it's dynamically typed.
```js
var a = 1 + 2; //3
var b = 'Hello' + ' World'; //concatenate the strings - Hello World
var c = '1' + '2'; //12
var d = 1 + '2'; //12 
```
* In d, the 1st parameter was coerced by the javascript engine into a string.
* But in computer memory number 1 and string 1 don't look anything alike.
* when we call a + operator, and we gave a number and a string then the javascript engine going to make a choice to try to coerce that number into a string.

```js
var a = 1, b = '2';
console.log(a + b); // results 12
```

### Comparision Operators:
```js
var a = (1 < 2 < 3); //true
var b = (3 < 2 < 1); //true
```
Variable b:
* In var b, '<' operator associativity is from left to right. 
* (3 < 2) implies false 
* (false < 1) implies (0 < 1) == true
* we can check them in console
```
Number(false) == 0
Number(true) == 1
Number(undefined) == NaN (Not a Number)
Number(null) == 0
```
Variable a:
* (1 < 2 < 3) == (true < 3) == (1 < 3) == true

##### Using equality(==) operator causes strange actions
```js
3 == 3 // true
3 == '3' // true
false == 0 // true

var a = false; //undefined
a == 0; // true

null == 0 //true
null < 1; // true
"" == 0; //true
"" == false; //true
```
##### Strict Equality(===) doesn't allow coercion:
* Using this operator we can prevent some odd potential errors in our code.
```js
3 === 3; //true
3 === "3"; //false
```
```js
var a = 0;
var b = false;
if (a == b) {
    console.log('They are equal!');
}
else {
    console.log('Nope, Not equal.');
}
```
Output:
They are equal!
```js
var a = 0;
var b = false;
if (a == b) {
    console.log('They are equal!');
}
else {
    console.log('Nope, Not equal.');
}
```
Output:
Nope, Not equal.
#### Note: Better to use Strict Equality

### Existence and Booleans:
```js
Boolean(undefined); //false
Boolean(null); //false
Boolean(""); //false
Boolean(0); //false
```
* These things that imply the lack of existence, they convert to false.
* we can use this for our advantage.
```js
var a;
if (a) {
    console.log('Something is there!');
}
else{
    console.log('false');
}
```
Output: false
```js
var a;
a = 'hi';
if (a) {
    console.log('Something is there!');
}
else{
    console.log('false');
}
```
Output: Something is there!
```js
var a;
a = 0;
if (a) {
    console.log('Something is there!');
}
else{
    console.log('false');
}
```
Output: false
```js
var a;
a = 0;
if (a || a === 0) {
    console.log('Something is there!');
}
else{
    console.log('false');
}
```
Output: Something is there!
* (a || a === 0), checking for precedence Strict equality have a higher precedence value than logical OR and it will execute first. 
* (a || a === 0) : (a || true) : (false || true) : (true)

### Default Values:
```js
function greet(name) {
    console.log('Hello ' + name);
}
greet('yamini');
```
Output:
Hello yamini
```js
function greet(name) {
    console.log('Hello ' + name);
}
greet();
```
Output:
Hello undefined
* Here JavaScript engine coerced, the undefined primitive type to the string undefined.
* This is not ideal behaviour.

### What if we want a default value for this parameter?
```js
//Operators are functions that return value
true || false // true 
undefined || "Hello" // "Hello" 
null || "Hello" // "Hello"
"" || "Hello" // "Hello"
Boolean("Hello") // true
"hi" || "hello" // "hi" (1st one)
0 || 1 // 1
```
```js
function greet(name) {
    name = name || 'Yamini'; // precedence of // is more than =
    console.log('Hello ' + name);
}
greet();
```
Output: 
Hello Yamini
```js
function greet(name) {
    name = name || 'Yamini'; // Here Yamini is the default value
    console.log('Hello ' + name);
}
greet("World");
greet();
```
Output:
Hello World
Hello Yamini

### Framework aside: Default Values
```html
<!-- index.html -->
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <script src="lib1.js"></script>
        <script src="lib2.js"></script>
        <script src="sun.js"></script>
    </body>
</html>
```
```js
// lib1.js
var libraryName = "Lib1";
// lib2.js
var libraryName = "Lib2";
// sun.js
console.log(libraryName);
```
Output: Lib2
```js
// lib1.js
var libraryName = "Lib1";
// lib2.js
var libraryName = window.libraryName || "Lib2";
// sun.js
console.log(libraryName);
```
Output: Lib1