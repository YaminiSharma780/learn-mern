//1
// var a; //var is not used so much
// a=10;
// let b;
// b=20;
// const c=30;
// C=45;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(C); //Case-Sensitive

//2
// let p=77;
// let q="qString";
// let r=true;
// let s=undefined;
// let t={};
// console.log(typeof(p));
// console.log(typeof(q));
// console.log(typeof(r));
// console.log(typeof(s));
// console.log(typeof(t));

//3
// let m = 1;
// let n = '2';
// let result = m+n;
// console.log("result = "+result);
// console.log(typeof(result));//12 string
// console.log(typeof(Number(result)));//number
// console.log(typeof(String(result)));//string
// console.log(typeof(Boolean(result)));//boolean
// let foo = Boolean(result);
// console.log("result = "+result);
// console.log("foo = "+foo);
// let moo = Boolean(foo);
// console.log("moo = "+moo);

//4
// let test1 = "test";
// x = Number(test1);
// console.log(x); //Nan {Not a Number}
// console.log(typeof(x));//number

// let test2 = null;
// y = Number(test2);
// console.log(y);//0
// console.log(typeof(y));//number

// let test3 = undefined;
// z = Number(test3);
// console.log(z);//Nan
// console.log(typeof(z));//number

// 5
// let o1 = 'yam';
// let o2 = 'ini';
// console.log(o1+o2);

//6 {Fn+F2 to change variable name}
// let soo = 2;
// let poo = 3;
// let expo = soo ** poo; // (soo)^poo
// console.log(expo); //8

//7 {'==' vs '==='}
// let r = 2;
// let s = '2';
// console.log(r == s);//true
// console.log(r === s);//false
// console.log(r != s);//false
// console.log(r !== s);//true

//8
// let abc = 4;
// let xyz = 5;
// console.log(abc && xyz);//5
// console.log(abc || xyz);//4
// console.log(abc != xyz);//true
// let t = true;
// let f = false;
// console.log(t && t);//true
// console.log(t && f);//false
// console.log(f && f);//false
// console.log(t || t);//true
// console.log(t || f);//true
// console.log(f || f);//false
// console.log(!t);//false
// console.log(!f);//true

//9
// let marks = 45;
// const res = (marks>=50)? "Passed": "Failed";
// console.log(res);
// const x = "";
// console.log(x);
// if (marks>=50) {
//     console.log("Passed");
//     x = "Passed";
//     console.log(x);//Will not give error becoz x was initialised as nothing

// } else {
//     console.log("Failed");
//     x = "Failed"; //Will give error due to const x
//     console.log(x);
// }

//10
// let grade = 'A';
// switch (grade){
//     case 'A':
//         console.log('Excellent');
//         break;
//     case 'B':
//         console.log('Good');
//         break;
//     case 'C':
//         console.log('Need to Improve');
//         break;
//     case 'D': case 'E':
//         console.log('Fail');
//         break;
//     default:
//         console.log("Invalid");
// }

//11
// let step = 10;
// let i = 0;
// console.log("FOR LOOP");
// for(i=0 ; i<5 ; i++){
//     console.log(step += 10);
// }
// i=0;
// step=10;
// console.log("WHILE LOOP");
// while (i<5) {
//     console.log(step += 11);
//     i++;
// }
// i=0;
// step=10;
// console.log("DO WHILE");
// do{
//     console.log(step += 12);
//     i++;
// } while(i<5)

//12 {break vs continue}
// let step = 7;
// let i = 0;
// console.log("While Loop");
// while(i<10){
//     if(i === 3){
//         break; //Loop will run from 0 to 2
//         // continue; //Loop will run from 0 to 2, skip 3, then run from 4 to 8
//     }
//     console.log(i, step += 10);
//     i++;
// }

//13 {Arrays}
// const arr = [
//   "one",
//   "two",
//   "three",
//   "four",
//   45,
//   true,
//   { key1: "value1", key2: "value2", key3: "value3" },
//   function abc() {
//     console.log("inside function abc()");
//   },
// ];
// console.log(arr);
// console.log(arr[3]); //four
// console.log(arr[4]); //45
// console.log(arr[5]); //true
// console.log(arr[6]); //key: "value"
// console.log(arr[7]); //ƒ abc() { console.log("inside function abc()"); }
// console.log(arr[10]); //undefined
// //Array Length
// console.log("arr.length = ",arr.length);
// //Update const Array Element
// arr[1] = "tasty";
// console.log(arr[1]);
// //Assignation of Array
// const array = arr;
// console.log(array);
// array[2] = "soda";
// console.log("array[2] = ",array[2]);
// //Original array will change because array[] is just reference of arr[] {stored in same memory location}
// console.log("arr[2] = ",arr[2]);

