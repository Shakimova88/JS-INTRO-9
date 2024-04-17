// const doubleOrTripleWord = (str) => str.length % 2 === 0 ? str.repeat(3) : str.repeat(2)
// console.log(doubleOrTripleWord('Tech'));
// console.log(doubleOrTripleWord('Zarin'));

// const firstLastWord = (str) => {
//     str = str.trim().split(' ');
//     if(str.length < 0) return '';
//     return str[0] + str.at(-1)
// }
// console.log(firstLastWord('Hello World'))
// console.log(firstLastWord('i like JavaScript'));
// console.log(firstLastWord('Hello'))
// console.log(firstLastWord(''))
// console.log(firstLastWord("      "))


// const hasVowel = (str) => str.split('').some(x => 'aeiou'.includes(x.toLowerCase()));
// console.log(hasVowel(''))
// console.log(hasVowel('JavaSript'))
// console.log(hasVowel('Tech Global'))
// console.log(hasVowel('1234'))
// console.log(hasVowel('ABC'))


// const startVowel = (str) => 'aeiouAEIOU'.includes(str.trim()[0])
// console.log(startVowel('Hello'))
// console.log(startVowel('  ello'))


// const averageOfEdges = (num, num2, num3) => {
//     let min = Math.min(num, num2, num3);
//     let max = Math.max(num, num2, num3);
//     return (max + min) / 2;
// }

// console.log(averageOfEdges(0, 0, 6))
// console.log(averageOfEdges(10, 13, 20))

// const replaceFirstLast = (str) => {
//     str = str.trim()
//     if(str.trim().length < 2) return '';
//     return str.at(-1) + str.slice(1, -1) + str[0]
// }
// console.log(replaceFirstLast('Tech Global'));
// console.log(replaceFirstLast('    Hello'));


// const swap4 = (str) => {
//     str = str.trim();
//     if(str.length < 8) return ''
//     return str.slice(-4) + str.slice(4, -4) + str.slice(0, 4)
// }
// console.log(swap4("abc"))
// console.log(swap4("JavaScript"))
// console.log(swap4("TechGlobal"))
// console.log(swap4(""))
// console.log(swap4("aaaadhdhdhbbbb"))
// console.log(swap4("Apple") )  


// const swapFirstLastWord = (str) => {
//     str = str.trim().split(' ');
//     if(str.length < 2) return '';
//     return `${str.pop()} ${str.slice(1).join(' ')} ${str.shift()}`
    
// }
// console.log(swapFirstLastWord("Hello World"))
// console.log(swapFirstLastWord("I like JavaScript"))
// console.log(swapFirstLastWord("foo bar foo bar"))
// console.log(swapFirstLastWord(""))
// console.log(swapFirstLastWord("  "))
// console.log(swapFirstLastWord("Hello"))
// console.log(swapFirstLastWord("Hello   "))  


// const countPos = (arr) => arr.filter(el => el > 0).length
// console.log(countPos([-45, 0, 0, 34, 5, 67]))
// console.log(countPos([-23, -4, 0, 2, 5, 90, 123]))
// console.log(countPos([0, -1, -2, -3]))


// const getEvens = (num, num2) => {
//     let result = [];
//     let min = Math.min(num, num2);
//     let max= Math.max(num, num2);
//     for(let i = min; i <= max; i++) {
//         if(i % 2 === 0) result.push(i);
//   }
//   return result;
// }
// console.log(getEvens(2, 7))
// console.log(getEvens(17, 5))
// console.log(getEvens(4, 4))
// console.log(getEvens(3, 3))


// const getMultipleOf5 = (num, num2) => {
//     let min = Math.min(num, num2);
//     let max = Math.max(num, num2);
//     let result = [];
//     for(let i = min; i <= max; i++) {
//         if(i % 5 === 0) result.push(i);
//     }
//     return num > num2 ? result.reverse() : result
// }
// console.log(getMultipleOf5(3, 17))
// console.log(getMultipleOf5(23, 5))
// console.log(getMultipleOf5(5, 5))
// console.log(getMultipleOf5(2, 4))

// const countNeg = (arr) => arr.filter(el => el < 0).length
// console.log(countNeg([-45, 0, 0, 34, 5, 67]))
// console.log(countNeg([-23, -4, 0, 2, 5, 90, 123]))
// console.log(countNeg([0, -1, -2, -3]))


// const countA = (str) => str.toUpperCase().split('').filter(el => el === 'A').length
// console.log(countA("TechGlobal is a QA bootcamp"))
// console.log(countA("QA stands for Quality Assurance"))
// console.log(countA("Cypress"))


