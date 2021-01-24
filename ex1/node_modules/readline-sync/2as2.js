console.log("WELCOME TO WAR!!!")

const input = require('readline-sync');
var readlineSync = require('readline-sync');

let name = (input.question("Please enter your name:"));

console.log("Hello " + name + ",You currently have 50 ILS. Let's go!!" );

gameOptions = ['against the PC','against another player'];
index = readlineSync.keyInSelect(gameOptions,null, {cancel: false},"Will you be playing against the PC or against another player?");
let money = 50;

//game function
function game(){


const input1 = require('readline-sync');
let bet = Number(input1.question("Place your bet for the next round: 1 to "+money+":"));
if (bet<0){
  console.log("invalid input"); 
  process.exit();
} if (bet>money){
    console.log("I said between 1 to "+ money+ " and you typed", bet,"!! \nI don\'t play with liars!! Bye");
    process.exit();
}
//create, shuffle and print the random card
const suits = ["Spades♠", "Diamonds♦", "Club♣", "Heart♥"];
const values = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  12,
];

// empty array to contain cards
let deck = [];

// create a deck of cards
for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
        let card = { Value: values[x], Suit: suits[i] };
        deck.push(card);
    }
}

// shuffle the cards
for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
}
if (index ===0){
    console.log('The PC\'s card is:');}
else if (index===1){
    console.log('The second player\'s card is:');
}
// display 1 result
for (let i = 0; i < 1; i++) {
    console.log(`${deck[i].Value} of ${deck[i].Suit}`)
    let pcn = (`${deck[i].Value} of ${deck[i].Suit}`);
    var psScore = (deck[i].Value);
}
console.log('Your card is:');

for (let i = 1; i < 2; i++) {
    console.log(`${deck[i].Value} of ${deck[i].Suit}`)
    let usern = (`${deck[i].Value} of ${deck[i].Suit}`);
    var userScore = (deck[i].Value);}

if (userScore<psScore){
    money = (money - bet);
    
}
if (userScore > psScore) {
    money = (money + bet);
    
   
}


if (money<=0){
    console.log("You lost "+bet+" and now you have "+ money+" .You're broke - game\'s over")
}
if (money >0){
    console.log ("you have: " + money +"ILS"); 
//multiple options question
finalOptions = ['Play another round','Leave with the money :-)'];
index = readlineSync.keyInSelect(finalOptions,null, {cancel: false},'What would you like to do?');

if (index === 0) {
    game();
   } else if (index === 1) {
    console.log("You have "+ money+" ILS. Bye!");
    // offer the user a chance to not draw out of game
     if (input.keyInYNStrict("Wait, are you sure?")){
        console.log("Thanks for playing!♠♦♣♥")
        process.exit()
     }else{
     game();
     }
  

    //Y/S question option
//const input = require('readline-sync');
//if (input.keyInYNStrict("Would you like to play another round?")){
   // game();}
//else{
    // console.log("You have "+ money +" ILS. Bye!");
    // process.exit()
    }}}
            
game();


//https://www.programiz.com/javascript/examples/shuffle-card

//https://www.webnots.com/alt-code-shortcuts-for-playing-cards-suit/




