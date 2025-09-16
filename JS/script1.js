// Loops -> repeat krne ko loop kehte h -> for, while, do-while, forin, forof, foreach
// 1 1 1 1 1 1 1 1 1
// 1 2 3 4 5 6 7 8 9

// for loop -> kaha se jana hai -> kaha tak jana hai -> kaise jana hai
// eg.: 50 br 1 print krdo

// for(let i=1; i<100; i++){
//     console.log(i);
// }

// while loop ->jab koi gurantee ni hoti ki kab rukega loop -> kaha se jana hai -> kab rukna hai -> kaise jana hai
// eg.: jab tak hello na boldu tbtk print 1

// start
// while(end){
//     // code
//     change
// }

// let i = 1;
// while(i < 50){
//     console.log(i);
//     i++;
// }

// do while

// let i = 18;
// do{
//     console.log(i);
//     i++;
// }while(i<2) {
//     console.log(i);
// }

// break and continue 
// break -> to break any loop ------ continue -> to skip the given condition and continue
// eg.:

// for(let i = 1; i< 50; i++){
//     console.log(i);
//     if(i === 30){
//         break;
//     }
// }

// for(let i = 1; i< 50; i++){
//     if(i === 30){
//         continue;
//     }
//     console.log(i);  //30 will be skipped
// }

// we'll discuss forin,forof, foreach loop in array and objects section. since forin foreach forof loop are the conepts of objects and arrays.


// Questions.
// 1. print 1 to 10 using for loop
// for(let i = 1;i<=10; i++) console.log(i);

// 2. print 10 to 1 using while loop
// let i = 10;
// while(i>0){
//     console.log(i);
//     i--;
// }

// 3. print even numbers from 1 to 20
// for(let i = 1 ; i< 21; i++){
//     if(i % 2 === 0) console.log(i);
// }

// 4. print odd numbers from 1 to 15 using a while loop
// let i = 1;
// while(i < 16){
//     if(i % 2 === 1) console.log(i);
//     i++;
// }

// 5. multiplication table of 5
// for(let i = 1; i < 11; i++){
//     console.log(`5 * ${i} = `,5 * i);
// }

// or

// let i = 1;
// while(i < 11){
//     console.log(`5 * ${i} = `, 5 * i);          // ${i} represents the current value of i
//     i++;
// }

// 6. Sum of numbers from 1 to 100 using a loop
// let sum = 0;  //sum bahr likha bcz sum can hold the value after each loop
// for(let i = 1; i< 101; i++){
//     sum = sum + i;
// }
// console.log(sum);  // ye for loop k andr isiliye ni likha bcz we just want to print one final sum in the end

// 7. print all numbers from 1 to 50 that are divisible by 3.
// for(let i = 1 ; i< 51; i++){
//     if(i % 3 === 0) console.log(i);
// }

// 8. ask a number from the user and print whether each number from 1 to that number is even or odd.
// prompt() is used to take input from the user

// let val = prompt("give a number : ");
// for(let i = 1; i <= val; i++){
//     if(i % 2 === 0) console.log(`${i} is even`);
//     else console.log(`${i} is odd`);
// }

// 9. count how many numbers between 1 to 100 are divisible by both 3 and 5

// let count = 0;
// for(let i = 1 ; i < 101; i++){
//     if(i % 3===0 && i % 5===0) count++ ;
// }
// console.log(count);

// **-------------------------------------------------------------------------------------------------------------------**

// Q. for break and continue
// 1. stop at first multiple of 7

// write a loop from 1 to 100 that:
//   -> prints each number
//   -> stops completely when it finds the first number divisible by 7.

// for(let i = 1; i < 101; i++){
//     console.log(i);
//     if(i % 7 === 0){
//         break;
//     }
// }

// if you have to print every number from 1 to 100 but not the number divisible by 7.
// for(let i = 1; i< 101; i++){
//     if(i % 7 === 0){
//         continue;
//     }
//     console.log(i);
// }

// 2. skip multiplies of 3

// for(let i = 1; i< 101; i++){
//     if(i % 3 === 0){
//         continue;
//     }
//     console.log(i);
// }

// 3. print first 5 odd numbers only
// write a loop from 1 to 100 that :
//    -> prints only 5 odd numbers
//    -> then stops the loop

// expected output : 1,3,5,7,9

// let count = 0;
// for(let i = 1; i< 101; i++){   
//     if(i % 2 === 1){
//         count++;
//         console.log(i);
//     }
//     if(count === 5) break;
// }