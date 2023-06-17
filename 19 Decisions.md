Simple Decision:
* It comprises of "if..else" clause
* It comprises of alternative statements to execute.
* One of statements are executed when condition is true and another set when condition is false.

Syntax:
if(condition){
    statements_if_true
}
else{
    statements_if_false
}

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Simple Decision</title>
        <script>
            var userDetails = {
                userName : "john",
                userPassword : 123
            }
            function loginclick(){
                var name = document.getElementById("txtName").value;
                var password = document.getElementById("txtPassword").value;
                var msg = document.getElementById("msg");

                if(name==userDetails.userName && password==userDetails.userPassword){
                     msg.innerHTML = "Log-In Success";
                }
                else{
                    msg.innerHTML = "Log-In Failed";
                }
            }
        </script>
    </head>
    <body>
        <fieldset>
            <legend>User Log-In</legend>
            <dl>
                <dt>User Name</dt>
                <dd>
                    <input type="text" id="txtName"/>
                </dd>
                <dt>Password</dt>
                <dd>
                    <input type="text" id="txtPassword"/>
                </dd>
            </dl>
            <button type="button" onclick="loginclick()">Log-In</button>
        </fieldset>
        <h1 id="msg"></h1>
    </body>
</html>
```

Nested Decision:
At a Time,you have to test only one Condition.
If the first condition true and check the next condition.
It is like Multi-Level Hierarchy.
we can identify problem in every condition and report.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Nested  Decision</title>
        <script>
            var userDetails = {
                userName : "john",
                userPassword : 123
            }
            function loginclick(){
                var name = document.getElementById("txtName").value;
                var password = document.getElementById("txtPassword").value;
                var msg = document.getElementById("msg");

                if(name==""){
                    msg.innerHTML = "Plzz Enter Your Name";
                }
                else{
                    if(name==userDetails.userName){
                        if(password==userDetails.userPassword){
                            msg.innerHTML = "Log-in Success";
                        }
                        else{
                            msg.innerHTML = "Invalid Password";
                        }
                    }
                    else{
                        msg.innerHTML = "Invalid UserName";  
                    }
                }
            }
        </script>
    </head>
    <body>
        <fieldset>
            <legend>User Log-In</legend>
            <dl>
                <dt>User Name</dt>
                <dd>
                    <input type="text" id="txtName"/>
                </dd>
                <dt>Password</dt>
                <dd>
                    <input type="text" id="txtPassword"/>
                </dd>
            </dl>
            <button type="button" onclick="loginclick()">Log-In</button>
        </fieldset>
        <h1 id="msg"></h1>
    </body>
</html>
```

Example 2:
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Nested  Decision</title>
        <script>
           var cardDetails = {
               cardNumber : "4444555566667777",
               cardCvv    : "202",
               cardExpiry : "2025"
           }

           function verifyCardNumber(){
              var cardnumber =  document.getElementById("cardNumber").value;

              if(cardnumber==cardDetails.cardNumber){
                 document.getElementById("cardCVV").disabled=false;    
              }else{
                document.getElementById("cardCVV").disabled=true;   
              }
           }
           function verifyCvv(){
               var cardcvv = document.getElementById("cardCVV").value;

               if(cardcvv==cardDetails.cardCvv){
                   document.getElementById("lstYears").disabled=false;
               }else{
                document.getElementById("lstYears").disabled=true;
               }
           }
           function verifyExpiry(){
               var cardexpiry = document.getElementById("lstYears").value;

               if(cardexpiry==cardDetails.cardExpiry){
                   document.getElementById("btn").disabled=false;
               }else{
                document.getElementById("btn").disabled=true;
               }
           }
           function payClick(){
            var cardnumber =  document.getElementById("cardNumber").value;
            var cardcvv = document.getElementById("cardCVV").value;
            var cardexpiry = document.getElementById("lstYears").value;
            var msg = document.getElementById("msg"); 

            if(cardnumber==cardDetails.cardNumber){
                if(cardcvv==cardDetails.cardCvv){
                    if(cardexpiry==cardDetails.cardExpiry){
                        msg.innerHTML = "Payment Success";
                    }else{
                        msg.innerHTML = "Invalid Expiry Date";
                    }
                }else{
                    msg.innerHTML = "Invalid CVV";
                }
            }else{
                msg.innerHTML = "Invalid CardNumber";
            }
           }
        </script>
    </head>
    <body>
        <fieldset>
            <legend>Card Details</legend>
            <dl>
                <dt>Card Number</dt>
                <dd>
                    <input type="text" id="cardNumber" onkeyup="verifyCardNumber()"/>
                </dd>
                <dt>CVV</dt>
                <dd>
                    <input type="text" id="cardCVV" disabled="disabled" onkeyup="verifyCvv()"/>
                </dd>
                <dt>Expiry Date</dt>
                <dd>
                    <select id="lstYears" disabled="disabled" onchange="verifyExpiry()">
                        <option>2022</option>
                        <option>2023</option>
                        <option>2024</option>
                        <option>2025</option>
                    </select>
                </dd>
            </dl>
            <button type="button" id="btn" disabled="disabled" onclick="payClick()">Pay</button>
        </fieldset>
        <h1 id="msg"></h1>
    </body>
