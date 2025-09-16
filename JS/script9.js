// Arrays -> can store multiple values. denoted as square brackets []. Indexing is 0 based
// eg.:
// let arr = [1,2,3,4];
// console.log(arr);     //[1,2,,3,4]   //also this is array accessing
// console.log(arr[1]);  //2
// console.log(arr[10]); //undefined arr[10] exist hi nhi krta h

// arr[2] = 10;          //this is called array modification
// console.log(arr[2]);

// usually arrays are created like this : let arr = [];
// one more way to create an array : let arr = new Array();


// Array methods:  push, pop, shift, unshift, splice, slice, reverse, sort, map, filter, reduce, find, some, every

// 1. push - adds the element at the end of an array

// let arr = [1,2,3,4,5];
// arr.push(10);          //arr = [1,2,3,4,5,10]

// 2. pop - removes the element from the end(by deault) of an array
// arr.pop();            //arr = [1,2,3,4]

// 3. shift - removes the value from the beginning.
// arr.shift();           //arr = [2,3,4,5]

// 4. unshift - adds something(some value) in the beginning.
// arr.unshift(0);         //arr = [0,1,2,3,4,5]

// 5. splice - removes value from the middle. syntax = arr.splice(position jha se value htani h, number of values to be removed)
// arr.splice(2,1);         //arr = [1,2,4,5]

// 6. slice - it is the beginning index of the specified portion of the array. If the start is undefined, then the slice
//            begins at index 0. returns a copy of a section of an array and do not modify the actual array.
// arr.slice(2,1); //output - [1,2,3,4,5] - no change in the actual array
// let newarr = arr.slice(2,1); // output - []    you can't print the value backwards
// let newarr = arr.slice(2,3);    //output - [3] - gives the copy of an arr.
// let newarr = arr.slice(2,4);    //output - [2,3,4]
// let newarr = arr.slice(2,5);    //output - [2,3,4]  since arr size is 4.

// 7. reverse() - reverse krdega arr ko
// arr.reverse();   //output - [5,4,3,2,1]

// 8. sort - sort the arr in an order(ascending/descending). syntax - It always accept a function with two parameters.
// eg . 
// let arr = [2,5,1,3,6,0,7,11];
// let sr = arr.sort(function(a , b){
//     return a - b ;   //this syntax return the arr in ascending order
//     // return b - a ;    //this syntax return the arr in descending order
// });


// map, reduce, filter - teeno function accept krte with one parameter. works like forEach loop
// let arr = [9,11,43,7,1];
// arr.forEach(function(val){
//     console.log(val);   //forEach loop har element k liye ekbr function chlayga
// });


// 9. map - sirf tab use karna h jb apko ek naya array bnana h pichle array ke basis par.
//          map dikhte hi ek blank array bna liya kro.

// let arr = [9,11,43,7,1];
// let newarr = arr.map(function(val){
//     return 12;       //har element k liye return hoga 12. jo print/store hoga ek naye array(newarr) m. mtlb 5 br 12 print hoga.
// });

// note : return krna is important in map. Otherwise it will print 'undefined' .kitni br?? jo arr size h utni br
// let arr = [9,11,43,7,1];
// let newarr = arr.map(function(val){}); //output - [undefined,undefined,undefined,undefined,undefined,]

// let arr = [9,11,43,7,1];
// let newarr = arr.map(function(val){
//     if(val > 10) return val;  //output - [undefined, 11, 43, undefined, undefined]
// }); 


// 10. filter - Returns the elements of an array that meet the condition specified in a callback function. Here it returns true/false.
// if true toh new arr me jaygi vo satisfied values and if false toh ni jaygi 

// let arr = [1,2,3,4,5,6];
// let newarr = arr.filter(function (val){
//     if(val > 3) return true;  //output - [4,5,6]
// });


// 11. reduce() - arr ko reduce krta hai into one value. accepts parameters accumulator and val.
// accumulator is like a variable which is initially set to 0(if you want, it could be 1 or etc...) jo apni value ko yaad
// rkhta h. naam kuch bhi rkh skte h you can write chacha, pacha .. instead of accumulator. pr its called accumulator only.

// let arr = [1,2,3,4,5,6];
// let ans = arr.reduce(function(accumulator,val){
//     return accumulator + val;  //output - 21 (1+2+3+4+5+6)
// }, 0);  //0 is the initial value of accumulator set by me. if its 1 output will be 22


// 12. find - also accepts a function and it returns jo bhi first value satisfies a condition.

// let arr = [1, 11, 111, 1111, 11];
// let ans = arr.find(function(val){
//     return val === 11;   //arr ki vo value return krega jiski phle value 11 mil jaye even if there are 2 value equal to 11.
// });


// 13. some - return true of false value for the given condition
// let arr = [10,20, 30, 50, 90];
// let ans = arr.some(function(val){
//     return val > 80;   //output - true kyuki val > 80 exists i.e 90
// });

// 14. every = just opposite of some. checks if all the elements satisfies the given condition.
// let arr = [15,20,40,60,75];
// let ans = arr.every(function(val){
    // return val > 10;  //output true
    // return val > 50;  //output false
// });

