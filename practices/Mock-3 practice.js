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

// function factorial(n) {
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }
const factorial = (n) => (n === 0 || n === 1 ? 1 : n * factorial(n - 1));
console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(1));

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

const removeExtraSpaces = (str) =>
  str
    .split(" ")
    .filter((s) => s.length > 0)
    .join(" ");
console.log(removeExtraSpaces("Hello"));
console.log(removeExtraSpaces("      Hello    World     "));
console.log(removeExtraSpaces("     JavaScript is          fun"));
console.log(removeExtraSpaces(""));

/*First Duplicate Element 
Write a function named as firstDuplicate() which takes an array argument and returns the first 
duplicated number in the array when invoked. 
NOTE: Make your code dynamic that works for any array and return -1 if there are no duplicates 
in the array. For two elements to be considered as duplicated, value and data types of the 
elements must be same. 
 
Examples: 
firstDuplicate([ 3, 7, 10, 0, 3, 10 ])      -> 3 
firstDuplicate([ 5, 7, 7, 0, 5, 10 ])      -> 5 
firstDuplicate([ 5, '5', 3, 7, 4 ])      -> -1 
firstDuplicate([ 123, 'abc', '123', 3, 'abc' ])    -> 'abc' 
firstDuplicate([ 1, 2, 3])        -> -1 
firstDuplicate([ 'foo', 'abc', '123', 'bar’ ])     -> -1 
*/
function firstDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
      return arr[i];
    }
  }
  return -1;
}
console.log(firstDuplicate([3, 7, 10, 0, 3, 10]));
console.log(firstDuplicate([5, 7, 7, 0, 5, 10]));
console.log(firstDuplicate([5, "5", 3, 7, 4]));
console.log(firstDuplicate([123, "abc", "123", 3, "abc"]));
console.log(firstDuplicate([1, 2, 3]));
console.log(firstDuplicate(["foo", "abc", "123", "bar"]));

/*
Find All Duplicate Elements 
Write a function named as getDuplicates() which takes an array argument and returns all the 
duplicated elements in the array when invoked. 
NOTE: Make your code dynamic that works for any array and return empty array if there are no 
duplicates in the array. For two elements to be considered as duplicated, value and data types 
of the elements must be same. 
 
Examples: 
getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ])      -> [ 0, -7 ] 
getDuplicates([ 1, 2, 5, 0, 7 ])          -> [ ] 
getDuplicates(['A', 'foo', '12’ , 12, 'bar', 'a', 'a', 'foo' ])    -> [ 'foo', 'a’ ] 
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ])       -> [ ]
*/

function getDuplicate(arr) {
  let allDuplicate = [];
  for (let i = 0; i < arr.length; i++) {
    if (
      arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i]) &&
      !allDuplicate.includes(arr[i])
    ) {
      allDuplicate.push(arr[i]);
    }
  }
  return allDuplicate;
}

console.log(getDuplicate([0, -4, -7, 0, 5, 10, 45, -7, 0]));
console.log(getDuplicate([1, 2, 5, 0, 7]));
console.log(getDuplicate(["A", "foo", "12", 12, "bar", "a", "a", "foo"]));
console.log(getDuplicate(["foo", "12", 12, "bar", "a"]));

/* 
Write a function named as reverseStringWords() which takes a string as an argument
and returns string back with each word separately reversed when invoked.
NOTE:
 Make your code dynamic that
 works for any string. Make sure you consider extra spaces
 before and after words in the given string.

reverseStringWords("Hello World")      -> "olleH dlroW" 
reverseStringWords("I like JavaScript")     -> "I ekil tpircSavaJ" 
reverseStringWords("Hello")       -> "olleH" 
reverseStringWords("")         -> "" 
reverseStringWords(" ")         -> ''
*/

const reverseString = (str) => {
  return str
    .trim()
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
};

console.log(reverseString("Hello Word"));
console.log(reverseString("I like JavaScript"));
console.log(reverseString("Hello"));
console.log(reverseString(""));
console.log(reverseString(" "));

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
  if (arr2.length > arr1.length) [arr1, arr2] = [arr2, arr1];
  return arr1.map((value, i) => value + (arr2[i] || 0));
};
console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]));
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]));
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]));

