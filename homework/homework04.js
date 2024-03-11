/* Task - 1

 Write a program that outputs all the numbers that are divisible by 7
 starting from 1 to 100(both inclusive).
 */

  for(let i = 1; i <= 100; i++) {
    if(i % 7 === 0)
    console.log(i);
  }

  /* Task - 2

  Write a program that outputs all the numbers that are divisible by both 2 and 3 
  starting from 1 to 50(both inclusive).
*/

for(let i = 1; i <=50; i++) {
    if(i % 2 === 0 && i % 3 === 0);
    console.log(i)
}

/* Task - 3

 Write a program that outputs all the numbers that are divisible by 5
 starting from 100 to 50(both inclusive).
*/

for(let i = 100; i >= 50; i--) {
    if(i % 5 === 0)
    console.log(i);
}

/* Task - 4
 
 Write a program that outputs the squares of all numbers
 starting from 0 to 7(both inclusive).
 */

 for(let i = 0; i <= 7; i++) {
  
    console.log(`The square of ${i} is = ${i * i}`);
   
}

/* Task - 5

 Write a program that finds sum of the numbers
 starting from 1 to 10(both inclusive).
*/

let sumOfNum = 0;
for(let i = 1; i <= 10; i++) {
    sumOfNum += i;
}
console.log(sumOfNum);

/* Task - 6
 
 Write a program generates a random number between 1 and 10(both inclusive).
 And find the factorial of the number.

 Mathematically, the factorial of a non-negative integer "n" is defined as:
 n! = n * (n - 1) * (n - 2) * ... * 2 * 1

 Will do in Class! 
*/

let randomNum = Math.floor(Math.random() * 10) + 1;




/* Task - 7

 Write a program generates a random number between 1 and 100 (both inclusive).
 Keep generating a new number till you get a number that is divisible by 5.
 The program should also count how many attempts it takes to generate such a number.
 Eventually, print the random numbert divisible by 5 with the number of attempts 
 as bellow.


*/

let attempts = 0;
let randomNumber;

do {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts++;
} while (randomNumber % 5 !== 0);

console.log(`The random number is ${randomNumber} and it took ${attempts} attemt/s to generate it.`);


/* Task - 8

 -Creat  an array that stores countries below.
  Germany, Argentina, Ukraine, Romania

THEN; 
-Output the entire array
-Output the entire array  sorted lexicographically.
*/

let arrayCountries = ['Germany', 'Argentina', 'Ukraine', 'Romania'];
console.log(arrayCountries);
console.log(arrayCountries.sort());

/* Task - 9

 -Create a String array that stores cartoon dogs below
  Scooby Doo, Snoopy, Blue, Pluto, Dino, Sparky

THEN;
-Output the entire array
-Then, check if the array has Pluto element 
 output true || false
*/

let arrayDogsName = ['Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky'];
console.log(arrayDogsName);
console.log(arrayDogsName.includes('Pluto'));

/* Task - 10 

-Create an array that stores cartoon cats below.
Garfield, Tom, Sylvester, Azrael

THEN:
-Output the entire array sorted lexicographically
-Then, check if the array has both Garfield and Felix
if it has both, then output true
if it does not have both, output false
*/

let arrayCatsName = ['Garfield', 'Tom', 'Sylvester', 'Azrael'];
console.log(arrayCatsName.sort());
console.log(arrayCatsName.includes('Garfield') && arrayCatsName.includes('Felix'));


/* Task - 11

-Create an array that stores numbers below
10.5, 20.75, 70, 80, 15.75

THEN:
-Output the entire array
-Ouput each element
*/

let arrayNumbers = [10.5, 20.75, 70, 80, 15.75];
console.log(arrayNumbers);
for(let i = 0; i < arrayNumbers.length; i++) {
    console.log(arrayNumbers[i])
}


/* Task - 12

-Create an array that stores objects below.
Pen, notebook, Book, paper, bag, pencil, Ruler

 THEN:
-Output the entire array.
-Output how many elements starts with 'B' or 'P', 
ignoring cases.
-Output how many elements has 'book' or 'pen' partial 
strings, ignoring cases.
*/

let objects = ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler'];
console.log(objects);

let elemStartsWithBandP = 0;

for(let i = 0; i < objects.length; i++) {
    if(objects[i].toUpperCase().startsWith('B') || objects[i].toUpperCase().startsWith('P')) {
       elemStartsWithBandP++;
    }
}
console.log(`Elements starting with 'B' or 'P' = ${elemStartsWithBandP }`)

let subBookOrPen = 0;
for (let i = 0; i < objects.length; i++) {
    if (objects[i].toLowerCase().includes('book') || objects[i].toLowerCase().includes('pen')) {
        subBookOrPen++;
    }
}
console.log(`Elements having 'book' or 'pen' = ${subBookOrPen}`);

/* Task - 13

-Create an array that stores numbers below.
3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78

THEN:
-Output the entire array
-Output how many elements are more than 10
-Output how many elements are less than 10
-Output how many elements are 10
*/

let numArray = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78];
console.log(numArray);
let moreThan10 = 0;
let lessThan10 = 0;
let equalTo10 = 0;


