let students = [['Ahmed', 77], ['Sara', 91], ['Mubashir', 65], ['Hamza', 90], ['Ahad', 70]];
console.log(students);

let AvgMarks = 0;

for (let i=0; i < students.length; i++) {
    AvgMarks += students[i][1];
    Average = (AvgMarks/students.length);
}

console.log("Average grade: " + (AvgMarks)/students.length);

if (Average < 100 && Average >= 90){
    console.log("Grade: A");
} else if(Average < 90 && Average >= 80){
    console.log("Grade: B");
} else if(Average < 80 && Average >= 70){
    console.log("Grade: C");
} else if(Average < 70 && Average >= 60){
    console.log("Grade: D");
} else if(Average < 60){
    console.log("Grade: F");
}