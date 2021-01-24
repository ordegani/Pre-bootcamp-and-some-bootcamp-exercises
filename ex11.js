const input = require('readline-sync');

let str = input.question("Please write a string");

function isPalindrome() {

 let re  = /[\W_]/g;
 str = str.toLowerCase().replace(re, '');

 let mid = Math.floor(str.length/2);
  for (let i = 0; i < mid; i++ ) {
      if (str[i] == str[str.length - 1 - i]) {
        console.log("y");}
        break
      }}

isPalindrome("str");

