## String Handling in Javascript:
* Javascript provides a "String" Object.
* It is a Built-in Object with set of properties and methods, which are used to control the string.
* properties contains Data, Methods define Functionality.
* Normally, strings like "Hello World", cannot have methods or properties because they are not objects.
* But with JavaScript, methods and properties are also available to strings, because JavaScript treats strings as objects when executing methods and properties.

### Property:
#### 1. Length:
It returns the total number of chars in a string.
```html
<!DOCTYPE html>
<html>
    <head>
        <title>String Length Property</title>
        <script>
            function demo(){
              var  str = "Hello World";  
              var len = str.length;
              document.write("Length is "+len)
            }
            demo();
        </script>
    </head>
    <body>
    </body>
</html>
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
                alert("Your Password is"+password)
            }else{
               document.write("Password You Entered contain less than 8 chars")
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
                document.write(`You Entered Password is ${password}`)
            }else{
               document.write(`You enetered password contains ${len} chars plzz enter password with min 8 chars`)
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

### String Formatting Methods:
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
                document.write(`You Entered Password is ${password}`.fontcolor("green").bold())
            }else{
               document.write(`You enetered password contains ${len} chars plzz enter password with min 8 chars`.fontcolor("red").italics())
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
Formatting string with style attributes and classes:
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

string manipulating methods:
----------------------------
match():
--------
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

charAt() & charCodeAt():
------------------------
charAt() returns the char present at specific Index Number.
```html
<!DOCTYPE html>
<html>
    <head>
        <title>charAt()</title>
        <script>
            function f1(){
            var str = "Faber Info Tech";
            var char = str.charAt(8);
            document.write(char);
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
        <title>charAt()</title>
        <script>
            function submitClick(){
                var mobile = document.getElementById("txtNumber").value;
                var len = mobile.length;
                var pos = mobile.charAt(0);
                var msg = document.getElementById("msg");

                if(mobile==""){
                    msg.innerHTML = "Plzz Enter Your Mobile No".fontcolor("red");
                }
                else{
                     if(len==10){
                        
                        if(pos==9 || pos==8 || pos==7 || pos==6){
                            msg.innerHTML = mobile;  
                        }
                        else{
                            msg.innerHTML = "Plzz Provide a Valid Mobile Number";
                        }

                     } 
                     else{
                       msg.innerHTML = "Plzz Enter Mobile No With 10 Digits Only";
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

charCodeAt():
-------------
It returns the ASCII Code of char at specific Index.

Uppercase alphabets ASCII values starts from 65 to 90.
Lowercase alphabets ASCII values starts from 97 to 122.
```html
<!DOCTYPE html>
<html>
    <head>
        <title>charCodeAt()</title>
        <script>
            function f1(){
               var str = "FABER INFO TECH";
               var char = str.charCodeAt(2);  
               document.write(`ASCII Value is ${char}`)
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
        <title>charCodeAt()</title>
        <script>
            function f1(){
               var str = "faber info tech";
               var char = str.charCodeAt(1);  
               document.write(`ASCII Value is ${char}`)
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
        <h1>Plzz Start Your Name with Uppercase Letter</h1>
        <label>Enter Your Name</label>
        <input type="text" id="txtName"/><br><br>
        <button type="button" onclick="submitClick()">Submit</button>
        <h1 id="msg"></h1>
    </body>
</html>
```

indexOf(),lastIndexOf():
------------------------
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