// const countWords = (str) => str.trim().split(' ').length
// console.log(countWords("     Javascript is fun       "))
// console.log(countWords("Cypress is an UI automation tool.    ")) 
// console.log(countWords("1 2 3 4")) 


// const factorial = (num) => {
//     let result = 1;
//     for(let i = 2; i <= num; i++) {
//         result *= i;
//     }
//     return result;
// }
// console.log(factorial(5))
// console.log(factorial(4))
// console.log(factorial(0))
// console.log(factorial(1))


// const count3OrLess = (str) => str.trim().split(' ').filter(el => el.length <= 3 && el !== '').length
// console.log(count3OrLess("Hello"))
// console.log(count3OrLess("Hi John"))
// console.log(count3OrLess("JavaScript is fun"))
// console.log(count3OrLess("My name is John Doe"))
// console.log(count3OrLess(""))


// const removeExtraSpaces = (str) => str.trim().split(' ').filter(el => el.length > 1).join(' ')
// console.log(removeExtraSpaces("     JavaScript is          fun"));
// console.log(removeExtraSpaces("      Hello    World     "));
// console.log(removeExtraSpaces(""))
// console.log(removeExtraSpaces("Hello"))

// const middleInt = (num, num2, num3) => {
//     let newArr = [num, num2, num3].sort((a, b) => a - b);
//     return newArr[1]
    
//  }
//  console.log(middleInt(1, 2, 2))
// console.log(middleInt(5, 5, 8))
// console.log(middleInt(5, 3, 5))
// console.log(middleInt(1, 1, 1))
// console.log(middleInt(-1, 25, 10))


// const firstDuplicate = (arr) => {
//  for(let el of arr) {
//     if(arr.indexOf(el) !== arr.lastIndexOf(el)) return el
//  }
//   return -1
// }
// console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10 ]))
// console.log(firstDuplicate([ 5, 7, 7, 0, 5, 10 ]))
// console.log(firstDuplicate([ 5, '5', 3, 7, 4 ]))
// console.log(firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]))
// console.log(firstDuplicate([ 1, 2, 3]))
// console.log(firstDuplicate([ 'foo', 'abc', '123', 'bar' ]))


// const getDuplicates = (arr) => {
//     let allDup = [];
//     for(let el of arr) {
//         if(arr.indexOf(el) !== arr.lastIndexOf(el) && !allDup.includes(el)) allDup.push(el)

//     }
//     return allDup;
// }
// console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]))
// console.log(getDuplicates([ 1, 2, 5, 0, 7 ]))
// console.log(getDuplicates(['A', 'foo', '12', 12, 'bar', 'a', 'a', 'foo' ]))
// console.log(getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]))


// const countVowels = (str) => str.trim().split('').filter(el => 'aeiouAEIOU'.includes(el)).length
// console.log(countVowels("")) 
// console.log(countVowels("JavaScript is fun"))
// console.log(countVowels("Hello"))


// const reverseStringWords = (str) => str.trim().split(' ').map(el => el.split('').reverse().join('')).join(' ')
// console.log(reverseStringWords("Hello World"))
// console.log(reverseStringWords("I like JavaScript"))
// console.log(reverseStringWords("Hello")) 
// console.log(reverseStringWords(""))
// console.log(reverseStringWords(" "))


// const countConsonants = (str) => str.split('').filter(el => !'aeiouAEIOU'.includes(el)).length
// console.log(countConsonants("Hello"))
// console.log(countConsonants("Hello World"))
// console.log(countConsonants("JavaScript is fun"))
// console.log(countConsonants(""))


// const countMultipleWords = (arr) => arr.filter(el => el.trim().includes(' ') ).length
// console.log(countMultipleWords([ "foo", "", "  ", "foo bar", "   foo" ]))
// console.log(countMultipleWords([ "foo", "bar", "foobar", "   foobar   " ]))
// console.log(countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]))
// console.log(countMultipleWords([ ])) 



// const fizzBuzz = (num, num2) => {
//     let result = [];
//     let min = Math.min(num, num2);
//     let max = Math.max(num, num2);
//     for(let i = min; i <= max; i++) {
//         if(i % 3 === 0) result.push('Fizz');
//        else if(i % 5 === 0) result.push('Buzz');
//        else if(i % 3 === 0 && i % 5 === 0) result.push('FizzBuzz');
//         else result.push(i);
//     }
//     return result.join(' | ');
// }
// console.log(fizzBuzz(13, 18)) 
// console.log(fizzBuzz(12, 5))
// console.log(fizzBuzz(5, 5))
// console.log(fizzBuzz(9, 6))


