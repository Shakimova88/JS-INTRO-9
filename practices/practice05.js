/* Task 1

Assume you are given a number between 1 and 100 
(both 1 and 100 are included)
Find which quarter and half is number in
1st quarter is 1-25
2nd quarter is 26-50
3rd quarter is 51-75
4th quarter is 76-100
1st half is 1-50
2nd half is 51-100
*/


	let rNum = 75

	if (rNum <= 25) console.log(`${rNum} is in the 1st quarter`);
	else if (rNum <= 50) console.log(`${rNum} is in the 2nd quarter`);
	else if (rNum <= 75) console.log(`${rNum} is in the 3rd quarter`);
	else console.log(`${rNum} is in the 4th quarter`);

	rNum <=50 ? console.log(`${rNum} is in the 1st half`) : console.log(`${rNum} is in the 2nd half`);


	let rNum = Math.floor(Math.random() * 100) + 1;
function quarterHalf(num) {
    let quarter;
    let half;
if(num <= 25){
     quarter = 1;
     half = 1;
    }
else  if(num <= 50){
     quarter = 2;
     half = 1;
}
else  if(num <= 75){
     quarter = 3;
     half = 2;
}
else if( num <= 100);{
     quarter = 4;
     half = 2;
     }

     return `Number ${num} is in  Quarter ${quarter} and Half ${half}`
} 

console.log(quarterHalf(50))








/* Task 2

Assume you are given 3 numbers between 1 and 100 (both 1 and 100 are included).
Print true if they are all even numbers.
Otherwise, print false
*/


let randomNum1 = Math.floor(Math.random() * 100) + 1;
let randomNum2 = Math.floor(Math.random() * 100) + 1;
let randomNum3 = Math.floor(Math.random() * 100) + 1;

console.log(randomNum1 % 2 === 0 && randomNum2 % 2 === 0 && randomNum3 % 2 === 0);


/* Task 3

Assume you are given a single character.
Find if the given character is a letter, digit, whitespace or special.
*/


let char1 = '0';
let charAscii = char1.charCodeAt(0);

if(charAscii >= 65 && charAscii <= 90 || charAscii >= 97 && charAscii <= 122) {
    console.log(`"${char1}" is a letter`);

} else if(charAscii >= 48 && charAscii <= 57) {
    console.log(`"${char1}" is a digit`);

} else if (char1 === 32) {
    console.log(`"${char1}" is a whitespace`);

} else console.log(`"${char1}" is a special character`);



/* Task 4

Write a function named hasBlue() which takes a string argument 
and returns true if the string has an occurrence of blue word, 
returns false otherwise.
NOTE: Ignore upper/lower cases.
*/


function hasBlue(str1) {
    return str1.includes('blue');
}
 
console.log(hasBlue('jacketble'));



/* Task 5

Write a function named startT() which takes a string argument 
and returns true if the string start with letter T, returns false 
otherwise.
NOTE: Ignore upper/lower cases.
Examples:
startT("Hello World")    -> false
startT("typescript")    -> true
startT("TechGlobal")    -> true
startT("1234")          -> false
*/




function starT(str) {
    return str.toLowerCase().startsWith("t");
  }
  console.log(starT("thomas"));














function longer(str, str1) {
    return str.length >= str1.length ? str : str1;
}

console.log(longer('Za', 'za'));




let rN = Math.floor(Math.random() * 11) - 5;
console.log(rN < 0);

let rN1 = 22;

console.log(rN1 % 7 !== 0);

let rN1 = 3
let rN2 = 5
let rN3 = 2

let max = Math.max(rN1, rN2, rN3);
let min = Math.min(rN1, rN2, rN3);
console.log(Math.abs(max - min));


Find the quarter of a random number between 1 and 100.
Write a program that generates a random number between 1 and 100 (both inclusive). Find which quarter of the range the number falls into and print it.
1st quarter is 1-25
2nd quarter is 26-50
3rd quarter is 51-75 
4th quarter is 76-10




let rN5 = Math.floor(Math.random() * 10) +1;

if (rN5 >= 1 && rN5 <= 25) {
  console.log(`1st quater is ${rN5}`) ;
} else if (rN5 >= 1 && rN5 <= 25) {
    console.log(`2nd quater is ${rN5}`)
} else if (rN5 <= 51 && rN5 <= 75) {
    console.log(`3rd quater is ${rN5}`)
} else {
    console.log(`4th quater is ${rN5}`)
}

    console.log(rN5);


    randomNum = 51
