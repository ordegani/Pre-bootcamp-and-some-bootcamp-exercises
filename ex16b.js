
const input1 = require('readline-sync');
let num1 = input1.question("Please enter numbers: ");
let second = Array.from(num1.toString()).map(Number);
console.log(typeof second);
//alterString function
function alterString(str) {
    var newString = '';
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    console.log(newString.split(""));
}
alterString(num1);