// // Template Literals || String Interpolation
// let st1 = "yamini";
// let st2 = "sharma"
// console.log(`${st2}${st1}1999@gmail.com`); //sharmayamini1999@gmail.com

// // Escape Sequence Characters
// console.log("yamini\'s"); //yamini's
// console.log('sharma\'s'); //sharma's
// console.log('krati \n is barbrie'); //krati [nextline] is barbrie
// console.log('mani is \t not barbrie'); //mani is          not barbrie
// console.log('mom might \r be barbrie'); //be barbrie

// // String Methods
// let st3 = 'Rama\s';
// console.log("Length of st3 = ",st3.length); //Length of st3 =  5
// let st4 = 'Ra\nma';
// console.log("Length of st4 = ",st4.length); //Length of st4 =  5
// let st5 = "AbCdEfGh";
// console.log("st5.toUpperCase() = ",st5.toUpperCase()); //ABCDEFGH
// console.log("st5.toLowerCase() = ",st5.toLowerCase()); //abcdefgh

// // SLICE
// console.log(st5.slice(2,4)); //Cd
// console.log(st5.slice(2)); //CdEfGh

// // REPLACE
// console.log(st5.replace("EfGh","WxYz"));//AbCdWxYz

// // CONCAT
// let veena = "veena";
// let neena = "neena";
// let heena = "heena";
// let name = veena + neena + heena;
// console.log(veena.concat(" is friend of ",neena, " but enemy of ",heena));
// //veena is friend of neena but enemy of heena
// console.log("name = ",name);//name =  veenaneenaheena

// // TRIM
// let elephant = "        elephant        ";
// console.log("before trim() = ",elephant);//before trim() =          elephant
// console.log("after trim() = ",elephant.trim());//after trim() =  elephant

// // INCLUDES
// let sentence = "Defenders helped to get Agassiz’s desert tortoise listed  as a threatened species under the Endangered Species Act in 1990.";
// let word = "mountain";
// console.log(`The word ${word} in sentence ${sentence.includes(word)? 'exists': 'does not exist'} `);
// //The word mountain in sentence does not exist
// // startswith() and endswith()
// console.log(sentence.startsWith("Defenders"));//true
// console.log(sentence.startsWith(word));//false
// console.log(sentence.endsWith("1990."));//true
// console.log(sentence.endsWith("1990"));//false

// let yam = "yam jam";
// console.log(yam.length);//7
// console.log(sentence.length);//123
// console.log(sentence.endsWith("1990",122));//true
// console.log("my name is mon".length);

// // Convert string to number
// let a = Number.parseInt("890");
// console.log(typeof(a)); //number

// // Slice number value from string and convert to number
// let st6 = "Total bill is 102.5 rupees";
// let amount = Number.parseFloat(st6.slice(14,19));
// console.log(amount, typeof(amount)); //102.5 number

// // Change the immutable string
// let cat = "cat";
// cat[0] = 'b'; //WILL NOT WORK {because string is immutable}
// console.log(cat);

// SORT using compare()
let strNum = [67, 21, 99, 45, 13, 30];
// let strAlpha = ['M','O','C','H','A'];
// let strWord = ['van','boat','eagle','mango','apple'];
// console.log(strNum.sort()); // [ 13, 21, 30, 45, 67, 99 ]
// console.log(strAlpha.sort()); // [ 'A', 'C', 'H', 'M', 'O' ]
// console.log(strWord.sort()); // [ 'apple', 'boat', 'eagle', 'mango', 'van' ]

//SORT in descending order using compare
// let compare = (a,b)=>{
//     return b-a; // put a-b for ascnding order
// }
// console.log(strNum.sort(compare)); // [ 99, 67, 45, 30, 21, 13 ]

//Reverse the orginal string
// console.log(strNum.reverse()); // [ 30, 13, 45, 99, 21, 67 ]

// SPLICE & SLICE
// splice(Index, Num_of_elements_to_remove, What_to_insert)
// strAlpha.splice(2, 3, 'T','E','A'); //[ 'M', 'O', 'T', 'E', 'A' ]
// console.log(strAlpha);

// slice(start_deleting_from_index)
// let counting = [10,20,30,40,50];
// console.log(counting.slice(3)); //[ 40,50 ]
// slice(start_deleting_from_index, end_deleting_from_index_but_includeIt)
// console.log(counting.slice(2,4)); //[ 30, 40 ]

// LOOPING
// forEach()
// strNum.forEach((value)=>{
//     value = value + 1;
//     console.log(value); // 68 22 100 46 14 31
// });

