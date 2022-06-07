### Popup Boxes:
#### 1. Alert Box:
* An alert box is often used if you want to make sure information comes through to the user.
* When an alert box pops up, the user will have to click "OK" to proceed.
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Popup Alert box</title>
        <script>
            window.alert('Welcome to JS');
        </script>
    </head>
</html>
```
* The window.alert() method can be written without the window prefix.

Example:
```js
alert("I am an alert box!");
```
#### 2. Confirm Box:
* A confirm box is often used if you want the user to verify or accept something.
* When a confirm box pops up, the user will have to click either "OK" or "Cancel" to proceed.
* If the user clicks "OK", the box returns true. If the user clicks "Cancel", the box returns false.
```js
window.confirm('Are you sure, you really want to make a payment');
confirm('Are you sure, you really want to make a payment');
```
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Popup Confirm box</title>
    </head>
    <body>
        <button onclick="myFunction()">Try it</button>
        <p id="demo"></p>
        <script>
            function myFunction() {
            var txt;
            if (confirm("Press a button!")) {
                txt = "You pressed OK!";
            } else {
                txt = "You pressed Cancel!";
            }
            document.getElementById("demo").innerHTML = txt;
            }
        </script>
    </body>
</html>
```
#### 3. Prompt Box:
* A prompt box is often used if you want the user to input a value before entering a page.
* When a prompt box pops up, the user will have to click either "OK" or "Cancel" to proceed after entering an input value.
* If the user clicks "OK" the box returns the input value. If the user clicks "Cancel" the box returns null.
```js
window.prompt('Enter Your Name:');
prompt('Enter your Name');
```
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Popup Prompt</title>
    </head>
    <body>
        <h2>JavaScript Prompt</h2>
        <button onclick="myFunction()">Try it</button>
        <p id="demo"></p>
        <script>
            function myFunction() {
            let text;
            let person = prompt("Please enter your name:", "Harry Potter");
            if (person == null || person == "") {
                text = "User cancelled the prompt.";
            } else {
                text = "Hello " + person + "! How are you today?";
            }
            document.getElementById("demo").innerHTML = text;
            }
        </script>
    </body>
</html>
```
#### Line Breaks:
* To display linebreaks inside a popup box, use "/n".

Example:
```js
alert('Hello \nHow are you?');
```