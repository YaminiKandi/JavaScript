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