// Array.from()
// Used access the HTMLCollection wich has type 'object'
// It will change object to array so that we can access it
// let caterpiller = "Caterpiller";
// console.log(caterpiller); // Caterpiller
// console.log(Array.from(caterpiller)); // [ 'C', 'a', 't', 'e', 'r', 'p', 'i', 'l', 'l', 'e', 'r' ]

// // ForOf()
// let myMarks = [98, 92, 94, 91, 99];
// for(let i of myMarks){
//     console.log(i); // 98, 92, 94, 91, 99
// }
// for(let j in myMarks){
//     console.log(j); // 0, 1, 2, 3, 4
//     console.log(myMarks[j]); // 98, 92, 94, 91, 99
// }

// // MAP
// let aMap = myMarks.map((value, index)=>{
//     return index, value;
// })
// console.log(aMap); // [ 98, 92, 94, 91, 99 ]
// // FILTER
// let bFilter = myMarks.filter((value)=>{
//     return value%2 == 0
// })
// console.log(bFilter); // [ 98, 92, 94 ]
// // REDUCE
// let cReduce = myMarks.reduce((value1, value2)=>{
//     return value1 + value2;
// })
// console.log(cReduce); // 474

// Alert || Prompt || Confirm
// alert("your scripts have been loaded successfully!");

// let test = prompt("Please enter test value");

// test = Number.parseInt(test);
// console.log(typeof(test));

// let write = confirm("Do you want to write new test value");
// if(write){
//     document.write(test);
// }
// else{
//     document.write("Please allow me to write");
// }

// Practice Set 1
// let play = true;
// while (play) {
//   let age = prompt("Enter your age");
//   let drivingLicense = () => {
//     if (age<0) {
//          alert("Please enter a valid age");
//     }
//     else if(age<18){
//         alert("Sorry! you are not eligible to drive");
//     }
//     else{
//         alert("Yes! you can drive");
//     }
//   };
//   drivingLicense(age);
//   play = confirm("Do you want to play again? ");
// }

// Practice Set 2
// let https = "https://";
// myUrl = prompt("Where you want to go today?");
// finalUrl = https.concat(myUrl);
// console.log(finalUrl);
// location.href = finalUrl;

// Practice Set 3
// let color = "";
// color = prompt("Enter your fav color");
// document.body.style.background = color;

// ABOUT HTML DOM
// console.log('DOCUMENT BODY', document.body);//will return null if script is loaded before body tag
// console.log('DOCUMENT HEAD', document.head);
// console.log('DOCUMENT ELEMENT', document.documentElement);
// console.log('DOCUMENT TITLE',document.title);

// firstChild/lastChild/childNodes
// console.log('firstChild = ',document.body.firstChild);
// console.log('lastChild = ',document.body.lastChild);
// console.log('childNodes = ',document.body.childNodes);// [[Prototype]]:NodeList
// console.log('childNodes[3]',document.body.childNodes[3]);
// console.log('childNodes.length = ',document.body.childNodes.length);
// console.log('typeof(document.body.childNodes) = ',typeof(document.body.childNodes));
// let arr = Array.from(document.body.childNodes);
// console.log('arr = ',arr);// [[Prototype]]:Array(0)

// parentNode/parentElement/firstChild/nextSibling
// console.log(document.body.parentNode);//html
// console.log(document.body.parentElement);//html
// console.log(document.body.firstChild);//div
// console.log(document.body.lastChild);//script
// console.log(document.body.firstElementChild);//div
// console.log(document.body.lastElementChild);//script

// let a = document.body.firstChild;
// console.log(a.parentNode);//body
// console.log(a.parentElement);//body
// console.log(a.firstChild.nextSibling);//div.second
// console.log(a.firstChild.previousSibling);//null

// //parentNode VS parentElement
// console.log("parentNode = ",document.documentElement.parentNode);//document {documentElement is child of document}
// console.log("parentElement = ",document.documentElement.parentElement);//null {parentElement is the boss and it is no ones child}

//firstChild vs firstElelmentChild
// const changeBgColor = () => {
//     document.body.firstElementChild.style.background = "aquamarine"
// }
// let b = document.body;
// console.log("First child of b is: ", b.firstChild);//#text //#comment
// console.log("First Element child of b is: ", b.firstElementChild);//nav
// changeBgColor();

// Increased Level
let t = document.body.firstElementChild.firstElementChild;
console.log(t);//table.table
console.log(t.rows);