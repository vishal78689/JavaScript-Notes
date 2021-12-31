
// 5️⃣ Array Subsection 4 👉 Map and Reduce Method 

// Array.prototype.map() 🙋‍♂️

// let newArray = arr.map(callback(currentValue[, index[, array]]) {
//     // return element for newArray, after executing something
//   }[, thisArg]);

// Returns a new array containing the results of calling a 
// function on every element in this array. 

 const array1 = [1, 4, 9, 16, 25];
// num > 9
// let newArr = array1.map((curElem,index,arr) => {
//     return curElem > 9;
// })
// console.log(array1);
// console.log(newArr);
// [ 1, 4, 9, 16, 25 ]
// [ false, false, false, true, true ]

// let newArr = array1.map((curElm, index, arr) => {
//     return `Index no = ${index} and the value is ${curElm} belong to ${arr} `
// }).reduce().
// console.log(newArr);


// let newArrfor = array1.forEach((curElm, index, arr) => {
//   return `Index no = ${index} and the value is ${curElm} belong to ${arr} `
// })
// console.log(newArrfor);

// It return new array without mutating the orignal array 


// // **********************************************************************

// let newarr=array1.map((elm,index,arr)=> {
//     return `Index =${index} and value is ${elm} and belong ${arr}` 
// })
// 'Index =0 and value is 1 and belong 1,4,9,16,25', 
// 'Index =1 and value is 4 and belong 1,4,9,16,25', 
// 'Index =2 and value is 9 and belong 1,4,9,16,25', 
// 'Index =3 and value is 16 and belong 1,4,9,16,25',
// 'Index =4 and value is 25 and belong 1,4,9,16,25'
console.log(array1);
console.log(newarr); 