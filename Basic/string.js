
// A JavaScript string is zero or more characters written inside quotes.

// JavaScript strings are used for storing and manipulating text.
// You can use single or double quotes

// Strings can be created as primitives, 
// from string literals, or as objects, using the String() constructor

// let myName = "visha thakur";
// let myChannelName = 'thakur fitness';

// // let ytName = new String("lucky");
// let ytName = 'lucky thakur';

// console.log(myName);
// console.log((ytName));



// 👉 How to find the length of a string
// String.prototype.length 🙋‍♂️
// Reflects the length of the string. 

let myName = "vishal thakur";
console.log(myName.length);



// 👉 Escape Character

let anySentence = "We are the so-called \"Vikings\" from the north.";
console.log(anySentence);

// if you dont want to mess, simply use the alternate quotes 

let anySentence1 =  " We are the so-called 'Vikings' from the north. ";
console.log(anySentence1);




// 👉 Finding a String in a String

// String.prototype.indexOf(searchValue [, fromIndex]) 🙋‍♂️

// The indexOf() method returns the index of (the position of) the first
//  occurrence of a specified text in a string

const myBioData =  'I am hones tdd';
console.log(myBioData.indexOf("t", 12));


// // JavaScript counts positions from zero.
// // 0 is the first position in a string, 1 is the second, 2 is the third ...

// // String.prototype.lastIndexOf(searchValue [, fromIndex]) 🙋‍♂️
// // Returns the index within the calling String object of the 
// // last occurrence of searchValue, or -1 if not found.

// console.log(myBioData.lastIndexOf("t", 6));



//..................................................................

// 👉 Searching for a String in a String

// String.prototype.search(regexp) 🙋‍♂️

// The search() method searches a string for a specified 
// value and returns the position of the match


 let sData = myBioData.search("hones");
console.log(sData);



// The search() method cannot take a second start position argument.


//............................................................................


// 👉 Extracting String Parts

// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)

// The slice() Method 🙋‍♂️
// slice() extracts a part of a string and returns the extracted part 
// in a new string.

// The method takes 2 parameters: the start position, 
// and the end position (end not included).

var str = "Apple, Bananaa, Kiwi, mango";

// let res = str.slice(0,4);
let res = str.slice(7,-2);
console.log(res);


// The slice() method selects the elements starting at the 
// given start argument, and ends at, but does not include, 
// the given end argument.

// Note: The original array will not be changed.
// Remember: JavaScript counts positions from zero. First position is 0.



//...................................................................

// The substring() Method 🙋‍♂️
// substring() is similar to slice().

// The difference is that substring() cannot accept 
// negative indexes.

// var str = "Apple, Bananaa, Kiwi";
let res1 = str.substring(-1);
console.log(res1);



// // If we give negative value then the characters are
//  counted from the 0th pos 



// The substr() Method 🙋‍♂️
// substr() is similar to slice().

// The difference is that the second parameter specifies the 
// length of the extracted part.


// var str = "Apple, Bananaa, Kiwi";
// // let res = str.substr(7,-2);
let res2 = str.substr(-5);
 console.log(res2);



