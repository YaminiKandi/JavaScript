## Functions in JavaScript:
* A JavaScript function is a block of code designed to perform a particular task and is executed when "something" invokes it (calls it).
* It is defined with the function keyword, followed by a name, followed by parentheses ().
* Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

### Function Expressions:
A JavaScript function can also be defined using an expression.
A function expression can be stored in a variable and after storing, the variable can be used as a function.
```html
<!DOCTYPE html>
<html>
    <head>
        <title>JavaScript Functions</title>
    </head>
    <body>   
        <h2>JavaScript Functions</h2>
        <p>A function can be stored in a variable:</p>
        <h4 id="demo"></h4>
        <h4 id="d1"></h4>
        <script>
            const x = function (a, b) {return a * b};
            document.getElementById("demo").innerHTML = x;
            document.getElementById("d1").innerHTML = x(30, 20);
        </script>
    </body>
</html>
```
##### Note:
* The function above is actually an anonymous function (a function without a name).
* Functions stored in variables do not need function names. They are always invoked (called) using the variable name.
* The function above ends with a semicolon because it is a part of an executable statement.

### Function Constructor:
* Functions can also be defined with a built-in JavaScript function constructor called Function().
```html
<body>
    <h2>JavaScript Functions</h2>
    <p>JavaScript has an built-in function constructor.</p>
    <p id="demo"></p>
    <script>
        const myFunction = new Function("a", "b", "return a * b");
        document.getElementById("demo").innerHTML = myFunction(4, 3);
    </script>
</body>
```
Note: We actually don't have to use the function constructor. The example above is the same as writing:
```js
const myFunction = function (a, b) {return a * b}
document.getElementById("demo").innerHTML = myFunction(4, 3);
```

### Types of Functions:
1.Function without parametres 
2.Function with parametres
3.Function with returntype

#### 1. Function without parametres:
##### document.write():
```js
<script>
    function demo(){
        var  x = 100;
        var  y = 200;
        var  z = x+y;
        document.write(z)
    }
    demo();
</script>
```
##### innerHTML:
```html
<body>
    <h1 id="txt"></h1>
    <script>
        function demo(){
            var  x = 200;
            var  y = 200;
            var  z = x+y;
            document.getElementById("txt").innerHTML = z;
        }
        demo();
    </script>    
</body>

```
##### console.log():
```js
<script>
    function demo(){
        var  x = 200;
        var  y = 300;
        var  z = x+y;
        console.log(z)
    }
    demo();
</script>
```
##### window.alert():
```js
<script>
    function demo(){
        var  x = 200;
        var  y = 300;
        var  z = x+y;
        window.alert(z)
    }
    demo();
</script>
```

#### 2. Function with parametres:
```html
<!DOCTYPE html>
<html>
    <head>
        <title>function with parametres</title>
    </head>
    <body>
        <h1 id="res"></h1>
        <script>
            function demo(a,b){
                var c = a+b;
                document.getElementById("res").innerHTML = c;
            }
            demo(10,20);
        </script>
    </body>
</html>
```

#### 3. Function with Return type:
```html
<!DOCTYPE html>
<html>
    <head>
        <title>function with return type</title>
    </head>
    <body>
        <h1 id="res"></h1>
        <script>
            function demo(a,b){
                var c = a+b;
                return c;
            }
            document.getElementById("res").innerHTML = demo(100,200);
        </script>
    </body>
</html>
```

### Self-Invoking Functions
* Function expressions can be made "self-invoking".
* A self-invoking expression is invoked (started) automatically, without being called.
* Function expressions will execute automatically if the expression is followed by ().
* You cannot self-invoke a function declaration.
* You have to add parentheses around the function to indicate that it is a function expression:

```html
<body>
    <h3>Functions can be invoked automatically without being called:</h3>
    <p id="demo"></p>
    <script>
        (function () {
        document.getElementById("demo").innerHTML = "Hello! I called myself";
        })();
    </script>
</body>
```
```js
var a = 4 + 7 * 5;
console.log(a);
```
Output: 39


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
|4|	Logical OR (`||`)	|left-to-right	 | … `||`
 … |
| | Nullish coalescing operator (??)	|left-to-right|	… ?? … |
|3|	Conditional (ternary) operator	|right-to-left	| … ? … : … |
|2|	Assignment	| right-to-left |	… = … |
… += …
… -= …
… **= …
… *= …
… /= …
… %= …
… <<= …
… >>= …
… >>>= …
… &= …
… ^= …
… |= …
… &&= …
… ||= …
… ??= …
yield	right-to-left	yield …
yield*	yield* …
|1|	Comma / Sequence	| left-to-right |	… , … |