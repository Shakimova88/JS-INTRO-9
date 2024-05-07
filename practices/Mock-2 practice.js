
/* Double or Triple the Word 
Write a function named as doubleOrTripleWord() which takes a string word as an argument 
and returns the given word back tripled if the string length is even or doubled if the string length 
is odd when invoked. 
*/
const doubleOrTripleWord = (str) => str.length % 2 === 0 ? str.repeat(3) : str.repeat(2);
   
console.log(doubleOrTripleWord("Tech"))
console.log(doubleOrTripleWord("Apple"))
console.log(doubleOrTripleWord(""))
console.log(doubleOrTripleWord(" "))
console.log(doubleOrTripleWord("1"))
console.log(doubleOrTripleWord("22"))   


/* First and Last Word 
Write a function named as firstlastWord() which takes a string word as an argument and 
returns the first and last words from the given string when invoked. 
NOTE: Return empty string if the given string does not have any word. 
*/

const firstLastWord = (str) => {
    str = str.trim().split(' ');
    if(str.length < 0) return '';
    return str[0] + str[str.length - 1]
}

console.log(firstLastWord('Hello World'));     // Output: "HelloWorld"
console.log(firstLastWord('I like JavaScript'));    // Output: "IJavaScript"
console.log(firstLastWord('Hello'));       // Output: "HelloHello"
console.log(firstLastWord(''));         // Output: ""
console.log(firstLastWord('  ')); 


/* Has Vowel 
Write a function named hasVowel() which takes a string argument and returns true if the 
string has a vowel, returns false if the string doesn’t contain any vowel letter. 
NOTE: Vowels are = a, e, o, u, i. 
NOTE: Ignore upper/lower cases. 
*/

const hasVowel = (str) => str.split('').some(el => 'aeouiAEIOU'.includes(el)); 

console.log(hasVowel(""))
console.log(hasVowel("Javascript"))
console.log(hasVowel("Tech Global"))
console.log(hasVowel("1234"))
console.log(hasVowel("ABC")) 


/* Start Vowel 
Write a function named as startVowel() which takes a string word as an argument and returns 
true if given string starts with a vowel, and false otherwise when invoked. 
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U
*/

const startVowel = (str) => 'aeiouAEIOU'.includes(str[0]);
console.log(startVowel("Hello")) 
console.log(startVowel("Apple"))
console.log(startVowel("orange"))
console.log(startVowel(""))
console.log(startVowel("  ")) 
console.log(startVowel("123")) 


/* Average of Edges 
Write a function named averageOfEdges() which takes three number arguments and will 
return average of min and max numbers.
*/

const averageOfEdges = (num, num2, num3) => {
    let min = Math.min(num, num2, num3);
    let max = Math.max(num, num2, num3);
    return (max +  min) / 2;
}
console.log(averageOfEdges(0, 0, 0))
console.log(averageOfEdges(0, 0, 6))
console.log(averageOfEdges(-2, -2, 10)) 
console.log(averageOfEdges(-3, 15, -3))
console.log(averageOfEdges(10, 13, 20))


/* Swap First and Last Characters 
Write a function named replaceFirstLast() which takes a string argument and returns a new 
string with the first and last characters replaced. 
NOTE: If the length is less than 2, return an empty string. 
NOTE: Ignore extra spaces before and after the string. 
*/

const replaceFirstLast = (str) => {
    str = str.trim();
if(str.length < 2) return '';
return str.at(-1) + str.slice(1, -1) + str.at(0);
}
console.log(replaceFirstLast('  Tech Global '));
console.log(replaceFirstLast("Hello"))
console.log(replaceFirstLast("    A      "))
console.log(replaceFirstLast("A"))


/* Swap First and Last Four Characters 
Write a function named as swap4() which takes a string word as an argument and returns the 
string back with its first and last 4 characters swapped when invoked. 
NOTE: Return empty string if the given string does not have 8 or more characters
*/

const swap4 = (str) => {
    str = str.trim();
    if(str.length < 8) return '';
    return str.slice(-4) + str.slice(4, -4) + str.slice(0, 4);
}

console.log(swap4("abc"))
console.log(swap4("JavaScript"))
console.log(swap4("TechGlobal"))
console.log(swap4(""))
console.log(swap4("aaaadhdhdhbbbb"))
console.log(swap4("Apple") )  

