/* Create a JavaScript code that accepts an array of 
numbers and returns a new array with only the odd 
numbers from the original array. If there is only one 
odd number in the array, return an array with that 
single value.*/

/* Create the array with input values. */


const OnlyOdds = [2, 4, 6, 8, 11, 20, 15, 22]; // Create a array
const Oddnum = []; //create a empty array
OnlyOdds.forEach((number) => { //utilze forEach
  if (number % 2 === 1) { // if number is divded by 2 and equal to 1
    Oddnum.push(number); //if the condition is true print into the array 'Odd num'
  }
});
console.log(Oddnum); Í