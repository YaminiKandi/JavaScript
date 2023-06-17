### Contents:
1. Primitive and Non-Primitive Data Types
2. Arrays
    - Declaring and Initialization of Memory
    - Storing values in an array
    - Arguments
    - Array Elements
    - ECMA 2015 [ES5] onwards it supports destructing array
    - Length property
    - Reading Array elements
    - Dynamically creating a DOM Element for Array Elements
    - Adding Elements into an Array
    - Removing Elements from an Array
    - Other properties of an Array (sort, reverse)

## Primitive Data Types:
* The predefined data types provided by JavaScript language are known as primitive data types. 
* Primitive data types are also known as in-built data types.
* There are five types of primitive data types in Javascript.
    1. Number
    2. String
    3. Undefined
    4. Boolean
    5. Null

## Non-Primitive Data Types:
* The data types that are derived from primitive data types of the JavaScript language are known as non-primitive data types. It is also known as derived data types or reference data types.
* They are Mutable. Their structure can change dynamically.
* No fixed range for value. value range will change according to memory available.
* Javascript Non-Primitive types are 
    1. Array 
    2. Object 
    3. Regular Expression 
    4. Map

## Array:
* Arrays are used to reduce overhead and complexity.
* They can reduce overhead by storing values in sequential order and can reduce complexity by storing multiple values under one name.
* They can store any type of value.
* Their size can be changed dynamically.
* They have the behaviour of collections 
    1. stack 
    2. queue
    3. Hash Table[Dictionary Collection]

### Declaring and Initialization of Memory:
* We can declare and initialize memory by using,  
    1. Meta Character 
    2. Array Constructor [Array()]

Note: Constructor is responsible for creating an Array Object.

### Storing values into an Array:
* Values are stored and accessed by using "property".
* Array property is same as Index Number and it is a String type property that maps to Index Number.

Example:
- Index Numbers - 0, 1, 2, 3,...
- Array Property - "0", "1", "2", "3",...

```js
function f1(){
    var  values = [10,"Yamini",true];
    console.log(values["1"]);
}
f1()
```
```js
function f1(){
    var  values = [10,"Yamini",true];
    values["3"] = "Array"
    console.log(values["3"]);
}
f1()
```
### Arguments:
```js
function greet(firstname, lastname) {
    console.log(firstname)
    console.log(lastname)
    console.log('----------')
}
greet();
greet('john');
```
```
Output:
undefined
undefined
----------
john
undefined
----------
```
```js
function greet(firstname, lastname, language) {
    language = language || 'en';
    console.log(firstname)
    console.log(lastname)
    console.log(language)
    console.log('----------')
}
greet('yam','kandi');
greet('yam','kandi','tel');
```
```
Output:
yam
kandi
en
----------
yam
kandi
tel
----------
```
```js
function greet(firstname, lastname, language) {
    language = language || 'en';
    console.log(firstname)
    console.log(lastname)
    console.log(language)
    console.log(arguments)
    console.log('----------')
}
greet();
greet('yam','kandi');
```
```
Output:
undefined
undefined
en
>Arguments[]
----------
yam
kandi
en
>Arguments['yam','kandi']
----------
```
```js
function greet(firstname, lastname, language) {
    language = language || 'en';
    if(arguments.length === 0){
        console.log('Missing Parameters!')
        return;
    }
    console.log(firstname)
    console.log(lastname);
    console.log(language);
    console.log(arguments);
    console.log('----------')
}
greet();
greet('yam','kandi');
```
```
Missing Parameters!
yam
kandi
en
Arguments(2)
----------
```
```js
function greet(firstname, lastname) {
    console.log(firstname)
    console.log(lastname)
    console.log('arg 0: ' + arguments[0]);
}
greet('yam','kandi');
```
```
Output:
yam
kandi
arg 0: yam
```

### Array Elements:
* Array can Handle any type of Element.
* It can have a Primitive or Non-Primitive type.
* It can also have a function.

```js
function f1(){
    var product = ["JBL Speaker",4500.55,true,["Kakinada","Vijayawada"],function(){
        document.write("Welcome to Arrays in Javascript")
    }];
    document.write(`
    Name:${product[0]}<br>
    Price:${product[1]}<br>
    Stock:${product[2]}<br>
    ShippedTo:${product[3][1]}<br>
    `);
    product[4](); // () - function call
}
f1()
```

### ECMA2015 [ES5] onwards it supports destructing array:
* It is a Technique used to extract array Elements and store in Individual References.

```js
function f1(){
    var product = ["JBL Speaker",4500.55,true,["hyderabad","vijayawada"],function(){
        document.write("Welcome to Arrays in Javascript")
    }];
    var [Name,price,stock,shippedTo,Hello] = product;

    document.write(`
    Name : ${Name} <br>
    Price : ${price}<br>
    ShippedTo : ${shippedTo} <br>
    Stock : ${stock} <br>
    `)
    Hello();
    product[4]();
}
f1()
```
* Array object provides set of properties and methods to handle Interactions Dynamically.

