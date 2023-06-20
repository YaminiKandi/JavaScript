## String Handling in Javascript:
* Javascript provides a "String" Object.
* It is a Built-in Object with set of properties and methods, which are used to control the string.
* properties contains Data, Methods define Functionality.
* Normally, strings like "Hello World", cannot have methods or properties because they are not objects.
* But with JavaScript, methods and properties are also available to strings, because JavaScript treats strings as objects when executing methods and properties.

### Property:
#### Length:
It returns the total number of chars in a string.
```js
const passwordChecker = (password) => {
    var len = password.length;
    if (len > 8){
        console.log('Your password is strong')
    } else {
        console.log('Your password is weak')
    }
}
passwordChecker('Yamini')           // Your password is weak
passwordChecker('Yamini Kandi')     // Your password is strong

function demo(){
    var  str = "Hello World";  
    var len = str.length;
    document.write("Length is "+len)
}
demo();
```
```html
<!DOCTYPE html>
<html>
    <head>
        <title>String Length Property</title>
        <script>
           function submitClick(){
            var password =   document.getElementById("txtPassword").value;
            var len = password.length;
            //simple Decision
            if(len>=8){
                alert("Your Password is strong")
            }else{
               document.write("Password You Entered contains less than 8 characters")
            }
           }
        </script>
    </head>
    <body>
       <fieldset>
           <legend>Enter Your Password </legend>
           <input type="password" id="txtPassword"/><br><br>
           <button type="button" onclick="submitClick()">Submit</button>
       </fieldset> 
    </body>
</html>
```

##### String formatting
```js
const passwordChecker = (password) => {
    var len = password.length;
    if (len > 8){
        console.log('%cYour Password is strong','color: green; font-style: italic;')
        // document.write(`Your Password is ${password}`.fontcolor("green").bold())
    } else {
        console.log('%cYour Password is weak','color: red; font-style: italic;')
        // document.write(`Password should contain min 8 characters`.fontcolor("red").italics())
    }
}
passwordChecker('Yamini')
passwordChecker('Yamini Kandi')
```

##### Formatting string with style attributes and classes:
```html
<!DOCTYPE html>
<html>
    <head>
        <title>String Length Property</title>
        <style>
            .valid-style{
                color:green;
                text-align: center;
                font-family: fantasy;
            }
            .invalid-style{
                color:red;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu;
            }
        </style>
        <script>
           function submitClick(){
            var password =   document.getElementById("txtPassword").value;
            var len = password.length;
            var msg = document.getElementById("res");
            //simple Decision
            if(len>=8){
                msg.innerHTML=`You Entered Password is ${password}`;
                msg.className = "valid-style";
            }else{
               msg.innerHTML = `Your password should contain min 8 chars`;
               msg.className = "invalid-style";
            }
           }
        </script>
    </head>
    <body>
       <fieldset>
           <legend>Enter Your Password </legend>
           <input type="password" id="txtPassword"/><br><br>
           <button type="button" onclick="submitClick()">Submit</button>
       </fieldset> 
       <h1 id="res"></h1>
    </body>
</html>
```

## string manipulating methods:
### 1. `charAt()`:

**Parameters**
1. index: An integer between 0 and str.length-1. If the index cannot be converted to the integer or no index is provided, the default is 0, so the first character of string is returned.

