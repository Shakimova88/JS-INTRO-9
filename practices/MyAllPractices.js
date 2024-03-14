let randN = Math.floor(Math.random() * 50);
console.log(`The random number * 5 = ${randN}`);


let spChar = '$';
if('aeiouAEIOU'.includes(spChar)) {
    console.log(`It's vowel`)
} else {
    console.log(`INVALID INPUT`)
}

function tripleWord(str) {
    console.log(str.repeat(3));
}
tripleWord('Zarina')


function has4(str) {
    return str.length === 4 ? true : false
}
console.log(has4('Zaz'))


 let str = "I like apples and oranges" 
   console.log(str.split(' ')[2].toUpperCase()) 
   console.log(str.slice(6, 13).toUpperCase()) 
let str2 = "Java is not a scripting programming language" 
console.log(str2.slice(0, 4) + str2.slice(14, 21))

let str = "I don't like books" 
console.log(str.replace("don't",''))



function ifHasVowels(str) {

let vowels = 'aeiou';
for(let char of str) {


    if(vowels.includes(char.toLowerCase())) {
        return true;
    
    }  
       
    }
    return false;
}

console.log(ifHasVowels('JvScrpt'))


let s2 = 'Zarinaa';
console.log(s2[(s2.length - 1)/ 2] )


let str2 = 'abcd';
console.log(str2[(str2.length / 2) - 1] + str2[str2.length/ 2]);
console.log(str2.slice(str2.length/ 2 - 1, str2.length/2 + 1))

let s4 = "JavaScript";
console.log(s4.slice(2, s4.length -2))



let s4 = "JavaScript is nice to learn"
let first = s4.slice(0, s4.indexOf(' '));
let mid = s4.slice(s4.indexOf(' '), s4.lastIndexOf(' '));
let last = s4.slice(s4.lastIndexOf(' ') + 1);
console.log(last + mid + ' ' + first)
 
let s9 = "Good morning";
console.log(s9.split(' ').length);


function firstPos(arr) {
    for(const number of arr){
        if(number > 0) return number;
    }
}
console.log(firstPos([-2, 0, -7, 10, -5]))



function lastNeg(arr) {
    for(const num of arr.reverse()) {
        if(num < 0) return num
    }
}
console.log(lastNeg([-2, 0, -7, 10, -5]))


function firstLongest(arr) {
    let longest = '';
    for(const str of arr) {
        if(str.length > longest.length) longest = str;
    }
    return longest;

}
console.log(firstLongest(["red","Banana", "blue", "yellow", "white"])); 


function lastShortest(arr) {
    let shortest = arr[0];
    for(const str of arr) {
        if(str.length <= shortest.length)shortest = str
    }
    return shortest ;
}
console.log(lastShortest(["white", "yellow", "brown",]))

function reverseString(str) {
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');

}
console.log(reverseString('Java Script'));

function getEvens(num, num2) {
    let evenN = [];
    let min = Math.min(num, num2);
    let max = Math.max(num, num2);
    for(let i = min; i <= max; i++) {
        if(i % 2 === 0) evenN.push(i);
    }   
    return evenN;

}

console.log(getEvens(17, 5));




function getMultipleOf5(num, num2) {
    let divisibleBy5 = [];
    let min = Math.min(num, num2);
    let max = Math.max(num, num2);
    for(let i = min; i <= max; i++) {
        if(i % 5 === 0) divisibleBy5.push(i);
    }
    return divisibleBy5;
}

console.log(getMultipleOf5(20, 5))


function fizzBuzz(start, end) {
    let result = [];
    for(let i = start; i <= end; i++ ) {
        if(i % 15 === 0) {
            result.push('FizzBuzz');
        } else if(i % 3 === 0) {
            result.push('Fizz');
        } else if(i % 5 === 0) {
        result.push('Buzz');
    } else {
        result.push(i);
    }
    }
return result.join(' | ');

}
console.log(fizzBuzz(1, 15));


function countPos(arr) {
    let countPos = 0;
    for(let i = 0; i <= arr.length; i++) {
        if(arr[i] > 0) {
            countPos++;
        }
    }
    return countPos;
}
console.log(countPos([-45, 0, 0, 34, 5, 67, 5]))


function countA(str) {

    let charA = 0;
    for(let word of str) {
        if((word.toUpperCase().includes('A'))) {
             charA++;
    }
}
return charA;
}
console.log(countA("QA stands for Quality Assurance") );


function countVowels(str) {
    let countV = 0;
    let vowels = 'aeiou';
    for(let char of str) {
        if(vowels.includes(char.toLowerCase())) {
            countV++;
        }
    }
    return countV;
}
console.log(countVowels("JavaScript is fun") )


function countWords(str) {
    str = str.trim().split(' ');
    let countW = 0;
    for(let words of str) {
        if(words !== ' ') {
            countW++;
        }
    }
    return countW;
}
console.log(countWords("     Javascript is fun       "))


function countMultipleWords(arr) {
    let elemCount = 0;
    for(let elem of arr) {
        if(elem.trim().includes(' ')) {
            elemCount++;
        }
    }
    return elemCount;
}
console.log(countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ]) )


function count3OrLess(str) {
    str = str.split(' ')
    let count3 = 0;
    for(let word of str) {
        if(word.length <= 3) {
            count3++;
        }
    }
    return count3;
}
console.log(count3OrLess('Hi John you are good men'));


function isPrime(num) {
    return num % num && num % 1 ? true : false
}
console.log(isPrime(5))


function removeExtraSpaces(str) {
    return str.trim().split(' ').filter(word => word !== '').join(' ');
}
console.log(removeExtraSpaces("     JavaScript is          fun"));