// const isPalindrome = (str) => str.toLowerCase().split('').reverse().join('') === str.toLowerCase();
// console.log(isPalindrome("Hello"))
// console.log(isPalindrome("Kayak"))
// console.log(isPalindrome("civic"))
// console.log(isPalindrome("abba"))
// console.log(isPalindrome("ab  a"))
// console.log(isPalindrome("123454321"))
// console.log(isPalindrome("A"))
// console.log(isPalindrome(""))


// const isPrime = (num) => {
//     if(num <= 1) return false;
//     if(num % 2 === 0) return num === 2;
//     for(let i = 3; i * i <= num; i++) {
//         if(num % i === 0) return false;
//     }
//     return true;
// }
// console.log(isPrime(5))
// console.log(isPrime(2)) 
// console.log(isPrime(29))
// console.log(isPrime(-5))
// console.log(isPrime(0))
// console.log(isPrime(1))


// const add = (arr, arr2) => {
//     if(arr2.length > arr.length) [arr, arr2] = [arr2, arr];
//     return arr.map((num, ind) => num + (arr2[ind] || 0))
// }
// console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]))
// console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]))
// console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]))



// const noA = (arr) => arr.map(el => el[0].toUpperCase() === 'A' ? '###' : el);
// console.log(noA(["javascript", "hello", "123", "xyz"]))
// console.log(noA(["apple", "123", "ABC", "javascript"]))
// console.log(noA(["apple", "abc", "ABC", "Alex", "A"])) 


// const  no3and5 = (arr) => {
//     let result = [];
//     for(let el of arr) {
//      if(el % 3 === 0 && el % 5 === 0) result.push(101);
//         else if(el % 5 === 0) result.push(99);
//        else if(el % 3 === 0) result.push(100);
//         else result.push(el)
//     }
//    return result;
// }

// console.log(no3and5([7, 4, 11, 23, 17]));
// console.log(no3and5([3, 4, 5, 6]));
// console.log(no3and5([10, 11, 12, 13, 14, 15]));


// const no13 = (arr) => arr.map(el => el === 13 ? 0 : el);
// console.log(no13([1, 2, 3 ,4]))
// console.log(no13([13, 2, 3]))
// console.log(no13([13, 13, 13 , 13, 13]))
// console.log(no13([]))


// const removeDuplicates = (arr) => arr.filter((el, ind) => arr.indexOf(el) === ind)
// console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]))
// console.log(removeDuplicates([1, 2, 5, 2, 3]));
// console.log(removeDuplicates([0, -1, -2, -2, -1]));
// console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]));
// console.log(removeDuplicates(["1", "2", "3", "2", "3"]));


// const noDigit = (str) => str.split('').filter(el => el < '0' || el > '9').join('')
// console.log(noDigit(""))
// console.log(noDigit("Javascript"))
// console.log(noDigit("123Hello"))
// console.log(noDigit("123Hello World149"))
// console.log(noDigit("123Tech456Global149"))


// const noVowel = (str) => str.split('').filter(el => !'aeiouAEIOU'.includes(el)).join('')
// console.log(noVowel("TechGlobal"))
// console.log(noVowel("AEOxyz"))
// console.log(noVowel("Javascript"))
// console.log(noVowel(""))
// console.log(noVowel("125$"))
// console.log(noVowel("ZarinA"))


// const sumOfDigits = (str) => str.split('').reduce((acc, el) => el >= '0' && el <= '9' ? acc +  Number(el): acc, 0)
// console.log(sumOfDigits("Javascript"));  
// console.log(sumOfDigits("John’s age is 29")); 
// console.log(sumOfDigits("$125.0"));            
// console.log(sumOfDigits(""))


// const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
// const arrFactorial = (arr) => arr.map(factorial)
// console.log(arrFactorial([1, 2, 3 ,4]))
// console.log(arrFactorial([0, 5]))
// console.log(arrFactorial([5 , 0, 6]))
// console.log(arrFactorial([]))


const factorial = (n) => n <= 1 ? 1 : n * factorial(n - 1);

const arrFactorial = (arr) => arr.map(factorial);


console.log(arrFactorial([1, 2, 3 ,4]))
 console.log(arrFactorial([0, 5]))
 console.log(arrFactorial([5 , 0, 6]))
console.log(arrFactorial([]))


const sumOfDigits = (str) => str.split('').filter(el => el >= '0' && el <='9').reduce((acc, el) => acc + Number(el),  0);
console.log(sumOfDigits("Javascript"));  
console.log(sumOfDigits("John’s age is 29")); 
 console.log(sumOfDigits("$125.0"));            
 console.log(sumOfDigits(""))

const noVowel = (str) => str.split('').filter(el => !'aeiouAEIOU'.includes(el)).join('');
console.log(noVowel("TechGlobal"))
 console.log(noVowel("AEOxyz"))
 console.log(noVowel("AEOxyz"))