/* Swap First and Last Words 
Write a function named as swapFirstLastWord() which takes a string word as an argument 
and returns the string back with its first and last words swapped when invoked. 
NOTE: Return empty string if the given string does not have 2 or more words. 
*/

const swapFirstLastWord = (str) => {
    str = str.trim().split(' ');
    return str.length > 1 ? `${str.pop()} ${str.slice(1).join(' ')} ${str.shift()}` : '';
}

console.log(swapFirstLastWord("Hello World"))
console.log(swapFirstLastWord("I like JavaScript"))
console.log(swapFirstLastWord("foo bar foo bar"))
console.log(swapFirstLastWord(""))
console.log(swapFirstLastWord("  "))
console.log(swapFirstLastWord("Hello"))
console.log(swapFirstLastWord("Hello   "))  

/* Count Positive Numbers 
Write a function named countPos() which takes an array of numbers as an argument and 
returns how many elements are positive when invoked. 
*/

const countPos = (arr) => arr.reduce((acc, el) => el > 0 ? acc + 1 : acc, 0);

console.log(countPos([-45, 0, 0, 34, 5, 67]))
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]))
console.log(countPos([0, -1, -2, -3]))


/* Find Even Numbers 
Write a function named as getEvens() which takes 2 number arguments and returns all the 
even numbers as an array stored from smallest even number to greatest even number when 
invoked. 
NOTE: Make your code dynamic that works for any numbers and return empty array if there are 
no even numbers in the range of given 2 numbers. 
Assume you will not be given negative numbers. 
*/

const getEvens = (num, num2) => {
    let evens = [];
    let min = Math.min(num, num2);
    let max = Math.max(num, num2);
    for(let i = min; i <= max; i++) {
        if(i % 2 === 0) evens.push(i);
    }
    return evens;
}

console.log(getEvens(2, 7))
console.log(getEvens(17, 5))
console.log(getEvens(4, 4))
console.log(getEvens(3, 3))


/* Find Numbers Divisible By 5 
Write a function named as getMultipleOf5() which takes 2 number arguments and returns all the 
numbers divisible by 5 as an array stored from first found match to last found match when 
invoked. 
NOTE: Make your code dynamic that works for any numbers and return empty array if there are 
no numbers divisible by 5 in the range of given 2 numbers. 
Assume you will not be given negative numbers
*/

const getMultipleOf5 = (num, num2) => {
    let result = [];
    let min = Math.min(num, num2);
    let max = Math.max(num, num2);
    for(let i = min ; i <= max; i++) {
        if(i % 5 === 0) result.push(i);
    }
    return num > num2 ? result.reverse() : result;
}

console.log(getMultipleOf5(3, 17))
console.log(getMultipleOf5(23, 5))
console.log(getMultipleOf5(5, 5))
console.log(getMultipleOf5(2, 4))


/* Count Negative Numbers 
Write a function named countNeg() which takes an array of numbers as an argument and 
returns how many elements are negative when invoked.  
*/

const countNeg = (arr) => arr.reduce((acc, el) => el < 0 ? acc + 1 : acc , 0)

console.log(countNeg([-45, 0, 0, 34, 5, 67]))
console.log(countNeg([-23, -4, 0, 2, 5, 90, 123]))
console.log(countNeg([0, -1, -2, -3]))


/* Count A 
Write a function named countA() which takes a string argument and returns how many A or a 
there are in the given string when invoked. 
NOTE: Ignore case sensitivity.  
*/

const countA = (str) => str.trim().split('').reduce((acc, el) => el.toUpperCase() === 'A' ? acc + 1 : acc, 0);

console.log(countA("TechGlobal is a QA bootcamp"))
console.log(countA("QA stands for Quality Assurance"))
console.log(countA("Cypress"))


/* Count Words 
Write a function named countWords() which takes a string argument and returns the total 
count of words in the given string when invoked. 
NOTE: Be careful about the extra whitespaces before and after the string.
*/

const countWords = (str) => str.trim().split(' ').length

console.log(countWords("     Javascript is fun       "))
console.log(countWords("Cypress is an UI automation tool.    ")) 
console.log(countWords("1 2 3 4")) 



/* Factorial 
Write a function named as factorial() which takes a number as an argument and returns the 
factorial of the number when invoked. 
NOTE: Mathematically, the factorial of a non-negative integer n is defined as: 
n! = n × (n-1) × (n-2) × ... × 2 × 1 
Assume you will not be given a negative number
*/