randomNum >= 1 && randomNum <= 50 ? console.log(` 1st half is ${randomNum}`): console.log(` 2nd half is ${randomNum}`);



let randNum1 = 3;
let randNum2 = 7;
let sum = randNum1 * randNum2;

console.log(sum % 2 !== 0);


function rectangleArea(x, y) {
    let area = x * y;
    return area;
}

console.log(rectangleArea(5, 4));



function  rectanglePerimeter(x, y) {
    let perimeter = 2 * (x + y);
    return perimeter;
}
console.log(rectanglePerimeter(5, 4));



function squareArea(x) {
    let area = x * x;
    return area;
}

console.log(squareArea(5));


function squarePerimeter(x) {
    let perimeter = 4 * x;
    return perimeter;
}

console.log(squarePerimeter(5));



function doubleWord(str) {
    console.log(str.repeat(2));
}

doubleWord('zarina');


function firstCharacter(str) {
    console.log(str.at(0));
}

console.log(firstCharacter('Zarina'));


function firstTwoCharacters(str) {
    if(str.length < 2) {
        console.log(str)
    } else {
        console.log(str.slice(0, 2));
    }
}

firstTwoCharacters('1');


function  lastCharacter(str) {
    console.log(str.at(-1));
}

lastCharacter('123');



function lastTwoCharacters(str) {
    if(str < 2) {
        console.log(str)
    } else {
        console.log(str.at(-2) + str.at(-1));
    }
}

lastTwoCharacters(' ');



function firstLast(str) {
    if( str < 2 ) {
        console.log(str);
    } else {
        console.log(str.at(0) + str.at(-1));
    }
}

firstLast(' ');


Write a function named as hasFive() which takes a string word as an argument and returns true if given string has at least 5 characters, and false otherwise when invoke

function hasFive(str) {
    console.log(str.length >= 5);
}

hasFive('Global');


function middle(str) {
    if(str.length === 0) {
        console.log(' ');
    } else if (str.length % 2 === 0) {
        console.log(str.slice(str.length / 2 -1, str.length /2 + 1));
    } else {
        console.log(str[Math.floor(str.length / 2)]);
    }
}

middle('Banana');
longer("Tech", "Global") longer("Hello", "Hi") longer("Hello", "World")
Shorter String
-> "Global" -> "Hello" -> "Hello

function longer(str1, str2) {
    if (str1.length >= str2.length) {
        console.log(str1);
    } else {
        console.log(str2);
    }
}

longer('Tech','Global');
longer('Hello', 'Hi');
longer('Hello', 'Hello');

Write a function named as concat() which takes two string words as arguments and returns the words concatenated when invoked.
NOTE: Concatenation should always be as first string + second string .
Examples: concat("Tech", "Global") concat("Hello", "World") concat("", "abc") concat("123", "1234")
-> "TechGlobal" -> "HelloWorld" -> "abc"


function concat(str, str1) {
    console.log('"' + str.concat(str1) + '"');
}

concat('Tech', 'Global');



