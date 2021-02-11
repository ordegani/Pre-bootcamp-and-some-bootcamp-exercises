const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

//create
const numLetters = function(array) {
  const join = array.join("").toLowerCase().split("");
  const letters = {};
//loop over
for (let i = 0; i < join.length; i++) {
    if (join[i] === " ") {continue;}
      
letters[join[i]] = letters[join[1]] + 1 || 1;
  }
  //  מערך מפתחות וסידור
  const newLetters = Object.keys(letters).sort((a, b) => {
    return letters[b] - letters[a];
  });

   return [letters, newLetters[0]] ;
};

console.log(numLetters(array))