**Return**
* A string representing the character (exactly one UTF-16 code unit) at the specified index. If index is out of range (invalid), charAt() returns an empty string.
```js
// Syntax
charAt(index)

// Example1
const str = "Hello World";
const char = str.charAt(8);
console.log(char);      // r
```
```html
<!-- Example2
Valid Mobile Number -->
<!DOCTYPE html>
<html>
    <head>
        <title>charAt()</title>
        <script>
            function submitClick(){
                var mobile = document.getElementById("txtNumber").value;
                var len = mobile.length;
                var pos = mobile.charAt(0);
                var msg = document.getElementById("msg");
                if(mobile==""){
                    msg.innerHTML = "Please Enter Your Mobile No".fontcolor("red");
                }
                else{
                     if(len==10){
                        if(pos==9 || pos==8 || pos==7 || pos==6){
                            msg.innerHTML = mobile;  
                        }
                        else{
                            msg.innerHTML = "Please Provide a Valid Mobile Number";
                        }
                     } 
                     else{
                       msg.innerHTML = "Please Enter Mobile No With 10 Digits Only";
                     }
                }
            }
        </script>
    </head>
    <body>
        <label>Enter Your MobileNo :</label>
        <input type="text" id="txtNumber"/><br><br>
        <button type="button" onclick="submitClick()">Submit</button>
        <h1 id="msg"></h1>
    </body>
</html>
```

### 2. `charCodeAt()`:

**Parameters**
1. index (optional): An integer between 0 and str.length-1 (default value = 0).

**Return**:
* The unicode (ASCII) of the charcter at the specified index. If index is invalid, charCodeAt() returns NaN
* Uppercase alphabets ASCII values starts from 65 to 90.
* Lowercase alphabets ASCII values starts from 97 to 122.

```js
// Syntax
charCodeAt(index)

// Example1
const string = 'Hello World';
const index = 2;
const char = string.charCodeAt(index)
console.log(`CharCodeAt index ${index} is ${char}`)
// "CharCodeAt index 2 is 108"
```

```html
<!-- Example2
Checking for a valid name 
(starting with Uppercase letter) -->
<!DOCTYPE html>
<html>
    <head>
        <title>charCodeAt()</title>
        <script>
            function submitClick(){
               var name =  document.getElementById("txtName").value;
               var char = name.charCodeAt(0);
               var msg = document.getElementById("msg");

               if(char>=65 && char<=90){
                  msg.innerHTML = name;
               }
               else{
                 msg.innerHTML = "Invalid Name";
               }
            }
        </script>
    </head>
    <body>
        <h1>Please Start Your Name with Uppercase Letter</h1>
        <label>Enter Your Name</label>
        <input type="text" id="txtName"/><br><br>
        <button type="button" onclick="submitClick()">Submit</button>
        <h1 id="msg"></h1>
    </body>
</html>
```

### 3. `concat()`:

**Parameters**
1. stringN: One or more strings to concatenate

**Return**
*  A new string containing the combined text of the strings provided

```js
// Syntax
concat(str1)

// Example
const str1 = 'Hello';
const str2 = 'World';
console.log(str1.concat(' ', str2));	// "Hello World"
console.log(str2.concat(', ', str1));	// "World, Hello"
```

### 4. `startsWith()`:
* Determines whether a string begins with the characters of a specified string, returning true or false as appropriate

**Parameters**:
1. search String: The characters to be searched for at the start of this string
2. position (optional): The position in this string at which to begin searching for searchString. Defaults to 0.

**Return**:
* true if the given characters are found at the beginning of the string; Otherwise, false

```js
// Syntax
startsWith(searchString)
startsWith(searchString, position)

// Example1
const str1 = 'Saturday night plans';
console.log(str1.startsWith('Sat'));		// true
console.log(str1.startsWith('Sat', 3));		// false
```

```html
<!-- Example2
Checking for type of card using starting values -->
<!DOCTYPE html>
<html>
    <head>
        <title>startsWith()</title>
        <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.css">
        <script>
            function verifyCard(){
                var cardNumber = document.getElementById("txtCard").value;
                var img = document.getElementById("pic");

                if(cardNumber.startsWith("4444")){
                     img.src="assets/Rupay.jpg";
                }
                else{
                     if(cardNumber.startsWith("1122")){
                        img.src="assets/MasterCard.png";
                     }
                     else{
                        img.src="assets/VisaCard.png";
                     }
                }
            }
        </script>
    </head>
    <body class="container-fluid">
        <h1>Card Payment</h1>
        <div class="input-group">
            <label class="input-group-text">Card Number</label>
            <input type="text" class="form-control" id="txtCard" onkeyup="verifyCard()"/>
            <span class="input-group-text">
                <img id="pic" width="100" height="30"/>
            </span>
        </div>
    </body>
</html>
```

