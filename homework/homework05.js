// Task - 1
/* Requirement:
Write a function named countPos() which takes an 
array of numbers as an argument and returns how 
many elements are positive  when invoked. 

Examples:
countPos([-45, 0, 0, 34, 5, 67])  -> 3
countPos([-23, -4, 0, 2, 5, 90, 123])  -> 4
countPos([0, -1, -2, -3])  -> 0
*/

function countPos(arr) {
    let positive = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0) positive++;
    }
    return positive;

}
console.log(countPos([-45, 0, 0, 34, 5, 67]));

// Task - 2
/* Requirement:
Write a function named countA() which takes a string 
argument and returns how many A or a there are in the 
given string when invoked.
NOTE: Ignore case sensitivity. 

Examples:
countA("TechGlobal is a QA bootcamp")  -> 4
countA("QA stands for Quality Assurance")  -> 5
countA("Cypress")  -> 0
*/

function countA(str) {
    let allCharA = 0;
    for(let char of str) {
        if(char.toUpperCase().includes('A')) {
            allCharA++;
        }
    }
    return allCharA;
}
console.log(countA("TechGlobal is a QA bootcamp"));


// Task - 3
/* Requirement: 
Write a function named as countVowels() which takes a 
string word as an argument and returns the count of the vowel 
letters when invoked.
NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i

Examples:
countVowels("Hello")  -> 2
countVowels("Hello World")  -> 3
countVowels("JavaScript is fun")  -> 5
countVowels("")  -> 0
*/

function countVowels(str1) {
    let vowelsLetters = 0;
    let vowels = 'aeoui';
    for(let char of str1) {
        if(vowels.includes(char.toLowerCase())) {
            vowelsLetters ++;
        }
    }
    return vowelsLetters;
}
console.log(countVowels("JavaScript is fun"));


// Task - 4
/* Requirement: 
Write a function named as countConsonants() which takes a 
string word as an argument and returns the count of the 
consonant letters when invoked.
NOTE: A letter that is not vowel is considered as a consonant 
letter.

Examples:
countConsonants("Hello")  -> 3
countConsonants("Hello World")  -> 8
countConsonants("JavaScript is fun")  -> 12
countConsonants("")  -> 0
*/


function countConsonants(str) {
    let vowels = 'aeiou';
    let consonatLetters = 0;
    for(let char of str.toLowerCase()) {
        let charCode = char.charCodeAt(0);
        if(charCode >= 97 && charCode <= 122 && !vowels.includes(char)) {
                 consonatLetters++;
        }
  } 
  return consonatLetters;

}
console.log(countConsonants("JavaScript is fun"));


// Task - 5
/* Requirement:
Write a function named countWords() which takes a 
string argument and returns the total count of words in 
the given string when invoked.
NOTE: Be careful about the extra whitespaces before 
and after the string.

Examples:
countWords("     Javascript is fun       ")  -> 3
countWords("Cypress is an UI automation tool.    ") 
-> 6 countWords("1 2 3 4") 
-> 4
*/


function countWords(str) {
    str = str.trim().split(', ');
 
    const count = 0;
    for(let words of str) {
      
        words++;
    }
   
}
console.log("     Javascript is fun       ");

 