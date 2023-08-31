//Question 1 of coding challenge//

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
    ages.splice(0, 1);
    ages.splice(-1)
console.log (ages);

ages.push(25);
console.log(ages);

function average(ages){
    let result = 0;
    for (i = 0; i < ages.length; i++){
        result += ages[i];
    } 
    return result /ages.length;
}

console.log(average(ages));

// Question 2//

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
function averageNumLetters(names){
    let result = 0;
    for (i = 0; i < names.length; i++){
        result += names[i];
    } 
    return result /names.length;
}

console.log(averageNumLetters(names));

