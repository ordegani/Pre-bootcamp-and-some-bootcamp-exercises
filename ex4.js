const input = require('readline-sync');

let guests = input.question("How many people are you going with?");


if (isNaN(guests)) {
        console.log("error");
        //process.exit()
        return
    }


var readlineSync = require('readline-sync');
if (readlineSync.keyInYNStrict("Should it be Kosher?")) {
    readlineSync.keyInYNStrict("Should it be Kashrut Lemehadrin?");
} 

 
var readlineSync = require('readline-sync'),

foodOptions = ['asian','italian', 'local'];
index = readlineSync.keyInSelect(foodOptions, 'What kind of food do you want');

if (index === 0) {
 console.log("Foo sushi");
} else if (index === 1) {
 console.log("Amore Mio");
} else if (index === 2) {
 console.log("Hakosem Falafel");
} 


