//Topic 1- how you can declare your variable
// var a; //declare & var wwindow mein add hota hai ---- problem
// // function scoped hota hai  ---- problem
// var a = 10; //declare and initialize
// // redeclaration and reassignment is possible  ---- problem
// var a = 11; //redeclaration
// a = 6; //reassignment

// let a;
// let a = 9;
// a = 12; //reassignment is possible
// let a = 10; //redeclaration isn't possible in let

// // const a; //wrong assigning values to const is necessary
// const a = 100; //not a variable
// a = 50; // constant value can't be changed

// var x = 8;
// x = (8+10)/2; //reassignment
// console.log(x);

// let a = "hii";
// a = "neha"; //resassignment
// console.log(a);

// so var(function scoped),let(block level scoped) and const all have different scopes



//Topic 2- Temporal Dead Zone(tdz) - the area js knows variable exists but vo value nhi de skta apko

// console.log(a);
// let a = 1 // error - cannot access 'a' before initialization .....line31-32 -> tdz
// NOTE : tdz happens with let and const but not var.

// console.log(b);
// var b = 2; //error - undefined



// Topic 3- Hoisting impact per type
// Hoisting->When a variable(var) is created, it is broken into 2 parts- uska declared part(var x) sbse top pr chla jata h & the initialized part(x = 1) neeche reh jata h

// var x = undefined;
// console.log(x);
// x = 1;
// this is how it works for tdz of var

// Note : hoisting exists in all var, let and const. just var says 'undefined' but let and const says 'cannot access before initiliazation' BUT note that is dosen't say cannot access befor declaration.

// eg;
// var x=1;//global scope
// {
//     var x = 2; //var is function scoped but there's no function only blocks so both x=1 and x=2 has global scope. Also, var allows redeclaration hence x=1 is redeclared to x=2 
// }
// console.log(x); //ouput -2

// eg:

// let a = 10;//global scope
// {
//     let a = 20; //block level scope
//     console.log(a); //ouput -20
// }
// console.log(a); //ouput -10


// Q1. why var leaks outside blocks but let doesn't?
// because var is functioin scoped but let is block level scoped

// Q2. why const allows changing object properties?

// const person = {name : "Neha"}; //person ek function bngya h and name is the object
// person.name = "Mehto"; //allowed since it can be updated(value of the property to be changed)
// // person = {}; //not allowed reassign isn't allowed
// console.log(person);


//  * to make objects immutable in function there is a static method called Object.freeze() .
// example :

const person1 = {
    name : "neha",
    age : "25",
    country : "India",
    education : "graduation"
};
console.log(person1);
Object.freeze(person1);
person1.name = "mehta";
console.log(person1);

// <------------------------------******--------------------------VariablesEnd------------------------------------******----------------------->