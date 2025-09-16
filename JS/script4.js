// Operators
// Arithmetic(+,-,*,/,%,**), comparison(=,==,===,!=,!==,<,>,>=,<=), logical, assignment, unary, ternary


// Arithmetic
// + (addition/concatenate), -(subtraction), /(division),%(modulus-remainder dega) *(multiply), **(exponentiation- power)


// comparison(=,==,===,!=,!==,<,>,>=,<=),
// =(assignment operator) -> value dalna eg.: let a = 1;
// == -> compares eg.: 12 == "12"//true ->just checks the value not the type(int & string) and that's the issue solved by ===.
// === ->  12 == "12"// false
// !=(not strict comparison) -> eg.: 12 != !3 // output - false, 12 != "12" // true, which is wrong
// !==(not strict comparison) ->  eg.: 12 !== "12" output-> true
// <(less than), >(greater than) -> 12 > 11 -- true , 12 < 11 -- true
// <=(less than equal to), >=(greater than equal to) -> similar to <,> -> eg.: 12 >= 11 --true, 12 <= 11 -- false


// Assignment (=, +=, -=, *=, /=, %=)
// eg.:
// let a = 12;
// a += 3 // a = 12 + 3 = 15
// a -= 3 // a = 12 - 3 = 9
// a *= 3 // a = 12 * 3 = 36
// a /= 3 // a = 12 / 3 = 4
// a %= 3 // a = 12 % 3 = 0


// logical(&&, ||, !) -> like AND, OR and NOT operations
// (12>11) && (12<11) // output -> 1(true) && 0(false) = 0(false) ----- AND operation


// unary operator( +, -, !, typeof, ++, -- ) -> jo single value pr chlta hai
// + -> type change krdiya tha if ,it can change into a Number and if it can't , it will return NaN
//      eg.:  +"1" -> 1 // changed string "1" to a Number 1
//      eg.:  +"neha" -> NaN

// - -> just to make a Number negative. eg.: -5 -> -5, -"neha" -> NaN
// ! -> just a NOT operation. reverse the value eg.: !12 -> false // remember in styles2.js we studies truthy and falsy concept. ! is just the opposite of !!.

// typeof -> returns the datatype of the value eg.: typeof(1) -> Number, typeof({}) -> 'object'
//  ++(increment operator) -> ye value increase krta h by 1. 
// eg.: 
// let a = 2;
// ++a; //pre increment -> phle increase then print
// a++; //post increment -> phle print then increase
// a--, --a -> similarly, post and pre decrement works.


// ternary operator(? :) -> works like if else -> condition ? (if true toh kya print hoga) : (if false toh kya print hoga)
// eg.: 1 > 2 ? (console.log("true")) : (console.log("false")); //output -> since the conditon is false so ':' ke baad wla print hoga

// **---------------------------------------------OperatorsEnd----------------------------------------------------------**

// NOTE : quirks(galtiyan) of 'typeof' :
// typeof null -> 'object'
// typeof [](array) -> 'object'
// typeof NaN -> Number

// instanceof -> vanshaj of anything like Array , Object etc.
// syntax : variable instanceof ___________(identity)
// eg.:
// let a = [1,2,2,3]; now if you type -> a instanceof Array -> output : true
// let b = {}; now if you type -> b instanceof Object -> output : true, b instanceof Array -> false
// let a = 12; now if you type -> a instanceof Number -> output : false ...why? coz it works with only refernce datatype values and not primitves

// **---------------------------------------------OperatorsEnd----------------------------------------------------------**

// Q1.
// let x = 10;
// let y = 20;

// if(x>5 && y<25){         //since this is true ,true && true = true
//     console.log("A");    // will print A
// }else{
//     console.log("B");
// }

// Q2.
// let temp = 35;

// if(!(temp < 30)){         //sinec 35 < 30 is false but !(false) gives true
//     console.log("Hot");   //hence Hot will print
// }else{
//     console.log("pleasant");
// }

// Q3.
// let a = 0;    // 0 will be treated as a false value

// if(a) {
//     console.log("truthy");
// }else{
//     console.log("falsy");   // this will be printed
// }

// Q4.
// let score = 78;

// let grade = score >= 90 ? "A" : score >= 75 ? "B" : score >= 60 ? "C" : "fail";
// // if score is >= 90 ,A print hojata since it is 78 so it will jump to score >= 75, and this is true so B print hojayga.
// console.log(grade); //output -> B

// Q5.
// let loggedIn = true;
// let hasToken = false;

// let access = loggedIn && hasToken ? "Allow" : "Deny";
// console.log(access);

// Q6.
// let a = 5;
// a++; //5
// console.log(a); //5 + 1= 6

// let b = 6;
// ++b;  //7
// console.log(b); // 7

// let x = 3;
// let y = x++;  //here y will store 3 only kyuki x abhi b 3 h
// console.log(x, y);  //now x will print 4 but y remains 3

// let m = 10;
// console.log(m--, m); // 10 9

// let n = 5;
// let result = n++ + ++n;  //5 + 7
// console.log(result); //12

// Q7. 
// let likes = 100;
// function likepost() {
//  return ++likes;  //101
// }
// console.log(likepost()); //101
// console.log(likes); //101

// Q8.
// let count = 5;
// if(count-- === 5){  //5 === 5 which is true
//     console.log("Matched");  // hence this will print
// }
// else{
//     console.log("Not Matched");
// }