console.log(noVowel("Javascript"))
 console.log(noVowel(""))
 console.log(noVowel("125$"))
 console.log(noVowel("ZarinA"))
 console.log(noVowel("AEOxyz"))


 const noDigit = (str) => str.split('').filter(el => !(el >= '0' && el <= '9')).join('')
 console.log(noDigit(""))
 console.log(noDigit("Javascript"))
console.log(noDigit("123Hello"))
 console.log(noDigit("123Hello World149"))
 console.log(noDigit("123Tech456Global149"))


 const removeDuplicates = (arr) => arr.filter((el, ind) => arr.indexOf(el) === ind);
console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]))
console.log(removeDuplicates([1, 2, 5, 2, 3]));
console.log(removeDuplicates([0, -1, -2, -2, -1]));
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]));
console.log(removeDuplicates(["1", "2", "3", "2", "3"]));


const no13 = (arr) => arr.map(el => el === 13 ? 0 : el);
console.log(no13([1, 2, 3 ,4]))
console.log(no13([13, 2, 3]))
console.log(no13([13, 13, 13 , 13, 13]))
console.log(no13([]))


const noA = (arr) => arr.map(el => el[0].toUpperCase() === "A" ? '###' : el)
console.log(noA(["javascript", "hello", "123", "xyz"]))
console.log(noA(["apple", "123", "ABC", "javascript"]))
console.log(noA(["apple", "abc", "ABC", "Alex", "A"])) 


const add = (arr, arr2) => {
    if(arr2.length > arr.length) [arr, arr2] = [arr2, arr];
    return arr.map((value, i ) => value + arr2[i] || 0);
}
console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]))
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]))
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]))


const isPrime = (num) => {
    if(num <= 1) return false ;
    if(num % 2 === 0) return num === 2;
    for(let i = 3; i * i <= num; i++) {
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

const isPalindrome = (str) => str.toLowerCase() === str.toLowerCase().split('').reverse().join('')

console.log(isPalindrome("Hello"))
console.log(isPalindrome("Kayak"))
console.log(isPalindrome("civic"))
console.log(isPalindrome("abba"))
console.log(isPalindrome("ab  a"))
console.log(isPalindrome("123454321"))
console.log(isPalindrome("A"))
console.log(isPalindrome(""))


const fizzBuzz = (num, num2) => {
    let result = [];
    let min = Math.min(num, num2);
    let max = Math.max(num, num2);
    for(let i = min; i <= max; i++) {
        if(i % 3 === 0 && i % 5 === 0) result.push('FizzBuzz');
        else if(i % 3 === 0) result.push('Fizz');
        else if( i % 5 === 0) result.push('Buzz');
        else  result.push(i);
    }
    return result.join(' | ') 
}

console.log(fizzBuzz(13, 18)) 
console.log(fizzBuzz(12, 5))
console.log(fizzBuzz(5, 5))
console.log(fizzBuzz(9, 6))

const countMultipleWords = (arr) => arr.filter(el => el.trim().includes(' ')).length
console.log(countMultipleWords([ "foo", "", "  ", "foo bar", "   foo" ]))
console.log(countMultipleWords([ "foo", "bar", "foobar", "   foobar   " ]))
console.log(countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]))
console.log(countMultipleWords([ ]))  


const countConsonants = (str) => str.split('').filter(el => !'aeiouAEIOU'.includes(el)).length
console.log(countConsonants("Hello"))
console.log(countConsonants("Hello World"))
console.log(countConsonants("JavaScript is fun"))
console.log(countConsonants(""))


const reverseStringWords = (str) => str.trim().split(' ').map(el => el.split('').reverse().join('')).join(' ')

console.log(reverseStringWords("Hello World"))
console.log(reverseStringWords("I like JavaScript"))
console.log(reverseStringWords("Hello")) 
console.log(reverseStringWords(""))
console.log(reverseStringWords(" "))


const countVowels = (str) => str.split('').filter(el => 'aeiouAEIOU'.includes(el)).length
console.log(countVowels("Hello"))
console.log(countVowels("JavaScript is fun"))
console.log(countVowels("")) 


const firstDuplicate = (arr) => {
   for(let el of arr) {
    if(arr.indexOf(el) !== arr.lastIndexOf(el)) return el;
   }
   return -1
}
console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10 ]))
console.log(firstDuplicate([ 5, 7, 7, 0, 5, 10 ]))
console.log(firstDuplicate([ 5, '5', 3, 7, 4 ]))
console.log(firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]))
console.log(firstDuplicate([ 1, 2, 3]))
console.log(firstDuplicate([ 'foo', 'abc', '123', 'bar' ]))