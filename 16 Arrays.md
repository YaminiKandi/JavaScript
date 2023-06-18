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
    - Other properties of an Array

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

* For map(), toString(), join() refer other methods below

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

### Dynamically creating a DOM Element for Array Elements:
We can create any HTML DOM Element by using the method 
   * document.createElement()
   
We can add any HTML Element into DOM by using the methods,
   * append()  [as Suffix]
   * prepend()  [as prefix]
   * appendChild() [as child Element of any parent]
   * appendTo() [To any Specific Element] 

#### 1. `append() & prepend()`:
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

#### 2. `appendChild()`:
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

### 1. `push()`:
* Adds the specified elements to the end of an array

**Parameters**:
1. elementN: The element(s) to add to the end of the array.

**Return**: The new length property of the object upon which the method was called.

```js
// Syntax
push()
push(elementN)

// Example
const animals = ['pigs', 'goats', 'sheep'];
const count = animals.push('cows');
console.log(count);			// 4
console.log(animals);		// Array ["pigs", "goats", "sheep", "cows"]
animals.push('cats', 'dogs');
console.log(animals);		// Array ["pigs", "goats", "sheep", "cows", "cats", "dogs"]
```

### 2. `unshift()`:
* Adds the specified elements to the beginning of an array

**Parameters**:
1. elementN: The elements to add to the front of the arr.

**Return**: The new length property of the object upon which the method was called

```js
// Syntax
unshift()
unshift(elementN)

// Example
const array1 = [1, 2, 3];
console.log(array1.unshift(4, 5));	// 5
console.log(array1);				// Array [4, 5, 1, 2, 3]
```

### 3. `splice()`:
* The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
* To create a new array with a segment removed and/or replaced without mutating the original array, use `toSpliced()`.
* To access part of an array without modifying it, use `slice()`.
* It adds the new Elements at specific location

**Parameters**:
1. start: The index at which to start changing the array. If greater than the length of the array, start will be set to the length of the array. In this case, no element will be deleted but the method will behave as an adding function, adding as many elements as items provided. If negative, it will begin that many elements from the end of the array. If start is negative infinity, it will begin from index 0.
2. deleteCount (Optional): An integer indicating the number of elements in the array to remove from start.
    - If deleteCount is omitted, or if its value is equal to or larger than array.length - start, then all the elements from start to the end of the array will be deleted. However, it must not be omitted if there is any item1 parameter.
    - If deleteCount is 0 or negative, no elements are removed. In this case, you should specify at least one new element.
3. item1, item2, ... (Optional): The elements to add to the array, beginning from start.

* If we don't specify any elements, splice() will only remove elements from the array.

**Return**: An array containing the deleted elements. If only one element is removed, an array of one element is returned. If no elements are removed, an empty array is returned.

```js
// Syntax
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, "newElement1")
splice(start, deleteCount, "newElement1", "newElement2");`

// Example
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');		// Inserts at index 1
console.log(months);			// Array ["Jan", "Feb", "March", "April", "June"]
months.splice(4, 1, 'May');		// Replaces 1 element at index 4
console.log(months);			// Array ["Jan", "Feb", "March", "April", "May"]
months.splice(2, 1);			// Removes 1 element from index 2
console.log(months);			// Array ["Jan", "Feb", "April", "May"]
```

### Removing Elements from an Array:
1. pop()
2. shift()
3. splice()

### 1. `pop()`:
* Removes the last element from an array and returns that element. 
* This method changes the length of the array.

**Return**: The removed element from the array; undefined if the array is empty.

```js
// Syntax
pop()
// Example
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop());		// "tomato"
console.log(plants);			// Array ["broccoli", "cauliflower", "cabbage", "kale"]
plants.pop();
console.log(plants);			// Array ["broccoli", "cauliflower", "cabbage"]
```

### 2. `shift()`:
* It removes the first Element of an Array.
* This method changes the length of the array.

**Return**: The removed element from the array; undefined if the array is empty

```js
// Syntax
shift()

