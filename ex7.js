const input = require('readline-sync');

let num = parseInt(input.question("Please choose a positive number"));

if (num >= 0) {
    let factorial = 1;

    for (index = 1; index <= num; index++) {
        factorial = factorial * index;
    }
    console.log(factorial);
}