/* 
Fizz Buzz 
Write a function named fizzBuzz() which takes a number argument and returns an array 
consisting of numbers starting from 1 to given number. However, it will return "Fizz" for the 
numbers divided by 3, "Buzz" for the numbers divided by 5, and "FizzBuzz" for the numbers 
divided both by 3 and 5. 
 
Examples: 
fizzBuzz(3)  -> [ 1, 2, 'Fizz' ] 
fizzBuzz(5)  -> [ 1, 2, 'Fizz', 4, 'Buzz' ] 
fizzBuzz(10)  -> [ 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz' ] 
fizzBuzz(15)  -> [ 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz'. 13, 14,  'FizzBuzz' ] 
fizzBuzz(2)  -> [ 1, 2 ] 
*/

const fizzBuzz = (n) => {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) result.push("FizzBuzz");
    else if (i % 3 === 0) result.push("Fizz");
    else if (i % 5 === 0) result.push("Buzz");
    else result.push(i);
  }
  return result;
};

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(10));
console.log(fizzBuzz(15));
console.log(fizzBuzz(2));

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

const isPalindrome = (str) =>
  str.toLowerCase() === str.toLowerCase().split("").reverse().join("");
console.log(isPalindrome("123454321"));
console.log(isPalindrome("Kayak"));
console.log(isPalindrome("ab  a"));
console.log(isPalindrome(""));

/*Write a function named removeDuplicates() which takes an array argument 
and returns a new array with all the duplicates removed.
Examples:
removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])  -> [10, 20, 35, 60, 
70]
removeDuplicates([1, 2, 5, 2, 3])  -> [1, 2, 5, 3]
removeDuplicates([0, -1, -2, -2, -1])  -> [0, -1, -2]
removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"])  -> ["abc", "xyz", 
"123", "ab", "ABC"]
removeDuplicates(["1", "2", "3", "2", "3"])  -> ["1", "2", "3"]
*/

//const removeDuplicates = arr => Array.from(new Set(arr))
const removeDuplicates = (arr) => [...[...new Set(arr)]];
console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]));
console.log(removeDuplicates([0, -1, -2, -2, -1]));
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]));
console.log(removeDuplicates(["1", "2", "3", "2", "3"]));

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

function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return true;
}
console.log(isPrime(5));
console.log(isPrime(2));
console.log(isPrime(29));
console.log(isPrime(-5));
console.log(isPrime(0));
console.log(isPrime(1));

/*Requirement:
Write a function named arrFactorial() which takes an array of numbers as 
argument and return the array with every number replaced with their factorials.
Examples:
arrFactorial([1, 2, 3 ,4])  ->  [1, 2, 6, 24]
arrFactorial([0, 5])  -> [1,120]
arrFactorial([5 , 0, 6])  -> [120, 1, 720]
arrFactorial([])  -> []
*/

// const arrFactorial = (arr) => arr.map(num => {
//     let fact = 1;
//     for (let i = 2; i <= num; i++) {
//         fact *= i;
//     }
//     return fact;
// });

const arrFactorial = (arr) =>
  arr.map((n) => (n === 0 ? 1 : n * arrFactorial([n - 1])[0]));

console.log(arrFactorial([1, 2, 3, 4]));
console.log(arrFactorial([0, 5]));
console.log(arrFactorial([5, 0, 6]));
console.log(arrFactorial([]));

/*
Write a function named findBiggestNumber() which takes a string argument and returns the biggest number appears in the string.
Examples:
findBiggestNumber("abc$")        -> 0
findBiggestNumber("a1b4c  6#")        -> 6
findBiggestNumber("ab110c045d")        -> 110
findBiggestNumber("525")        -> 525
findBiggestNumber("3 for 10 dollars")    -> 10
	1.	split(/[^0-9]/): This splits the string by  non-digit characters.
	2.	filter(Boolean): This removes any empty strings from the array resulting from the split.
	3.	map(Number): This converts each string in the array to a number.
	4.	Math.max(0, …): This finds the maximum number in the array, with 0 as a default in case there are no numbers.

*/