// Example
const array1 = [1, 2, 3];
const firstElement = array1.shift();
console.log(firstElement);		// 1
console.log(array1);			// Array [2, 3]
```

### Other Properties of Array:
### 1. `at()`:
* Takes an integer and returns the item at that index

### 2. `concat()`:
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

### 3. `copyWithin()`:
* Shallow copies part of an array to another location in the same array and returns it without modifying its length.
* It also modifies the original array

**Parameters**:
1. target: Zero-based index at which to copy the sequence to. If negative, target will be counted from the end. If target is at or greater than arr.length, nothing will be copied. If target is positioned after start, the copied sequence will be trimmed to fit arr.length.
2. start: Zero-based index at which to start copying elements from. If negative, start will be counted from the end. If start is omitted, copyWithin will copy from index 0.
3. end: Zero-based index at which to end copying elements from. copyWithin copies up to but not including end. If negative, end will be counted from the end. If end is omitted, copyWithin will copy until the last index (default to arr.length).

**Return**: A modified array

```js
// Syntax
copyWithin(target, start)
copyWithin(target, start, end)
```

### 4. `entries()`:
* The entries() method returns a new array iterator object that contains the key/value pairs for each index in the array.

**Return**: A new iterable iterator object.

```js
const array1 = ['a', 'b', 'c'];
const iterator1 = array1.entries();
console.log(iterator1.next().value);    // Array [0, "a"]
console.log(iterator1.next().value);    // Array [1, "b"]
console.log(iterator1.next().value);    // Array [2, "c"]
console.log(iterator1.next().value);    // undefined
```

### 5. `every()`:
* The every() method tests whether all elements in the array pass the test implemented by the provided function.

**Parameters**:
1. callbackFn: Function that produces an element of the new Array, taking three arguments:
    - currentValue: The current element being processed in the array.
    - index (Optional): The index of the current element being processed in the array.
    - array (Optional): The array map was called upon.
2. thisArg(optional): Return: true if the callbackFn function returns a truthy value for every array element. Otherwise, false

**Return**: Boolean value.

```js
const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold));    // true
```

### 6. `fill()`:
* The fill() method changes all elements in an array to a static value, from start index to end index.

**Parameters**:
1. value: Value to fill the array with
2. start: Start index (inclusive), default 0
3. end: End index (exclusive), default arr.length

**Return**: The modified array, filled with value

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

### 7. `filter()`:
* The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

**Parameters**:
1. callbackFn: A function to test for each element, takes 3 arguments: element, index(optional), array(optional)
2. thisArg(optional)

**Return**: A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.

```js
// Syntax
filter(callbackFn)
filter(callbackFn, thisArg)

// Example
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);		// Array ["exuberant", "destruction", "present"]
```

### 8. `find()`:
* The find() method returns the first element in the provided array that satisfies the provided testing function.

    - If we need the index of the found element in the array, use `findIndex()`.
    - If we need to find the index of a value, use `indexOf()`. (It's similar to `findIndex()`, but checks each element for equality with the value instead of using a testing function.)
    - If we need to find if a value exists in an array, use `includes()`. Again, it checks each element for equality with the value instead of using a testing function.
    - If we need to find if any element satisfies the provided testing function, use `some()`.

**Parameters**:
1. callbackFn: A function to test for each element, taking three arguments: element, index(optional), array(optional)
2. thisArg(optional)

**Return**: The first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.

```js
// Syntax
find(callbackFn)
find(callbackFn, thisArg)

// Example
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found);		// 12
```

### 9. `findIndex()`:
* The findIndex() method returns the index of the first element in an array that satisfies the provided testing function.

**Parameters**:
1. callbackFn: A function to test for each element, taking three arguments: element, index(optional), array(optional)
2. thisArg(optional)

**Return**: The index of the first element in the array that passes the test. Otherwise, -1

```js
// Syntax
findIndex(callbackFn)
findIndex(callbackFn, thisArg)

// Example
const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber));	// 3
```

### 10. `findLast()`:
* The findLast() method iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function.
* If no elements satisfy the testing function, undefined is returned.

### 11. `findLastIndex()`:
* The findLastIndex() method iterates the array in reverse order and returns the index of the first element that satisfies the provided testing function.
* If no elements satisfy the testing function, -1 is returned.

### 12. `flat()`:
* The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

**Parameters**:
1. depth (Optional): Specifying how deep a nested array structure should be flattened. Defaults to 1.

**Return**: A new array with the sub-array elements concatenated into it.
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

### 13. `flatMap()`:
* The flatMap() method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. 
* It is identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()), but slightly more efficient than calling those two methods separately.

**Parameters**:
1. callbackFn: A function to test for each element, taking three arguments: element, index(optional), array(optional)
2. thisArg (Optional): Value to use as this when executing callbackFn.

**Return**: A new array with each element being the result of the callback function and flattened to a depth of 1.

```js
// Syntax
flatMap(callbackFn)
flatMap(callbackFn, thisArg)

// Example
const arr1 = [1, 2, 1];
const result = arr1.flatMap((num) => (num === 2 ? [2, 2] : 1));
console.log(result);		// Array [1, 2, 2, 1]
```

### 14. `forEach()`:
* The forEach() method executes a provided function once for each array element.

**Parameters**:
1. callbackFn: A function to test for each element, taking three arguments: element, index(optional), array(optional)
2. thisArg (Optional): Value to use as this when executing callbackFn.

**Return**: `undefined`

```js
// Syntax
forEach(callbackFn)
forEach(callbackFn, thisArg)

