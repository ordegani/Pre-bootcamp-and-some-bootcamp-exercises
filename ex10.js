const input = require('readline-sync');

let line = input.question("Please write a string");

const newline = line.replace(/\s/g, '*');
console.log(newline);



//https://flaviocopes.com/how-to-replace-whitespace-javascript/