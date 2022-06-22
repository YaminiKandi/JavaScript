class Person {
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    greet(){
        return 'Hi ' + this.firstname;
    }
}
var yam = new Person('Yamini', 'Kandi');
document.write(yam.firstname)