for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] >= 10) {
        moreThan10++;
    } else if (numArray[i] <= 10) {
        lessThan10++;
    } else if (numArray[i] === 10) {
        equalTo10++;
    }
}


console.log(`Elements that are more than 10 = ${moreThan10}`);
console.log(`Elements that less than 10 = ${lessThan10}`);
console.log(`Elements that are 10 = ${equalTo10}`); 

// Task - 14
/*Create 2 arrays that stores numbers below.
  First array-> 		[ 5, 8, 13, 1, 2 ]
  Second array -> 	[ 9, 3, 67, 1, 0 ]

THEN:
-Output both arrays
–Then, create a new array that will take the greatest value of same index
 from first 2 arrays and output the third array as well.
 */

 const arrNumbers = [ 5, 8, 13, 1, 2 ];
 const arr2Numbers = [ 9, 3, 67, 1, 0 ];
 console.log(arrNumbers);
 console.log(arr2Numbers);
const arr3Numbers = [];
for(let i = 0; i < arr2Numbers.length; i++) {
    arr3Numbers.push(Math.max(arrNumbers[i], arr2Numbers[i]));
}
console.log(arr3Numbers);


// Task - 15

/* Write a function named as firstDuplicate() which takes an array argument and returns the first duplicated 
   number in the array when invoked.

NOTE:
 Make your code dynamic that works for any array and return -1 if there are no duplicates in the array. For two elements to be considered as 
 duplicated, value and data types of the elements must be same.
*/


function firstDuplicate(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
        return arr[i];
    }
}
return -1;
}
console.log(firstDuplicate([7, 3, 2, 0, 10]));


// Task - 16

/* Write a function named as getDuplicates() which takes an array argument 
   and returns all the duplicated elements in the array when invoked.

NOTE:
 Make your code dynamic that works for any array and return empty array 
 if there are no duplicates in the array. For two elements to be considered as duplicated, value
 and data types of the elements must be same.
 */

 function getDuplicate(arr) {
    let allDuplicate = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i]) && !allDuplicate.includes(arr[i]) ) {
            allDuplicate.push(arr[i]);
        }
    }
    return allDuplicate;
 }
 console.log( getDuplicate([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]));


 // Task - 17

/* Write a function named as reverseStringWords() which takes a string as an argument
   and returns string back with each word separately reversed when invoked.

NOTE:
 Make your code dynamic that
 works for any string. Make sure you consider extra spaces
 before and after words in the given string.
*/

function reverseStringWords(str) {
   let word = '';
    let result = '';
    for(let char of str) {
        if(char === ' ') {
            result += word + char;
            word = '';
        } else {
            word = char + word;
        }
    }
    result += word;
    return result;
}

console.log(reverseStringWords("Hello World") );


// Task - 18

/* Write a function named as getEvens() which takes 2 number arguments and
   returns all the even numbers as an array stored from smallest even number
   to greatest even number when invoked.

NOTE: 
Make your code dynamic that works for any numbers and return 
empty array if there are no even numbers in the range of given 2 numbers. 
Assume you will not be given negΩative numbers.
*/

  function getEvens(num1, num2) {
    let smEvenNum =  Math.min(num1, num2);
    let bigEvenNum = Math.max(num1, num2);
    let evenNum = [];
    for(let i = smEvenNum; i <= bigEvenNum; i++ ) {
        if(i % 2 === 0) {
            evenNum.push(i);
        }
    }
    return evenNum;

  }
  console.log(getEvens(17, 5));


  // Task - 19

  /* Write a function named as getMultipleOf5() which takes 2 number arguments and
     returns all the numbers divisible by 5 as an array stored from 
     first found match to last found match when invoked.

 NOTE:
 Make your code dynamic that works for any numbers and 
 return empty array if there are no numbers divisible by 5 in the range of given 2 numbers. 
 Assume you will not be given negative numbers.
 */

function getMultipleOf5(num, num2) {
    let dividibleBy5 = [];
    let minN = Math.min(num, num2);
    let maxN = Math.max(num, num2);

    for(let i = minN; i <= maxN; i++) {
        if(i % 5 === 0) {
            dividibleBy5.push(i);
        }
    } 
    return dividibleBy5;
}
console.log(getMultipleOf5( 3, 17));	


// Task - 20 

/* Write a function named as fizzBuzz() which takes 2 number arguments and returns a string 
   composed with below requirements when invoked.
You need to find all the numbers within the range of given 2 numbers (both inclusive) and store them in a string from smallest to greatest number with a ' | ' separator for each number.
You will need to convert numbers divisible by 3 to 'Fizz'
You will need to convert numbers divisible by 5 to 'Buzz'
You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’
The rest will stay the same.
NOTE: 
Make your code dynamic that works for any numbers.
Assume you will not be given negative numbers.
*/

function fizzBuzz(num, num3) {
    let minNum = Math.min(num, num3);
    let maxNum = Math.max(num, num3);
    let result = '';

    for (let i = minNum; i <= maxNum; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result += 'FizzBuzz';
        } else if (i % 3 === 0) {
            result += 'Fizz';
        } else if (i % 5 === 0) {
            result += 'Buzz';
        } else {
            result += i;
        }
        result += (i < maxNum ? ' | ' : '');
    }

    return result;
}

console.log(fizzBuzz(13, 18));



