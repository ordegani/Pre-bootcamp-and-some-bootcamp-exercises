console.log ("Welcome to our Hanukkah quiz! \nPlease answer the following questions to find if you are the fancy stylish donut, the classic jam donut, the baked empty donut or just the foreign version - Dunk \'n donut. \nEnjoy!");

var readlineSync = require('readline-sync');

options1 = ['I go out with my friends','I just chill at home', 'I ride a unicorn', 'If it\'s abroad I\'m happy'];
var answer1 = readlineSync.keyInSelect(options1, "How do you celebrate birthdays?");

console.log(answer1+1);

options2 = ['the most comfortable one', 'whatever makes me look good', 'the one that attracts most attention', 'the one from Primark'];
var answer2 = readlineSync.keyInSelect(options2, "Which outfit would you prefer to be wearing right now?");
console.log(answer2+1);

options3 = ['only starbucks', 'tea', 'hot chocolate with marshmallows', 'a reliable cup of coffee'];
var answer3 = readlineSync.keyInSelect(options3, "which drink is your favourite?");
console.log(answer3+1);
//
options4 = ['a fairy', 'a silent fish', 'a loyal dog', 'a sybirian cat'];
var answer4 = readlineSync.keyInSelect(options4, "which pet do you own?");
console.log(answer4+1);

options5 = ['europe', 'abu dabi','anywhere abroad, actually', 'I don\'t like vacations'];
var answer5 = readlineSync.keyInSelect(options5, "Where will your next vacation be?");
console.log(answer5+1);

options6 = ['I guess I eat the same as everyone', 'I eat only expenssive food', 'Only vegetabes', 'Only airplains meals'];
var answer6 = readlineSync.keyInSelect(options6, "What is your diet?");
console.log(answer6+1);

options7 = ['jams', 'I don\'t really like sweet', 'anything out of the ordinary', 'French croissant'];
var answer7 = readlineSync.keyInSelect(options7, "What is your favourite sweet snack?");
console.log(answer7+1);


options8 = ['classical', 'not israeli', 'I like a lot of instruments and complexity', 'I like everything'];
var answer8 = readlineSync.keyInSelect(options8, "What kind of music is yot favourite?");
console.log(answer8+1);

options9 = ['Nope', 'I keep up with international fashion', 'As everyone else', 'I spend half of the day in front of the mirror'];
var answer9 = readlineSync.keyInSelect(options9, "Are you well groomed?");
console.log(answer9+1);

options10 = ['whenever it\'s cheapest to fly', 'They are all the same','fall, I like the colourfulness','summer of course!'];
var answer10 = readlineSync.keyInSelect(options10, "What is your favorite season?");
console.log(answer10+1);

let sumAnswers = (answer1 + answer2 + answer3 + answer4+ answer5 + answer6+answer7+answer8+answer9+answer10) + 10;
switch (sumAnswers) {
 case 21:
     console.log("you're a classic jam and you have no competition!");
     break
case 20: 
case 21:   
    console.log("you're a baked empty donute and you have fun without paying the price");
    break
    case 27:
        console.log("you're a stylish expenssive donut and you don\'t look back");
        break
    case 29:
            console.log("you're a Dunk \'n donut treat and you are special!");
            break   
    default:
        console.log("Congrats! You're a mix of donuts and you enjoy all worlds on Hanuka!");
}


