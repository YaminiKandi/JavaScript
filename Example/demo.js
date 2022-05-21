var greet;
var english = {
    greetings: {
        greet: 'Hello!'
    }
};
var spanish = {};
spanish.greet = 'Hola!';
console.log(english.greet); // undefined
console.log(english.greetings.greet); // Hello!