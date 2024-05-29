/* Task - 1
Write a function named repeatingX() which takes a string argument and 
returns true if the letter x is followed by another x. Otherwise, return false.
NOTE: This method should be case-insensitive.
Examples:
repeatingX("xTechxGlobalx")  -> false
repeatingX("Hello Xx World")  -> true
repeatingX("x x")  -> false
repeatingX("")  -> false
repeatingX("xxxxx")  -> true
*/

function repeatingX(str) {
  str = str.toLowerCase();
  for (let i = 0; i < str.length - 1; i++) {
      if (str[i] === 'x' && str[i + 1] === 'x') {
        return true;
      }
    }
    return false;
  }
  
       
console.log(repeatingX("xTechxGlobalx"));              
console.log(repeatingX("Hello Xx World"));        
console.log(repeatingX("x x"));              
console.log(repeatingX(""));         
console.log(repeatingX("xxxxx") ); 


/* Task - 2
Write a function named isPerfectSquare() which takes a number as an 
argument and checks if it is a perfect square. It returns true if the number is a 
perfect square and false otherwise.
NOTE: A perfect square is a number that can be expressed as the product of an 
integer by itself or as the second exponent of an integer. For example, 25 is a 
perfect square because it is the product of integer 5 by itself, 5 × 5 = 25. 
However, 21 is not a perfect square number because it cannot be expressed as 
the product of two same integers.
Examples:
isPerfectSquare(25) -> true
isPerfectSquare(24) -> false
isPerfectSquare(0)  -> true
isPerfectSquare(1)  -> true
isPerfectSquare(-1)  -> false
isPerfectSquare(144)  -> true
*/

function isPerfectSquare(num) {
    if (num < 0) {
      return false;
    }
    const sqrt = Math.sqrt(num);
    return Number.isInteger(sqrt);
  }
  
console.log(isPerfectSquare(25));               
console.log(isPerfectSquare(24));  
console.log(isPerfectSquare(0));           
console.log(isPerfectSquare(1));          
console.log(isPerfectSquare(-1));           
console.log(isPerfectSquare(144));  


/* Task - 3
Write a function named convertTemperature() which takes a number and a 
string arguments to be considered as a temperature value and a unit (either 
Celsius or Fahrenheit) as arguments and converts the temperature to the other 
unit.
NOTE: Use below formulas to convert temperature:
Celsius to Fahrenheit: temp * 9/5) + 32
Fahrenheit to Celsius: temp - 32) * 5/9
Examples:
convertTemperature(100, 'Celsius’)  -> 212
convertTemperature(32, 'Fahrenheit’)  -> 0
convertTemperature(0, 'Celsius’)  -> 32
convertTemperature(212, 'Fahrenheit’)  -> 100
convertTemperature(-40, 'Celsius’)  -> -40
convertTemperature(-40, 'Fahrenheit’)  -> -40
*/

function convertTemperature(temp, unit) {
    if (unit === 'Celsius') {
      return (temp * 9/5) + 32;
    } else if (unit === 'Fahrenheit') {
      return (temp - 32) * 5/9;
    } else {
      throw new Error('Invalid unit. Please provide either "Celsius" or "Fahrenheit".');
    }
  }

console.log(convertTemperature(100, 'Celsius'));           
console.log(convertTemperature(32, 'Fahrenheit'));      
console.log(convertTemperature(0, 'Celsius') );      
console.log(convertTemperature(212, 'Fahrenheit'));      
console.log(convertTemperature(-40, 'Celsius'));          
console.log(convertTemperature(-40, 'Fahrenheit'));



/* Task - 4
Write a function named sumOfEvenNumbers() which takes an array as an 
argument and returns the sum of all the even numbers in an array.
Examples:
sumOfEvenNumbers( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] )  -> 30
sumOfEvenNumbers( [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ] )  -> 110
sumOfEvenNumbers( [ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ] )  -> 0
sumOfEvenNumbers( [ ] )  -> 0
sumOfEvenNumbers( [ 1, 2, 3, 4, 5 ] )  -> 6
sumOfEvenNumbers( [ 10, 20, 30, 40, 50 ] )  -> 150
*/

function sumOfEvenNumbers(arr) {
  let sum = 0;
  for (let num of arr) {
    if (num % 2 === 0) {
      sum += num;
    }
  }
  return sum;
}

console.log(sumOfEvenNumbers( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] ));      
console.log(sumOfEvenNumbers( [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ] ));     
console.log(sumOfEvenNumbers( [ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ] ) );   
console.log(sumOfEvenNumbers( [ ] ));        
console.log(sumOfEvenNumbers( [ 1, 2, 3, 4, 5 ] ));        
console.log(sumOfEvenNumbers( [ 10, 20, 30, 40, 50 ] ) );        


/* Task - 5
Write a function named capsOdds() which takes an array argument and returns the array with 
all the odd index elements capitalized (converted to uppercase).
Examples:
capsOdds(["Hello", "World"])  -> ["Hello", "WORLD"]
capsOdds(["Jan", "Feb", "Mar", "Apr"])  -> ["Jan", "FEB", "Mar", "APR"]
capsOdds(["Apple", "Banana", "123", "456", "Peach", "Kiwi"])  -> ["Apple", "BANANA", 
"123", "456", "Peach", "KIWI"]
capsOdds([ ])  -> [ ]
capsOdds(["John !@#$%", "^&*() Doe"])  -> ["John !@#$%", "^&*() DOE"]
*/

function capsOdds(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 !== 0) {
        arr[i] = arr[i].toUpperCase();
      }
    }
    return arr;
  }
  


console.log(capsOdds(["Hello", "World"]));                   
console.log(capsOdds(["Jan", "Feb", "Mar", "Apr"]));                   
console.log(capsOdds(["Apple", "Banana", "123", "456", "Peach", "Kiwi"])  );                 
console.log(capsOdds([ ]) );                  
console.log(capsOdds(["John !@#$%", "^&*() Doe"]));      
