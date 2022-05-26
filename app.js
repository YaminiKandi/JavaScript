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