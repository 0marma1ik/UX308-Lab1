//input
let nGrade = 75;
let letterGrade= "";
//select among letter grades
//processing
if(nGrade < 50){
    letterGrade ="you failed";
}
else if (nGrade <60){
    letterGrade = "D"
}
else if (nGrade <75){
    letterGrade = "C"
}
else if(nGrade = 75){
    letterGrade="B"
}
else if(nGrade <90){
    letterGrade="A"
}
else if(nGrade >= 90){
    letterGrade = "A+";
}else{
    letterGrade = "you passed";
}

//output

console.log(letterGrade)