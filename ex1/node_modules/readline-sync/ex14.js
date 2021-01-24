const input = require('readline-sync');

let num = parseInt(input.question("Please choose a number"));

const ARRAY_LENGTH = num;
const randomArray = []
for (let i = 0; i < ARRAY_LENGTH; i++) {
    let randomNum = Math.floor(Math.random() * 50) +1;
    randomArray.push(randomNum)
}

console.log(randomArray);
console.log("The minimum number in the array is: "+ Math.min(...randomArray));
console.log("The maximum number in the array is: "+ Math.max(...randomArray));