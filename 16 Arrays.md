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

#### 1. at():
* Takes an integer and returns the item at that index

#### 2. concat():
* Used to merge 2 or more arrays
* Doesnot change the existing arrays, but creates a new array

**Parameters** - valueN (Optional)
* Arrays and/or values to concatenate into a nean array to another location in the same array and returns it without modifying its length.w*  array. 
* If all valueN parameters are omitted, concat returns a shallow copy of the existing array on which it is called.

```js
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3);
// ["a", "b", "c", "d", "e", "f"]
```

#### 3. copyWithin():
* Shallow copies part of an array to another location in the same array and returns it without modifying its length.
* It also modifies the original array

Syntax:
```js
copyWithin(target, start)
copyWithin(target, start, end)
```

**Parameters**:
1. target: Zero-based index at which to copy the sequence to. If negative, target will be counted from the end. If target is at or greater than arr.length, nothing will be copied. If target is positioned after start, the copied sequence will be trimmed to fit arr.length.
2. start: Zero-based index at which to start copying elements from. If negative, start will be counted from the end. If start is omitted, copyWithin will copy from index 0.
3. end: Zero-based index at which to end copying elements from. copyWithin copies up to but not including end. If negative, end will be counted from the end. If end is omitted, copyWithin will copy until the last index (default to arr.length).

**Return**: A modified array

#### 4. entries():
* The `entries()` method returns a new array iterator object that contains the key/value pairs for each index in the array.

**Return**: A new iterable iterator object.

```js
const array1 = ['a', 'b', 'c'];
const iterator1 = array1.entries();
console.log(iterator1.next().value);    // Array [0, "a"]
console.log(iterator1.next().value);    // Array [1, "b"]
console.log(iterator1.next().value);    // Array [2, "c"]
console.log(iterator1.next().value);    // undefined
```

#### 5. every():
* The `every()` method tests whether all elements in the array pass the test implemented by the provided function.
* It returns a Boolean value.

**Parameters**:
1. callbackFn: A function to test for each element, taking three arguments: element, index(optional), array(optional)
2. thisArg(optional): Return: true if the callbackFn function returns a truthy value for every array element. Otherwise, false

```js
const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold));    // true
```

#### 6. fill():
* The `fill()` method changes all elements in an array to a static value, from start index to end index.

```js
// Syntax
fill(value)
fill(value, start)
fill(value, start, end)

// Example
const array1 = [1, 2, 3, 4]
console.log(array1.fill(0, 2, 4));		// Array [1, 2, 0, 0]
console.log(array1.fill(5, 1));			// Array [1, 5, 5, 5]
console.log(array1.fill(6));			// Array [6, 6, 6, 6]
```

**Parameters**:
1. value: Value to fill the array with
2. start: Start index (inclusive), default 0
3. end: End index (exclusive), default arr.length

Return: The modified array, filled with value

#### 7. filter():
* The `filter()` method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

```js
// Syntax
filter(callbackFn)
filter(callbackFn, thisArg)

// Example
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);		// Array ["exuberant", "destruction", "present"]
```

**Parameters**:
1. callbackFn: A function to test for each element, takes 3 arguments: element, index(optional), array(optional)
2. thisArg(optional)

Return: A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.

