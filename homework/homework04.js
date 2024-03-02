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

 Will do in Class! Akin's instruction.

*/

let randNum = Math.floor(Math.random() * 100) + 1;


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
for(let i = 0; i < arrayNumbers.length; i++) [
    console.log(arrayNumbers[i])
    
]


/* Task - 12
Requirement:
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
let moreThan10 =
let lessThan10 = 0;
let equalTo10 = 0;

// Loop through the array and update counters
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
        moreThan10++;
    } else if (numbers[i] < 10) {
        lessThan10++;
    } else if (numbers[i] === 10) {
        equalTo10++;
    }
}

// Output the results
console.log(`Elements that are more than 10 = ${moreThan10}`);
console.log(`Elements that less than 10 =${lessThan10}`);
console.log(`Elements that are 10 = ${equalTo10}`); 