const factorial = (num) => {
    let result  = 1;
    for(let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5))
console.log(factorial(4))
console.log(factorial(0))
console.log(factorial(1))



/* Count 3 or Less 
Write a function named as count3OrLess() which takes a string word as an argument and 
returns the count of the words that has 3 characters or less when invoked. 
*/

const count3OrLess = (str) => str.split(' ').filter(el => el.length <= 3 && el !== '').length
console.log(count3OrLess("Hello"))
console.log(count3OrLess("Hi John"))
console.log(count3OrLess("JavaScript is fun"))
console.log(count3OrLess("My name is John Doe"))
console.log(count3OrLess(""))


/* Remove Extra Spaces 
Write a function named as removeExtraSpaces() which takes a string word as an argument 
and returns the string back with all extra spaces removed when invoked. 
*/

const removeExtraSpaces = (str) => str.trim().split(' ').filter(el => el !== '').join(' ');

console.log(removeExtraSpaces("Hello"))
console.log(removeExtraSpaces("     JavaScript is          fun"));
console.log(removeExtraSpaces("      Hello    World     "));
console.log(removeExtraSpaces(""))

/* Middle Number 
Write a function named middleInt() which takes three number arguments and return the middle 
number.
*/

const middleInt = (a, b, c) => {
    const numbers = [a, b, c].sort((x, y) => x - y);
    return numbers[1];
}

console.log(middleInt(1, 2, 2))
console.log(middleInt(5, 5, 8))
console.log(middleInt(5, 3, 5))
console.log(middleInt(1, 1, 1))
console.log(middleInt(-1, 25, 10))


/* First Duplicate Element 
Write a function named as firstDuplicate() which takes an array argument and returns the first 
duplicated number in the array when invoked. 
NOTE: Make your code dynamic that works for any array and return -1 if there are no duplicates 
in the array. For two elements to be considered as duplicated, value and data types of the 
elements must be same.
*/


const firstDuplicate = (arr) => {
    for(let el of arr) {
        if(arr.indexOf(el) !== arr.lastIndexOf(el)) return el;
    }
    return - 1;
}

console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10 ]))
console.log(firstDuplicate([ 5, 7, 7, 0, 5, 10 ]))
console.log(firstDuplicate([ 5, '5', 3, 7, 4 ]))
console.log(firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]))
console.log(firstDuplicate([ 1, 2, 3]))
console.log(firstDuplicate([ 'foo', 'abc', '123', 'bar' ]))


/* 
Find All Duplicate Elements 
Write a function named as getDuplicates() which takes an array argument and returns all the 
duplicated elements in the array when invoked. 
NOTE: Make your code dynamic that works for any array and return empty array if there are no 
duplicates in the array. For two elements to be considered as duplicated, value and data types 
of the elements must be same.
*/

const getDuplicates = (arr) => {
    let allDup = [];
    for(let el of arr) {
        if(arr.indexOf(el) !== arr.lastIndexOf(el) && !allDup.includes(el)) allDup.push(el);
    }
    return allDup;
}
console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]))
console.log(getDuplicates([ 1, 2, 5, 0, 7 ]))
console.log(getDuplicates(['A', 'foo', '12', 12, 'bar', 'a', 'a', 'foo' ]))
console.log(getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]))



/* Count Vowels 
Write a function named as countVowels() which takes a string word as an argument and 
returns the count of the vowel letters when invoked. 
NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i 
*/

const countVowels = (str) => str.split('').filter(el => 'aeoui'.includes(el.toLowerCase())).length 

console.log(countVowels("Hello"))
console.log(countVowels("JavaScript is fun"))
console.log(countVowels("")) 


/* Reverse String Words 
Write a function named as reverseStringWords() which takes a string as an argument and 
returns string back with each word separately reversed when invoked. 
NOTE: Make your code dynamic that works for any string. Make sure you consider extra spaces 
before and after words in the given string.
*/

const reverseStringWords = (str) => str.trim().split(' ').map(el => el.split('').reverse().join('')).join(' ');

console.log(reverseStringWords("Hello World"))
console.log(reverseStringWords("I like JavaScript"))
console.log(reverseStringWords("Hello")) 
console.log(reverseStringWords(""))
console.log(reverseStringWords(" "))


