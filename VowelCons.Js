/* Create a JavaScript code that accepts a string 
of lowercase letters. Print the word followed by 
how many consonants and vowels it has.  */

/* Create Variables */

let vowels = 0;
let consonants = 0;
const word = "awesome".toLowerCase();

/*
when the 'word' variable is defined - make the code print the word then count how many 
conssonants and vowels are in the word. a variable for the consaonats and vowels has to be
defined. 

letters hold the array of letters to compare against

the for loop loops through the letters of the word given in the word variable with a counter
that increments against the length of the word provided

the variable letter is changed to a different letter of the word for testing against the if loop

in the if loop if one of the letters in the letter array is found it will increment vowels and then
else if if one of the other letters besides the letters in the 'letter' array it will increment the
consonant variable
*/

const letters = ['a','e','i', 'o', 'u'];
const conVow = []

for (let i = 0; i < word.length; i++) {
    const letter = word[i];

    if (letters.includes(letter)) {
        vowels++;
    } else if (letter >= 'a' && letter <= 'z') {
        consonants++;
        conVow.push(letter);
    }
}

console.log(word + " has " + consonants + " consonants " + "and " + vowels + " Vowels ");