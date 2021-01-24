const input = require('readline-sync');

let userStr = input.question("Please write a string");

function upVowels(userStr) {
    let newArray = [];
    for (let i = 0; i < userStr.length; i++) {
        let char = userStr.charAt(i);
        if ('aeiouAEIOU'.indexOf(char) !== -1) {
           newArray.push(char.toUpperCase());
        } else {
           newArray.push(char.toLowerCase());
        }
    }

    console.log(newArray.join(""));
}
upVowels(userStr);


//https://stackoverflow.com/questions/28035376/returning-a-string-with-only-vowels-capitalized
//הסבר על Array.indexOf():  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
