let students = [
    { id: "1", name: "Anish", sports: "Cricket" },
    { id: "2", name: "Smriti", sports: "Basketball" },
    { id: "3", name: "Rahul", sports: "Cricket" },
    { id: "4", name: "Bakul", sports: "Basketball" },
    { id: "5", name: "Nikita", sports: "Hockey" },
];
// FILTER
// 1. Filter never changes the original array
// 2. Filter never executes callback for array elements without values

// Details of 'Rahul' from student
const filteredName = students.filter((currentValue, index, array)=>{
    if(currentValue.name == "Rahul") return true;
    else return false;
});
console.log("Data of 'Rahul' from 'student ", filteredName); //[ { id: '3', name: 'Rahul', sports: 'Cricket' } ]


// MAP
// 1. Map never changes the original array
// 2. Map executes callback only once for array elements without values

// List of all names from student
const mappedName = students.map((currentValue, index, array)=>{
    // return currentValue.name;
    return `<li>${currentValue.name}</li>`;
});
console.log("Data of Names from 'student ", mappedName); //[ 'Anish', 'Smriti', 'Rahul', 'Bakul', 'Nikita' ]
const myDiv1 = document.getElementById('container3');
myDiv1.innerHTML = `<ul>${mappedName.join('')}</ul>`;

// List of names from student who plays "Cricket"
const cricketPlayingStudents = students
.filter((currentValue)=>{
    if(currentValue.sports == "Cricket") return true;
    else return false;
})
.map((currentValue)=>{
    return `<li>${currentValue.name}</li>`;
});
console.log("Data of students who plays cricket ",cricketPlayingStudents);
const myDiv2 = document.getElementById('container4');
myDiv2.innerHTML = `<ol>${cricketPlayingStudents.join('')}</ol>`;