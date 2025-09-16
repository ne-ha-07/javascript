// OBJECTS - square bracket ki jgh curly braces lga diye, toh vo object bngya.
// let obj = {}; // called blank object

// let obj = {                         //object created
//     name : 'abc',                   // key-value structure
//     age : 25,
//     contact : 83687236,
//     gender : "F"
// };
// console.log(obj.gender);     //accessing an object 1st way
// console.log(obj['name']);   //another way of accessing an object

// dot(.) v/s bracket [] notation - used to access the object, we have seen just above.


// Nesting and Deep Access - nesting is just like nesting of loops

// const user = {
//     name : "xyz",
//     gender : "F",
//     address :{                //1st nesting
//         city : "delhi",
//         pincode : 110077,
//         location :{          //2nd nesting
//             latitude: 22.3,
//             longitude : 77.4
//         },
//     },
// };

// console.log(user.address.location.longitude);  //deep access

// shortcut to access latitude and longitude if we need it multiple times - this is called destructuring of objects.
// let {latitude, longitude} = user.address.location;
// console.log(latitude);

// Loop - for-in, Object.keys, Object.entries.

// let obj = {
//     name : 'abc',
//     age : 25,
//     contact : 83687236,
//     gender : "F"
// };

// 1: using for-in loop - syntax :- for(variable in Object_name){}
// for(let key in obj){
//     console.log(key);   //output: name age contact, gender
//     console.log(obj[key]); //way of accessing values of the keys  //output :- abc 25 83687236 F
//     console.log(key, obj[key]);   //accessing key value pairs.
// }

// 2. Object.keys() - sari keys ko array me daal deta h
// console.log(Object.keys(obj));   //print all the keys in an array.

// 3. Object.entries() - ye array of arrays bna deta h jiske andr key value pair ek array me hoga and the entire 
//                       key value pair khud ek array me store hoga.

// console.log(Object.entries(obj));


// Copying objects - using spread operator, Obect.assign, deep clone
// spread
// let obj = {
//     name : 'abc',
//     age : 25,
//     contact : 83687236,
//     gender : "F"
// };
// let obj2 = {...obj}; //output - same as obj

// // Object.assign - syntax (blank object {}, object jha se copy krna h) -- not used so often
// let obj3 = Object.assign({}, obj);  //output - same as obj
// // Note : you can also insert an extra property by using Object.assign() method to an exisiting obj.
// let obj4 = Object.assign({address : "Delhi"}, obj);  //ouput - same as obj with an extra property address : "Delhi"

// deep clone - copying an object using spread operator in case of nested objects is a bad way. For eg .- 
//              obj2 is the copy of obj(by spread op) and any modifications done in obj2 's nested object will also change the original obj's nested property.

// let obj = {
//     name : 'abc',
//     age : 25,
//     contact : 83687236,
//     gender : "F",
//     address : {
//         location : "Delhi",
//         pincode : 6342
//     }
// };
// let obj2 = {...obj};
// obj2.address.location = "Mumbai";  //ouput - obj will also show mumbai in location property after modifying obj2.

// spread - stores the real copy of all other properties but stores the reference for the nested properties.
// To avoid this , we use deep cloning. It makes the real copies of both normal and nested properties.
// Fo deep cloning we use a method called, JSON.stringify(obj) :- this method converts the object into a string.
// And to convert this string back to an object we write - JSON.parse(JSON.stringify(obj))

// let obj = {
//     name : 'abc',
//     age : 25,
//     contact : 83687236,
//     gender : "F",
//     address : {
//         location : "Delhi",
//         pincode : 6342
//     }
// };

// let obj2 = JSON.parse(JSON.stringify(obj));
// obj2.address.location = "Hyderabad"; //this modification of obj2 won't change the original obj now.

// -----------------------------------------------------------------------------------------------------------------------