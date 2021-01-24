const input = require('readline-sync');
var figlet = require('figlet');

console.log(figlet.textSync('Hang man!', {}));

var words = ["javascript", "amazing", "pancake"];

var word = words[Math.floor(Math.random() * words.length)];

var answerArray = [];

for (var i = 0; i < word.length; i++) {
answerArray[i] = "*"; }

var remainingLetters = word.length;

let att = 11;

//function game
function game(){
att -= 1;
console.log("you have " + (att)+ " another guesses");

let guess = input.question("Please choose a letter: ");

if (guess.match(/[a-zA-Z]+/) === null || guess.length !== 1){console.log("Please enter a single letter only!!! you did not lose an attempt!");
    att+=1;}
//if (guess.length !== 1){
   //console.log("Please enter a single letter, not more than that!!!you did not lose an attempt!");
   //att+=1;}


while (remainingLetters > 0) {
   if (att<1){console.log("You lost, the word was "+ word+ ". BYE!");process.exit();}
   else{
   for (var j = 0; j < word.length; j++) {
    if (word[j] === guess || word[j] === guess.toLowerCase()) {
    answerArray[j] = guess.toLowerCase(); remainingLetters--;}
   }}
     
console.log(answerArray.join(" "));

game();
}
}

console.log("The word is: "+ (answerArray.join(" ")));
//guess whole word?
if(input.keyInYNStrict("Want to try and guess the word? :)")){
   let guess2 = input.question("the word is: ");
   if (guess2 == word || guess2.toLowerCase() == word){
      console.log("Good guess! You win!");
      process.exit();}else{
      console.log("Nope. Let\'s try to guess the letters!");
      game();}
   }else{
      game();}
   
// https://nostarch.com/download/JS4K_ch7.pdf


      

