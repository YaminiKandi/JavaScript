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
document.write(yam.greet())

class InformalPerson extends Person {
    constructor(firstname, lastname){
        super(firstname, lastname)
    }
    greet() {
        return 'Yo ' + firstname;
    }
}
/* extends - Sets the prototype (__proto__)
super - Where we'll call the constructor of the object
that is our Prototype
*/
