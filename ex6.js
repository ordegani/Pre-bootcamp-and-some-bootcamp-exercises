const input = require('readline-sync');

let num = Number(input.question("Please choose a number larger than 10"));

while (num< 10){
    let num = Number(input.question("Please choose a number larger than 10"));
    if (num > 10){
    console.log ("Thank you");
    break
}}
