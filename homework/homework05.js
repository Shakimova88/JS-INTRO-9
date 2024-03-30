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


const countPos = (arr) =>  arr.filter(num => num > 0).length

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

const countA = (str) => str.split('').filter(letter => letter.toLowerCase() === 'a').length


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
    let count = 0;
    let vowels = 'aeiou';
    for(let letter of str.toLowerCase()) {
        if(!(vowels.includes(letter))) count++;
    }
    return count;
}

console.log(countConsonants("Hello"))
console.log(countConsonants("Hello World"))
console.log(countConsonants("JavaScript is fun"));
console.log(countConsonants(""))


// Task - 5
/* Requirement:
Write a function named countWords() which takes a 
string argument and returns the total count of words in 
the given string when invoked.
NOTE: Be careful about the extra whitespaces before 
and after the string.


countWords("     Javascript is fun       "))
countWords("Cypress is an UI automation tool.    ")) 
-> 6 countWords("1 2 3 4") 
-> 4
*/

const countWords2 = (str) => str.trim().split(' ').length

function countWords(str) {
    str = str.trim().split(' ');
    let count = 0;
    for(let word of str) {
      if(word !== '') {
        count++;
      }   
    }
    return count;
   }
console.log(countWords("     Javascript is fun       "));


// Task - 6
/* Requirement:
Write a function named as factorial() which takes a 
number as an argument and returns the factorial of the 
number when invoked.

NOTE: Mathematically, the factorial of a non-negative 
integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1
Assume you will not be given a negative number.
Examples:
factorial(5)  -> 120
factorial(4) -> 24
factorial(0) -> 1
factorial(1) -> 1
*/

const factorial = (n) => n === 0 || n === 1? 1: n * factorial(n-1)

function factorial(number) {
   let result = 1;
   for(let i = 2; i <= number; i++) {
        result *= i;
   }
   return result;

}
console.log(factorial(0));





// Task - 7
/* Requirement:
Write a function named as isPalindrome() which takes a 
string word as an argument and returns true if the word is 
palindrome or returns false otherwise when invoked.
NOTE: Palindrome: It is a word that is read the same backward 
as forward
Examples: kayak, civic, madam
NOTE: your function should ignore case sensitivity
Examples:
isPalindrome("Hello")  -> false
isPalindrome("Kayak")  -> true 
isPalindrome("civic")  -> true
isPalindrome("abba")  -> true
isPalindrome("ab  a")  -> false
isPalindrome("123454321")  -> true
isPalindrome("A")  -> true
isPalindrome("")  -> true
*/

const isPalindrome = (str) => str.toLowerCase() === str.toLowerCase().split('').reverse().join('');


function  isPalindrome(str) {
let reverseStr = str.toLowerCase().split('').reverse().join('');
return str.toLowerCase() === reverseStr;
}
console.log(isPalindrome("123454321"));
console.log(isPalindrome("Kayak"));
console.log(isPalindrome("ab  a")) ;  


// Task - 8
/* 
Requirement: 
Write a function named as countMultipleWords() which takes 
an array as an argument and returns the count of the elements 
that has multiple words when invoked.
NOTE: Be careful about the extra whitespaces before and after 
the array element.
Examples:
countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ]) 
-> 1
countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ]) 
-> 0
countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]) 
-> 4
countMultipleWords([ ]) 
*/

const countMultipleWords = (arr) => arr.reduce((count, str) => str.trim().includes(' ')? count + 1 : count, 0)


function countMultipleWords(arr) {
    let count = 0;
    for(const word of arr) {
        if(word.trim().includes(' '))
        count++;
    }
    return count;
}
console.log(countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ]) )


// Task - 9
/* Requirement: 
Write a function named as count3OrLess() which takes a 
string word as an argument and returns the count of the words 
that has 3 characters or less when invoked.
Examples:
count3OrLess("Hello")  -> 0
count3OrLess("Hi John")  -> 1
count3OrLess("JavaScript is fun")  -> 2
count3OrLess("My name is John Doe")  -> 3
count3OrLess("")  -> 0
*/

const count3OrLess = (str) => str.trim().split(' ').filter(word => word.length > 0 && word.length <= 3).length

function count3OrLess(str) {
    let words = str.split(' ');
    let count = 0;
    for( const word of words) {
        if(word.length <= 3) count++;
    }
    return count;
}
console.log(count3OrLess("JavaScript is fun"));
console.log(count3OrLess("My name is John Doe"));


// Task - 10
/* Requirement:
Write a function named as isPrime() which takes a 
number as an argument and returns true if the number 
is prime or returns false otherwise when invoked.
NOTE: Mathematically, Prime number is a number that 
can be divided only by itself and 1. It cannot be divided 
by any other number. The smallest prime number is 2 
and 2 is the only even prime number.
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31...
NOTE: The smallest prime number is 2 and there is no 
negative prime numbers.
Examples:
isPrime(5)  -> true
isPrime(2)  -> true
isPrime(29)  -> true
isPrime(-5) -> false
isPrime(0) -> false
isPrime(1) -> false
*/

function  isPrime(number) {
    if(number < 2) {
        return false;
    }

    for(let i = 2; i < number; i++) {
        if(number % i === 0) {
            return false;
    }
  }
  return true;
}
  console.log(isPrime(29));


  // Task - 11
/* Requirement:
Write a function named add() which takes two array of 
numbers as argument and returns a new array with sum of 
given arrays elements.
NOTE: Be careful about the array sizes as they could be 
different.
Examples:
add([3, 0, 0, 7, 5, 10], [6, 3, 2] )  -> [9, 3, 2, 7, 
5, 10]
add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])  -> [16, 11, 9,  
3, 2, 7, 5, 10, 34] 
add([-5, 6, -3, 11], [5, -6, 3, -11])  -> [0, 0, 0, 0]
*/

