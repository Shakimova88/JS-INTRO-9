const doubleOrTripleWord = (str) => str.length % 2 === 0 ? str.repeat(3) : str.repeat(2);
console.log(doubleOrTripleWord('Tech'));
console.log(doubleOrTripleWord('Zarin'));


const firstLastWord = (str) => {
str = str.trim().split(' ');
return str[0] + str[str.length -1];
}
console.log(firstLastWord('i like JavaScript'));
console.log(firstLastWord('Hello'))
console.log(firstLastWord("      "))


const hasVowel = (str) => str.split('').some(el => 'aeiou'.includes(el.toLowerCase()));
console.log(hasVowel('a'))
console.log(hasVowel('bsd'))


const startVowel = (str) => 'AEIOUaeiou'.includes(str[0]);
console.log(startVowel('Ia'))


const averageOfEdges = (num, num2, num3) => {
    let min = Math.min(num, num2, num3);
    let max = Math.max(num, num2, num3);
    return ((max + min) / 2);
}
console.log(averageOfEdges(-2, -2, 10))


const replaceFirstLast = (str) => {
    if(str.trim().length < 2) return '';
    let firstChar = str[0];
    let midChar = str.slice(1, str.length -1);
    let endChar = str[str.length -1];
    return endChar + midChar + firstChar;
}
console.log(replaceFirstLast('Tech Global'));
console.log(replaceFirstLast('   A    '))
console.log(replaceFirstLast('A'))


const swap4 = (str) => {
  if(str.trim().length < 8) return '';
  return str.slice(-4) + str.slice(4, -4) + str.slice(0, 4);
}
console.log(swap4('JavaScript'));
console.log(swap4('TechGlobal'))
console.log(swap4('Apple'))


const swapFirstLastWord = (str) => {
    str = str.trim().split(' ');
    if(str.length < 2) return '';
    return `${str.pop()} ${str.slice(1).join(' ')} ${str.shift()}`;
}
console.log(swapFirstLastWord('I like JavaScript'))
console.log(swapFirstLastWord('foo bar foo bar'))
console.log(swapFirstLastWord('Hello'))

const countPos = (arr) => arr.filter(el => el > 0).length
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]))


const getEvens = (num, num2) => {
    let min = Math.min(num, num2);
    let max = Math.max(num, num2);
    let result = [];
    for(let i = min; i <= max; i++) {
        if(i % 2 === 0) result.push(i);
    }
    return result;
}
console.log(getEvens(17, 5));


const getMultipleOf5 = (num, num2) => {
    let min = Math.min(num, num2);
    let max = Math.max(num, num2);
    let result = [];
    for(let i = min; i <= max; i++) {
        if(i % 5 === 0) result.push(i);
    }
    return num > num2 ? result.reverse() : result;

}
console.log(getMultipleOf5(3, 17))
console.log(getMultipleOf5(23, 5))
console.log(getMultipleOf5(5, 5))
console.log(getMultipleOf5(2, 4))



const countNeg = (arr) => arr.filter(el => el < 0).length
console.log(countNeg([-45, 0, 0, 34, 5, 67]))
console.log(countNeg([-23, -4, 0, 2, 5, 90, 123]))
console.log(countNeg([0, -1, -2, -3]))


const countA = (str) => str.split('').filter(el => el.toLowerCase() === 'a').length
console.log(countA("TechGlobal is a QA bootcamp"))
console.log(countA("QA stands for Quality Assurance"))
console.log(countA("Cypress"))


const countWords = (str) => str.trim().split(' ').filter(el => !(el === '')).length 
console.log(countWords("     Javascript is fun       "))
console.log(countWords("Cypress is an UI automation tool.    ")) 
console.log(countWords("1 2 3 4")) 

// recursion way
//const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
//const factorialArr = arr.map(factorial())
const factorial = (num) => {
    let result = 1;
    for(let i = 2; i <=num; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5))
console.log(factorial(4))
console.log(factorial(0))
console.log(factorial(1))



const count3OrLess = (str) => str.trim().split(' ').filter(el => el.length <= 3 && el !== '').length
console.log(count3OrLess("Hello"))
console.log(count3OrLess("Hi John"))
console.log(count3OrLess("JavaScript is fun"))
console.log(count3OrLess("My name is John Doe"))
console.log(count3OrLess(""))


const removeExtraSpaces = (str) => str.trim().split(' ').filter(el => el !== '').join(' ')
console.log(removeExtraSpaces('Hello'))
console.log(removeExtraSpaces('     Hello World  '))
console.log(removeExtraSpaces('JavaScript is     fun'))
console.log(removeExtraSpaces(''))


const middleInt = (num, num2, num3) => {
    let numbers = [num, num2, num3].sort((x, y) => x -y);
    return numbers[1];

}