function startsVowel(word) {
  


function doubleTripleWord(str) {
    if(str.length % 2 === 0) {
        console.log(str.repeat(3));
    
    } else {
        console.log(str.repeat(2));
    }
}

doubleTripleWord('Zarin');

function firstWord(str) {
    str = str.trim().split(' ');
    return str[str.length - 1];
}

console.log(firstWord('       '));


function firstWord(str) {
    str = str.trim().split(' ');
    return str[0];
}


console.log(firstWord('who cares about you'));

function startsVowel(str) {
    let toLowerChar = str.toLowerCase();
    return  str.startsWith('A') || str.startsWith('E') || str.startsWith('O') 
    || str.startsWith('U') ||str.startsWith('I');
}
console.log(startsVowel('Who like you'));




function startVowel(str) {
    
    return 'AOUIEaouie'.includes(str[0]);
}
console.log(startVowel('arina'));

Write a function named as lastWord() which takes a
string word as an argument and returns the last word
from the given string when invoked.
NOTE: Return empty string if the given string does not
have any word.
Examples:
lastWord("Hello World")  -> "World"
lastWord("I like JavaScript")  -> "JavaScript”
lastWord("Hello")  -> "Hello"
lastWord("")  -> ""
lastWord("    ")  -> ""


function lastWord(str) {
    str = str.trim();
    return str.slice(0, str.indexOf(' '));
}

console.log(lastWord('Who cares'));
/*Task - Has Five
Write a function named as hasFive() which takes a string word as an argument and returns true if given
string has at least 5 characters, and false otherwise when invoked.

*/


function hasFive(str) {
 str.length >= 5 ? true : false;

}

hasFive('Marta');


let randomNumber = Math.floor(Math.random() * 10 + 1);
let isEven = randomNumber % 2 === 0;

console.log(isEven);

function startVowel(str) {
    str.trim().toLowerCase();
    return 'AUOEIauoei'.includes(str[0]);
}

console.log(startVowel('Irina'));


function concat(str,str1) {
    return str.concat(str1);
}
 console.log(concat('Zarina', 'Rodriguez'));


 function lastChar(str) {
    return str.at(-1);
 }
 console.log(lastChar('Zarin'));


 function firstTwoChar(str) {
    if(str.length < 2) return str;
     else return str.slice(0, 2);
    
 }
 console.log(firstTwoChar('Z'));


 function squareArea(x) {
    let area = x * x;
    return area;
 } 

 console.log(squareArea(5));

 
 function squarePerimeter(x) {
     let areaPerimeter = 4 * x;
     return areaPerimeter;
 }

 console.log(squarePerimeter(3));

 function doubleWord(str) {
    return str.repeat(2);
 }
 console.log(doubleWord('I love Dio'));

 function lastTwoChar(str) {
    if(str.length < 2) {
        return str;
    } else {
        return str.slice(- 2);
    }
 }
 console.log(lastTwoChar('Zarina'));



 function rectanglePerim(x, y) {
    let perim = 2 * (x + y);
    return perim;
 }

 console.log(rectanglePerim(4, 5));


let rN = 6;
 console.log(rN % 2 === 0);

 let rNum1 = Math.floor(Math.random() * 10) +1;
 let rNum2 = Math.floor(Math.random() * 10) +1;
 let product = (rNum1 * rNum2) % 2 !== 0;
 

 console.log(product);


 let rN = Math.floor(Math.random() * 100) +1;
 rN >= 1 && rN <= 50 ? console.log('1st half') : console.log('2nd half');


 console.log(rN);


 let rN = Math.floor(Math.random() * 100) +1;
if(rN <= 25) console.log('1st quater') 
else if(rN <= 50 ) console.log('2nd quater')
else if(rN <=70) console.log('3rd quater') 
else    console.log('4th quater')

let rNum1 = Math.floor(Math.random() * 10) +1;
let rNum2 = Math.floor(Math.random() * 10) +1;
let rNum3 = Math.floor(Math.random() * 10) +1

let max = Math.max(rNum1, rNum2, rNum3);
let min = Math.min(rNum1, rNum2, rNum3);

console.log(max - min);

let rNum1 = 5
let rNum2 = 10
let rNum3 = 100

console.log((rNum1 + rNum2 + rNum3) / 3);


function vowel(str) {

    str = str.trim().toLowerCase();
    return 'AEIOUaeiou'.includes(str[0]);
}
 
console.log(vowel('arina'));

let rN = Math.floor(Math.random() * 100) + 1;
console.log(rN >= 16);

let rNum = 4
let rNum1 = 4

console.log(rNum === rNum1);

let rNum1 = 5;
console.log(rNum1 ** 3);

let rNum2 = 70;

console.log( rNum2 % 10 !== 0);


let rNum = 5
console.log(rNum < 0);


let rNum = 5;
let rNum1 = 2;

let product = rNum * rNum1;
console.log(product % 2 !== 0);


let rNum = 76;
if(rNum <= 100) console.log('1st quarter');
else if (rNum <= 200) console.log('2nd qarter');
else if (rNum <= 300) console.log('3rd quarter');
else console.log('4th quarter');

let rNum = 76;
switch (rNum) {
case: rNum <= 50 
 console.log('1st half')
 break;
  console.log('2nd half');

}

let rNum = 0

if(rNum < 0) {
    console.log('Negative')

} else {
    console.log( rNum % 7 === 0);
}


console.log(7 / 0);

function shorter(str, str1) {
    
    if(str.length >= str1.length){
    return str1
} else {
    return  str
}
}
console.log(shorter('Tech', 'Global'));

function longer(str, str2) {
   if(str.length >= str2.length) {
    return str;
   } else {
    return str2;
   }
}

console.log(longer('Hello', 'World'));


function has5(str) {
    if(str.length >= 5) {
    console.log('True');
    } else {
        console.log('False');
    }
}

has5('rina');


function has5(str) {
    return str.length >= 5;
}

console.log(has5('ina'))








let name = ['Zarina', 'Dio', 'Mark', 'John'];
console.log(name.splice(0, 0,));