### Length property:
* It returns the total count of Elements in an Array.
```js
function f1(){
    var product = ["JBL Speaker",4500.55,true,["hyderabad","vijayawada"]];
    var len = product.length;
    console.log(`Length is ${len}`)
}
f1()
```

### Reading Array Elements:
1. Loops 
2. Iterators
3. map()
4. toString()
5. join()

#### 1. Loops:
* Loops contains Initialization, condition and Counter.
* we can create loops with
    - for
    - while 
    - do while
```js
function f1(){
    var categories = ["All","Electronics","Fashion","Footwear"];
    var len = categories.length;
    for(var i=0; i<len; i++){
    console.log( categories[i])
    }
}
f1()
```

#### 2. Iterators:
* Iterators doesn't require Initialization, condition and Counter
* It is a software design pattern used to read Elements from a collection in sequential order.
    - for..in
    - for..of 

##### a. for..in:
* Reads all properties and values.
* Recommended: In Arrays, better dont use `for...in` instead use the standard for loop `for (var i=0; i<arr.length; i++){}` as arrays are objects.

```js
function f1(){
    var categories = ["All","Electronics","Fashion","Footwear"];
    for(var property in categories){
    console.log(`[${property}] ${categories[property]}`)
    }
}
f1()
Output:
[0] All
[1] Electronics
[2] Fashion
[3] Footwear
```
```js
var arr = ['John', 'Jane', 'Jim'];
for (var prop in arr){
    console.log(prop + ': ' + arr[prop]);
}
Output:
0: John
1: Jane
2: Jim
// Actually, (0,1,2) is actually the name i.e.,
// the property name on the name value pair
// this is why we use the brackets to grab it.
```
```js
Array.prototype.myCustomFeature = 'cool!';
var arr = ['John', 'Jane', 'Jim'];
for (var prop in arr){
    console.log(prop + ': ' + arr[prop]);
}
Output:
0: John
1: Jane
2: Jim
myCustomFeature: cool!
```

##### b. for..of():
* Reading values only.
```js
function f1(){
    var categories = ["All","Electronics","Fashion","Footwear"];
    for(var item of categories){
        console.log(item)
    }
}
f1()
```

#### 3. map():
* `map()` method allows you to create a new array by applying a function to each element of an existing array.
* The provided function takes three arguments:
    - currentValue: The current element being processed in the array.
    - index (optional): The index of the current element being processed.
    - array (optional): The original array that map() was called upon.
   
```js
function f1(){
    var categories = ["All","Electronics","Fashion","Footwear","MensWear"];
    categories.map(function(value){
    console.log(value)
    })
}
f1()
```
#### 4. toString():
* `toString()` method is used to convert an array to a string representation. 
* It returns a string where the array elements are converted to strings and joined together with commas as separators.

```js
const fruits = ['apple', 'banana', 'orange'];
const fruitsString = fruits.toString();
console.log(fruitsString); // Output: "apple,banana,orange"
```

```js
function f1(){
    var categories = ["All","Electronics","Fashion","Footwear","MensWear"];
    var str = categories.toString();
    var result = str.split(",")
    for(var res of result){
    console.log(res)
    }
}
f1()
```

#### 5. join():
* `join()` method is used to join the elements of an array into a string. 
* It concatenates the elements together using a specified separator and returns the resulting string.

```js
const fruits = ['apple', 'banana', 'orange'];
const fruitsString1 = fruits.join();
console.log(fruitsString1); // Output: "apple,banana,orange"
const fruitsString2 = fruits.join(' | ');
console.log(fruitsString2); // Output: "apple | banana | orange"
```

```js
function f1(){
    var categories = ["All","Electronics","Fashion","Footwear","MensWear"];
    var res = categories.join("-->");
    console.log(res)
}
f1()
```

### Dynamically creating a DOM Element for Array Elements:
We can create any HTML DOM Element by using the method 
   * document.createElement()
   
We can add any HTML Element into DOM by using the methods,
   * append()  [as Suffix]
   * prepend()  [as prefix]
   * appendChild() [as child Element of any parent]
   * appendTo() [To any Specific Element] 

#### 1. append() & prepend():
```js
function bodyLoad(){
    var u =   document.createElement("u");  // underline element
    u.innerHTML = "Append Content";
    document.getElementById("div").append(u);

    var mark = document.createElement("mark");  // mark element
    mark.innerHTML = "Prepend Content";
    document.getElementById("div").prepend(mark);
}
```
```html
<body onload="bodyLoad()">
    <div id="div">This is a Division</div>
</body>
```

