// CALL APPLY BIND
// (1) CALL
// function abc(){
//     console.log(this);
// }
// var obj = {
//     name: "sati",
//     age : 5,
//     city: "kankhal"
// }
// abc.call(obj); //here abc.call() will force "this" keyword to point to current obj
// abc(); //here abc() will force "this" to point to window, but we want "this" should point to object not the window

// CALL with Parameters
// function abc(school, favColor){
//     console.log(this, school, favColor);
// }
// var obj = {
//     name: "sati",
//     age : 5,
//     city: "kankhal"
// }
// abc.call(obj, "Gurukul Academy", "red");

// (2) APPLY
// function abc(school, favColor){
//     console.log(this, school, favColor);
// }
// var obj = {
//     name: "sati",
//     age : 5,
//     city: "kankhal"
// }
// abc.apply(obj,["Gurukul Academy", "red"]);

// BIND
// function abc(){
//     console.log(this);
// }
// var obj = {
//     name: "sati",
//     age : 5,
//     city: "kankhal"
// }
// var newBindedFun = abc.bind(obj);
// console.log(newBindedFun()); //{name: 'sati', age: 5, city: 'kankhal'}