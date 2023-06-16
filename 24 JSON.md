## JSON -- Javascript Object Notation:
* In Computer Programming, Object is used to handle data and Functionality.
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

### JSON:
JSON - JavaScript Object Notation
* JSON is technically a subset of the object literal syntax.(Meaning - anything that is JSON valid is also valid JavaScript object literal syntax)
* So JSON has stricter rules about what it can be.
* JSON, isn't really a part of JavaScript but its so easy for JavaScript what JSON is, JavaScript come with some built-in functionality to transfer between the two. 
* So, for any object we can do JSON.
* JSON.stringify convert the object to a JSON string.

```js
var objectLiteral={
    firstname:'Yamini',
    isAProgrammer:true
}
console.log(JSON.stringify(objectLiteral));
var jsonValue = JSON.parse('{ "firstname" : "Mary", "isAProgrammer" : true }');
console.log(jsonValue);
```
```
Output:
{"firstname":"Yamini","isAProgrammer":true}
Object{firstname: 'Yamini', isAProgrammer: true}
```
Here, we are converting an object into an JSON string and then converting that JSON string again to an object.