const findBiggestNumber = (str) =>
  Math.max(
    0,
    ...str
      .split(/[^0-9]+/)
      .filter(Boolean)
      .map(Number)
  );

console.log(findBiggestNumber("abc$")); // 0
console.log(findBiggestNumber("a1b4c 6#")); // 6
console.log(findBiggestNumber("ab110c045d")); // 110
console.log(findBiggestNumber("525")); // 525
console.log(findBiggestNumber("3 for 10 dollars")); // 10

/*
Requirement:
Write a function named findSumNumbers() which takes a string argument and returns sum of the all numbers appears in the string
*/

const findSumNumbers = (str) =>
  str
    .split(/[^0-9]+/)
    .filter(Boolean)
    .map(Number)
    .reduce((acc, num) => acc + num, 0);

console.log(findSumNumbers("abc$"));
console.log(findSumNumbers("a1b4c 6#"));
console.log(findSumNumbers("ab110c045d"));
console.log(findSumNumbers("525"));
console.log(findSumNumbers("3 for 10 dollars"));

/*
Requirement:
Write a function named isPowerOf3() which takes a number argument and returns true if given number is equal to 3 power of the X. Otherwise, return false.
NOTE: Numbers that are power of 3 = 1, 3, 9, 27, 81, 243….
NOTE: Ignore negative scenarios.
*/
const isPowerOf3 = (num) => {
  if (num < 1) return false; // Ignore negative numbers and zero
  while (num % 3 === 0) num /= 3;
  return num === 1;
};

function isPowerOf3(number) {
  return number === 1
    ? true
    : number < 1 || number % 3 !== 0
    ? false
    : isPowerOf3(number / 3);
}

console.log(isPowerOf3(1)); // true
console.log(isPowerOf3(3)); // true
console.log(isPowerOf3(9)); // true
console.log(isPowerOf3(27)); // true
console.log(isPowerOf3(81)); // true
console.log(isPowerOf3(243)); // true
console.log(isPowerOf3(10)); // false
console.log(isPowerOf3(0)); // false

/*

Write a function named fibonacciSeries1() which takes a number n argument and returns the 
n series of Fibonacci numbers as an array.  
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21 
 
Examples: 
fibonacciSeries1(3)    -> [0, 1, 1] 
fibonacciSeries1(5)    -> [0, 1, 1, 2, 3] 
fibonacciSeries1(7)    -> [0, 1, 1, 2, 3, 5, 8] 
fibonacciSeries1(8)    -> [0, 1, 1, 2, 3, 5, 8, 13] 
fibonacciSeries1(1)    -> [0] 
fibonacciSeries1(2)    -> [0, 1] 
 */

