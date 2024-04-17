/* Task - 1
Requirement:
Write a function named fizzBuzz1() which takes a number argument and 
returns "Fizz" if the given number is divisible by 3, "Buzz" if the number is 
divisible by 5, and "FizzBuzz" if the number is divisible by both 3 and 5. 
Otherwise, it will return the number itself. 
*/

function fizzBuzz1(num) {
    if (num % 15 === 0) {
        return 'FizzBuzz';
    } else if (num % 3 === 0) {
        return 'Fizz';
    } else if (num % 5 === 0) {
        return 'Buzz';
    } else {
        return num;
    }
}


console.log(fizzBuzz1(0));    // 'FizzBuzz'
console.log(fizzBuzz1(1));    // 1
console.log(fizzBuzz1(3));    // 'Fizz'
console.log(fizzBuzz1(5));    // 'Buzz'
console.log(fizzBuzz1(30));    // 'FizzBuzz'
console.log(fizzBuzz1(10));   // 'FizzBuzz'
console.log(fizzBuzz1(15));    // 7
console.log(fizzBuzz1(-15));    // 'FizzBuzz'

/* Task - 2
Requirement:
Write a function named fizzBuzz2() which takes a number argument and 
returns and array consist of numbers starting from 1 to given number. However, 
it will return "Fizz" for the numbers divided by 3, "Buzz" for the numbers divided 
by 5, and "FizzBuzz" for the numbers divided both by 3 and 5.
*/

function fizzBuzz2(n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push('FizzBuzz');
        } else if (i % 3 === 0) {
            result.push('Fizz');
        } else if (i % 5 === 0) {
            result.push('Buzz');
        } else {
            result.push(i);
        }
    }
    return result;
}

console.log(fizzBuzz2(3)); // [ 1, 2, 'Fizz' ]
console.log(fizzBuzz2(5)); // [ 1, 2, 'Fizz', 4, 'Buzz' ]
console.log(fizzBuzz2(10)); // [ 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz' ]
console.log(fizzBuzz2(15)); // [ 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz' ]
console.log(fizzBuzz2(2)); // [ 1, 2 ]


/* Task - 3
Requirement:
Write a function named findSumNumbers() which takes a string argument 
and returns sum of the all numbers appears in the string.
*/

function findSumNumbers(str) {
    let sum = 0, currentNumber = 0;

    for (let char of str) {
        if (char >= '0' && char <= '9') {
            currentNumber = currentNumber * 10 + parseInt(char);
        } else {
            sum += currentNumber;
            currentNumber = 0;
        }
    }

    return sum + currentNumber;
}



console.log(findSumNumbers("abc$")); // 0
console.log(findSumNumbers("a1b4c 6#")); // 11
console.log(findSumNumbers("ab110c045d")); // 155
console.log(findSumNumbers("525")); // 525
console.log(findSumNumbers("3 for 10 dollars")); // 13

/* Task - 4
Requirement:
Write a function named findBiggestNumber() which takes a string argument 
and returns the biggest number appears in the string
*/

const findBiggestNumber = str => str.split('').filter(c => !isNaN(c)).sort().pop() || 0;

function findBiggestNumber(str) {
    let maxNumber = 0;
    let currentNumber = 0;

    for (let char of str) {
        if (char >= '0' && char <= '9') {
            currentNumber = currentNumber * 10 + parseInt(char);
        } else {
            maxNumber = Math.max(maxNumber, currentNumber);
            currentNumber = 0;
        }
    }

    return Math.max(maxNumber, currentNumber);
}

console.log(findBiggestNumber("abc$"));           // 0
console.log(findBiggestNumber("a1b4c 6#"));       // 6
console.log(findBiggestNumber("ab110c045d"));     // 110
console.log(findBiggestNumber("525"));            // 525
console.log(findBiggestNumber("3 for 10 dollars"));// 10


/* Task - 5
Requirement:
Write a function named countOccurrencesOfCharacters() which takes a 
string argument and returns the count of repeated characters in the String. 
NOTE: If given String is empty, then return empty String. 
NOTE: It is case sensitive
*/

function countOccurrencesOfCharacters(str) {
    if (!str) return "";

    let result = "";
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) count++
         else {
            result += count + str[i];
            count = 1;
        }
    }

    return result;
}

/*function countOccurrencesOfCharacters(str) {
    return str.split('')  
    .reduce((acc, curr, i, arr) => 
        curr === arr[i - 1] ? acc.slice(0, -2) + (parseInt(acc.slice(-2, -1)) + 1) + curr : acc + '1' + curr,
        ''
   );
}
*/

console.log(countOccurrencesOfCharacters("")) // ""
console.log(countOccurrencesOfCharacters("abc")) // "1a1b1c"
console.log(countOccurrencesOfCharacters("abbcca"))// "1a2b2c1a"
console.log(countOccurrencesOfCharacters("aaAAa")) // "2a2A1a”
console.log(countOccurrencesOfCharacters("www" )) // "3w"


/* Task - 6
Requirement:
Write a function named fibonacciSeries1() which takes a number n argument 
and returns the n series of Fibonacci numbers as an array.  
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
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
console.log(fibonacciSeries1(2));  // [0, 1]


/* Task - 7
Requirement:
Write a function named fibonacciSeries2() which takes a number n argument 
and returns the nth series of Fibonacci number as a number.
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
*/
function fibonacciSeries2(n) {
    if (n <= 1) return 0;
    let prevNumber = 0, currNumber = 1;
    for (let i = 2; i < n; i++) {
        [prevNumber, currNumber] = [currNumber, prevNumber + currNumber];
    }
    return currNumber;
}


console.log(fibonacciSeries2(2)) // 1
console.log(fibonacciSeries2(4)) // 2
console.log(fibonacciSeries2(8)) // 13
console.log(fibonacciSeries2(9)) // 21
console.log(fibonacciSeries2(1)) // 0

/* Task - 8
Requirement:
Write a function named findUniques() which takes two array of number 
arguments and returns the array which has only the unique values from both 
given arrays.
NOTE: If both arrays are empty, then return an empty array. 
NOTE: If one of the array is empty, then return unique values from the other 
array
*/
function findUniques(arr1, arr2) {
    const combined = arr1.concat(arr2);
    return combined.filter(item => 
        (arr1.includes(item) && !arr2.includes(item)) ||
        (arr2.includes(item) && !arr1.includes(item))
    );
}


console.log(findUniques([], [])); // []
console.log(findUniques([], [1, 2, 3, 2])); // [1, 3]
console.log(findUniques([1, 2, 3, 4], [3, 4, 5, 5])); // [1, 2, 5]
console.log(findUniques([8, 9], [9, 8, 9])); // []
console.log(findUniques([-1, -2], [1, 2])); // [-1, -2, 1, 2]

/* Task - 9
Requirement:
Write a function named isPowerOf3() which takes a number argument and 
returns true if given number is equal to 3 power of the X. Otherwise, return 
false. 
NOTE: Numbers that are power of 3 = 1, 3, 9, 27, 81, 243....
NOTE: Ignore negative scenarios
*/


function isPowerOf3(number) {
    return number === 1 ? true : (number < 1 || number % 3 !== 0) ? false : isPowerOf3(number / 3);
}


console.log(isPowerOf3(1));   // true
console.log(isPowerOf3(2));   // false
console.log(isPowerOf3(3));   // true
console.log(isPowerOf3(27));  // true
console.log(isPowerOf3(100));  // false
console.log(isPowerOf3(81)); // true
console.log(isPowerOf3(9));  // true
