// Dom Manipulation
// Html se element select karna
// text badlna
// html badlna
// css badlna
// attribute badlna
// event listeners

// Topic 1 - DOM Tree Structure : node, element, text, comment
// The DOM is an API for manipulating HTML docs. Provides functions that allow you to remove, add and modify parts of the doc. 
// Represents the Html doc as a 'Node' of a Tree. Let's see down there.

// * Node
// <!DOCTYPE html>                    //Node
// /<html>                            //Node
//     <head>                         //Node
//         <title>JavaScript</title>  //Both <title> tag and 'JavaScript' text are nodes
//     </head>
//     <body>                         //Node
//         <!-- comment -->           //Node
//          <p>DOM</p>                //Node
//     </body>
// </html>

// * Node Relationships - Any node has relationships to other nodes in the DOM tree, and it is same as described in the
// traditional family tree.
// eg. <html> tag is the parent node where <head> tag and <body> tag are the child nodes.
// <head> tag and <body> tag are also the sibling nodes because they share same parent node.
// Similarly, <title> tag and <p> tag are the child nodes of <head> tag and <body> tag respectively.

// Topic 2 - Selecting elements: 
// (both old)
// 1.getElementById, 
// 2.getElementsByClassName,
// (both latest)
// 3.querySelector, 
// 4.querySelectorAll

//getElementById
// let x = document.getElementById("abcd");  //ye h4 node nikal kr dega
// console.log(x);
// console.dir - mainly objects ke internal properties ko clear and detailed tree format me explore krne k liye use hota h.

// getElementsByClassName - Elements isiliye h kyuki ek se zyda element k ps same class hoskta h but not the case in id.
// let x = document.getElementsByClassName("abcd"); //ye h2 nikal kr dega
// console.log(x);.

// querySelector - hmesha 1st element/query select krta h
// let x = document.querySelectorAll("h2");
// console.dir(x);

// Topic 3 - Dom Manipulation
// let x = document.querySelector("h2");
// console.dir(x);         //note that x act as an object because all the backend properties are displayed in key value pairs.
// x.innerText = "We are studying Dom manipulation.";  //this will manipulate the text inside <h2> from 'Query Selector All' to 'We are studying Dom manipulation.'
// x.innerHTML, x.textContent bhi krkste ho basically search kro konsi field me 'Query Selector All' likha hua h and change that.
// NOTe : innerText and textContent are same, changes the text. But innerHTML changes the html not the text.
// eg. 
let x = document.querySelector("h2");
x.innerHTML = "<i> hey </i>"; // changing the html content by adding italic(<i>) tag and innerText will be equal to 'hey'
console.dir(x);