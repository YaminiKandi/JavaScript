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
        // document.write(`Password you enteres contains ${len} characters please enter password with min 8 characters`.fontcolor("red").italics())
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
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
               msg.innerHTML = `You enetered password contains ${len} chars plzz enter password with min 8 chars`;
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

### 2. charCodeAt():
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

### 3. concat():
<h4>Parameters</h4>

* One or more strings to concatenate

<h4>Return</h4>

*  A new string containing the combined text of the strings provided

```js
function f1(){
    var str1 = "Hello ";
    var str2 = "World!";
    document.write(str1.concat(str2))
}
f1()
```
```js
function f1() {
    var str1 = "Welcome";
    var str2 = "to";
    var str3 = "MyWorld";
    document.write(str1.concat(" ",str2," ",str3))
}
f1()
```
### 4. startsWith():
<h4>Parameters</h4>

* search String: The characters to be searched for at the start of this string
* position (optional): The position in this string at which to begin searching for searchString. Defaults to 0.

<h4>Return</h4>

* true if the given characters are found at the beginning of the string; Otherwise, false
###### Checking for type of card using starting values
```html
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

### 5. endsWith():
<h4>Parameters</h4>

* search String: The characters to be searched for at the end of the string
* length (optional): If provided, it is used as the length of the string. Defaults to str.length.

<h4>Return</h4>

* true if the given characters are found at the end of the string; Otherwise, false

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

### 6. indexOf():
<h4>Parameters</h4>

* search String: Substring to search for. If this is not passed, it will be coerced to 'undefined'.
* positional (optional): If position > length of given string, method wont search. If position < 0, then position = 0

<h4>Return</h4>

* The index of the first occurence of searchString found, or -1 if not found

```js
function f1(){
    var str = "Welcome to Myworld";
    var pos = str.indexOf("t");
    document.write(pos);
}
f1()
```
```js
function f1(){
    var str = "Welcome to Myworld";
    var pos = str.indexOf("e");
    document.write(pos);
}
f1()
```
return -1:
```js
function f1(){
    var str = "Welcome to Myworld";
    var pos = str.indexOf("x");
    document.write(pos);
}
f1()
```

### 7. lastIndexOf():
<h4>Parameters</h4>

* search String: Substring to search for. If this is not passed, it will be coerced to 'undefined'.
* positional (optional): If position < 0, then position = 0

<h4>Return</h4>

* The index of the last occurence of searchString found, or -1 if not found

```js
function f1(){
    var str = "Welcome to Myworld";
    var pos = str.lastIndexOf("l");
    document.write(pos);
}
f1()
```
return -1:
```js
function f1(){
    var str = "Welcome to Myworld";
    var pos = str.lastIndexOf("x");
    document.write(pos);
}
f1()
```

### 8. match():
<h4>Parameters</h4>

* match: The search value. A regular expression (or a string that will be converted to a regular expression). 

<h4>Return</h4>

* An array containing the matches. null if no match is found.
* It returns true if matching with regular expression else it return false

```html
<!DOCTYPE html>
<html>
    <head>
        <title>match()</title>
        <script>
            function submitClick(){
               var name = document.getElementById("txtName").value;
               var msg = document.getElementById("msg");
               var Regexp = /^[A-Za-z]+$/;

               if(name==""){
                  msg.innerHTML = "Plzz Enter Your Name";
               }
               else{
                   if(name.match(Regexp)){
                       msg.innerHTML = name;
                   }
                   else{
                       msg.innerHTML = "Plzz Enter a Valid Name";
                   }
               }
            }
        </script>
    </head>
    <body>
        <fieldset>
            <legend>Enter Your Name</legend>
            <input type="text" id="txtName"/><br><br>
            <button type="submit" onclick="submitClick()">Submit</button>
        </fieldset>
        <h1 id="msg"></h1>
    </body>
