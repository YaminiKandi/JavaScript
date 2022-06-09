### new:
* It is dynamic memory allocating operator.

Syntax: `var date = new Date();`

### in:
* It is used to verify the existence of a property in object and return a boolean value.

```js
function f1(){
    var product = {
        Name : "LG Tv",
        Price : 55000.55,
        Stock : false
    }
    delete product.Price;

    document.write(`
    is price a property of product? ${"Price" in product}
    `)
}
f1()
```
```js
function f1(){
    var product = {
        Name : "LG Tv",
        Price : 55000.55,
        Stock : false
    }
    

    document.write(`
    is price a property of product? ${"Price" in product}
    `)
}
f1()
```

### Void operator:
* void is used to discard the function or expression return value.
* It specifies no return value.

```html
<body>
    <a href="javascript:void()">Home</a>
</body>
```
```html
<a href="javascript:void(window.location.href='https://www.google.com')">Google</a>
```

## Javascript Statements:
* Statements in computer programming are used to control the execution flow.
* Statements are classified into following categories:
    1. Selection Statements - if, else, switch, case, default
    2. Looping Control Statements - for, while, do while
    3. Iteration Statements - For..in,For..of 
    4. Jump Statements - Break,Continue,return 
    5. Exception Handling Statements - try,catch,throw,finally         

### 1. Selection Statements:
* Selection Statements are used in Decision making.
* They control the execution flow according to suitable situation.
* The Keywords are if, else, switch, case, default

#### 'if' Statement:
* It is a Decision making Statement
* It executes a set of Statements when condition evaluates true and another set of Statements when condition evaluates false.
* The 'if' Statement has several forms 
   a. Forward Jump 
   b. Simple Decision 
   c. Multi-Level 
   d. Multiple

##### a. Forward Jump:
* It is a Decision Making approach where we will not configure any alternative Statement.
* A Block of Statements executes only when condition is true.

Syntax:
```js
if(condition){
    Statement_if_true
}
```