/* Count Consonants 
Write a function named as countConsonants() which takes a string word as an argument and 
returns the count of the consonant letters when invoked. 
NOTE: A letter that is not vowel is considered as a consonant letter. 
*/


const countConsonants = (str) => str.split('').filter(el => (!'aeiou'.includes(el.toLowerCase()))).length 
console.log(countConsonants("Hello"))
console.log(countConsonants("Hello World"))
console.log(countConsonants("JavaScript is fun"))
console.log(countConsonants(""))


/* Count Multiple Words 
Write a function named as countMultipleWords() which takes an array as an argument and 
returns the count of the elements that has multiple words when invoked. 
NOTE: Be careful about the extra whitespaces before and after the array element. 
*/

function countMultipleWords(arr) {
    let count = 0;
    for(const word of arr) {
        if(word.trim().includes(' '))
        count++;
    }
    return count;
}
console.log(countMultipleWords([ "foo", "", "  ", "foo bar", "   foo" ]))
console.log(countMultipleWords([ "foo", "bar", "foobar", "   foobar   " ]))
console.log(countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]))
console.log(countMultipleWords([ ]))  


/* FizzBuzz 
Write a function named as fizzBuzz() which takes 2 number arguments and returns a string 
composed with below requirements when invoked. 
•  You need to find all the numbers within the range of given 2 numbers (both inclusive) 
and store them in a string from smallest to greatest number with a ' | ' separator for each 
number. 
•  You will need to convert numbers divisible by 3 to 'Fizz' 
•  You will need to convert numbers divisible by 5 to 'Buzz' 
•  You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’ 
•  The rest will stay the same. 
NOTE: Make your code dynamic that works for any numbers. 
Assume you will not be given negative numbers. 
 */

const fizzBuzz = (num, num2) => {
    let min = Math.min(num, num2);
    let max = Math.max(num, num2);
    let result = [];
    for(let i = min; i <= max; i++) {
        if(i % 3 === 0 && i % 5 === 0) result.push('FizzBuzz');
        else if(i % 3 === 0) result.push('Fizz');
        else if(i % 5 === 0) result.push('Buzz');
        else result.push(i)
    }
    return result.join(' | ');
}

console.log(fizzBuzz(13, 18)) 
console.log(fizzBuzz(12, 5))
console.log(fizzBuzz(5, 5))
console.log(fizzBuzz(9, 6))


/* Palindrome 
Write a function named as isPalindrome() which takes a string word as an argument and 
returns true if the word is palindrome or returns false otherwise when invoked. 
NOTE: Palindrome: It is a word that is read the same backward as forward 
Examples: kayak, civic, madam 
NOTE: your function should ignore case sensitivity
*/

const isPalindrome = (str) => str.toLowerCase() === str.toLowerCase().split('').reverse().join('');

console.log(isPalindrome("Hello"))
console.log(isPalindrome("Kayak"))
console.log(isPalindrome("civic"))
console.log(isPalindrome("abba"))
console.log(isPalindrome("ab  a"))
console.log(isPalindrome("123454321"))
console.log(isPalindrome("A"))
console.log(isPalindrome(""))


/* Prime Number 
Write a function named as isPrime() which takes a number as an argument and returns true if 
the number is prime or returns false otherwise when invoked. 
NOTE: Mathematically, Prime number is a number that can be divided only by itself and 1. It 
cannot be divided by any other number. The smallest prime number is 2 and 2 is the only even 
prime number. 
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31... 
NOTE: The smallest prime number is 2 and there is no negative prime numbers. 
 */
 
const isPrime = (num) => {
    if(num <= 1) return false;
    if(num % 2 === 0) return num === 2;
    for(let i = 3; i * i <= num; i+= 2) {
        if(num % i === 0) return false;
    }
    return true;
}

console.log(isPrime(5))
console.log(isPrime(2)) 
console.log(isPrime(29))
console.log(isPrime(-5))
console.log(isPrime(0))
console.log(isPrime(1))

/* Add Two Arrays 
Write a function named add() which takes two array of numbers as argument and returns a new 
array with sum of given arrays elements. 
NOTE: Be careful about the array sizes as they could be different.
*/


const add = (arr1, arr2) => {
if(arr2.length > arr1.length) [arr1, arr2] = [arr2, arr1]
return arr1.map((value, i) => value + (arr2[i] || 0))
}