### 5. 'endsWith()`:
* Determines whether a string ends with the characters of a specified string, returning true or false as appropriate.

**Parameters**:
1. searchString: The characters to be searched for at the end of str.
2. length(optional): If provided, it is used as the length of str. Defaults to str.length
   
**Return**:
* true if the given characters are found at the end of the string; otherwise, false

```js
// Syntax
endsWith(searchString)
endsWith(searchString, length)

// Example
const str1 = 'Cats are the best!';
console.log(str1.endsWith('best!'));		// true
console.log(str1.endsWith('best', 17));		// true
const str2 = 'Is this a question?';
console.log(str2.endsWith('question'));		// false
```

```html
<!DOCTYPE html>
<html>
    <head>
        <title>endsWith()</title>
        <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.css">
        <link rel="stylesheet" href="../node_modules/bootstrap-icons/font/bootstrap-icons.css">
        <script>
            function verifySite(){
                var site = document.getElementById("txtSite").value;
                var msg = document.getElementById("msg");

                if(site.endsWith("org")){
                     msg.className="bi bi-check2-circle input-group-text text-success";
                }
                else{
                    msg.className="bi bi-x-circle input-group-text text-danger";
                }
            }
        </script>
    </head>
    <body class="container-fluid">
       <div class="input-group">
           <label class="input-group-text">Organization Website</label>
           <input type="text" class="form-control" onkeyup="verifySite()" id="txtSite"/>
           <span id="msg" class="input-group-text"></span>
       </div>
    </body>
</html>
```

### 6. `includes()`:
* Determine whether one string may be found within another string, returning true or false as appropriate.

**Parameters**:
1. searchString: A string to be searched for withing given string
2. position(optional): The position within the given string at which to begin searching for searchString

**Return**:
* true if the search string is found anywhere within the given string; otherwise, false if not

```js
// Syntax
includes(searchString)
includes(searchString, position)

// Example
const sentence = 'The quick brown fox jumps over the lazy dog.';
const includesChecker = (word) => {
	console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
}
includesChecker('fox');		// 'The word "fox" is in the sentence'
includesChecker('jack');    // 'The word "jack" is not in the sentence'
```

### 7. `indexOf()`:
* searches this string and returns the index of the first occurrence of the specified substring.

**Parameters**:
1. search String: Substring to search for. If this is not passed, it will be coerced to 'undefined'.
2. positional (optional): If position > length of given string, method wont search. If position < 0, then position = 0

**Return**:
* The index of the first occurence of searchString found, or -1 if not found

```js
// Syntax
indexOf(searchString)
indexOf(searchString, position)

// Example
const paragraph = 'The quick brown fox jumps over the lazy dog and the dog barked.';
const searchIndexOf = (searchTerm) => {
	const indexOfFirst = paragraph.indexOf(searchTerm);
	console.log(`The index of the 1st "${searchTerm}" from the beginning is ${indexOfFirst}`);
	console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);
}
searchIndexOf('dog');
// "The index of the 1st "dog" from the beginning is 40"
// "The index of the 2nd "dog" is 52"
```
**Return value when using an empty string search**:
*  Searching for an empty search string produces strange results.
*  With no second argument, or with a second argument whose value is less than the calling string's length, the return value is the same as the value of the second argument
*  With a second argument whose value is greater than or equal to the string's length, the return value is the string's length

