## Dropdown validation in Javascript:
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Dropdown Validation</title>
        <script>
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
        </script>
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
</html>
```
## How to get HTML elements by using ClassName:
* We cannot add styles to more than one element by using id reference.
```html
<!DOCTYPE html>
<html>
    <head>
        <script>
            function addCss() {
                document.getElementById("txt").style.color="red";
            }
        </script>
    </head>
    <body>
        <h1 id="txt">Welcome to MyWorld</h1>
        <h1 id="txt">Welcome to MyWorld</h1>
        <button type="button" onclick="addCss()">CSS</button>
    </body>
</html>
```
* For more than one element, we use class refernce.
* We cannot directly add styles for more than one element.
`document.getElementsByClassName("txt").style.color="blue";`




## Checkbox Validation:
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Checkbox Validation</title>
        <script>
            function submitClick(){
                var skills = document.getElementsByClassName("skills");
                var len = skills.length;
                var msg = document.getElementById("msg");
                for(var i=0;i<len;i++){
                    if(skills[i].checked){
                        msg.innerHTML += skills[i].value+" ";
                    }
                }
            }
        </script>
    </head>
    <body>
        <input type="checkbox" value="Html" class="skills"/>Html
        <input type="checkbox" value="Css" class="skills"/>Css
        <input type="checkbox" value="Bootstrap" class="skills"/>Bootstrap
        <input type="checkbox" value="Javascript" class="skills"/>Javascript
        <input type="checkbox" value="jQuery" class="skills"/>jQuery<br><br>
        <button type="button" onclick="submitClick()">Submit</button>
        <h1 id="msg"></h1>
    </body>
</html>
```

JSON -- Javascript Object Notation:
* In Computer Programming Object is used to handle data and Functionality.
* "Alan Kay" introduced the concept of object into Computer Programming in early 1960's.
* The purpose of object is to keep all related data and Functionality together.
* If object is configured for data only then it is referred as "JSON".

```js
function f1(){
    var product = {
        Name : "",
        Price : 0,
        Stock : false,
        Qty : 0,
        ShippedTo : [],
        Total : function(){
            return this.Price * this.Qty
        },
        Print : function(){
            document.write(`
            <dl>
                <dt>Product Name</dt>
                <dd>${this.Name}</dd>
                <dt>Product Price</dt>
                <dd>${this.Price}</dd>
                <dt>Product Quantity</dt>
                <dd>${this.Qty}</dd>
                <dt> Total</dt>
                <dd>${this.Total()}</dd>
                <dt>Stock</dt>
                <dd>${(this.Stock==true)?"In Stock":"Out Of Stock"}</dd>
                <dt>ShippedTo</dt>
                <dd>${this.ShippedTo.toString()}</dd>
            </dl>
            `)
        }
    }
    product.Name = "Samsung Tv";
    product.Price = 55000.55;
    product.Qty = 3;
    product.Stock = false;
    product.ShippedTo = ["Hyderabad","Vijayawada"];
    product.Print();
}
f1();
```

## Nested Iterations:
```js
var categories = [
    {Category:"Electronics",Products:["Boat Airdopes","JBL Speaker"]},
    {Category:"Footwear",Products:["Nike Casuals","Lee Cooper"]}
];

function bodyLoad(){
    var lstCategories = document.getElementById("lstCategories");

    for(var item of categories){
        var li = document.createElement("li");
        li.innerHTML = item.Category;
        lstCategories.appendChild(li);

        var ul = document.createElement("ul");

        for(var product of item.Products){
            var innerLi = document.createElement("li");
            innerLi.innerHTML = product;
            ul.appendChild(innerLi);
        }
        li.appendChild(ul);
    }
}
```
```html
    <body onload="bodyLoad()">
       <ol id="lstCategories">
       </ol>   
    </body>
```