#### 2. appendChild():
```js
var Categories = ["All","Electronics","Footwear","Fashion"];
function bodyLoad(){
    var lstCategories = document.getElementById("lstCategories");
for(var item of Categories){
    var li =   document.createElement("li");
    li.innerHTML = item;
    lstCategories.appendChild(li);
}
}
```
```html
<body onload="bodyLoad()">
    <ol id="lstCategories">
    </ol>
</body>
```
```js
var Categories = ["All","Electronics","Footwear","Fashion"];
function bodyLoad(){
    var categoriesMenu =  document.getElementById("categoriesMenu");
for(var item of Categories){
    var option = document.createElement("option");
    option.text = item;
    option.value = item;
    categoriesMenu.appendChild(option);
}
}
```
```html
<body onload="bodyLoad()">
    <select id="categoriesMenu">
    </select>
</body>
```

### Adding Elements into an Array:
1. push() 
2. unshift() 
3. splice()

#### 1. push():
* It adds the New Elements at the Bottom or end.
```js
function f1(){
    var  categories = ["All","Electronics","Footwear","Fashion"];
    categories.push("Kidswear");
    console.log(categories)
}
f1()
```
#### 2. unshift():
* It adds the new Elements at the top or start.
```js
function f1(){
    var  categories = ["All","Electronics","Footwear","Fashion"];
    categories.unshift("Kidswear");
    console.log(categories)
}
f1()
```
#### 3. splice():
* It adds the new Elements at specific location

Syntax: `arrayName.splice(startIndex,deleteCount,"newElement1","newElement2");`.
```js
function f1(){
    var  categories = ["All","Electronics","Footwear","Fashion"];
    categories.splice(3,0,"KidsWear");
    console.log(categories)
}
f1()
```

### Removing Elements from an Array:
1. pop()
2. shift()
3. splice()

#### 1. pop():
* It removes the last Element of an Array
```js
function f1(){
    var  categories = ["All","Electronics","Footwear","Fashion"];
    categories.pop();
    console.log(categories)
}
f1()
```
#### 2. shift():
* It removes the first Element of an Array.
```js
function f1(){
    var  categories = ["All","Electronics","Footwear","Fashion"];
    categories.shift();
    console.log(categories)
}
f1()
```
#### 3.splice():
* It removes and returns collection of items between specific index.
```js
function f1(){
    var  categories = ["All","Electronics","Footwear","Fashion","Kidswear","Menswear"];
    categories.splice(2,3);
    console.log(categories)
}
f1()
```
### Other Properties of Array:

#### 1. sort():
* The sort() method sorts an array alphabetically
* In sort(), numbers will not be sorted properly as it considers only first digit.
```js
function f1(){
    var  categories = ["Menswear","Footwear","Electronics","All","Fashion","Kidswear"];
    categories.sort();
    console.log(categories)
}
f1()
```
```js
function f1(){
    var  categories = ["Menswear","Footwear","Electronics","All","Fashion","Kidswear",10,3,13,2,11,0,20];
    categories.sort(); 
    document.write(categories)
}
f1()
```

#### 2. reverse():
* It reverses an array.
```js
function f1(){
    var  categories = ["Menswear","Footwear","Electronics","All","Fashion","Kidswear"];
    categories.reverse();
    document.write(categories)
}
f1()
```

#### 3. at():
* Takes an integer and returns the item at that index

#### 4. concat():
* Used to merge 2 or more arrays
* Doesnot change the existing arrays, but creates a new array

Parameters - valueN (Optional)
* Arrays and/or values to concatenate into a nean array to another location in the same array and returns it without modifying its length.w*  array. 
* If all valueN parameters are omitted, concat returns a shallow copy of the existing array on which it is called.

```js
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3);
// ["a", "b", "c", "d", "e", "f"]
```

#### 5. copyWithin():
* Shallow copies part of an array to another location in the same array and returns it without modifying its length.
* It also modifies the original array

Syntax:
```js
copyWithin(target, start)
copyWithin(target, start, end)
```

Parameters:
1. target: Zero-based index at which to copy the sequence to. If negative, target will be counted from the end. If target is at or greater than arr.length, nothing will be copied. If target is positioned after start, the copied sequence will be trimmed to fit arr.length.
2. start: Zero-based index at which to start copying elements from. If negative, start will be counted from the end. If start is omitted, copyWithin will copy from index 0.
3. end: Zero-based index at which to end copying elements from. copyWithin copies up to but not including end. If negative, end will be counted from the end. If end is omitted, copyWithin will copy until the last index (default to arr.length).

Return: A modified array

#### 6. entries():
* The `entries()` method returns a new array iterator object that contains the key/value pairs for each index in the array.

Return: A new iterable iterator object.

```js
const array1 = ['a', 'b', 'c'];
const iterator1 = array1.entries();
console.log(iterator1.next().value);    // Array [0, "a"]
console.log(iterator1.next().value);    // Array [1, "b"]
console.log(iterator1.next().value);    // Array [2, "c"]
console.log(iterator1.next().value);    // undefined
```

#### 7. every():
* The `every()` method tests whether all elements in the array pass the test implemented by the provided function.
* It returns a Boolean value.

Parameters:
1. callbackFn: A function to test for each element, taking three arguments: element, index(optional), array(optional)
2. thisArg(optional): Return: true if the callbackFn function returns a truthy value for every array element. Otherwise, false

```js
const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold));    // true
```
