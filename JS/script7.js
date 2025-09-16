// Functions --> this is something like jab hum code ko chlana chahe tb hi chale. Eg. like a tv remote, button has all the
//  code in it, but unless we don't press the desired button for the desired functio, it won't happen.

// function dance(){           //consider dance() as that button of tv remote
//     console.log("dance");   //this won't execute until we press the button named dance()
//     console.log("dance");
//     console.log("dance");
//     console.log("dance");
//     console.log("dance");
// }
// dance();   //now we pressed that button , so this will print lines 5 to 9 

// theory:
// function name can't be -> keywords, numbers
// function chlega tb jb tum use call kroge
// you can store function in a variable too. -> called as function expression . eg. : let abcd = dance();

// fat() arrow=> function 
// let func = ()=>{   //stored in a variable
//     console.log("This is Fat arrow function");
// }
// func();

// function dance(){        //this is function declaration    
//         console.log("dance");
//     }
// dance();
// *----------------------------------------------------------------------------------------------------------------------------------------------*

// Topic 2 : parameters vs arguments

// eg.:
// function dance(who){                         //who is the parameter of the function dance()
//     console.log(`${who} nach raha hai !`);   //printing dynmaic input
// }
// dance("Gadha");

// function add(value1 , value2){
//     console.log(value1 + value2);
// }
// add(4,2);     //4,2 are the arguments

// *-------------------------------------------------------------------------------------------------------------------------------------------*

// Topic 3 : default, rest and spread parameters

// function add(v1 , v2){
//     console.log(v1 , v2);
// }
// add();    //undefined undefined  -> this is the default values if v1 and v2 not given.

// function add(v1 , v2){
//     console.log(v1 + v2);
// }
// add();    // undefined + undefined = NaN

// function add(v1=0 , v2=0){
//     console.log(v1 , v2);
// }
// add();    //now output will be 0 because we provided the default values.

// rest -> jab arguments bhot sare hote h, hme utne hi parameters bnane pdenge, isse bchne ke liy, we use 'rest' (...)
//  ... -> called rest operator
// function add(...val){
//     console.log(val);
// }
// add(1,2,3,4,5,6,7,8,9);  //now val has become an array

// *-------------------------------------------------------------------------------------------------------------------------------------------*


// Topic 4 : return -> mtlb jha se aye ho whi daal denge wps. always ofc function me hi chlega
// eg.:

// function abcd(){
//     return 12;
// }
// console.log(abcd());  //on calling it says wps jao jaha se aye the mtlb return 12 me

// *-------------------------------------------------------------------------------------------------------------------------------------------*

// Topic 5: first class function (important) -> concept where functions ko value ki trh treat krskte h
//eg.:
// let x = function xyz(){

// }  // just like let x = 12; 
// mtlb jha jha value ja skti h wha function bhi ja skta h.

// eg.:
// function abcd(val){
//     val();
// }
// abcd(function(){  // abcd() is used to call function and instead of putting value we used a function(),which is a void function.
//     console.log("hey");  //hence abcd calling function() so 'hey' will be the ouput
// });

// *-------------------------------------------------------------------------------------------------------------------------------------------*

// Topic 6 : Higher order functions(hof) -> ye vo function hota h jo return kre function ya fir accept kre ek function apne parameter me
// eg.1:
// function abcd(val){  //here abcd acts as hof since it accepts the function in place of value
//     val();
// }
// abcd(function(){   
//     console.log("hey");
// })

// eg.2:
// function abcd(){  //here abcd acts as hof since it returns the function()
//     return  function (){
//         console.log("hihihihi!");
//     }
// }
// abcd()(2);  //abcd()() -> one () is to call abcd(), inside whuch there is a void function so we have to call that as well using another ().

// eg.3:
// function abcd(){   //here abcd acts as hof since it returns the function()
//     return  function xyz(val){
//         console.log(val + 1);
//     }
// }
// abcd()(2); //abcd()() -> one () is to call abcd(), inside whuch there is a function xyz() so we have to call that as well using another (and a parameter = 2).

// *-------------------------------------------------------------------------------------------------------------------------------------------*

// Topic 7 : pure vs impure functions 
// pure -> aisa function jo bahr ki value ko na badle
// eg.:
// let a = 12;
// function abcd() {   // this function doesn't change anything outside, only prints 'Pure function'
//     console.log("Pure function");
// }

// impure -> aisa function jo bahr ki value ko badal de.

// let a = 12;
// function abcd(){   //so this function changes bahr ki value, hence impure.
//     a++;              //increments the value of a
//     console.log(a);
// }
// abcd();

// *-------------------------------------------------------------------------------------------------------------------------------------------*

// Topic 8 : Closures -> ek functioin jo return kre ek aur function and return hone wla function hmehsa use krega present function ka koi variable

// function abcd(){                       //ek parent function
//     let a = 12;                        //parent function ka ek variable
//     return function(){                 //parent fuunction jo return krra h ek aur function
//         console.log(a);                //using parent function ka variable 'a'
//     }
// }

//this complete function abcd() from line 147 to 152 is a closure function

// Lexical Scoping -> scoping of variables inside a function which has a function too and so on.
// eg.:

// function abcd(){
//     let a = 1;              //a has scope from line 160 to 167
//     function efgh(){
//         let b = 2;          //b has scope from line 162 to 166
//         function xyz(){
//             let c = 3;      //c has scope from line 164 to 165
//         }
//     }
// }

// *-------------------------------------------------------------------------------------------------------------------------------------------*

// Topic 9 :  IIFE -> Immediately Invoked Function Expressions -> create krte hi call hona immediately 
// syntax -> cover entire function with () and write (); in the end
// (function (){

// })();

// *-------------------------------------------------------------------------------------------------------------------------------------------*

// Topic 10 : Hoisting differences between declaration and expression
// hoisting -> variable/ function bnne se phle hi usey use/call kr pana is called hoisting
//let's understand the difference between hoisting during declaration and expression

// eg.: this is the example of hoisting during declaration -> allows execution before creating a function/declaration of function
// abcd();  //function create hone se phle hi call krdiya and still gives the output


// function abcd(){               //function statement declaration
//     console.log("Hi Neha!");
// }

// hoisting during function expression -> doesn't execute without creating the function expression
// eg.:

// abcd() 

// let x = function abcd(){        // function expression
//     console.log("Hi Neha !");  //now output is "abcd is not defined"
// }
// *-------------------------------------------------------------------------------------------------------------------------------------------*

// In the next styles7.js we solved the questions related to functions.