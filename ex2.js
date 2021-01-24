const input = require('readline-sync');

let num = Number(input.question("Please enter a number"));


let num2 = Number(input.question("Please enter another anumber"));


let sum = num+num2;

if (sum == 10){
    console.log("makes 10");
} else {
    console.log("nope");
}





