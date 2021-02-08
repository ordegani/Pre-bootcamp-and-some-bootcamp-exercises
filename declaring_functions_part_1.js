
/*
    JavaScript - Declaring Functions
    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function declarations to function expression.
        * Please reformat the following function expressions to function declarations.
    Submit the file to Hive
*/

// From function declarations to function expressions
/*function welcome();

function power(a) ;


function add(a, b = 5);*/



// From function expressions to function declarations
const hello = () => "Hello!";
function hell(){
    console.log("Hello!");
}

const squareRoot = a => Math.sqrt(a);
function quareRoot(a){
console.log(Math.sqrt(a));
}

const randomNumbers = (a, b) => Math.random() * (a - b) + b;
function andomNumbers(a,b){
    console.log(Math.random() * (a - b) + b);
    
}

quareRoot(36);
andomNumbers(1, 2);