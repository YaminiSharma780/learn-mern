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

// DOM MANIPULATION
const myBody = document.body;
// console.log(myBody);
myBody.style.backgroundImage = "url(../Directory/Images/bg-image1.jpg)";

const boxTwo = document.getElementById('box2');
img1 = "url(../Directory/Images/mowgli1.jpeg)";
boxTwo.style.backgroundImage = img1;
// console.log(box2);

const divTag = document.getElementsByTagName('div');
// console.log(divTag);

const boxes = document.getElementsByClassName('box');
// console.log(boxes);

const hTag = document.getElementsByTagName("h2");
// console.log(hTag[2]);

const random = document.querySelector('.box.randomBox4');
// console.log(random);

const changeBox3 = document.getElementById('box3');
// console.log(changeBox3);
changeBox3.innerHTML = "<h1>$</h1>";
// changeBox3.innerText = "%";
changeBox3.style.backgroundColor = "green";

// Rouding Border of box 1
const boxx = document.getElementsByClassName('box');
// boxx[0].classList.add('round');

// Rounding Border of all boxes
for(let i=0; i<boxx.length; i++){
    boxx[i].classList.add('round');
}
// for(let i=0; i<boxx.length; i++){
//     boxx[i].classList.remove('round');
// }
for(let i=0; i<boxx.length; i++){
    boxx[i].classList.toggle('rounding');
}

// CREATE ELEMENT
const para1 = document.createElement('p');
para1.innerText = "This is new Paragraph || Added by document.createElement('p')";
const contt1 = document.getElementById('container2');
contt1.appendChild(para1);

// EVENT HANDLERS
// function box1fun(){
//     console.log("Box 1 clicked by event handler");
// }
// const box2fun = ()=>{
//     console.log("Box 2 hovered by event handler");
// }

// EVENT LISTENERS
// For Event Handler we can only run single function on 'onclick'
// For Event Listener we can run mutiple functions on 'click'
// const boxOne = document.getElementById('box1');
// boxOne.addEventListener('click',()=>{
//     console.log("First : Box 1 clicked by event listener");
// });
// // We can see the details of whole 'event' using Event Object
// boxOne.addEventListener('click',(e)=>{
//     console.log("Second : Box 1 clicked by event listener");
//     console.log("Event Object -->> ",e);
//     console.log("X and Y -->> ",e.clientX,e.clientY);
// });
// // We can also see position of cursor in x & y direction using Event Object 
// boxOne.addEventListener('mouseover',(e)=>{
//     console.log("Event Object -->> ",e);
//     console.log("X and Y -->> ",e.clientX,e.clientY);
// });
// // To track the keyboard of user
// const trackUserNameInput = document.getElementById('inputName');
// trackUserNameInput.addEventListener('keydown',(e)=>{
//     console.log("key", e.key);
// })
// // To track the mouse focus of user
// trackUserNameInput.addEventListener('focus',(e)=>{
//     console.log('key',e);
// })

// Event Bubbling and Capture Concept
// EVENT BUBBLING
const boxxOne = document.getElementById('box1');
boxxOne.addEventListener('click',(e)=>{
    console.log("Tring! Box 1");
});

const conttOne = document.getElementById('container1');
// conttOne.addEventListener('click',(e)=>{
//     console.log("Tring! Tring! Parent Container");
// }); // Child will appear first
// EVENT CAPTURE
conttOne.addEventListener('click',(e)=>{
    console.log("Tring! Tring! Parent Container");
},true); // <--- 'true' will on the CAPTURE behaviour {Parent will appear first}