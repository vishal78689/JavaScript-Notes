
// // 6️⃣:   Synchronous JavaScript Prog 

// 1work = 10min
// 2work = 5s

// const fun2 = () => {
//   console.log(`Function 2️⃣ is called`);
// }

// const fun1 = () => {
//   console.log(`Function 1 is called`);
//   fun2();
//   console.log(`Function 1 is called Again ✌`);
// }

// fun1();


// Asynchronous JavaScript Prog 

const fun2 = () => {
  setTimeout(()=> {
      console.log(`Function 2️⃣  is called`);
  }, 2000);
}

const fun1 = () => {
  console.log(`Function 1 is called`);
  fun2();
  console.log(`Function 1 is called Again ✌`);
}

fun1();

// //👻 What is Event Loop in JavaScript?

//
// Currying


// const sum = (num1) => (num2) => (num3) => console.log(num1+num2+num3); 

// sum(5)(3)(8);


//

// // 8️⃣: CallBack Hell 

setTimeout(()=>{
    console.log(`1️⃣ works is done`);    
    setTimeout(()=>{
        console.log(`2️⃣ works is done`); 
        setTimeout(()=>{
            console.log(`3️⃣ works is done`);  
            setTimeout(()=>{
                console.log(`4️⃣ works is done`); 
                setTimeout(()=>{
                    console.log(`5️⃣ works is done`);   
                    setTimeout(()=>{
                        console.log(`6️⃣ works is done`);    
                    }, 1000) 
                }, 1000)   
            }, 1000)  
        }, 1000)   
    }, 1000)
}, 1000)

