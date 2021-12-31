

// 👉 Replacing String Content() 

// String.prototype.replace(searchFor, replaceWith) 🙋‍♂️

// The replace() method replaces a specified value 
// with another value in a string.

let myBioData = `I am vishal thakurs`;

let repalceData = myBioData.replace('vishal','VISHAL');
console.log(repalceData);
console.log(myBioData);


// Points to remember 
// 1: The replace() method does not change the string 
// it is called on.  It returns a new string.
// 2: By default, the replace() method replaces only 
// the first match
// 3:By default, the replace() method is case sensitive. 
// Writing VINOD (with upper-case) will not work


//..............................................................


//👉 Extracting String Characters

// There are 3 methods for extracting string characters:

// charAt(position)
// charCodeAt(position)
// Property access [ ]



// 1. The charAt() Method 🙋‍♂️
// The charAt() method returns the character at a 
// specified index (position) in a string

let str = "HELLO WORLD";

console.log(str.charAt(2));


// The charCodeAt() Method 🙋‍♂️
// The charCodeAt() method returns the unicode of the 
// character at a specified index in a string:

// The method returns a UTF-16 code
//  (an integer between 0 and 65535).

// The Unicode Standard provides a unique number for every 
// character, no matter the platform, device, application, 
// or language. UTF-8 is a popular Unicode encoding which
//  has 88-bit code units.



var str1 = "HELLO WORLD";

console.log( str1.charCodeAt(0) );



// Property Access
// ECMAScript 5 (2009) allows property access [ ] on strings

// var str = "HELLO WORLD";
 console.log(str[1]);


 //.......................................
 
// let myName = "vinod tHapa";
// console.log(myName.toUpperCase()); 
// console.log(myName.toLowerCase());







// The concat() Method 🙋‍♂️
// concat() joins two or more strings

let fName = "vishal"
let lName = "thakur"

console.log(fName + lName );
console.log(`${fName} ${lName}`);
console.log(fName.concat(lName));
console.log(fName.concat(" " ,lName));

//vishalthakur
// vishal thakur
// vishalthakur
// vishal thakur




// String.trim() 🙋‍♂️
// The trim() method removes whitespace from both 
// sides of a string

// var str = "              Hello         World!            ";
// console.log(str.trim());







// Converting a String to an Array
// A string can be converted to an array with the 
// split() method

// var txt = "a, b,c d,e";   // String
// console.log(txt.split(","));           // Split on commas
// console.log( txt.split(" "));          // Split on spaces
// console.log(txt.split("|"));         // Split on pipe

