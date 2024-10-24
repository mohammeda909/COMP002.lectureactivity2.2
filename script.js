//If/else-if/else statement for grading
let myGrade = 55; 

if (myGrade >= 90) {
    console.log('A');
} else if (myGrade >= 80) {
    console.log('B');
} else if (myGrade >= 70) {
    console.log('C');
} else if (myGrade >= 60) {
    console.log('D');
} else {
    console.log('F');
}

//Switch statement for grading
switch (true) {
    case (myGrade >= 90):
        console.log('A');
        break;
    case (myGrade >= 80):
        console.log('B');
        break;
    case (myGrade >= 70):
        console.log('C');
        break;
    case (myGrade >= 60):
        console.log('D');
        break;
    default:
        console.log('F');
}

//For loop to print 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log('!');
    } else {
        console.log(i);
    }
}

