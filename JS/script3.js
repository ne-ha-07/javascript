// Data Types + Type System
// Topic 1:
// 2 types - (a) primitives(string, Number, boolean, null, undefined, Symbol, bigint) - bina bracket wale - aise values jise copy krne pr hme ek real copy miljaye
//           (b) reference types(arrays, objects, functions) - - bracket wale- aise value jise copy krne pr real copy ni milegi but reference of the original data miljaye


// eg of primitives
// for numbers
// let a = 12;
// let b = a;
// a = a+2;

// // eg of references
// let x = [1,2,3,4];
// let y = x; //y doesn't have it's own value ,just the reference to x
// y.pop(); //so if pop() last element  from y, it is removed from x too which isn't the case in pimitives.


// NOTE : string is creted in 3 ways ->
// '' - single quote
// " " - double quotes
// ` ` - backticks

// Number ->
// 12 - Number-integer && 12.3 - Number too

// boolean -> true and false
// eg 
// let a = true;
// let b = false;

// null -> mtlb jaan bujh ke koi value nhi di
// let a = null;

// undefined -> mtlb ek variable bnaya aur usey value mahi di toh jo value by default mili vo undefined hoti h
// eg
// let a; //output- undefined

// Symbol -> unique immutable value
// eg.
// let a1 = Symbol("uid");
// let a2 = Symbol("uid");

// a1 and a2 have same symbol "uid" still, a1 and a2 are not equal and both are  unique a1 === a2 -> false

// use case of Symbol:

// let obj = { //object created
//     uid : 1, //added a uid of this object
//     name : "neha",
//     age : 10,
//     email : "neha@123.com"
// };

// let u1 = Symbol("uid"); //we created a symbol uid so this uid doesn't overwrite object's uid
// obj[u1] = 12; // now obj has its own unique uid(1) with our symbol uid(12)


// bigint ->
// in Numbers there's a limit to take value which is -> 9007199254740991
// ye value aati hai by writing - let a = Numbers.MAX_SAFE_INTEGER  and iske aage ke values use krne k liye we have the datatype bigint
//  eg:

// let a = 9007199254740991n ; // this is a bigint value
// // for further operations on this bigint(a):
// a + 3n; //exactly same as adding 3 in 9007199254740991.
// a + 4n; //exactly same as adding 4 in 9007199254740991.
// a * 2n; //exactly same as multiplying 2 in 9007199254740991.

// *----------------------------------------------------primitivesEnd---------------------------------------------------*

// Reference types - bracket wale
// arrays, objects, functions

// let a = [1,2,3]; //array
// let b = a;
// b.pop();  //yha hme lgega ki value pop b se hui hai , but since it is reference type so value a & b , dono se pop hui h

// let a = { //object
//     name : "divyanshi"
// };
// let b = a; 
// b.name = "divyanshu"; //hme lgega ki name ki value sirf 'b' me change hui but change a & b dono m hogi

// *---------------------------------------------------------------------------------------------------------------------*


// Dynamic Typing -> js doesn't have static typing(datatypes ki baat hori h) where you can alter the data since it has dynamic datatypes

// eg:
// let a = 11; // here 'a' stores integer
// a = "hiiii"; //here 'a' made string
// a = true;  //here 'a' made boolean where in other lang like c++, if a variable declared int, you can't write boolean or string or any other values

// The above example is the dynamic typing. !!!!
// NOTE : static typing is better than dynamic, since a variable declared int initially will remain same but in dynamic , you never know.
// It's like a disloyal boyfriend who can change his gf anytime.

// typeof quirks (eg. : typeof null === 'object')
// eg. 
// typeof 1 // output -> Number
// typeof true // output -> Boolean
// typeof NaN(Not a Number) // output -> Number
// typeof {} // output -> object
// typeof [] // output -> array
// 1 === "1" // output -> true // but it should be false
// these are called the quirks in js

// *----------------------------------------------------EndOfTopic---------------------------------------------------*

// Type coercion (== vs ===) -> concept jisme apka ek type automatically convert hojayga (like an automatic concatenation for +, but in '-' it will perform subtraction)
// eg:
// "5" + 1 // output -> 51 //here concatenation occurs since '+' performs 2 functions(addition & concatenation) and 
// it saw a string("5"), so it automatically understood to concatenate.
// "5" - 1 // output -> 4 //here subtraction occurs

// Truthy vs Falsy values -> Js has divided everything into true and false values.

// 0, false, "", null, undefined, NaN, document.all -> are all falsy values in Js.
// to check the falsy values ,write '!!' initially
// eg. 
// !!0 -> output - false
// !!null -> output - false
// !!undefined -> output - false

// rest all -> truthy

// Q. Predict the result : true + false, null + 1, 5 + "5", !!undefined
// true + false //output -> 1 why? -> true(1) +(OR) false(0) = 1
// null + 1 // output -> 1 why? null(falsy = 0) + 1 = 1
// 5 + "5" // output -> "55" why? concatenation
// !!undeined // output -> false

// Q. why NaN is not a number?
// typeof NaN === Number, hence treated as a Number
// Js treats NaN as a failed Number operation like 2 * neha = NaN, aisa mathematical operation jo ho nhi skta.

// Q. undefined vs null ?
//  undefined -> something that isn't defined, jisko value hi nhi dete aap, hence Js gives it(undefined) by default.
// null -> something defined(you define it not by default done by Js) with a null(zero) value.
// eg:
// let x ;
// console.log(x); //undefined
// let y = null;
// console.log(y); //null

// *----------------------------------------------------EndOfTopic---------------------------------------------------*