// Array part 2
// Destructing and Spread operator

// Destructuring - a syntax that simplifies the extraction of values from arrays and assigning them to different variables.
// LHS : you write [] and inside this you write the variables. RHS : name of the array you are extracting values from.

// let arr = [1,2,3,4,5];
// // let [a,b] = arr;  //output a = 1, b = 2
// let [a,b,c,,e] = arr;  //output a = 1, b = 2, c = 3, e = 5


// Spread Operator - denoted by 3 dots(...) - a syntax that allows an array or string or object to be expanded into 
//                   individual elements or properties. Basically creates a copy of an array.
// let arr = [1,2,3,4,5];
// let spreadarr = [...arr];   //spreadarr stores the copy of arr. //output - [1,2,3,4,5] and any modification done to the
// copy of arr(spreadarr) won't affect the original array

// let arr2 = [10,11,12,13,15];

// // merging arr and arr2 using spread operator
// let mergedarr = [...arr, ...arr2]; //output [1,2,3,4,5,10,11,12,13.15]

// insert or add elements in an arr using spread operator
// let arr1 = ['apple', 'banana'];
// let arr2 = ['kiwi', ...arr1, 'watermelon'];  // output - ['kiwi', 'apple', 'banana', 'watermelon']

// ------------------------------------------------------------------------------------------------------------------------

// Q1. Create an array with 3 fruits and print the second fruit.
// let fruit = ['apple','mango', 'kiwi'];
// console.log(fruit[1]);

// Q2. Add 'guava' at the end and 'pineapple' at the beginning of this array.
// let fruit = ['apple','mango', 'kiwi'];
// fruit.push('guava');
// fruit.unshift('pineapple');
// console.log(fruit);

// Q3.Replace 'banana' with 'peach' in the given array.
// let fruit = ['apple','mango', 'banana', 'kiwi'];
// fruit[2] = 'peach';
// console.log(fruit);

// Q4. Remove the last element from this array using a method.
// let numbers = [1,2,3,4,5];
// numbers.pop();  //[1,2,3,4]


// Q5. Insert 'Red' and 'Blue' at index 1 in this array.
// let colors = ['Green', 'Pink'];
// colors.splice(1, 0, 'Red', 'Blue'); //splice removes the element from location given till the no. of elements to be removed given.
// // here 1 is the location and 0 is the no. of element jo delete krna h. but aage 'Red' and 'Blue' likhne se vo add hojayga.
// console.log(colors);

// Q6.Extract only the middle 3 elements from this array.
// let items = [1,2,3,4,5,6];
// let extract = items.slice(1,4); //output - [2,3,4]

// Q7. sort this array alphabetically and then reverse it.
// let names = ['Zara', 'Joe', 'Meera', 'Bhavya'];
// names.sort().reverse();  //we can sort an array of string by directly writing .sort() but not the array of numbers.
// console.log(names);  // ['Zara', 'Meera', 'Joe', 'Bhavya']

// Q8. Use .map() to square each number.
// let arr = [1,2,3,4];
// let newarr = arr.map(function(val){
//     return val * val;
// });
// console.log(newarr);  //output - [1,4,9,16]

// Q9. Use .filter() to keep numbers greater than 10.
// let arr = [5,12,8,20,3];
// let newarr = arr.filter(function(val){
//     if(val > 10) return true;
// });
// console.log(newarr);

// Q10. Use .reduce() to find the sum of this arry.
// let arr = [10,20,30];
// let result = arr.reduce(function(accumulator, val){
//     return accumulator + val;
// }, 0);
// console.log(result);

// Q11. Use .find() to get the first number less than 10.
// let arr = [12,15,3,8,20];
// let newarr = arr.find(function(val){
//     return val < 10;
// });
// console.log(newarr); //ouput - 3


// Q12. Use .some() to check if any student has scored below 35.
// let scores = [45, 60, 28, 85];
// let result = scores.some(function(val){
//     return val < 35;
// });
// console.log(result);   //true

// Q13. Use .every() to check if all numbers are even.
// let arr = [2,4,6,8,10];
// let even = arr.every(function(val){
//     return val % 2 === 0;
// });
// console.log(even);  //output - true

// Q14. Destructuring this array to get firstName and lastName.
// let fullName = ["Neha", "Mehto"];
// let [firstName, lastName] = fullName;
// console.log(firstName);
// console.log(lastName);

// Q15.Merge 2 arays using spread operator.
// let a = [1,2];
// let b = [3,4];
// let c = [...a, ...b]; //c is the merged array
// console.log(c); //output - [1,2,3,4]

// Q16. Clone this array properly(not by reference).
// let arr = [1,2,3];
// let arr2 = [...arr]; // done
// console.log(arr2);


// Difference bw splice and slice in array
// splice - modify original array
// slice - returns copy of a section of an array

// .map() v/s forEach()
// forEach() - traverse each element, but doesn't return any value and also doesn't create a new array.
// map() - yes traverses each element but it returns a value and creates a new array peechle array se.