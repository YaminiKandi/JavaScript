var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname
    }
}
var jackie = {
    firstname: 'Jackie',
    lastname: 'Kandi'
}
jackie.__proto__ = person;

for (var prop in jackie){
    if(jackie.hasOwnProperty(prop)){
        document.write(prop + ': ' + jackie[prop] + '<br>')
    }
}