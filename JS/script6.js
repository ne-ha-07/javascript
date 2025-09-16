// Q1. What's the difference between function declaration and expression in terms of hoisting ? -> look styles.js6 last part.
// Q2. convert the given function into arrow function below :
// function multiply(a, b){
//     return a * b;
// }
// ans ->

// let multiply = (a, b) => {
//     return a * b;
// }

// Q3.What does '...' means in parameters ?
// ans -> ... is called the rest operator in function parameters, used to denote an array or to store many arguments in it, acting as array.
// eg.:
// function xyz(...val){
//     console.log(val);
// }
// xyz(1,2,3,4,5,6,7);

// Q4. use rest parameter to accept any number of scores and return the total(sum).  (this is the concept of array)

// function getScore(...scores){     //we know scores is an array
//     let total = 0;
//     scores.forEach(function(val){    //can be interpreted as -> function(val) chlega for each argument using method called forEach()
//         total = total + val;
//     });
//     return total;
// }
// console.log(getScore(10,12,14,15,16,20));

// Q5. Fix the funcction using early return.

// function checkAge(age){
//     if(age < 18){
//         console.log("Too young");
//     }else{
//         console.log("Allowed");
//     }
// }

// ans->
// function checkAge(age){
//     if(age < 18) return "Too young";   //this method is called early return
//     return "Allowed";
// }
// console.log(checkAge(13));

// Q6. what does an empty function return?
// ans -> undefined. let's see the example

// function f(){

// }
// console.log(f());


// Q7.What does it mean when we say "functions are first-class citizens" ?
// ans-> mtlb we can use function as values, can be saved and stored into variables , also can be passed into functions.
// look at the first class functions

// Q8. Can you assign a function to a variable and then call it ? Show how.
// yes

// let a = function(){   //function() is assigned to a variable

// }
// a(); //variable is called instead of calling function().


// Q9. pass a function into another function and execute it inside.

// function abcd(val){   //created 1st function
//     val();            //called val parameter as a function
// }
// abcd(function(){    //called abcd() passing argument function()
//     console.log("hii this is another function() which is called by val()")
// });

// Q10. What is a higher order function?
// ek aisa function jo return kre ek aur function ya fr accept kre ek aur function as a parameter.


// Q11. idenitfy which is the higher order function in the below eg.

// [1,2,3].map(function(x){  //[1,2,3] is an array , map is a function that accepts another function() with a parameter x.
//     // hence map() is the higher order function
//     return x * 2;
// })


// Q12.impure or pure ? 
// let total = 0;
// function addTototal(num){
//     total += num;
// }

// ans - impure since this function is changing bahr k variable ki value by increasing it.

// Q13. convert the above function into pure function.
// let total = 0;
// function addTototal(num){
//     let newtotal = total;  //now any change made to newtotal won't affect 'total' variable
//     newtotal += num;
// }

// hence addTototal() is now a pure function.


// Q14. what's the output ?

// function outer(){   // note: this function is a closure that returns a function which uses upper function's variable.
//     let count = 0;
//     return function(){
//         count++;
//         console.log(count);  
//     };
// }
// const counter = outer();   //counter is a variable that stores function outer(), hence counter has become a function too.
// counter();   //output -> 1
// counter();   //output -> 2


// Q15. Convet this normsl function into an IIFE(Immediately Invoked Function Expressions)
// function init(){
//     console.log("Initialized");
// }

// ans:
// (function init(){
//     console.log("Initialized");
// })();


// Q16. What is the use of IIFE? Name one real world use case.

// ans-> when you want to create a private variable that doesn't really have global scope.


// Q17. What will be the output and why ?
// greet();  //function expression called before even creating it.

// var greet = function(){    //function expression not statement hence hoisting isn't allowed here.
//     console.log("Hi");
// };
// ans-> the output will be the error.


// Q18. What will be the output and why ?

// greet();  //function statement called before even creating it.

// var greet = function(){    //function statement hence hoisting is allowed here.
//     console.log("Hi");
// };
// ans-> the output will be -> 'Hi'
