var c = { greeting: 'hi' };
var d;
d = c;

function changeGreeting(obj) {
    obj.greeting = 'Hola!'; //mutate
}
changeGreeting(d);

c = {greeting:'howdy'};
console.log(c);
console.log(d);