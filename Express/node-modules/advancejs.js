//18 {Advance Functions}
// Arrow Function 1
// const greet = (count) => {
//     while(count != 0){
//         console.log("Welcome Commander");
//         console.log(count--);
//     }
// }
// console.log(greet);//()=>{console.log("Welcome Commander");}
// greet(5);//Welcome Commander {5 times}
// Arrow Function 2
// const sq = (num) => num*num;//arrow function without curly braces {}
// console.log("square = ",sq(6));

// Call Back Function {A funtion is passed to another function as a parameter}
// const calculate = function (a, b, operation) {
//   return operation(a, b);
// };
// //Method 1
// const addResult = calculate(8, 4, function (num1, num2) {
//   return num1 + num2;
// });
// console.log("addResult = ",addResult);
// // Method 2
// const subtraction = (a,b) => a>b ? a-b : b-a;
// const subResult = calculate(90,70,subtraction);
// console.log("subResult = ",subResult);
// // Method 3
// function multiplication(a,b){
//   return a*b;
// }
// const mulResult = calculate(9,8,multiplication);
// console.log("mulResult = ", mulResult);

//Array CallBack Functions
// const a = [9,-2,1,0,7,-4,3,8,-6,5];
// const firstNegative = (num) => {
//   return num<0;//no need for if becoz return will true if num<0 and false if num>0
// }
// //find()
// const result1 = a.find(firstNegative);
// console.log("First Negative Number = ",result1);
// //findIndex()
// const result2 = a.findIndex(firstNegative);
// console.log("Index of First Negative Number = ",result2);
//forEach()
// console.log(a);
// a.forEach((num)=>{
//   num += 1;
//   console.log("array num after +1 : ",num);
// });

// Asynchronous vs Synchronous
// Synchronous Code
// console.log("I am ");
// console.log("freaking ");
// console.log("Synchronous");
// // Asunchronous Code
// // setTimeout(function,miliseconds);
// setTimeout(() => {
//   console.log("I am delayed by 2 seconds ;(");
// },2000);
// console.log("I am ");
// console.log("freaking ");
// console.log("Asynchronous");

// CALLBACK HELL {used to handle asynchronous operations}
// function getCheese(callbackFun){
//   setTimeout(()=>{
//     const cheese = "🧀";
//     console.log("here is your cheese :)) ", cheese);
//     callbackFun(cheese);
//   },2000)
// }
// function getButter(cheese,callbackFun){
//   setTimeout(()=>{
//     const butter = cheese + "🧈";
//     console.log("here is your butter :)) ", butter);
//     callbackFun(butter);
//   },2000)
// }
// function bakePizza(butter,callbackFun){
//   setTimeout(()=>{
//     const pizza = butter + "🍕";
//     console.log("here is your pizza :)) ", pizza);
//     callbackFun(pizza);
//   },2000)
// }
// getCheese((cheese)=>{
//   getButter(cheese,(butter)=>{
//     bakePizza(butter,(pizza)=>{
//       console.log("thanks! got my pizza ->>",pizza);
//     })
//   });
// });

// Synchronous PROMISES {eg:flight/train ticket promising us to take us from source to destination}
// const ticket = new Promise(function (resolve, reject) {
//     // we can call background API here
//     const isBoarded = true;
//     isBoarded
//       ? resolve("you have successfully boarded the flight")
//       : reject("sorry! you have missed the flight");
//   });
//   // Promise States {1.fulfill[.then(onFulfillment)] 2.reject[.catch(onRejection)]}
//   ticket
//     .then((data) => {
//       console.log("wohooooo",data);
//     })
//     .catch((data) => {
//       console.log("oh noooo",data);
//     })
//     .finally(()=>{
//       console.log("I will always be exceuted whatsoever");
//     });

// PIZZA BAKE with Promise
// function getCheese(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const cheese = "🧀";
//             resolve(cheese);
//             // reject("cheese not available"); //Either resolve/reject will get called
//         },2000);
//     });
// } 
// function getButter(cheese){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const butter = "🧈" + cheese;
//             // resolve(butter);
//             reject("butter not available");
//         },2000);
//     });
// }
// function bakePizza(butter){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const pizza = "🍕" + butter;
//             resolve(pizza);
//             // reject("pizza not available");
//         },2000);
//     });
// } 

// //Calling functions using Async/Await
// async function orderPizza(){
//     try {
//         const cheese = await getCheese();
//         console.log("fresh cheese is ready...");
//         const butter = await getButter(cheese);
//         console.log("fresh butter is ready...");
//         const pizza = await bakePizza(butter);
//         console.log("fresh & hot pizza directly from oven is ready...");
      
//     } catch (error) {
//         console.log("sorry! we have encountered a Error...😓", error);
//     }
//     console.log("****Process Ended****");
// }    
// orderPizza();

// Calling functions using Promise
// getCheese().then((cheese)=>{
//     console.log("take cheesey ",cheese);
//     return getButter(cheese);
// }).then((butter)=>{
//     console.log("take buttery ",butter);
//     return bakePizza(butter);
// }).then((pizza)=>{
//     console.log("take delicious ",pizza);
// }).catch((data)=>{
//     console.log("Error Occured :",data);
// }).finally(()=>{
//     console.log("Process Ended");
// })