```js
"hello world".indexOf(""); // returns 0
"hello world".indexOf("", 0); // returns 0
"hello world".indexOf("", 8); // returns 8
"hello world".indexOf("", 11); // returns 11
"hello world".indexOf("", 22); // returns 11

// return -1
"Blue Whale".indexOf("Blue"); // returns  0
"Blue Whale".indexOf("Blute"); // returns -1
"Blue Whale".indexOf("Whale", 0); // returns  5
"Blue Whale".indexOf("Whale", 5); // returns  5
"Blue Whale".indexOf("Whale", 7); // returns -1

// Checking Occurences
const blueWhale = (text, searchItem) => {
  if (text.indexOf(searchItem) !== -1) {
    return "true; found 'Blue' in 'Blue Whale'"
  } else {
    return "false; no 'Blue' in 'Blue Whale'"
  }
}
console.log(blueWhale('Blue Whale', 'Blue'));
// "true; found 'Blue' in 'Blue Whale'"
```

### 8. `lastIndexOf()`:
* searches this string and returns the index of the last occurrence of the specified substring

**Parameters**
1. search String: Substring to search for. If this is not passed, it will be coerced to 'undefined'.
2. positional (optional): If position < 0, then position = 0

**Return**:
* The index of the last occurence of searchString found, or -1 if not found

```js
// Syntax
lastIndexOf(searchString)
lastIndexOf(searchString, position)

// Example
const paragraph = 'The quick brown fox jumps over the lazy dog and the dog barked.';
const searchIndexOf = (searchTerm) => {
	const indexOfFirst = paragraph.lastIndexOf(searchTerm);
	console.log(`The index of the 1st "${searchTerm}" from the end is ${indexOfFirst}`);
}
searchIndexOf('dog');
// 'The index of the 1st "dog" from the end is 52'

"canal".lastIndexOf("a"); // returns 3
"canal".lastIndexOf("a", 2); // returns 1
"canal".lastIndexOf("a", 0); // returns -1
"canal".lastIndexOf("x"); // returns -1
"canal".lastIndexOf("c", -5); // returns 0
"canal".lastIndexOf("c", 0); // returns 0
"canal".lastIndexOf(""); // returns 5
"canal".lastIndexOf("", 2); // returns 2

// Case sensitivity
"Blue Whale, Killer Whale".lastIndexOf("blue"); // returns -1
```

### 9. `match()`:
* Retrieves the result of matching a string against a regular expression.

**Parameters**
1. match: The search value. A regular expression (or a string that will be converted to a regular expression). 

**Return**
* An array containing the matches. null if no match is found.
* It returns true if matching with regular expression else it return false

```js
// Syntax
match(regexp)
// Example 1
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);
console.log(found);
// Array ["T", "I"]

// Example 2
const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const regexp = /[A-E]/gi;
const matches = str.match(regexp);
console.log(matches);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']
```

### 10. `repeat()`:
* specified number of copies of the string, concatenated together

**Parameters**
1. count: A non negative integer representing the specified number of copies of the given string.

**Return**
* A new string containing the specified number of copies of the given string

```js
// Syntax
repeat(count)
// Example
function f1() {
    var text = "Hello World";
    var result = text.repeat(2);
    console.log(result)
}
f1()
// "I feel Happy! Happy! Happy! "
const mood = 'Happy! ';
console.log(`I feel ${mood.repeat(3)}`);
// Expected output: "I feel Happy! Happy! Happy! "
```

### 11. `replace()`:

**Parameters**:
1. search String: The value, or regular expression, to search for.
2. new Value: The new value to replace with.

**Return**:
* A new string where specified value has been replaced.

```js
// Syntax
replace(searchString, newValue)
// Example 1
const p = 'The quick brown fox jumps over the lazy dog and the dog reacted';
console.log(p.replace('dog', 'monkey'));
// "The quick brown fox jumps over the lazy monkey and the dog reacted"
const regex = /Dog/i;
console.log(p.replace(regex, 'ferret'));
// "The quick brown fox jumps over the lazy ferret and the dog reacted"

// Example 2
function f1(){
    var str = "Mr Blue has a blue house and a blue car";
    var res = str.replace("blue","red");
    console.log(res)         // Mr Blue has a red house and a blue car
}
f1()

// Global replacement
var res = str.replace(/blue/g,"red");
document.write(res)        // Mr Blue has a red house and a red car

 // case-insensitive
var res = str.replace(/blue/i,"red");
document.write(res)       // Mr red has a blue house and a blue car

// Global case-insensitive:
var res = str.replace(/blue/gi,"red");
document.write(res)     // Mr red has a red house and a red car
```

