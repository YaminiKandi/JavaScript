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