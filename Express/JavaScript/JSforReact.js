// CLASSES

// 1 [OLD WAY]
// function Vacation(destination, length) {
//   this.destination = destination;
//   this.length = length;
// }
// Vacation.prototype.print = function () {
//   console.log(this.destination + " | " + this.length + " days");
// };
// const maui = new Vacation("Maui", 7);
// maui.print(); // Maui | 7 days

// 2 [NEW WAY]
// class Vacation {
//   constructor(destination, length) {
//     this.destination = destination;
//     this.length = length;
//   }
//   print() {
//     console.log(`${this.destination} will take ${this.length} days.`);
//   }
// }
// const trip = new Vacation("Santiago, Chile", 7);
// trip.print(); // Santiago, Chile will take 7 days.

// Functional JS

// console.log("**********************1************************");
// // 1
// var a = function (message) {
//   console.log(message);
// };
// a("In JS, functions are variables");
// console.log("**********************2************************");
// // 2
// const b = (message) => {
//   console.log(message);
// };
// b("In JS, functions are variables");
// console.log("**********************3************************");
// // 3
// const obj = {
//   message: "They can be added to objects like variables",
//   c(message) {
//     console.log(message);
//   },
// };
// obj.c(obj.message);
// console.log("**********************4************************");
// // 4
// const messages = [
//   "They can be inserted into arrays",
//   (message) => console.log(message),
//   "like variables",
//   (message) => console.log(message),
// ];
// messages[1](messages[0]); // They can be inserted into arrays
// messages[3](messages[2]); // like variables

// console.log(typeof(2 + "2" + 2));//"222"

// var a = Math.max(6, 2, 3, 4, 9, 6, 7);
// console.log(a);
// var obj = {};
// Object.assign(obj, { name: "yamini", class: 4, marks: 97 });
// console.log(obj); //{ name: 'yamini', class: 4, marks: 97 }

// ************************************************************************************

// Arrow Funtions
// Array Methods
// Spread Operator
// Rest Operator
// Destructuring

// SPREAD Operator

// 1 : Pass the object of any type
// var sum = (a, b) => {
//   var result = a + b;
//   console.log("result = ", result);
// };
// // var num1 = 10;
// // var num2 = 20;
// // sum(num1, num2);//result =  30
// var numArr = [10, 20];
// // sum(numArr);//result =  10,20undefined
// sum(...numArr);//result =  30

// 2 : Add another array2 to array1
// let arr1 = ["almond", "walnut"];
// console.log("arr1 = ",arr1);
// let arr2 = ["mango","apple", ...arr1, "banana","orange"];
// // arr2 =  [ 'mango', 'apple', 'almond', 'walnut', 'banana', 'orange' ]
// console.log("arr2 = ",arr2);

// 3 : Copy the array1 to array2
// let ar1 = [1,2,3];
// let ar2 = [...ar1];
// console.log("ar1 = ", ar1);//ar1 =  [ 1, 2, 3 ]
// console.log("ar2 = ", ar2);//ar2 =  [ 1, 2, 3 ]
// ar2.push(4,5,6);
// console.log("ar2 = ", ar2);//ar2 =  [ 1, 2, 3, 4, 5, 6 ]

// 4 : Concate Arrays
// let ar1 = [1, 2, 3];
// let ar2 = [4, 5, 6];
// let ar3 = [...ar1, "boat", ...ar2];
// let ar4 = ar1.concat(ar2);
// console.log("ar1 = ", ar1); //ar1 =  [ 1, 2, 3 ]
// console.log("ar2 = ", ar2); //ar2 =  [ 4, 5, 6 ]
// console.log("ar3 = ", ar3); //ar3 =  [ 1, 2, 3, 'boat', 4, 5, 6 ]
// console.log("ar4 = ", ar4); // ar4 =  [ 1, 2, 3, 4, 5, 6 ]

// REST Operator [condense multiple elements into an array]

// function add(a, ...args) {
//   console.log("a = ", a); // a = 2
//   console.log("args = ", args); // args = [3, 4, 5, 6, 7, 8, 9]
//   let res = 0;
//   for (const i of args) {
//     res += i;
//   }
//   console.log("res = ", res); // res =  42
//   return res * a;
// }
// let result = add(2, 3, 4, 5, 6, 7, 8, 9);
// console.log("result = ", result); // result =  84

// DESTRUCTURING

// 1 Assign variables from objects

// let details = {
//   name: "yamini",
//   yoe: 2.5,
//   company: "hcl tech",
// };
// console.log("details = ", details);
// // details =  { name: 'yamini', yoe: 2.5, company: 'hcl tech' }
// let myName = details.name;
// let myYoe = details.yoe;
// let myCompany = details.company;
// let myDetails = { myName, myYoe, myCompany };
// console.log("myDetails = ", myDetails);
// // myDetails =  { myName: 'yamini', myYoe: 2.5, myCompany: 'hcl tech' }

// 2 Assign variables from nested objects

// A : Objects
// const details = {
//   profile: { name: "yamini", yoe: 2.5, company: "hcl tech" },
//   skills: {
//     language: "c|c++|java|html|css|javascript",
//     framework: "flutter|angular|react",
//     databases: "mysql|mongodb",
//   },
// };
// console.log("details = ", details);
// const { profile: { name: naam, yoe: kaam, company: workplace }} = details;
// console.log("naam = ", naam); // naam =  yamini
// console.log("kaam = ", kaam); // kaam =  2.5
// console.log("workplace = ", workplace); // workplace =  hcl tech

// B : Arrays
// let [p, q, ...r] = [1, 2, 3, 4, 5];
// console.log("p & q & r = ", p, q, r); // p & q & r =  1 2 [ 3, 4, 5 ]
// let [v, , , w] = [10, 20, 30, 40, 50];
// console.log("v & w = ", v, w); // v & w =  10 40