### 12. `replaceAll()`:

**Parameters**:
1. search String: The value, or regular expression, to search for.
2. new Value: The new value to replace with.

**Return**:
* A new string, with all matches of a pattern replaced by a replacement.

```js
// Syntax
replace(searchString, newValue)
// Example
const p = 'The quick brown fox jumps over the lazy dog and the dog barked';
console.log(p.replaceAll('dog', 'monkey'));
// "The quick brown fox jumps over the lazy monkey and the monkey barked"

// Global flag required when calling replaceAll with regex
const regex = /Dog/ig;
console.log(p.replaceAll(regex, 'ferret'));
// "The quick brown fox jumps over the lazy ferret and the ferret barked"
```

### 13. `search()`:
* executes a search for a match between a regular expression and this String object.

**Parameters**:
1. search Value: The search value or search character or regular expression (or a string that will be converted to a regular expression), to search for.

**Return**:
* The position of the 1st match. -1, if no match.

```js
// Syntax
search(regexp)

// Example
const paragraph = 'The quick brown fox jumps over the lazy dog, the dog barked?';
// Any character that is not a word character or whitespace
const regex = /[^\w\s]/g;
console.log(paragraph.search(regex));			// 43
console.log(paragraph[paragraph.search(regex)]);	// ","

// Example
var string = "Hello World";
const searchString = (input) => {
  var res = string.search(input)
  console.log(res)
}
searchString('l')	// 2
searchString('z')	// -1
```

### 14. `slice()`:
* extracts a section of a string and returns it as a new string, without modifying the original string.

**Parameters**:
1. index start: The index of the first character to include in the returned string. The start position.
2. index end (optional): The end position (upto, but not including). Default is string length

**Return**:
* A new string containing extracted part of the string.

```js
// Syntax
slice(indexStart)
slice(indexStart, indexEnd)

// Example
var string = 'Hello World';
const stringSlice = (indexStart, indexEnd) => {
  const res = string.slice(indexStart, indexEnd)
  console.log(res)
}
stringSlice(6)			// "World"
// read the values towards Ending
stringSlice(6, 11)		// "World"
// Not Valid towards beginning
stringSlice(6, 0)		// ""
```

### 15. `split()`:
* takes a pattern and divides a String into an ordered list of substrings by searching for the pattern.
* puts these substrings into an array, and returns the array.

**Parameters**

1. separator (optional): 
    - If separator contains multiple characters, that entire character sequence must be found in order to split.
    - If separator is omitted or doesnot occur in string, the returned array contains one element consisting of the entire string.
    - If separator appears at the beginning (or end) of the string, it still has the effect of splitting. The result is an empty (i.e., zero length) string, which appears at the first (or last) position of the returned array.
    - If separator is an empty string(""), string is converted to an array of each of its UTF-16 characters.

2. limit (optional): 
    - A non-negative integer specifying a limit on the number of substrings to be included in the array.
    - If provided, splits the string at each occurence of the specified separator., but stops when limit entries have been placed in the array.
    - Any leftover text is not included in the array at all.
    - The array may contain fewer entries than limit if the end of the string is reached before the limit is reached, If limit is 0, [ ] is returned.

**Return**:
* Divides a string into an ordered list of substrings, put these substrings into an array, and returns the array.

```js
// Syntax
split(separator)
split(separator, limit)

// Example
const str = 'The quick brown fox jumps over the lazy dog.';
const words = str.split(' ');
console.log(words[3]);		// "fox"
const chars = str.split('');
console.log(chars[8]);		// "k"
const strCopy = str.split();
console.log(strCopy);		// Array ["The quick brown fox jumps over the lazy dog."]
```

