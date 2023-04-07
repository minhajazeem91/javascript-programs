let stdRec = [['Ahmed', 77], ['Sara', 91], ['Mubashir', 65], ['Hamza', 90], ['Ahad', 70]];
console.log(stdRec);

let AvgMarks = 0;

for (let i=0; i < stdRec.length; i++) {
    AvgMarks += students[i][1];
    Average = (AvgMarks/stdRec.length);
}

console.log("Average grade: " + (AvgMarks)/stdRec.length);

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