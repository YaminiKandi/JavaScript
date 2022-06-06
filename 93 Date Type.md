Date Type in Javascript:
------------------------
Date is a Literal with number and special chars.
Javascript provides "Date()" constructor to handlr date values.
"Date()" allocates memory for date type value.
"Date()" Loads current date and time into memory.
you can configure specific date in "yy-mm-dd" format.

Syntax:
-------
var date = new Date();

```js
function f1(){
    var date = new Date();  
    document.write(date);   
}
f1()
```

Date provides following methods for accessing date and time.

getHours() [0-23]
getMinutes() [0-59]
getSeconds() [0-59]
getMilliSeconds() [0-99]
getDate() [28]
getDay() [weekday number 0=sunday,6=saturday]
getMonth() [0=january,11=december]
getFullYear() [CurrentYear]
toLocaleDateString()
toLocaleTimeString()


```html
<!DOCTYPE html>
<html>
    <head>
        <title>Date()</title>
        <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.css">
        <link rel="stylesheet" href="../node_modules/bootstrap-icons/font/bootstrap-icons.css">
        <script>
            function bodyLoad(){
                var now = new Date();
                var date = document.getElementById("date");
                var month = now.getMonth();
                var day = now.getDay();
                var dt = now.getDate();
                var year = now.getFullYear(); 
                var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
                var days = ["Sun","Mon","Tues","Wed","Thu","Fri","Sat"];
                date.innerHTML = `${days[day]} ${dt} ${months[month]} ${year}`;
                setInterval(getTime,1000);
                getSalutation();
            }
            function getTime(){
                var now = new Date();
                document.getElementById("time").innerHTML = now.toLocaleTimeString();
            }
            function getSalutation(){
                var now = new Date();
                var hrs = now.getHours();
                var salute = document.getElementById("salute");
                var icon = document.getElementById("icon");
                if(hrs>=0 && hrs<=11){
                    salute.innerHTML = "Good-Morning";
                    icon.className= "bi bi-brightness-alt-high";
                }else if(hrs>=12 && hrs<=16){
                      salute.innerHTML ="Good-Afternoon";
                      icon.className="bi bi-brightness-high";
                }else if(hrs>=17 && hrs<=19){
                    salute.innerHTML ="Good-Evening";
                      icon.className="bi bi-brightness-alt-high-fill";
                }else if(hrs>=20 && hrs<=23){
                    salute.innerHTML ="Good-Night";
                      icon.className="bi bi-brightness-high";
                }
            }
        </script>
    </head>
    <body class="container-fluid" onload="bodyLoad()">
       <div class="btn-toolbar justify-content-between bg-danger mt-4 text-white p-3">
           <div class="btn-group">
               <span class="bi bi-cart4">Amazon Shopping</span>
           </div>
           <div class="btn-group">
              <span id="icon" style="font-size:20px;font-weight:bold"></span>
              <span id="salute"></span>
           </div>
           <div class="btn-group">
               <span id="date"></span>&nbsp;|&nbsp;
               <span class="bi bi-alarm"></span>
               <span id="time"></span>   
           </div>
       </div>
    </body>
</html>
```