</html>

Multiple Choices:
Providing more than one alternative.
Identyfying the specific alternative

Syntax:
if(condition1){
    Statements_if_Condition1_true
}
else if(condition2){
    Statements_if_Condition2_true
}
else{
    Statements_if_both_Conditions are false
}

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Multiple Choices</title>
        <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.css">
        <script>
            var userDetails = {
                Email : "john@gmail.com",
                Mobile : 9988776655,
                Password : "john@123"
            }
            function continueClick(){
                var usernameContainer = document.getElementById("username");
                var passwordContainer = document.getElementById("password");
                var userError = document.getElementById("userError");

                var txtUser = document.getElementById("txtUser").value;

                if(txtUser==userDetails.Email){
                      passwordContainer.style.display="block";
                      usernameContainer.style.display="none";
                }else if(txtUser==userDetails.Mobile){
                     passwordContainer.style.display="block";
                      usernameContainer.style.display="none";
                }else{
                    userError.innerHTML = "Invalid Email or Mobile No";
                }
            }
            function loginClick(){
                var password = document.getElementById("txtPassword").value;
                var passwordError = document.getElementById("passwordError");

                if(password==userDetails.Password){
                    alert("Log-In Success");
                }
                else{
                    passwordError.innerHTML = "Log-In Failed";
                }
            }
        </script>
    </head>
    <body class="container-fluid">
         <div class="align-items-center justify-content-center d-flex" style="height:400px">
             <fieldset class="mt-5 w-25">
                 <legend>Gmail Log-in</legend>
                 <div id="username">
                     <label>Email or Mobile</label>
                     <div>
                         <input type="text" id="txtUser" class="form-control"/>
                         <div class="text-danger" id="userError"></div>
                     </div>
                     <div class="d-grid mt-3">
                         <button type="button" class="btn btn-warning" onclick="continueClick()">Continue</button>
                     </div>
                 </div>
                 <div id="password" style="display:none">
                    <label>Password</label>
                    <div>
                        <input type="password" id="txtPassword" class="form-control"/>
                        <div class="text-danger" id="passwordError"></div>
                    </div>
                    <div class="d-grid mt-3">
                        <button type="button" class="btn btn-warning" onclick="loginClick()">Log-in</button>
                    </div>
                </div>
             </fieldset>
         </div>
    </body>
</html>
```

Mouse Events:
onmouseover 
onmouseout 
onmousedown 
onmouseup

onmouseover & onmouseout:
```html
<!DOCTYPE html>
<html>
    <head>
        <title>onmouseover & onmouseout</title>
    </head>
    <body>
        <marquee onmouseover="this.stop()" onmouseout="this.start()">
            <img src="../assets/boatairdopes.jpg" width="100" height="100">
            <img src="../assets/shirt.jpeg" width="100" height="100">
            <img src="../assets/jeans.jpg" width="100" height="100">
            <img src="../assets/speaker.jpg" width="100" height="100">
            <img src="../assets/shoe.jpg" width="100" height="100">
        </marquee>
    </body>
</html>
```

onmousedown & onmouseup:
```html
<!DOCTYPE html>
<html>
    <head>
        <title>onmousedown & onmouseup</title>
        <script>
            function showOffer(){
                document.getElementById("pic").src="../assets/offerbox.jpg";
            }
            function hideOffer(){
                document.getElementById("pic").src="../assets/giftbox.jpg";
            }
        </script>
    </head>
    <body>
        <div style="margin-top:40px">
            <img src="../assets/giftbox.jpg" id="pic" width="300" height="200" onmousedown="showOffer()" onmouseup="hideOffer()">
        </div>
    </body>
</html>
```