function fibonacciSeries1(n) {
  const series = [0, 1];
  for (let i = 2; i < n; i++) {
    series.push(series[i - 1] + series[i - 2]);
  }
  return series.slice(0, n);
}
console.log(fibonacciSeries1(3)); // [0, 1, 1]
console.log(fibonacciSeries1(5)); // [0, 1, 1, 2, 3]
console.log(fibonacciSeries1(7)); // [0, 1, 1, 2, 3, 5, 8]
console.log(fibonacciSeries1(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibonacciSeries1(1)); // [0]
console.log(fibonacciSeries1(2)); // [0, 1]

/*
Write a function named fibonacciSeries2() which takes a number n argument and returns the 
nth series of Fibonacci number as a number. 
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21 
 
Examples: 
fibonacciSeries2(2)    -> 1 
fibonacciSeries2(4)    -> 2 
fibonacciSeries2(8)    -> 13 
fibonacciSeries2(9)    -> 21 
fibonacciSeries2(1)    -> 0 
*/

const fibonacciSeries2 = (n) =>
  n === 1 ? 0 : n === 2 ? 1 : fibonacciSeries2(n - 1) + fibonacciSeries2(n - 2);
console.log(fibonacciSeries2(2)); // 1
console.log(fibonacciSeries2(4)); // 2
console.log(fibonacciSeries2(8)); // 13
console.log(fibonacciSeries2(9)); // 21
console.log(fibonacciSeries2(1)); // 0

// function fibonacciSeries2(n) {
//     if (n === 1) return 0;
//     if (n === 2) return 1;
//     return fibonacciSeries2(n - 1) + fibonacciSeries2(n - 2);
// }

/*
Requirement:
Write a function named findUniques() which takes two array of number arguments and returns the array which has only the unique values from both given arrays.
NOTE: If both arrays are empty, then return an empty array.
NOTE: If one of the array is empty, then return unique values from the other array.
*/

const findUniques = (arr, arr2) =>
  arr.concat(arr2).filter((value, i, arr) => arr.indexOf(value) === i);
//const findUniques = (arr1, arr2) => [...new Set([...arr1, ...arr2])];
console.log(findUniques([1, 2, 3], [3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(findUniques([], [3, 4, 5])); // [3, 4, 5]
console.log(findUniques([1, 2, 3], [])); // [1, 2, 3]
console.log(findUniques([], [])); // []

/*
Write a function named reverseNumber() which takes a number argument and returns it back 
reversed without converting it to a String. 
Note: Do not convert number to string to complete the task. 
 
Examples: 
reverseNumber(371)    -> 173 
reverseNumber(123)    -> 321 
reverseNumber(12)     -> 21 
reverseNumber(0)     -> 0 
reverseNumber(111)    -> 111 
 */

const reverseNumber = (num) => {
  let reversed = 0;
  while (num !== 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return reversed;
};
console.log(reverseNumber(371));
console.log(reverseNumber(123));
console.log(reverseNumber(12));
console.log(reverseNumber(0));
console.log(reverseNumber(111));

/*
Write a function named isArmstrong() which takes a number argument and returns true if 
given number is armstrong, return false otherwise. 
NOTE: An armstrong number is a number that is equal to the sum of its own digits raised to the 
power of the number of digits. In other words, an n-digit number is an Armstrong number if the 
sum of its digits, each raised to the nth power, is equal to the number itself. 
•  Let's take an example to understand it better. Consider the number 153. 
•  To determine if 153 is an armstrong number, we need to check if the sum of its 
digits, each raised to the power of the number of digits, equals the original 
number. 
•  1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 
•  In this case, the sum of the individual digits raised to the power of 3 (the number 
of digits in 153) is equal to the original number, which means 153 is an armstrong 
number. 
 
Examples: 
isArmstrong(153)     -> true 
isArmstrong(123)     -> false 
isArmstrong(1634)     -> true 
isArmstrong(153)     -> true 
isArmstrong(1111)     -> false 
*/

const isArmstrong = (num) => {
  const digits = num.toString().split("");
  const power = digits.length;
  return digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0) === num;
};

console.log(isArmstrong(153));
console.log(isArmstrong(123));
console.log(isArmstrong(1634));
console.log(isArmstrong(153));
console.log(isArmstrong(1111));

/*
Write a function named isAnagram() which takes two string arguments and returns true if the 
given strings are anagram. Return false otherwise. 
NOTE: An anagram is a word or phrase formed by rearranging the letters of another word or 
phrase. In the context of strings, checking if two strings are anagrams of each other means 
verifying if they contain the same characters in the same quantities, regardless of the order of 
those characters. 
NOTE: This method is case-insensitive and ignore the white spaces. 
 
Examples: 
isAnagram("Apple", "Peach")     -> false 
isAnagram("listen", "silent")      -> true 
isAnagram("astronomer", "moon starer")  -> true 
isAnagram("CINEMA", "iceman")    -> true 
isAnagram("123", "1234")    -  > false 
*/

const isAnagram = (str, str2) => {
  const sortedChars = (str) =>
    str
      .toLowerCase()
      .split("")
      .filter((char) => char !== " ")
      .sort()
      .join("");

  return sortedChars(str) === sortedChars(str2);
};

console.log(isAnagram("Apple", "Peach"));
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("astronomer", "moon starer"));
console.log(isAnagram("CINEMA", "iceman"));
console.log(isAnagram("123", "1234"));

/*
Write a function named countPalindrome() which takes a string and returns the number 
of  palindrome words. 
Note: A palindrome word is a word that reads the same forwards and backwards. Example: 
level, radar, deed, refer. 
 
Examples: 
countPalindrome("Mom and Dad")        -> 2 
countPalindrome("See you at noon")       -> 1 
countPalindrome("Kayak races attracts racecar drivers")  -> 2 
countPalindrome("")        -> 0 
countPalindrome("No palindrome here")  -> 0
*/

const countPalindrome = (str) =>
  str
    .toLowerCase()
    .split(" ")
    .filter((el) => el.length > 1 && el === el.split("").reverse().join(""))
    .length;
console.log(countPalindrome("Mom and Dad"));
console.log(countPalindrome("See you at noon"));
console.log(countPalindrome("Kayak races attracts racecar drivers"));
console.log(countPalindrome(""));
console.log(countPalindrome("No palindrome here"));

/*
Write a function named canFormString() which takes two string arguments and returns true if 
the second string can be formed by rearranging the characters of first string. Return false 
otherwise. 
NOTE: This method is case-insensitive and ignore the white spaces. 
 
Examples: 
canFormString("Hello", "Hi")          -> false 
canFormString("programming", "gaming")      -> true 
canFormString("halogen", "hello")        -> false 
canFormString("CONVERSATION", "voices rant on")  -> true 
canFormString("12", "123")          -> false 
 */

const canFormString = (str1, str2) => {
  //normalize("voices rant on") -> "voicesranton"
  const normalize = (str) => str.toLowerCase().split(" ").join("");

  return normalize(str2)
    .split("")
    .every((char) => {
      const count1 = normalize(str1).split(char).length - 1;
      const count2 = normalize(str2).split(char).length - 1;
      return count1 >= count2;
    });
};

console.log(canFormString("Hello", "Hi"));
console.log(canFormString("programming", "gaming"));
console.log(canFormString("halogen", "hello"));
console.log(canFormString("CONVERSATION", "voices rant on"));
console.log(canFormString("12", "123"));

/*
Write a function named countOccurrence() which takes two string arguments and returns how 
many times that the first string can form the second string. 
NOTE: This method is case-insensitive and ignore the white spaces. 
 
Examples: 
countOccurrence("Javascript", "Java")  -> 1 
countOccurrence("Hello", "World")    -> 0 
countOccurrence("Can I can a can", "anc")  -> 3 
countOccurrence("Hello", "l")     -> 2 
countOccurrence("IT conversations", "IT")  -> 2 
 */

const countOccurrence = (str1, str2) => {
  const normalize = (str) => str.toLowerCase().split(" ").join("");

  return Math.min(
    ...normalize(str2)
      .split("")
      .map((char) => {
        const count1 = normalize(str1).split(char).length - 1;
        const count2 = normalize(str2).split(char).length - 1;
        return Math.floor(count1 / count2);
      })
  );
};

console.log(countOccurrence("Javascript", "Java"));
console.log(countOccurrence("Hello", "World"));
console.log(countOccurrence("Can I can a can", "anc"));
console.log(countOccurrence("Hello", "l"));
console.log(countOccurrence("IT conversations", "IT"));

const isPowerOf3 = (num) => {
  if (num < 1) return false;
  while (num % 3 === 0) num /= 3;
  return num === 1;
};

const isPowerOf3 = (num) => Number.isInteger(Math.log10(num) / Math.log10(3));

console.log(isPowerOf3(9));

const factorial = (num) => {
  let fact = 1;
  for (let i = 2; i <= num; i++) {
    fact *= i;
  }
  return fact;
};

const factorial = (num) => (num <= 1 ? 1 : num * factorial(num - 1));
console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(1));

const findMedian = (arr1, arr2) => {
  const newArr = arr1.concat(arr2).sort((a, b) => b - a);
  let med = newArr.length / 2;
  return newArr.length % 2 === 0
    ? (newArr[med] + newArr[med - 1]) / 2
    : newArr[Math.floor(med)];
};
console.log(findMedian([1, 3], [2]));
console.log(findMedian([1, 2], [3, 4]));
