## Primitive Data Types:
* The predefined data types provided by JavaScript language are known as primitive data types. 
* Primitive data types are also known as in-built data types.
* There are five types of primitive data types in Javascript.
    1. Number
    2. String
    3. Undefined
    4. Boolean
    5. Null

## Non-Primitive Types:
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
Index Numbers - 0, 1, 2, 3,...
Array Property - "0", "1", "2", "3",...

```js
function f1(){
    var  values = [10,"Yamini",true];
    document.write(values["1"]);
}
f1()
```
```js
function f1(){
    var  values = [10,"Yamini",true];
    values["3"] = "Array"
    document.write(values["3"]);
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
    document.write(`Length is ${len}`)
}
f1()
```

### Function Overloading:
```js
function greet(firstname, lastname, language) {
    if(language === 'en'){
        console.log('Hello ' + firstname + ' ' + lastname)
    }
    if(language === 'es') {
        console.log('Hola ' + firstname + ' ' + lastname)
    }
}
greet('yamini','kandi','en')
greet('yamini','kandi','es')
// OR
function greet(firstname, lastname, language) {
    if(language === 'en'){
        console.log('Hello ' + firstname + ' ' + lastname)
    }
    if(language === 'es') {
        console.log('Hola ' + firstname + ' ' + lastname)
    }
}
function greetEnglish(firstname, lastname) {
    greet(firstname, lastname, 'en')
}
function greetSpanish(firstname, lastname) {
    greet(firstname, lastname,'es')
}
greetEnglish('yamini', 'kandi')
greetSpanish('yamini', 'kandi')
```
```
Output:
Hello yamini kandi
Hola yamini kandi
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
    a. for
    b. while 
    c. do while
```js
function f1(){
    var categories = ["All","Electronics","Fashion","Footwear"];
    var len = categories.length;
    for(var i=0; i<len; i++){
    document.write( categories[i] + "<br>")
    }
}
f1()
```

#### 2. Iterators:
* Iterators doesn't require Initialization, condition and Counter
* It is a software design pattern used to read Elements from a collection in sequential order.
    a. for..in 
    b. for..of 

##### a. for..in:
* Reads all properties and values.
```js
function f1(){
    var categories = ["All","Electronics","Fashion","Footwear"];
    for(var property in categories){
    document.write(`[${property}] ${categories[property]} <br>`)
    }
}
f1()
```
##### b. for..of():
* Reading values only.
```js
function f1(){
    var categories = ["All","Electronics","Fashion","Footwear"];
    for(var item of categories){
        document.write(item+"<br>")
    }
}
f1()
```
#### 3. map():
```js
function f1(){
    var categories = ["All","Electronics","Fashion","Footwear","MensWear"];
    categories.map(function(value){
    document.write(value+"<br>")
    })
}
f1()
```
#### 4. toString():
```js
function f1(){
    var categories = ["All","Electronics","Fashion","Footwear","MensWear"];
    var str = categories.toString();
    var result = str.split(",")
    for(var res of result){
    document.write(res+"<br>")
    }
}
f1()
```
#### 5. join():
```js
function f1(){
    var categories = ["All","Electronics","Fashion","Footwear","MensWear"];
    var res = categories.join("-->");
    document.write(res)
}
f1()
```

### Dynamically creating a DOM Element for Array Elements:
You can create any HTML DOM Element by using the method 
   * document.createElement()
You can add any HTML Element into DOM by using the methods,
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
    document.write(categories+"<br>")
}
f1()
```
#### 2. unshift():
* It adds the new Elements at the top or start.
```js
function f1(){
    var  categories = ["All","Electronics","Footwear","Fashion"];
    categories.unshift("Kidswear");
    document.write(categories)
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
    document.write(categories)
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
    document.write(categories)
}
f1()
```
#### 2. shift():
* It removes the first Element of an Array.
```js
function f1(){
    var  categories = ["All","Electronics","Footwear","Fashion"];
    categories.shift();
    document.write(categories)
}
f1()
```
#### 3.splice():
* It removes and returns collection of items between specific index.
```js
function f1(){
    var  categories = ["All","Electronics","Footwear","Fashion","Kidswear","Menswear"];
    categories.splice(2,3);
    document.write(categories)
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
    document.write(categories)
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