

// 2️⃣ What is this Object?

// The definition  of "this" object is that it contain the current context. 

// The this object can have different values depending on where it is placed.  


// // For Example 1 
// console.log(this.alert('Awesome'));
// // it refers to the current context and that is window global object 


// // ex 2 
// function myName() {
//     console.log(this);
// }
// myName();
// still global context(window)




// // ex 3 

// var myNames = 'vishal';
// function myName() {
//     console.log(this.myNames);
// }
// myName();


// // ex 4 
// const obj = {
//     myAge : 26,
//     myName() {
//       console.log(this.myAge);
//     }
// }
// obj.myName();//it takes now objects scope

// // ex 5 
// // this object will not work with arrow function bcz arrow function is bound to class.

// const obj = {
//     myAge : 26,
//     myName : () => {
//       console.log(this);
//     }
// }
// obj.myName();
//it will give window object due to fat arrow functions





// // ex 6

let bioData = {
    myName : {
        realName : "vishal",
        channelName : 'thakur fitness'
    },
    // things to remember is that the myName is the key and the object is act like a value 
    myAge : 26,
    getData (){
      console.log(`My name is ${this.myName.channelName} and my age is ${this.myAge} `);
    }
  }

  bioData.getData();


// // call method is used to call the method of another object 
// // or with call(), an object can use a method belonging to another object 

// // But as per other it is simply the way to use the this keyword or another object 






// // **********************************************************************