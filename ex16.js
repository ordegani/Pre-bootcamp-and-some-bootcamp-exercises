const input = require('readline-sync');
let num = input.question("Please enter numbers: ");

console.log(num.split("").reverse());


//second option:

const input1 = require('readline-sync');
let num1 = input1.question("Please enter numbers: ");

//alterString function
function alterString(str) {
    var newString = '';
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    console.log(newString.split(""));
}
 
alterString(num1);