</html>
```

### 9. repeat():
<h4>Parameters</h4>

* count: A non negative integer representing the specified number of copies of the given string.

<h4>Return</h4>

* A new string containing the specified number of copies of the given string

```js
function f1() {
    var text = "Hello World";
    var result = text.repeat(2);
    document.write(result)
}
f1()
```

### 10. replace():
<h4>Parameters</h4>

* search String: The value, or regular expression, to search for.
* new Value: The new value to replace with.

<h4>Return</h4>

* A new string where specified value has been replaced.

```js
function f1(){
    var str = "Mr Blue has a blue house and a blue car";
    var res = str.replace("blue","red");
    document.write(res)         // Mr Blue has a red house and a blue car
}
f1()
```
###### Global replacement
```js
function f1(){
    var str = "Mr Blue has a blue house and a blue car";
    var res = str.replace(/blue/g,"red");
    document.write(res)        // Mr Blue has a red house and a red car
}
f1()
```
###### case-insensitive:
```js
function f1(){
    var str = "Mr Blue has a blue house and a blue car";
    var res = str.replace(/blue/i,"red");
    document.write(res)       // Mr red has a blue house and a blue car
}
f1()
```
###### Global case-insensitive:
```js
function f1(){
    var str = "Mr Blue has a blue house and a blue car";
    var res = str.replace(/blue/gi,"red");
    document.write(res)     // Mr red has a red house and a red car
}
f1()
```

### 11. search():
<h4>Parameters</h4>

* search Value: The search value or search character or regular expression (or a string that will be converted to a regular expression), to search for.

<h4>Return</h4>

* The position of the 1st match. -1, if no match.

```js
function f1(){
    var str = "Hello World";
    var res = str.search("l");
    document.write(res)     // 2
}
f1()
```
###### no match
```js
function f1(){
    var str = "Hello World";
    var res = str.search("z");
    document.write(res)    // -1
}
f1()
```

### 12. split():
<h4>Parameters</h4>

* separator (optional): 
    1. If separator contains multiple characters, that entire character sequence must be found in order to split.
    2. If separator is omitted or doesnot occur in string, the returned array contains one element consisting of the entire string.
    3. If separator appears at the beginning (or end) of the string, it still has the effect of splitting. The result is an empty (i.e., zero length) string, which appears at the first (or last) position of the returned array.
    4. If separator is an empty string(""), string is converted to an array of each of its UTF-16 characters.

* limit (optional): 
    1. A non-negative integer specifying a limit on the number of substrings to be included in the array. 
    2. If provided, splits the string at each occurence of the specified separator., but stops when limit entries have been placed in the array. 
    3. Any leftover text is not included in the array at all. 
    4. The array may contain fewer entries than limit if the end of the string is reached before the limit is reached, If limit is 0, [ ] is returned.

<h4>Return</h4>

* Divides a string into an ordered list of substrings, put these substrings into an array, and returns the array.

### 13. slice():
<h4>Parameters</h4>

* index start: The index of the first character to include in the returned string. The start position.
* index end (optional): The end position (upto, but not including). Default is string length

<h4>Return</h4>

* A new string containing extracted part of the string.

###### It can read the values towards Ending
```js
function f1(){
    var str = "Hello World";
    var res = str.slice(6,11);
    document.write(res)     // World
}
f1()
```

###### Not Valid towards beginning
```js
function f1(){
    var str = "Hello World";
    var res = str.slice(6,0);
    document.write(res)
}
f1()
```

### 14. substring():
<h4>Parameters</h4>

* index start: The index of the first character to include in the returned substring.
* index end (optional): The index of the first character to exclude from the returned string

<h4>Return</h4>

* A new string containing specified part of the given string.

###### Towards ending
```js
function f1(){
    var str = "Hello World";
    var res = str.substring(6,11);
    document.write(res)
}
f1()
```

###### Towards beginning
```js
function f1(){
    var str = "Hello World";
    var res = str.substring(6,0);
    document.write(res)
}
f1()
```

### 15. substr(): 
(deprecated)
<h4>Parameters</h4>

* index start: The index of the first character to include in the returned substring.
* length (optional): Number of characters to be included in the returned string

<h4>Return</h4>

* A new string containing specified part of the given string.

```js
function f1(){
    var str = "Hello World";
    var res = str.substr(6,2);
    document.write(res)
}
f1()
```
###### Read 6 characters from end
```js
function f1(){
    var str = "Hello World";
    var res = str.substr(-6);
    document.write(res)
}
f1()
```
-----------

#### Difference between substring() and slice():

1. If second parameter is lessthan first parameter, substring() will swap both and return resulting substring. But slice() will just return empty substring.
2. If parameters are zero. substring() will treat them as zero, slice() will count backwards from end of the string ti find the right indices.

-----------


### 16. toLowerCase():
<h4>Return</h4>

* A new string representing the calling string converted to lowercase.

```js
function f1(){
    var str = "HELLO WORLD";
    var res = str.toLowerCase();
    document.write(res)
}
f1()
```

### 17. toUpperCase():

<h4>Return</h4>

* A new string representing the calling string converted to uppercase.

```js
function f1(){
    var str = "Hello World";
    var res = str.toUpperCase();
    document.write(res)
}
f1()
```

### 18. trim():

<h4>Return</h4>

* A new string representing the given stripped of whitespace from both its beginning and end


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

### 19. valueOf():

<h4>Return</h4>

* A string representing the primitive value of given string object
