// OPTIONAL Chaining -syntax - ?. - koi property object m hui toh access ho jaygi but ni hui toh undefined aa jayga lkin error ni ayga.
// eg.:
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
// obj?.address?.location;

//agr aage kbhi code m address ki addresses krdiya toh ap use jb access krne jaoge, tb agr address milgya toh value de dega
// wrna undefined but not error.

// Computed Properties - agr object k andr kisi predefined variable k naam ki property bnani h toh use this inside [].
// eg.:

// let role = "admin";
// let obj = {
//     name : 'abc',
//     age : 25,
//     contact : 83687236,
//     gender : "F",
//     [role] : "Neha"
// };
// output :  same as obj but role ki jgh admin likha hoga.


// ----------------------------------------------------------------------------------------------------------------------
// Questions practice

// Q1. Create an object for a student with name, age and isEnrolled.

// let obj = {
//     name : "Neha",
//     age : 25,
//     isEnrolled : true
// };

// Q2. Can an object key be a number or a boolean ? Try.

// let obj = {
//     123 : "Number",
//     false : "Boolean"
// };

// so Yes.

// Q3. Access the value of "first_name" from this object :
// const user = {
//     "first_name" : "xyz",
// };
// console.log(user["first_name"]); //this is accessed by using [""] and Yes we can access it.


// Q4. Given a dynamic key , let key = "age", how will you access user[key] ?
// let key = "age";
// const user = {
//     "first_name" : "xyz",
//     age : 25
// };

// console.log(user[key]);
// by writing user[key].

// Q5. From the object below access latitude.
const locations = {
    city : "Delhi",
    coordinates : {
        latitude : 22.3,
        longitude : 77.2
    }
};

// console.log(locations.coordinates.latitude);  //output : 22.3

// Q6. What will happen if coordinates is missing ? How can you prevemt errors ?
// ans - By using optional chaining (?.)

// console.log(locations?.coordinates?.latitude); //undefined.

// Q7. Destructure the city and latitude from the location object above.

// let {city} = locations;
// let {latitude} = locations.coordinates;

// console.log(city);
// console.log(latitude);

// Q8. Destructure the key "first-name" as a variable called firstName.
// Q is saying "first-name" ko destructure kro pr us variable ka naam firstName rkhdo.

// const user = {
//     "first-name" : "neha"
// };
// let {"first-name" : firstName} = user;
// console.log(firstName);

// Q9. Use for-in loop to log all keys in this object.
// const course = {
//     title : "Javascript",
//     duration : "4 weeks"
// };

// for(let key in course){
//     console.log(key);   //output : title duration
// }

// Q10. use Object.entries() to print all key-value pair as :
// const course = {
//     title : "Javascript",
//     duration : "4 weeks"
// };

// console.log(Object.entries(course));  //return the key-value pairs in an array of arrays.
// to print the array of arrays using forEach loop.
// Object.entries(course).forEach(function(val){
//     console.log(val[0] + ": " + val[1] );    //output :- title : JavaScript , duration : 4 weeks
// });


// Q 11. use a variable to dynamically assign a property.
// const key = "role"; //variable

// let obj = {                   //object
//     name : "neha",
//     [key] : "admin"        //output - role : admin  //this is called dynamically assigning a property to an object.
// };