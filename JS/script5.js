// Control Flow
// if else, else if -> same as c++
// switch case -> whatever the case matches with value inside switch() will execute
// eg.:
// switch (1) {   // here value is 1
//     case 1:  //matches with case 1
//         console.log("Whats your name?");    //this will execute
//         break;                              // to break out of the case
//     case 2:
//         console.log("Whats your class?");
//         break;
//     case 2:
//         console.log("Whats your course?");
//         break;
//         default:
// }


// early return pattern ->also called as fail-fast approach -> also return the result faster and makes the code clean.
// eg.:
// function getVal(val) {   //if val is 29 which is lesser than 100 but also lesser than 70 and 50
//     // but instead returning "D" it will return "A", which is fail-fast approach or early return pattern
//     if(val < 100) return "A";
//     else if(val < 70) return "B";
//     else if(val < 50) return "C";
//     else return "D";
// }
// console.log(getVal(29));

// Q1. student grade categorizer
//  Write a function getGrade(score) that:
//    1. Takes a student's marks (0 to 100)
//    2. Returns the grade based on this logic:
// 90 - 100 A+
// 80 - 89  A
// 70 - 79  B
// 60 - 69  C
// 33 - 59  D
// 0 - 32   Fail
// Anything else    Invalid marks 

// function getGrade(score) {
//     if(score >= 90 && score <= 100) return "A+";
//     if(score >= 80 && score <= 89 ) return "A";
//     if(score >= 70 && score <= 79 ) return "B";
//     if(score >= 60 && score <= 69 ) return "C";
//     if(score >= 33 && score <= 59 ) return "D";
//     if(score >= 0 && score <= 32 ) return "Fail";
//     return "Invalid Marks";
// }
// console.log(getGrade(99));

// Q2. Rock-Paper-Scissors logic

// function rps(user, computer){
//     if(user === computer) return "Draw !";

//     if(user === "rock" && computer === "scissor") return "user wins !";
//     if(user === "rock" && computer === "paper") return "computer wins!";
//     if(user === "paper" && computer === "scissor") return "computer wins!";
//     if(user === "paper" && computer === "rock") return "user wins !";
//     if(user === "scissor" && computer === "rock") return "computer wins !";
//     else return "user wins !";
// }
// console.log(rps("scissor", "paper"));

// //   OR ---- more shorter and cleaner code

// function rps(user, computer){
//     if(user === computer) return "Draw !";

//     if(user === "rock" && computer === "scissor") return "user wins !";
//     if(user === "paper" && computer === "rock") return "user wins !";
//     else return "computer wins !";
// }
// console.log(rps("paper", "paper"));