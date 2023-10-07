/* 

Reverse Array
With a for loop, create a JavaScript code that creates a new array in reverse order.

*/

const Original = [1, 2, 3];
const Reverse = [];

for (let i = Original.length - 1; i >= 0; i--){
    Reverse.push(Original[i]);
}

console.log(Reverse);