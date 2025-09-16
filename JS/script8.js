// Practice Questions on functions.

// Q1. Write a BMI calculator.

// function bmi(weight, height){
//     return weight / (height * height);
// }
// console.log(bmi(47,1.57));
// console.log(Math.round(bmi(47,1.57)));   //to round off the value
// console.log(bmi(47,1.57).toFixed(2));    //toFixed in-built function is used to round off uour value to desired decimal places// eg -> we put it to 2 decimal places.


// Q2. Create a reusable discount Calculator(using HOF - High Order Function).
// ans :

// function discountCalculator(discount){
//     return function (price){
//         return price - price*(discount / 100);
//     };
// }
// let ten = discountCalculator(10);  //10 % discount -> 10 gya discount ki jgh pr
// let twenty = discountCalculator(20);  //20% discount -> 20 gya discount ki jgh pr

// console.log(ten(200));   //200 gya price ki jgh pr
// console.log(twenty(200));


// Q3.
// function counter(){
//     let count = 0;
//     return function(){
//         count++;
//         return count;
//     }
// }
// let c = counter();
// console.log(c());
// console.log(c());

// let d = counter();
// console.log(d());

// Q4. convert IIFE to private variables

// (function (){
//     const password = "secret";
//     console.log(password);          //we can access password inside the IIFE , hence here password is a private variable
// })();
// console.log(password);              //but not outside the IIFE


// NOTE : fat arrow functions can't be used in objects

// know the difference between fat arrow functions and normal functions
// closure and hof
// temporal dead zone