//14 {Array Functions}
// const menu = ["idli","dosa","halwa","kheer","barfi"];
// concat()
// const deserts = ["chocolate", "gajar-ka-halwa" ,"ice-cream"];
// const starters = ["paneer", "machurian", "momos"];
// console.log("New Menu = ",deserts.concat(starters));
// delete operator
// console.log(starters);
// console.log(starters.length);
// delete starters[1];
// console.log(starters);
// console.log(starters.length);//delete never affects length of array
// typeof()
// console.log(typeof(menu),typeof(deserts),typeof(starters));//object object object
// join()
// console.log(menu.join(" & "));
// // indexOf()
// console.log("index of halwa ? ",menu.indexOf("halwa"));
// // includes()
// console.log("menu includes pepsi ? ",menu.includes("pepsi"));
// // push()
// menu.push("pepsi");
// console.log("menu after push(pepsi) ",menu);
// // pop()
// menu.pop();
// console.log("menu after pop() ",menu);
// // shift()
// menu.shift();
// console.log("menu after shift() ",menu);
// // unshift()
// menu.unshift("coffee");
// console.log("menu after unshift(coffee) ",menu);
// // sort()
// menu.sort();
// console.log("menu after sort() ",menu);
// // slice()
// console.log("slice(2, 4)", menu.slice(2, 4));
// let arr = [6,34,7,596,3,5,24,2];
// arr.sort();
// console.log(arr);

// 15 {Functions}
// let val1 = 7;
// let val2 = 3;
// let result = sum(val1, val2);
// console.log("result = ",result);
// console.log();
// function sum(a,b){
//     const res = a+b;
//     console.log("res = " ,res);
//     return res;
// }

// 16 {Function Expression}
// Anonymous Functions can be created without function name
// console.log(futt);//ReferenceError: Cannot access 'futt' before initialization
//Function Expression is NOT HOISTED {function expression can never be called before it's declaration}
// Function is always HOISTED {function can be easily called before it's declaration}
// const futt = function(a,b){
//     return a+b;
// }
// console.log(futt);//f(a,b){return a+b;}
// console.log(futt(5,4));//9

// 17 {Nested Functions}
// console.log("addition of squares = ",addSquare(4,5)); //41
// function addSquare(a,b){
//     const sa = square(a);
//     const sb = square(b);
//     function square(x){
//         return x*x;
//     }
//     return sa+sb;
// }

// 18
// var : function scoped
// function abc1(){
//     for(var i=0; i<5; i++){
//         console.log(i); // 0,1,2,3,4
//     }
//     console.log("i after exiting loop = ",i);// i after exiting loop =  5
// }
// abc1();

// let : block/braces scoped
// function abc2(){
//     for(let i=0; i<5; i++){
//         console.log(i); // 0,1,2,3,4
//     }
//     console.log(i);// Uncaught ReferenceError: i is not defined
// }
// abc2();

// 19
// var adds itself to window object
// var a1 = 44; //can be seen in window object
// let + const NEVER add themselves to window object
// let a2 = 99;
// const a3 = 7;

// Execution Context vs Lexical Environment
// fun xyz() can access all members of fun abc() but the vica versa can't happen
// Parent can't access members of Child but Child can easily access members of Parent
// function abc(){
//     var a=1;
//     let b=2;
//     const c=3;
//     console.log("fun abc()");
//     // Due to Lexical Environment
//     // console.log(x,y,z);//Uncaught ReferenceError: x+y+z is not defined
//     xyz();
//     function xyz(){
//         var x=10;
//         let y=20;
//         const z=30;
//         console.log("fun xyz()");
//         console.log(a,b,c);
//     }
// }
// abc();

// Truthy vs Falsy
// if("yamini"){
//     console.log("I am Truthy");
// } else{
//     console.log("I am Falsy");
// }

// forEach Loop for Arrays
// var arr = [2,95,6,3];
// 1
// console.log("Iteration of Array");
// arr.forEach(function (a){
//     console.log(a);
// })
// // 2
// console.log("Increaseing value of each array element by 2");
// arr.forEach(function (a){
//     console.log(a+2);
// })
// console.log("Checking if original Array got changed");
// arr.forEach(function (a){
//     console.log(a);
// })

// forin Loop for Objects
// var obj = {
//     name: "ram",
//     age: 10,
//     city: "Ayodhya",
// }
// console.log(obj);
// var key
// for(key in obj){
//     console.log(key,':' ,obj[key]);
// }

// Type of Array
// var x = [3,6,1,4,9];
// console.log("typeof(x) = ",typeof(x));//object
// var obj = {
//     name: "ram",
//     age: 10,
//     city: "Ayodhya",
// }
// console.log("typeof(obj) = ",typeof(obj));//object
// // How to Differentiate b/w Array and Object
// console.log("is x an array ?? ",Array.isArray(x));//true
// console.log("is obj an array ?? ",Array.isArray(obj));//false
// console.log("array x = ", x);
// x[-1] = 67;
// x[-2] = 43;
// console.log("array x after insertion = ", x);

// Delete a key:value from object obj
// delete obj.age;
// console.log(obj);