console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]))
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]))
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]))


/* No Elements Wit A 
Write a function named noA() which takes an array of strings as argument and will return a 
new array with all elements starting with "A" or "a" replaced with "###".
*/

const noA = (arr) => arr.map(el => el[0].toLowerCase() === 'a' ? '###' : el); 

console.log(noA(["javascript", "hello", "123", "xyz"]))
console.log(noA(["apple", "123", "ABC", "javascript"]))
console.log(noA(["apple", "abc", "ABC", "Alex", "A"])) 


/* No Elements Divisible By 3 and 5 
Write a function named no3and5() which takes an array of integer numbers as argument and 
will return a new array with elements replaced by conditions below. 
If element can be divided by 5, replace it with 99 
If element can be divided by 3, replace it with 100 
If element can be divided by both 3 and 5, replace it with 101 
 */

const no3and5 = (arr) => {
    let result = [];
    for(let el of arr) {
        if(el % 3 === 0 && el % 5 === 0) result.push(101);
        else if(el % 5 === 0) result.push(99);
        else if(el % 3 === 0) result.push(100);
        else result.push(el);
    }
    return result;
}

console.log(no3and5([7, 4, 11, 23, 17]));
console.log(no3and5([3, 4, 5, 6]));
console.log(no3and5([10, 11, 12, 13, 14, 15]));



/* No Elements Equals 13 
Write a function named no13() which takes an array of numbers as argument and return a new 
array with all 13s replaced with 0s. 
*/

const no13 = (arr) => arr.map(el => el === 13 ? 0 : el);

console.log(no13([1, 2, 3 ,4]))
console.log(no13([13, 2, 3]))
console.log(no13([13, 13, 13 , 13, 13]))
console.log(no13([]))



/* Remove Duplicates 
Write a function named removeDuplicates() which takes an array argument and returns a new 
array with all the duplicates removed.
*/

const removeDuplicates = (arr) => arr.filter((el, ind) => arr.indexOf(el) === ind);
console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]))
console.log(removeDuplicates([1, 2, 5, 2, 3]));
console.log(removeDuplicates([0, -1, -2, -2, -1]));
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]));
console.log(removeDuplicates(["1", "2", "3", "2", "3"]));


/* No Digits 
Write a function named noDigit() which takes a string argument and returns a new string with 
all digits removed from the original string. 
*/

//const noDigit = (str) => str.split('').reduce((acc, el) => el < '0' || el > '9' ? acc += el : acc, '');

const noDigit = (str) => str.split('').filter(el => el < '0' || el > '9').join('')

console.log(noDigit(""))
console.log(noDigit("Javascript"))
console.log(noDigit("123Hello"))
console.log(noDigit("123Hello World149"))
console.log(noDigit("123Tech456Global149"))

/* No Vowel 
Write a function named noVowel() which takes a string argument and returns a new string 
with all vowels removed from the original string. 
*/

const noVowel = (str) => str.split('').filter(el => !('aeiou'.includes(el.toLowerCase()))).join('');

console.log(noVowel("TechGlobal"))
console.log(noVowel("AEOxyz"))
console.log(noVowel("Javascript"))
console.log(noVowel(""))
console.log(noVowel("125$"))


/* Sum Of Digits 
Write a function named sumOfDigits() which takes a string argument and returns sum of all 
digits from the original string. 
*/

const sumOfDigits = (str) => str.split('').reduce((acc, el) => el >= '0' && el <= '9' ? acc + Number(el) : acc, 0);

console.log(sumOfDigits("Javascript"));  
console.log(sumOfDigits("John’s age is 29")); 
console.log(sumOfDigits("$125.0"));            
console.log(sumOfDigits(""))


/* Array Factorial 
Write a function named arrFactorial() which takes an array of numbers as argument and return 
the array with every number replaced with their factorials. 
*/


/*const arrFactorial = (arr) => arr.map(num => {
    let fact = 1;
    for (let i = 2; i <= num; i++) {
        fact *= i;
    }
    return fact;
});
*/

const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const arrFactorial = arr => arr.map(factorial);
console.log(arrFactorial([1, 2, 3 ,4]))
console.log(arrFactorial([0, 5]))
console.log(arrFactorial([5 , 0, 6]))
console.log(arrFactorial([]))
