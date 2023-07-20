console.log('******************entering test javascript file*******************');
// 1
// let name1 = "Mern2";
// var name2 = "Offline";
// const name3 = "Class";
// function MyFunction() {
//     let a = 7;
//     var b = 8;
//     const c = 9;
//     console.log("Inside MyFunction");
//     console.log(name1);
//     console.log(a);
//     console.log(name2);
//     console.log(b);
//     console.log(name3);
//     console.log(c);
//     {
//         let a = 70;
//         var b = 80;
//         const c = 90;
//         console.log("Inside Second Block of MyFunction");
//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }
// }
// MyFunction();


// 2
// let add = 11 + 21
// console.log(add); //32
// let sub = 100 - 13
// console.log(sub); //87
// let mul = 7 * 9
// console.log(mul); //63
// let div = 100 / 5.0
// console.log(div); //20
// let mod = 9 % 5
// console.log(mod) //4
// let expo = 2 ** 5
// console.log(expo) //32
// let inc = 2;
// inc2 = inc++;
// console.log(inc2) //2
// let dec = 2;
// dec2 = dec--;
// console.log(dec2) //2
// let a = 4;
// let c = 1;
// c += a; //Addition
// b = +a; //Use =+ to make value +ve 
// d = -a; //Use =- to make value -ve
// console.log(c);
// console.log(b)
// console.log(d);


// 3
// let c = 7;
// e = -c;
// console.log(e)	//-7
// const a= 5; 
// console.log(b = a + 3); //8
// console.log(c = a - 1);//4
// console.log(c=c*3);//12
// console.log(c%2);//0
// const d = 2;
// console.log(c**d);//144
// console.log(c<<=2);//48
// console.log(c>>=2);//12
// console.log(c&=2);//0
// console.log(c|=2);//2
// console.log(c^=2);//0





// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// console.log("var a "+a);
// console.log("let b"+ b); //Let don't follow hoisting 
// var a=10; //Follow functional scope
// let b=20; //Error :: Cannot access 'b' before initialization //Follow block scope

// function abc(){
//     {
//         var a=10;
//     }
//     {
//         let b=20; 
//     }
//     console.log(a);
//     // console.log(b); //Error :: ReferenceError: b is not defined
// }
// abc();
// console.log(typeof(abc));

// const a = {
//     obj1 : 5,
//     obj2 : 6
// }
// console.log("const a " + a);
// console.log("a.obj1 " + a.obj1);
// console.log("a.obj2 " + a.obj2);
// a.obj1 = 10
// console.log("reinitializing value of a.obj1 " + a.obj1);

// let Name = "Mern2";
// function MyFunction() {

//     let a = 7;
 
//     console.log(Name);

//      console.log(a);
// }
// MyFunction();            

// let x, num, sum;
// x = 120;
// y = 20;
// num = x / 2;
// sum = x + y;
// console.log(num + "   " + sum);

// var a = 4;
// var b ="test";
// console.log(a+b); //Typecasting will not work with minus


// let div = 100 / 5.0
// console.log(div);
// let mod = 9 % 5
// console.log(mod)
// let expo = 2 ** 5
// console.log(expo)
// let a = 4;
// b = +a;
// console.log(b)
// b = -a;
// console.log(b)

// ****************************************************************************
// var a = 0;
// if(a){   
//     console.log("entered if"); //every non zero value is true -ve/+ve
// }
// else{
//     console.log("entered else"); //every zero value 
// }
//  var s = 'yes';
//  var t;
//  if(t){
//     console.log("entered if");
//  }
// else{
//     console.log("entered else");
// }
// ******************************************************************************
// console.log("1 ::::"+typeof class ABC { } === 'function');
// console.log("2 ::::"+typeof Math.acos === 'function');
// console.log("3 ::::"+typeof function () { } === 'function');

// console.log(true || false || false);
// console.log(false || false || false);
// console.log(false || false || false || true);


// 15-07-23
const faculty = {
    firstName : "Yamini",
    lastName : "Sharma",
    abc1 : function(){console.log(this);},
    abc2 : function(){
        console.log(`${faculty.firstName}`);
        console.log(`${this.lastName}`);
    },
    contactNumber : {
        personalNo : "123456789",
        officeNo : "9988776655"
    }
}
// console.log(faculty);
// console.log(faculty.firstName);
// console.log(faculty.lastName);
// Q: Access only keys from object faculty ??
// console.log("faculty.abc1 = ",faculty.abc1);
// console.log("faculty.abc2 = ",faculty.abc2());
// console.log("office num = ",faculty.contactNumber.officeNo);
// console.log("personal num = ",faculty.contactNumber.personalNo);
// 
// function test(){
//     console.log(this);
// }
// console.log("test :::: ",test);test;
// console.log("test() ::::",test());

//Spread Operator
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = arr1.concat(arr2);
// console.log("First Method of Concatenation ::::: ",arr3);
// const arr4 = [...arr1, ...arr2];
// console.log("Second Method using Spread operator :::: ",arr4); 

// 
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combined = [...arr1, ...arr2]; //Accessing all members of arr1 and arr2
// console.log(combined); 

// 
// const obj1 = { foo: 'bar' };
// const obj2 = { baz: 'qux' };
// const merged = { ...obj1, ...obj2 };
// console.log(merged); 

// 
// function sum(a, b, c) {
//     return a + b + c;
//   }
//   const numbers = [1, 2, 3, 88]; //will ignore '88' becoz we have passed (a,b,c) only
//   console.log(sum(...numbers)); 

// Need to understand
// const str = 'Hello';
// const chars = [...str];
// console.log(chars); 

// 
// const arr = [1, 2, 3];
// const combined = [...arr, 4, 5, 6, ...arr];
// console.log(combined); 

//
// const double = (number) => {
//     return number * 2;
//   };
// console.log(double(56)); 

//IMPs
// let animal = {
//     name: "cat"
// }
// console.log(animal.name);//cat
// animal.name = "dog";
// console.log(animal.name);//dog
// animal.name = "elephant";
// console.log(animal.name);//elephant
// Object.freeze(animal);
// animal.name = "rabbit"
// console.log(animal.name);//elephant


// Doubt
// function demo1(){
//     fName = "Ken";
//     LName = "Adams"
//     console.log(demo1.fName);
// }
// console.log(demo1());

// const test = function demo2(){
//     fName = "Ken";
//     LName = "Adams"
// }
// console.log(test.fName);

// Doubt Solution ??

// 16-07-2023
// Default type of key is string
var a = {
    1 : "Yam",
    2 : "Jam",
    ab : "Hello ab"
}
console.log(typeof(a));//object
console.log(typeof(a[1]));//string



  