KFC Form:
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Forward Jump - KFC Form</title>
        <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.css">
        <script src="../node_modules/bootstrap/dist/js/bootstrap.bundle.js"></script>
        <script src="../node_modules/jquery/dist/jquery.js"></script>
        <script src="app.js"></script>
    </head>
    <body class="container-fluid">
        <header>
            <img src="../assets/kfctop.jpg" class="d-block w-100" height="130">
        </header>
        <div class="accordion" id="kfcform">
            <!--Item - 1 -->
            <div class="accordion-item">
              <h2 class="accordion-header d-grid">
                <button class="btn btn-danger" data-bs-toggle="collapse" data-bs-target="#customer">
                    Customer Info
                </button>  
              </h2>
              <div id="customer" class="collapse show accordion-collapse" data-bs-parent="#kfcform">
                 <div class="accordion-body">
                    <dl>
                        <dt>Customer Name</dt>
                        <dd>
                            <input id="txtName" type="text" class="form-control">
                        </dd>
                        <dt>Mobile Number</dt>
                        <dd>
                            <input id="txtMobile" type="text" class="form-control">
                        </dd>
                    </dl>
                 </div>
              </div>
            </div>
            <!--Item-2-->
            <div class="accordion-item">
                <h2 class="accordion-header d-grid">
                  <button class="btn btn-danger" data-bs-toggle="collapse" data-bs-target="#meal">
                      Choose Your Meal
                  </button>  
                </h2>
                <div id="meal" class="collapse accordion-collapse" data-bs-parent="#kfcform">
                   <div class="accordion-body">
                      <div class="row">
                        <div class="col text-center">
                            <div class="card">
                              <div class="card-body">
                                <img src="../assets/kfcburger.jpg" width="200" height="200">
                              </div>
                              <div class="card-footer">
                                <input type="radio" id="optBurger" name="meal" value="OMG Burger"> OMG Burger &#8377; 130/-
                              </div>
                            </div>
                        </div>
                        <div class="col text-center">
                            <div class="card">
                                <div class="card-body">
                                  <img src="../assets/kfcroller.png" width="200" height="200">
                                </div>
                                <div class="card-footer">
                                  <input type="radio" id="optRoller" name="meal" value="OMG Roller"> OMG Roller &#8377; 100/-
                                </div>
                              </div>
                        </div>
                      </div>
                   </div>
                </div>
              </div>
              <!--Item-3-->
              <div class="accordion-item">
                <h2 class="accordion-header d-grid">
                  <button class="btn btn-danger" data-bs-toggle="collapse" data-bs-target="#adon">
                      Choose AD-ON's
                  </button>  
                </h2>
                <div id="adon" class="collapse accordion-collapse" data-bs-parent="#kfcform">
                   <div class="accordion-body">
                      <div class="row">
                        <div class="col text-center">
                            <div class="card">
                              <div class="card-body">
                                <img src="../assets/kfchotwings.jpg" width="200" height="200">
                              </div>
                              <div class="card-footer">
                                <input type="checkbox" id="optWings" value="Hot Wings"> Hot Wings &#8377; 80/-
                              </div>
                            </div>
                        </div>
                        <div class="col text-center">
                            <div class="card">
                                <div class="card-body">
                                  <img src="../assets/kfckrusher.jpg" width="200" height="200">
                                </div>
                                <div class="card-footer">
                                  <input type="checkbox" id="optKrusher" value="Krusher Brownie"> Krusher Brownie &#8377; 50/-
                                </div>
                              </div>
                        </div>
                      </div>
                   </div>
                   <div class="d-grid">
                    <button onclick="OrderClick()" class="btn btn-danger" data-bs-target="#summary" data-bs-toggle="modal">Place Order</button>
                    <div class="modal" id="summary">
                        <div class="modal-dialog">
                            <div class="modal-content"> 
                                <div class="modal-header">
                                    <h2>Bill Summary</h2>
                                    <button class="btn-close" data-bs-dismiss="modal"></button>
                                </div>
                                <div class="modal-body">
                                    <table class="table table-hover">
                                        <tbody>
                                            <tr>
                                                <th>Customer Name</th>
                                                <td id="lblName"></td>
                                            </tr>
                                            <tr>
                                                <th>Mobile</th>
                                                <td id="lblMobile"></td>
                                            </tr>
                                            <tr>
                                                <th>Selected Meal</th>
                                                <td id="lblMeal"></td>
                                            </tr>
                                            <tr>
                                                <th>Selected AD-ON's</th>
                                                <td id="lblAdon"></td>
                                            </tr>
                                            <tr>
                                                <th>Bill Amount</th>
                                                <td id="lblAmount"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="modal-footer">
                                    <button data-bs-dismiss="modal" class="btn btn-primary">OK</button>
                                </div>
                            </div>
                        </div>
                    </div>
                   </div>
                </div>
              </div>
        </div>
    </body>
</html>
```
```js
function OrderClick(){
    document.getElementById("lblName").innerHTML=  document.getElementById("txtName").value;
    document.getElementById("lblMobile").innerHTML =  document.getElementById("txtMobile").value;

    var mealName = "";
    var mealCost = 0;
    var addonName = "";
    var addonCost = 0;

    var optBurger = document.getElementById("optBurger");
    var optRoller = document.getElementById("optRoller");
    var optWings = document.getElementById("optWings");
    var optKrusher = document.getElementById("optKrusher");

    if(optBurger.checked){
        mealName = optBurger.value;
        mealCost = 130;
    }
    if(optRoller.checked){
        mealName = optRoller.value;
        mealCost = 100;
    }
    if(optWings.checked){
        addonName += optWings.value+"<br>";
        addonCost = 80;
        mealCost = mealCost + addonCost;
    }
    if(optKrusher.checked){
        addonName += optKrusher.value+"<br>";
        addonCost = 50;
        mealCost = mealCost + addonCost;
    }
    document.getElementById("lblMeal").innerHTML = mealName;
    document.getElementById("lblAdon").innerHTML = addonName;
    document.getElementById("lblAmount").innerHTML ="&#8377;" +mealCost;
}
```