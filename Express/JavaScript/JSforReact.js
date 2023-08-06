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

console.log(typeof(2 + "2" + 2));//"222"
