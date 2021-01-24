const input = require('readline-sync');

let str = input.question("Please write a string");

const findLongest = (str = '') => {

  
 let strArr = str.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/\d+/g]/gi, '').split(' ');
   
   const word = strArr.reduce((ac, val) => {
      let { length: len } = ac;
      if(val.length > len){
         ac = val;
      };
      return ac;
   }, '');
   return word;
};
console.log(findLongest(str));


//https://www.tutorialspoint.com/finding-the-longest-word-in-a-string-in-javascript