// Example
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
// "a"
// "b"
// "c"
```

### 15. `from()`:
* The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.

**Parameters**:
1. arrayLike: An array-like or iterable object to convert to an array.
2. mapFn (Optional): Map function to call on every element of the array.
3. thisArg (Optional): Value to use as this when executing mapFn.

**Return**: A new Array instance.

```js
// Syntax
Array.from(arrayLike)
Array.from(arrayLike, mapFn)
Array.from(arrayLike, mapFn, thisArg)

// Example
console.log(Array.from('foo'));						// Array ["f", "o", "o"]
console.log(Array.from([1, 2, 3], x => x + x));		// Array [2, 4, 6]
```

### 16. `includes()`:
* The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

**Parameters**:
1. searchElement: The value to search for.
2. fromIndex (Optional): The position in this array at which to begin searching for searchElement.

* The first element to be searched is found at fromIndex for positive values of fromIndex, or at arr.length + fromIndex for negative values of fromIndex
* Defaults to 0.

**Return**: A boolean value which is true if the value searchElement is found within the array (or the part of the array indicated by the index fromIndex, if specified).

```js
// Syntax
includes(searchElement)
includes(searchElement, fromIndex)

// Example
const array1 = [1, 2, 3];
console.log(array1.includes(2));		// true

const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));		// true
console.log(pets.includes('at'));		// false
```

### 17. `indexOf()`:
* The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

**Parameters**:
1. searchElement: Element to locate in the array.
2. fromIndex (Optional): The index to start the search at.
    - If the index is greater than or equal to the array's length, -1 is returned, which means the array will not be searched.
    - If the provided index value is a negative number, it is taken as the offset from the end of the array.
    - If the provided index is 0, then the whole array will be searched.
    - Default: 0.

**Return**: The first index of the element in the array; -1 if not found.

```js
//Syntax
indexOf(searchElement)
indexOf(searchElement, fromIndex)

// Example
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));			// 1
// Start from index 2
console.log(beasts.indexOf('bison', 2));		// 4
console.log(beasts.indexOf('giraffe'));			// -1
```

### 18. `isArray()`:
* The Array.isArray() static method determines whether the passed value is an Array.

**Parameters**:
1. value: The value to be checked.

**Return**: `true` if the value is an Array; otherwise, `false`.

```js
// Syntax
Array.isArray(value)

// Example
console.log(Array.isArray([1, 3, 5]));					// true
console.log(Array.isArray('[]'));						// false
console.log(Array.isArray(new Array(5)));				// true
console.log(Array.isArray(new Int16Array([15, 33])));	// false
```

### 19. `join()`:
* The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.
* If the array has only one item, then that item will be returned without using the separator.

**Parameters**:
1. separator (Optional): Specifies a string to separate each pair of adjacent elements of the array.

* If omitted, the array elements are separated with a comma (`,`).
* If separator is an empty string, all elements are joined without any characters in between them.

**Return**: A string with all array elements joined. If `arr.length` is 0, the empty string is returned.

```js
// Syntax
join()
join(separator)

// Example
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits.join());          // Output: "apple,banana,orange"
console.log(fruits.join(' | '));     // Output: "apple | banana | orange"
```
***

### 20. `lastIndexOf()`:
* Same as `indexOf()`, but from last.
* The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

```js
// Syntax
lastIndexOf(searchElement)
lastIndexOf(searchElement, fromIndex)

// Example
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
console.log(animals.lastIndexOf('Dodo'));		// 3
console.log(animals.lastIndexOf('Tiger'));		// 1
```

### 21. `map()`:
* map() method allows you to create a new array by applying a function to each element of an existing array.

**Parameters**:
1. callbackFn
    * Function that is called for every element of arr.
    * Each time callbackFn executes, the returned value is added to newArray.
    * The callbackFn function accepts the following arguments:
        - element: The current element being processed in the array.
        - index (Optional): The index of the current element being processed in the array
        - array (Optional): The array map was called upon.
2. thisArg (Optional): Value to use as this when executing callbackFn.

**Return**: A new array with each element being the result of the callback function.

```js
// Syntax
map(callbackFn)
map(callbackFn, thisArg)

// Example
function f1(){
    var categories = ["All","Electronics","Fashion"];
    categories.map(function(value){
    console.log(value)
    })
}
f1()
//  "All"
// "Electronics"
// "Fashion"
```

### 22. `of()`:
* `Array.of()` is similar to `Array()`
* Creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.

**Parameters**:
1. elementN: Elements used to create the array.

**Return**: A new Array instance

```js
// Syntax
Array.of()
Array.of(element0)
Array.of(element0, element1)
Array.of(element0, element1, /* … ,*/ elementN)