#### 8. find():
* The `find()` method returns the first element in the provided array that satisfies the provided testing function.

    - If we need the index of the found element in the array, use `findIndex()`.
    - If we need to find the index of a value, use `indexOf()`. (It's similar to `findIndex()`, but checks each element for equality with the value instead of using a testing function.)
    - If we need to find if a value exists in an array, use `includes()`. Again, it checks each element for equality with the value instead of using a testing function.
    - If we need to find if any element satisfies the provided testing function, use `some()`.

```js
// Syntax
find(callbackFn)
find(callbackFn, thisArg)

// Example
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found);		// 12
```

**Parameters**:
1. callbackFn: A function to test for each element, taking three arguments: element, index(optional), array(optional)
2. thisArg(optional)

Return: The first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.

#### 9. findIndex():
* The findIndex() method returns the index of the first element in an array that satisfies the provided testing function.

```js
// Syntax
findIndex(callbackFn)
findIndex(callbackFn, thisArg)

// Example
const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber));	// 3
```

**Parameters**:
1. callbackFn: A function to test for each element, taking three arguments: element, index(optional), array(optional)
2. thisArg(optional)

Return: The index of the first element in the array that passes the test. Otherwise, -1

#### 10. findLast():
* The `findLast()` method iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function.
* If no elements satisfy the testing function, undefined is returned.

#### 11. findLastIndex():
* The `findLastIndex()` method iterates the array in reverse order and returns the index of the first element that satisfies the provided testing function.
* If no elements satisfy the testing function, -1 is returned.

#### 12. flat():
* The `flat()` method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

```js
// Syntax
flat()
flat(depth)

// Example
const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat());		// Array [0, 1, 2, 3, 4]
const arr2 = [0, 1, 2, [[[3, 4]]]];
console.log(arr2.flat(2));		// Array [0, 1, 2, Array [3, 4]]
console.log(arr2.flat(3));		// Array [0, 1, 2, 3, 4]
```

**Parameters**:
1. depth (Optional): The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.

Return: A new array with the sub-array elements concatenated into it.

#### 13. flatMap():


```js
// Syntax
flatMap(callbackFn)
flatMap(callbackFn, thisArg)

// Example
const arr1 = [1, 2, 1];
const result = arr1.flatMap((num) => (num === 2 ? [2, 2] : 1));
console.log(result);		// Array [1, 2, 2, 1]
```

**Parameters**:

- **callbackFn**
Function that is called for every element of arr. Each time callbackFn executes, the returned value is added to newArray.
The callbackFn function accepts the following arguments:

  - **element**: The current element being processed in the array.

  - **index** (Optional): The index of the current element being processed in the array.

  - **array** (Optional): The array map was called upon.

- **thisArg** (Optional): Value to use as this when executing callbackFn.

**Return**: A new array with each element being the result of the callback function.

***

## 19. `of()`

`Array.of()` is similar to `Array()`

**Parameters**:

- **elementN**: Elements used to create the array.

**Return**: A new Array instance

***

## 20. `pop()`

Removes last element

**Return**: The removed element from the array; `undefined` if the array is empty.

***

## 21. `push()`

**Parameters**:

- **elementN**: The element(s) to add to the end of the array.

**Return**: The new length property of the object upon which the method was called.

***

## 22. `reduce()`

**Parameters**:

- **callbackFn**: A *reducer* function that takes four arguments:

  - **previousValue**: the value resulting from the previous call to callbackFn.

  - **currentValue**: the value of the current element.

  - **currentIndex**: the index position of currentValue in the array.

  - **array**: the array to traverse.

- **initialValue** (Optional): A value to which previousValue is initialized the first time the callback is called.

**Return**: The value that results from running the *reducer* callback function to completion over the entire array.

***

## 23. `reduceRight()`

Same as `reduce()` but executed from right side.

***

## 24. `reverse()`

**Return**: The reversed array.

***

## 25. `shift()`

Removes first element

**Return**: The removed element from the array; `undefined` if the array is empty

***

## 26. `slice()`

**Parameters**:

- **start** (Optional): Zero-based index at which to start extraction.
  A negative index can be used, indicating an offset from the end of the sequence.
  If start is undefined, slice starts from the index 0.
  If start is greater than the index range of the sequence, an empty array is returned.

- **end** (Optional): Zero-based index before which to end extraction. slice extracts up to but not including end.
  A negative index can be used, indicating an offset from the end of the sequence.
  If end is omitted, slice extracts through the end of the sequence.
  If end is greater than the length of the sequence, slice extracts through to the end of the sequence.

**Return**: A new array containing the extracted elements.

***

## 27. `some()`

**Parameters**:

- **callbackFn**
Function that is called for every element of arr. Each time callbackFn executes, the returned value is added to newArray.
The callbackFn function accepts the following arguments:

  - **element**: The current element being processed in the array.

  - **index** (Optional): The index of the current element being processed in the array.

  - **array** (Optional): The array map was called upon.

- **thisArg** (Optional): Value to use as this when executing callbackFn.

**Return**: `true` if the callback function returns a truthy value for at least one element in the array. Otherwise, `false`.

***

## 28. `sort()`

**Parameters**:

- **compareFn** (Optional): Specifies a function that defines the sort order. If omitted, the array elements are converted to strings, then sorted according to each character's Unicode code point value.

  - **firstEl**: The first element for comparison.

  - **secondEl**: The second element for comparison.

  If return value is greater than 0 then *secondEl* comes before *firstEL*.
  If return value is less than 0 the *firstEl* comes before *secondEl*.
  If return value is 0 then relative position wont change

**Return**: The sorted array. Note that the array is sorted in place, and no copy is made.

***

## 29. `splice()`

**Parameters**:

- **start**: The index at which to start changing the array.
  If greater than the length of the array, start will be set to the length of the array. In this case, no element will be deleted but the method will behave as an adding function, adding as many elements as items provided.
  If negative, it will begin that many elements from the end of the array.
  If start is negative infinity, it will begin from index 0.

- **deleteCount** (Optional): An integer indicating the number of elements in the array to remove from start.

  If deleteCount is omitted, or if its value is equal to or larger than `array.length - start`, then all the elements from start to the end of the array will be deleted. However, it must not be omitted if there is any item1 parameter.

  If deleteCount is 0 or negative, no elements are removed. In this case, you should specify at least one new element.

- **item1, item2, ...** (Optional): The elements to add to the array, beginning from start.

  If you do not specify any elements, splice() will only remove elements from the array.

**Return**: An array containing the deleted elements.
If only one element is removed, an array of one element is returned.
If no elements are removed, an empty array is returned.

***

## 30. `toString()`

**Return**: A string representing the elements of the array.

***

## 31. `unshift()`

**Parameters**:

- **elementN**: The elements to add to the front of the arr.

**Return**: The new length property of the object upon which the method was called.

***








