const add = (arr1, arr2) => {
    if(arr2.length > arr1.length) [arr1, arr2] = [arr2, arr1]
    return arr1.map((value, i) => value + (arr2[i] || 0))
}

console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]))


function add(arr, arr2) {
    let maxArr = Math.max(arr.length, arr2.length);
    let sumOf2Arr = [];
    for(let i = 0; i < maxArr; i++){
    let totalSum = (arr[i] || 0) + (arr2[i] || 0);
    sumOf2Arr.push(totalSum);

    }
    return sumOf2Arr;
}

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]));


// Task - 12
/* Requirement: 
Write a function named as removeExtraSpaces() which takes 
a string word as an argument and returns the string back with 
all extra spaces removed when invoked.
Examples:
removeExtraSpaces("Hello")  -> "Hello" 
removeExtraSpaces("      Hello    World     ")  -> "Hello 
World" 
removeExtraSpaces("     JavaScript is          fun")  -> 
"JavaScript is fun”
removeExtraSpaces("")  -> "" 
*/
const removeExtraSpaces = (str) => str.trim().split(' ').filter(s => s.length > 0).join(' ');

function removeExtraSpaces(str) {
    return str.trim().split(' ').filter(word => word !== '').join(' ')
}

console.log(removeExtraSpaces("     JavaScript is          fun"));
console.log(removeExtraSpaces("      Hello    World     "));


// Task - 13
/* Requirement: 
Write a function named findClosestTo10() which takes an 
array of numbers as argument and returns the closest element 
to 10 from the given array.
NOTE: Assume that length of array is always more than zero.
NOTE: Ignore the 10 itself.
NOTE: If there are more than one numbers are close equally, 
return the smaller number.
Examples:
findClosestTo10([10, -13, 5, 70, 15, 57] )  -> 5
findClosestTo10([10, -13, 8, 12, 15, -20])  -> 8
findClosestTo10([0, -1, -2])  -> 0
*/

const findClosestTo10 = (arr) =>{
    let closestTo10 = Number.MAX_VALUE
    let closestDiff = Number.MAX_VALUE

    for(currentNum of arr){
        if(currentNum === 10) continue;

        let currentDiff = Math.abs(10 - currentNum);

        if(currentDiff < closestDiff || ((currentDiff === closestDiff) && currentNum < closestTo10)){
            closestTo10 = currentNum;
            closestDiff = currentDiff;
        }
    }
    return closestTo10;
}



// Couldn't figure out :(


// Task - 14
/* Requirement: 
Write a function named as isEmailValid() which takes a string 
email as an argument and returns true if the email is valid or 
returns false otherwise when invoked.
NOTE: A VALID EMAIL:
•should NOT have any space.
•should not have more than one “@” character.
•should be in the given format 
<2+chars>@<2+chars>.<2+chars> meaning
•There should be at least characters before @ character.
•There should be at least 2 characters between @ and . 
Characters.
•There should be at least 2 characters after the . character.
Examples:
isEmailValid("")  -> false
isEmailValid("@gmail.com")  -> false
isEmailValid("johndoe@yahoo")  -> false
isEmailValid("johndoe@.com")  -> false
isEmailValid("a@outlook.com")  -> false
isEmailValid("johndoe@a.com")  -> false
isEmailValid("johndoe@@gmail.com")  -> false
isEmailValid("johndoe@gmail.com")  -> true
*/

const isEmailValid = (email) => {
	if(email.includes(' ')) return false;
	if(email.split('@').length !== 2) return false
 
	
	const beginning = email.split('@')[0]
	const middle = email.split('@')[1].split('.')[0]
	const end = email.split('@')[1].split('.')[1]
 
	if(beginning === undefined || middle === undefined || end === undefined) return false
 
   return (beginning.length >= 2 && middle.length >= 2 && end.length >= 2)
 }

 console.log(isEmailValid("johndoe@@gmail.com"))//false
 console.log(isEmailValid("johndoe@gmail.com"))//true



// Task - 15
/* Requirement: 
Write a function named as isPasswordValid() which takes a 
string email as an argument and returns true if the password 
is valid or returns false otherwise when invoked.
NOTE: A VALID PASSWORD:
•should have length of 8 to 16 (both inclusive).
•should have at least 1 digit, 1 uppercase, 1 lowercase and 1 
special char.
•should NOT have any space.
Examples:
isPasswordValid("")  -> false
isPasswordValid("abcd")  -> false
isPasswordValid("abcd1234")  -> false
isPasswordValid("Abcd1234")  -> false
isPasswordValid("Chicago12345US!#$%")  -> false
isPasswordValid("Abcd1234$")  -> true
isPasswordValid("Chicago123$")  -> true
isPasswordValid("Test1234#")  -> true
*/

const isPasswordValid = (pass) => {
	if(pass.includes(' ')) return false;
	if(pass.length < 8 || pass.length > 16) return false
 
	let hasUppercase = false;
	let hasLowercase = false;
	let hasDigit = false;
	let hasSpecial = false;
 
	for(char of pass){
	 if(char >= 'A' && char <= "Z") hasUppercase = true;
	 else if(char >= 'a' && char <= "z") hasLowercase = true;
	 else if(char >= '0' && char <= "9") hasDigit = true;
	 else hasSpecial = true;
	}
 
 return (hasUppercase && hasLowercase && hasDigit && hasSpecial)
	
 }
 
 console.log(isPasswordValid("Chicago12345US!#$%"));  // false
 console.log(isPasswordValid("Abcd1234$"));  // true