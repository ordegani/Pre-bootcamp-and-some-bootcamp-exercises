const input = require('readline-sync');

let str = input.question("Please write a string");

const input2 = require('readline-sync');

let str2 = input.question("Please write another string");

let strArray = str.split(' ');
let str2Array = str2.split(' ');

var bigArray = strArray.concat(str2Array);
console.log(bigArray);