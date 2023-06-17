## Dropdown validation in Javascript:
```js
function cityChange(){
    var city = document.getElementById("city").value; 
    var msg = document.getElementById("msg");
    if(city=="Choose a City"){
        msg.innerHTML = "Plzz Select a City";
    }
    else{
        msg.innerHTML = city;
    }
}
```
```html
<head>
    <script src="app.js"></script>
</head>
<body>
    <select onchange="cityChange()" id="city">
        <option>Choose a City</option>
        <option>Vijayawada</option>
        <option>Vizag</option>
        <option>Kurnool</option>
        <option>Guntur</option>
        <option>Eluru</option>
    </select>
    <h1 id="msg"></h1>
</body>
```
## How to get HTML elements by using ClassName:
* We cannot add styles to more than one element by using id reference.
```js
function addCss() {
    document.getElementById("txt").style.color="red";
}
```
```html
<body>
    <h1 id="txt">Welcome to MyWorld</h1>
    <h1 id="txt">Welcome to MyWorld</h1>
    <button type="button" onclick="addCss()">CSS</button>
</body>
```
* For more than one element, we use class refernce.
* We cannot directly add styles for more than one element.
`document.getElementsByClassName("txt").style.color="blue";` -- Wrong
```js
function addCss() {
    var x = document.getElementsByClassName("txt");
    var len = x.length;

    for(var i=0; i<len; i++){
        x[i].style.color = "blue";
    }
}
```
```html
<body>
    <h1 class="txt">Welcome to MyWorld</h1>
    <h1 class="txt">Welcome to MyWorld</h1>
    <button type="button" onclick="addCss()">CSS</button>
</body>
``` 
```js 
function addCss() {     // Using iterator
    var x = document.getElementsByClassName("txt");
    var len = x.length;
    for(var item of x){
        item.style.color = "blue";
    }
}
```
## Radio Button Validation:
```html
<!DOCTYPE html>
<html>
    <head>
        <script src="app.js"></script>
    </head>
    <body>
        <input type="radio" name="gender" class="gender" value="Male"/>Male
        <input type="radio" name="gender" class="gender" value="Female"/>Female
        <input type="radio" name="gender" class="gender" value="Others"/>Others <br><br>
        <button type="button" onclick="submitClick()">Submit</button>
        <h1 id="res"></h1>
    </body>
</html>
```
```js
function submitClick() {
    var gender = document.getElementsByClassName("gender");
    var len = gender.length;
    var msg = document.getElementById("res")
    for(var i=0; i<len; i++){
        if(gender[i].checked){
            res.innerHTML = gender[i].value;
        }
    }
}
```

## Checkbox Validation:
```html
<body>
    <input type="checkbox" value="Html" class="skills"/>Html
    <input type="checkbox" value="Css" class="skills"/>Css
    <input type="checkbox" value="Bootstrap" class="skills"/>Bootstrap
    <input type="checkbox" value="Javascript" class="skills"/>Javascript
    <input type="checkbox" value="jQuery" class="skills"/>jQuery<br><br>
    <button type="button" onclick="submitClick()">Submit</button>
    <h1 id="msg"></h1>
</body>
```
```js
function submitClick(){
    var skills = document.getElementsByClassName("skills");
    var len = skills.length;
    var msg = document.getElementById("msg");
    for(var i=0; i<len; i++){
        if(skills[i].checked){
            msg.innerHTML += skills[i].value + " ";
        }
    }
}
```
