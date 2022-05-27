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
```js
function submitClick(){
    var password =   document.getElementById("txtPassword").value;
    var len = password.length;
    //simple Decision
    if(len>=8){
        document.write(`Your Password is ${password}`)
    }else{
        document.write(`Password you entered contains ${len} characters please enter password with min 8 characters`)
    }
}
```
##### String formatting
```js
function submitClick(){
    var password =   document.getElementById("txtPassword").value;
    var len = password.length;
    //simple Decision
    if(len>=8){
        document.write(`Your Password is ${password}`.fontcolor("green").bold())
    }else{
        document.write(`Password you enteres contains ${len} characters please enter password with min 8 characters`.fontcolor("red").italics())
    }
}
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

### string manipulating methods:
#### 1. charAt():
<h5>Parameters</h5>

* index: An integer between 0 and str.length-1. If the index cannot be converted to the integer or no index is provided, the default is 0, so the first character of string is returned.

<h5>Return</h5>

* A string representing the character (exactly one UTF-16 code unit) at the specified index. If index is out of range (invalid), charAt() returns an empty string.
```js
function f1(){
var str = "Hello World";
var char = str.charAt(8);
document.write(char);
}
f1()
```
###### Checking for a valid Mobile number
```html
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

#### 2. charCodeAt():
<h5>Parameters</h5>

* index: The index of a character i.e., an integer between o and str.length-1. This index value is optional ( default value = 0 )

<h5>Return</h5>

* The unicode (ASCII) of the charcter at the specified index. If index is invalid, charCodeAt() returns NaN
* Uppercase alphabets ASCII values starts from 65 to 90.
* Lowercase alphabets ASCII values starts from 97 to 122.
```js
function f1(){
    var str = "HELLO WORLD";
    var char = str.charCodeAt(2);  
    document.write(`ASCII Value is ${char}`)
}
f1()
```
###### Checking for a valid name (starting with Uppercase letter)
```html
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
#### 3. concat():
<h5>Parameters</h5>

* One or more strings to concatenate

<h5>Return</h5>

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
#### 4. startsWith():
startsWith() & endsWith():
--------------------------
They returns true when the string starts with ends with given set of chars.

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
                     img.src="../assets/rupay.jpg";
                }
                else{
                     if(cardNumber.startsWith("1122")){
                        img.src="../assets/mastercard.png";
                     }
                     else{
                        img.src="../assets/visa.png";
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


endsWith():
-----------
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



indexOf(),lastIndexOf():
search of any specific char in a string  and return its index number.
if char not found then it returns "-1".
lastIndexOf() will search for last occurrence of char in a string.
```html
<!DOCTYPE html>
<html>
    <head>
        <title>indexOf()</title>
        <script>
            function f1(){
                 var str = "faber info tech";
                 var pos = str.indexOf("a");
                 document.write(pos);
            }
            f1()
        </script>
    </head>
</html>
```
```html
<!DOCTYPE html>
<html>
    <head>
        <title>indexOf()</title>
        <script>
            function f1(){
                 var str = "faber info tech";
                 var pos = str.indexOf("e");
                 document.write(pos);
            }
            f1()
        </script>
    </head>
</html>
```
return -1:
```html
<!DOCTYPE html>
<html>
    <head>
        <title>indexOf()</title>
        <script>
            function f1(){
                 var str = "faber info tech";
                 var pos = str.indexOf("x");
                 document.write(pos);
            }
            f1()
        </script>
    </head>
</html>
```

lastIndexOf():
```html
<!DOCTYPE html>
<html>
    <head>
        <title>lastIndexOf()</title>
        <script>
            function f1(){
                 var str = "faber info tech";
                 var pos = str.lastIndexOf("e");
                 document.write(pos);
            }
            f1()
        </script>
    </head>
</html>
```
return -1:
```html
<!DOCTYPE html>
<html>
    <head>
        <title>lastIndexOf()</title>
        <script>
            function f1(){
                 var str = "faber info tech";
                 var pos = str.lastIndexOf("x");
                 document.write(pos);
            }
            f1()
        </script>
    </head>
