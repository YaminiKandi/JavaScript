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