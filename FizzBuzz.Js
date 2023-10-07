/* FizzBuzz
Create a JavaScript code that prints each number from 1 to 100 on a new line.

For each multiple of 3, print "Fizz" instead of the number.

For each multiple of 5, print "Buzz" instead of the number.

For numbers that are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

the beginning of the for intialization and to run the loops as long as i is less than or equal to 100
and to increment the counter.

the first i is that if the counter is divisable by 3 or 5 and it equals to 0 - print fizzbuzz
if divisable by 3 and equal to 0 - print fizz and if divisable by 5 - print buzz.
else print the number in the counter

*/

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else { console.log(i); }
}