</html>
```

match():
It is used to verify the string and compare with the regular expression.
It returns true if matching with regular expression else it return false
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


search():
search of any specific char in a string  and return its index number.
if char not found then it returns "-1".
```html
<!DOCTYPE html>
<html>
    <head>
        <title>search()</title>
        <script>
            function f1(){
                 var str = "faber info tech";
                 var pos = str.search("e");
                 document.write(pos);
            }
            f1()
        </script>
    </head>
</html>
```
returns -1:
```html
<!DOCTYPE html>
<html>
    <head>
        <title>search()</title>
        <script>
            function f1(){
                 var str = "faber info tech";
                 var pos = str.search("w");
                 document.write(pos);
            }
            f1()
        </script>
    </head>
</html>
```

toUpperCase():
```html
<!DOCTYPE html>
<html>
    <head>
        <title>toUpperCase()</title>
        <script>
            function f1(){
               var str = "faber info tech";
               var res = str.toUpperCase();
               document.write(res);  
            }
            f1()
        </script>
    </head>
</html>
```

toLowerCase():
```html
<!DOCTYPE html>
<html>
    <head>
        <title>toKLowerCase()</title>
        <script>
            function f1(){
               var str = "FABER INFO TECH";
               var res = str.toLowerCase();
               document.write(res);  
            }
            f1()
        </script>
    </head>
</html>
```
slice():
--------
It can read the values towards Ending.It uses start and End Index.

<!DOCTYPE html>
<html>
    <head>
        <title>slice()</title>
        <script>
             function f1(){
                var str = "Faber Info Tech";
                var res = str.slice(6,10);
                document.write(res)
             }
             f1()
        </script>
    </head>
</html>

Not Valid because towards beginning:
------------------------------------
<!DOCTYPE html>
<html>
    <head>
        <title>slice()</title>
        <script>
             function f1(){
                var str = "Faber Info Tech";
                var res = str.slice(6,0);
                document.write(res)
             }
             f1()
        </script>
    </head>
</html>


substring():
------------
It can read the values towards end or beginning of string.

<!DOCTYPE html>
<html>
    <head>
        <title>substring()</title>
        <script>
             function f1(){
                var str = "Faber Info Tech";
                var res = str.substring(6,10);
                document.write(res)
             }
             f1()
        </script>
    </head>
</html>


towards beginning:
------------------
<!DOCTYPE html>
<html>
    <head>
        <title>substring()</title>
        <script>
             function f1(){
                var str = "Faber Info Tech";
                var res = str.substring(6,0);
                document.write(res)
             }
             f1()
        </script>
    </head>
</html>


substr():
---------
It can read the value from specified Index to the Length of chars.

<!DOCTYPE html>
<html>
    <head>
        <title>substr()</title>
        <script>
             function f1(){
                var str = "Faber Info Tech";
                var res = str.substr(6);
                document.write(res)
             }
             f1()
        </script>
    </head>
</html>


Read 6 chars from end

<!DOCTYPE html>
<html>
    <head>
        <title>substr()</title>
        <script>
             function f1(){
                var str = "Faber Info Tech";
                var res = str.substr(-6);
                document.write(res)
             }
             f1()
        </script>
    </head>
</html>






replace():
----------
<!DOCTYPE html>
<html>
    <head>
        <title>replace()</title>
        <script>
             function f1(){
               var str = "FABER INFO TECH";
               var res = str.replace("TECH","TECHNOLOGIES");
               document.write(res)
             }
             f1()
        </script>
    </head>
</html>

case-insensitive:
-----------------
<!DOCTYPE html>
<html>
    <head>
        <title>replace()</title>
        <script>
             function f1(){
               var str = "FABER INFO TECH";
               var res = str.replace(/tech/i,"TECHNOLOGIES");
               document.write(res)
             }
             f1()
        </script>
    </head>
</html>



trim():
-------
it is used to remove trailing spaces.

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
        <p>Plzzz Enter Name With John</p>
        <fieldset>
            <legend>Enter Your Name</legend>
            <input type="text" id="txtName"/><br><br>
            <button type="button" onclick="submitClick()">Submit</button>
            <h1 id="msg"></h1>
        </fieldset>
    </body>
</html>