### 16. `substring()`:
* returns the part of the string from the start index upto and excluding the end index, or to the end of the string if no end index is supplied.

**Parameters**:
1. index start: The index of the first character to include in the returned substring.
2. index end (optional): The index of the first character to exclude from the returned string

**Return**:
* A new string containing specified part of the given string.

```js
// Syntax
substring(indexStart)
substring(indexStart, indexEnd)

// Example
var string = 'Hello World';
const stringProp = (indexStart, indexEnd) => {
  const stringSlice = string.slice(indexStart, indexEnd)
  const stringSubstring = string.substring(indexStart, indexEnd)
  console.log(`String slice value: ${stringSlice}`)
  console.log(`String substring value: ${stringSubstring}`)
}
// Towards ending
stringProp(6,11);
// "String slice value: World"
// "String substring value: World"

// Towards beginning
stringProp(6,0);
// "String slice value: "
// "String substring value: Hello "
```

-----------

#### Difference between substring() and slice():
1. If second parameter is lessthan first parameter, substring() will swap both and return resulting substring. But slice() will just return empty substring.
```js
var string = 'Hello World';
const stringProp = (indexStart, indexEnd) => {
  const stringSlice = string.slice(indexStart, indexEnd)
  const stringSubstring = string.substring(indexStart, indexEnd)
  console.log(`String slice value: ${stringSlice}`)
  console.log(`String substring value: ${stringSubstring}`)
}
stringProp(6,0)
// "String slice value: "
// "String substring value: Hello "
```

2. If either or both of the arguments are negative or NaN, the substring() method treats them as if they were 0.
3. slice() also treats NaN arguments as 0, but when it is given negative values it counts backwards from the end of the string to find the indexes.

```js
stringProp(-5, 2)
stringProp(-5, -2)

// "String slice value: "
// "String substring value: He"
// "String slice value: Wor"
// "String substring value: "
```

-----------


### 17. `toLowerCase()`:

**Return**:
* A new string representing the calling string converted to lowercase.

```js
// Syntax
toLowerCase()

// Example
const sentence = 'HELLO WORLD';
console.log(sentence.toLowerCase());
// "hello world"
```

### 18. `toUpperCase()`:

**Return**:
* A new string representing the calling string converted to uppercase.

```js
// Syntax
toUpperCase()

// Example
const sentence = 'hello world';
console.log(sentence.toUpperCase());
// "HELLO WORLD"
```

### 19. `toString()`:

**Return value**:
* A string representing the specified string value.

```js
// Syntax
toString()

// Example
const stringObj = new String('foo');
console.log(stringObj);			// String { "foo" }
console.log(stringObj.toString());	// "foo"
```

### 20. `trim()`:

**Return**:
* A new string representing the given stripped of whitespace from both its beginning and end

```js
// Syntax
trim()

// Example
const greeting = '   Hello world!   ';
console.log(greeting);		// "   Hello world!   ";
console.log(greeting.trim());	// "Hello world!";
```

```html
<!DOCTYPE html>
<html>
    <head>
        <title>trim()</title>
        <script>
            function submitClick(){
                var name = document.getElementById("txtName").value;
                var msg = document.getElementById("msg");
                if(name.trim()=="John"){
                    msg.innerHTML = "Valid Data";
                }
                else{
                   msg.innerHTML = "Invalid Data";
                }
            }
        </script>
    </head>
    <body>
        <p>Please Enter Name With John</p>
        <fieldset>
            <legend>Enter Your Name</legend>
            <input type="text" id="txtName"/><br><br>
            <button type="button" onclick="submitClick()">Submit</button>
            <h1 id="msg"></h1>
        </fieldset>
    </body>
</html>
```

### 21. `valueOf()`:

**Return**:
* A string representing the primitive value of a given string object

```js
// Syntax
valueOf()

// Example
const x = new String("Hello world");
console.log(x.valueOf()); // 'Hello world'
```