// Example
console.log(Array.of('foo', 2, true));	// Array ["foo", 2, true]
console.log(Array.of());				// Array []
```

### 23. `reduce()`:
* Executes "reducer" callback function on each element in order, passing in the return value from the calculation on the preceding element.
* The final result of running the reducer across all elements of the array is a single value.
* The first time that the callback is run there is no "return value of the previous calculation". 
* If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

**Parameters**:
1. callbackFn: A *reducer* function that takes four arguments:
    - previousValue: the value resulting from the previous call to callbackFn.
    - currentValue: the value of the current element.
    - currentIndex: the index position of currentValue in the array.
    - array: the array to traverse.
2. initialValue (Optional): A value to which previousValue is initialized the first time the callback is called.

**Return**: The value that results from running the *reducer* callback function to completion over the entire array.

```js
// Syntax
reduce(callbackFn)
reduce(callbackFn, initialValue)

// Example
const array1 = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
console.log(sumWithInitial);	// 10
```

### 24. `reduceRight()`:
* Same as `reduce()` but executed from right side.

```js
// Syntax
reduceRight(callbackFn)
reduceRight(callbackFn, initialValue)

// Example
const array1 = [[0, 1], [2, 3], [4, 5]];
const result = array1.reduceRight(
  (accumulator, currentValue) => accumulator.concat(currentValue)
);
console.log(result);	// Array [4, 5, 2, 3, 0, 1]
```

### 25. `reverse()`:
* The reverse() method reverses an array in place and returns the reference to the same array
* To reverse the elements in an array without mutating the original array, use `toReversed()`.

**Return**: The reversed array.

```js
// Syntax
reverse()

// Example
const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);			// "array1:" Array ["one", "two", "three"]
const reversed = array1.reverse();
console.log('reversed:', reversed);		// "reversed:" Array ["three", "two", "one"]
// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1);			// "array1:" Array ["three", "two", "one"]
```

### 26. `slice()`:
* The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end indexes (end not included).
* The original array will not be modified.
 
**Parameters**:
1. start (Optional): Zero-based index at which to start extraction.
    - A negative index can be used, indicating an offset from the end of the sequence.
    - If start is undefined, slice starts from the index 0.
    - If start is greater than the index range of the sequence, an empty array is returned.
2. end (Optional): Zero-based index before which to end extraction. slice extracts up to but not including end.
    - A negative index can be used, indicating an offset from the end of the sequence.
    - If end is omitted, slice extracts through the end of the sequence.
    - If end is greater than the length of the sequence, slice extracts through to the end of the sequence.

**Return**: A new array containing the extracted elements.

```js
// Syntax
slice()
slice(start)
slice(start, end)

// Example
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));			// Array ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4));		// Array ["camel", "duck"]
console.log(animals.slice(-2));			// Array ["duck", "elephant"]
console.log(animals.slice(2, -1));		// Array ["camel", "duck"]
console.log(animals.slice());			// Array ["ant", "bison", "camel", "duck", "elephant"]
```

### 27. `some()`:
* The some() method tests whether at least one element in the array passes the test implemented by the provided function.

**Parameters**:
1. callbackFn: A function to test for each element, taking three arguments: element, index(optional), array(optional)
2. thisArg (Optional): Value to use as this when executing callbackFn.

**Return**: `true` if the callback function returns a truthy value for at least one element in the array. Otherwise, `false`.

```js
// Syntax
some(callbackFn)
some(callbackFn, thisArg)

// Example
const array = [1, 2, 3, 4, 5];
// Checks whether an element is even
const even = (element) => element % 2 === 0;
console.log(array.some(even));	    // true
```

### 28. `sort()`:
* The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted.
* To sort the elements in an array without mutating the original array, use `toSorted()`.
* sorts an array alphabetically
* numbers will not be sorted properly as it considers only first digit

**Parameters**:
1. compareFn(Optional): Specifies a function that defines the sort order. If omitted, the array elements are converted to strings, then sorted according to each character's Unicode code point value.
    - firstEl: The first element for comparison.
    - secondEl: The second element for comparison.

* If return value is greater than 0 then *secondEl* comes before *firstEL*.
* If return value is less than 0 the *firstEl* comes before *secondEl*.
* If return value is 0 then relative position wont change

**Return**: The sorted array. Note that the array is sorted in place, and no copy is made.

```js
// Syntax
sort()
sort(compareFn)

// Example
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);	// Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);	// Array [1, 100000, 21, 30, 4]
```

### 29. `toString()`:
**Return**: A string representing the elements of the array.

```js
// Syntax
toString()

// Example
const array1 = [1, 2, 'a', '1a'];
console.log(array1.toString());		// "1,2,a,1a"
```
