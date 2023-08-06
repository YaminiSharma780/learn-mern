// SYNC CODE
// console.log("sync 1");
// console.log("sync 2");
// console.log("sync 3");
// console.log("sync 4");
// // ASYNC CODE
// console.log("async 1");
// console.log("async 2");
// setTimeout(function () {
//   console.log("async 3");
// }, 0);
// console.log("async 4");

// PROMISE

// A Promise is in one of these states:
// I. pending: initial state, neither fulfilled nor rejected.
// II. fulfilled: meaning that the operation was completed successfully.
// III. rejected: meaning that the operation failed.
// ****************************************
// var ans = new Promise((resolve, reject) => {
//   if (true) {
//     return resolve();
//   } else {
//     return reject();
//   }
// });
// ans.then(function(){}).catch(function(){})
// ****************************************

// PROMISE IMPLEMENTATION 1

// var ans = new Promise((resolve, reject) => {
//   var n = Math.floor(Math.random() * 10);
//   console.log('n = ', n);
//   if (n < 5) {
//     return resolve();
//   } else {
//     return reject();
//   }
// });

// ans
//   .then(function () {
//     console.log("below 5");
//   })
//   .catch(function () {
//     console.log("above 5");
//   });
// ****************************************

//  PROMISE IMPLEMENTATION 2

// var p = new Promise((resolve, reject) => {
//   return resolve("work 1");
// });

// var p1 = p.then(function (data) {
//   console.log(data);
//   return new Promise(function (resolve, reject) {
//     return resolve("work 2");
//   });
// });

// var p2 = p1.then(function (data) {
//   console.log(data);
//   return new Promise(function (resolve, reject) {
//     return resolve("work 3");
//   });
// });

// var p3 = p2.then(function (data) {
//   console.log(data);
//   return new Promise(function (resolve, reject) {
//     return resolve("work 4");
//   });
// });
// ****************************************

// ASYNC/AWAIT IMPLEMENTATION 1

// function abcd() {
//   fetch(`https://randomuser.me/api/`)
//     .then(function (rawData) {
//       return rawData.json();
//     })
//     .then(function (readableData) {
//       console.log(readableData);
//     });
// }
// abcd();
// ****************************************

// ASYNC/AWAIT IMPLEMENTATION 2

// async function abcd() {
//   try {
//     let rawData = await fetch(`https://randomuser.me/api/`);
//     let readableData = await rawData.json();
//     console.log(readableData);
//     document.getElementById("randomUserAPI").innerHTML = readableData;
//   } catch (error) {
//     console.error(error);
//   }
// }
// abcd();

// DOM MANIPULATION
// Four Pillars of DOM
// 1. Selection of an Element
// 2. Changing HTML
// 3. Changing CSS
// 4. Event Listener

// // 1. Selection of an Element
// var p = document.querySelector("p");
// console.log("p = ",p);
// var h1 = document.querySelector("#h1");
// console.log("h1 = ",h1);
// var cont = document.querySelector(".container");
// console.log("container 1 = ",cont);
// var cont2 = document.querySelector("#container2");
// console.log("container 2 = ",cont2);

// // 2. Changing HTML
// p.innerHTML = "HAHAHAHAHAH";

// // 3. Changing CSS
// p.style.color = "blue";
// h1.style.backgroundColor = "yellow";
// cont2.style.backgroundColor = "aquamarine"

// // 4. Event Listener
// p.addEventListener("click",function(){
//     p.innerHTML = "Why the hell you disturbed me? hmm?";
// })

// ARRAY OF TAGs
// var heading = document.querySelectorAll(".h2");
// heading.forEach((event)=>{
//     console.log(event);
// })
// heading[0].style.backgroundColor = "pink"
// heading[1].style.backgroundColor = "lightgreen"
// heading[2].style.backgroundColor = "aquamarine"
// var head3 = heading[2];
// // head3.innerHTML = "<h2>Added by query selector</h2>";
// head3.innerText = "Added by query selector";

// // BULB ON OFF
// var bulb = document.querySelector("#bulb");
// var myBody = document.body;

// // BULB with single Button
// var toggle = document.querySelector("#toggle");
// let flag = 0;
// toggle.addEventListener("click", () => {
//   console.log(flag);
//   if (flag == 1) {
//     console.log("inside if ",flag);
//     bulb.style.backgroundColor = "yellow";
//     myBody.style.backgroundColor = "white";
//     flag = 0;
//     console.log("after if ",flag);
//   } else if (flag == 0) {
//     console.log("inside else if ",flag);
//     bulb.style.backgroundColor = "grey";
//     myBody.style.backgroundColor = "black";
//     flag = 1;
//     console.log("after else if ",flag);
//   } else {
//   }
// });

// BULB with two Buttons
// var on = document.querySelector("#on");
// var off = document.querySelector("#off");
// on.addEventListener("click", () => {
//   bulb.style.backgroundColor = "yellow";
//   myBody.style.backgroundColor = "white";
// });
// off.addEventListener("click", () => {
//   bulb.style.backgroundColor = "grey";
//   myBody.style.backgroundColor = "black";
// });
