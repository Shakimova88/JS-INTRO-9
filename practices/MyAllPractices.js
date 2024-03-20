const swapFirstLastWords = (str) => {
    str = str.trim().split(' ');
    return str.length > 1 ? `${str.pop()} ${str.slice(1).join(' ')} ${str.shift()}` : '';
}
console.log(swapFirstLastWords("I like JavaScript"))


const swap4 = (word) =>{
    let first4 = word.slice(0, 4);
    let mid = word.slice(4, -4);
    let last4 = word.slice(-4);
    return last4 + mid + first4;

}
console.log(swap4("JavaScript"))


const fizzBuzz = (num, num2) => {
    let min = Math.min(num, num2);
    let max = Math.max(num, num2);
    let result = [];
    for(let i = min; i <= max; i++) {
        if(i % 3 === 0 && i % 5 === 0) result.push('FizzBuzz');
        else if(i % 3 === 0) result.push('Fizz');
        else if(i % 5 === 0) result.push('Buzz');
        else result.push(i);
    }
return result.join(' | ');
}
console.log(fizzBuzz(13, 18)) 
console.log(fizzBuzz(12, 5))
console.log(fizzBuzz(5, 5))
console.log(fizzBuzz(9, 6))

const getMultipleOf5 = (num, num2) => {
    result = [];
    let min = Math.min(num, num2);
    let max = Math.max(num, num2);
    for(let i = min; i <= max; i++) {
        if(i % 5 === 0) result.push(i);
    }
    return num > num2 ? result.reverse() : result
}
console.log(getMultipleOf5(3, 17))
console.log(getMultipleOf5(23, 5))
console.log(getMultipleOf5(5, 5))
console.log(getMultipleOf5(2, 4))


const getEvens = (num, num2) => {
    let result = [];
    let min = Math.min(num, num2);
    let max = Math.max(num, num2);
    for(let i = min; i <= max; i++) {
        if(i % 2 === 0) result.push(i);
    }
        return  result;
}

console.log(getEvens(2, 7))
console.log(getEvens(17, 5))
console.log(getEvens(4, 4))
console.log(getEvens(3, 3))

const reverseString = (str) => {
    return str.trim().split(' ').map(word => word.split('').reverse().join('')).join(' ');
    

}

console.log(reverseString('Hello Word     '));



const firstDuplicate = (arr) => {
   
    for(const elem of arr) {
        if(arr.indexOf(elem) !== arr.lastIndexOf(elem))return elem;
        
    }
    return -1;
}
console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10 ]))
console.log(firstDuplicate([ 5, 7, 7, 0, 5, 10 ]))
console.log(firstDuplicate([ 5, '5', 3, 7, 4 ]))
console.log(firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]))
console.log(firstDuplicate([ 1, 2, 3]))
console.log(firstDuplicate([ 'foo', 'abc', '123', 'bar' ]))


const getDuplicates = (arr) => {
    let firstDup = [];
    for(const elem of arr) {
        if(arr.indexOf(elem) !== arr.lastIndexOf(elem) && !firstDup.includes(elem)) {
        firstDup.push(elem);
        }
    }
    return firstDup;
}
console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]))
console.log(getDuplicates([ 1, 2, 5, 0, 7 ]))
console.log(getDuplicates(['A', 'foo', '12', 12, 'bar', 'a', 'a', 'foo' ]))
console.log(getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]))


const countPos = (arr) => {
    return arr.reduce((acc, elem) => elem > 0 ? acc + 1 : acc, 0);
}
console.log(countPos([-45, 0, 0, 34, 5, 67]))
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]))
console.log(countPos([0, -1, -2, -3])) 


const countPos1 = (arr) => arr.filter(num => num > 0).length
console.log(countPos1([-45, 0, 0, 34, 5, 67]))
console.log(countPos1([-23, -4, 0, 2, 5, 90, 123]))
console.log(countPos1([0, -1, -2, -3])) 


const isPasswordValid = (passw) => {
    if(passw.length < 8 || passw.length > 16 || passw.includes(' ')) return false;
        let digit = false;
        let upperL = false;
        let lowerL = false;
        let specialChar = false;
     for(let char of passw) {
        if(char >= '0' && char <= '9') digit = true;
        else if(char >= 'A' && char <= 'Z') upperL = true;
        else if(char >= 'a' && char <= 'z') lowerL = true;
        else specialChar = true;
     }
     return (digit && upperL && lowerL && specialChar);
}
  
console.log(isPasswordValid(""))
console.log(isPasswordValid("abcd"))
console.log(isPasswordValid("abcd1234"))
console.log(isPasswordValid("Abcd1234"))
console.log(isPasswordValid("Chicago12345US!#$%"))
console.log(isPasswordValid("Abcd1234$"))
console.log(isPasswordValid("Chicago123$"))
console.log(isPasswordValid("Test1234#"))



const isEmailValid = (email) => {
    if(email.includes(' ') || email.split('@').length !== 2) return false;
    const start = email.split('@')[0];
    const mid = email.split('@')[1].split('.')[0];
    const end = email.split('@')[1].split('.')[1];
    if(start === undefined || mid === undefined || end === undefined) return false;
    return start.length >= 2 && mid.length >= 2 && end.length >= 2;

}
Examples:
console.log(isEmailValid(""))
console.log(isEmailValid("@gmail.com"))
console.log(isEmailValid("johndoe@yahoo"))
console.log(isEmailValid("johndoe@.com"))
console.log(isEmailValid("a@outlook.com"))
console.log(isEmailValid("johndoe@a.com"))
console.log(isEmailValid("johndoe@@gmail.com"))
console.log(isEmailValid("johndoe@gmail.com")) 
console.log(isEmailValid('zarinashakimova@gmail.com'))


const swapFirstLastWord = (str) => {
    str = str.trim().split(' ');
return  str.length > 1 ? `${str.pop()} ${str.slice(1).join(' ')} ${str.shift()}` : '';

}
console.log(swapFirstLastWord("Hello World"))
console.log(swapFirstLastWord("I like JavaScript"))
console.log(swapFirstLastWord("foo bar foo bar"))
console.log(swapFirstLastWord(""))
console.log(swapFirstLastWord("    "))
console.log(swapFirstLastWord("Hello"))
console.log(swapFirstLastWord("Hello   "))


const isPrime = (num) => {
    if(num < 2) return false;
    for(let i = 3; i * i <= num; i+= 2) {
        if(num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(5) )
console.log(isPrime(2) )
console.log(isPrime(29)) 
console.log(isPrime(-5))
console.log(isPrime(0))
console.log(isPrime(1))


let name = 'Zarina';
for(let i = 0; i < name.length ; i++){
    console.log(name[i])
}

let name = ['Z', 'a', 'r', 'i', 'n', 'a'];
console.log(name.join(''));


const getMultipleOf5 = (num, num2) => {
    let count = [];
    let min = Math.min(num, num2);
    let max = Math.max(num, num2);
    for(let i = min; i <= max; i++) {
        if(i % 5 === 0) count.push(i);
    }
    return num > num2 ? count.reverse(): count;
}
console.log(getMultipleOf5(3, 17))
console.log(getMultipleOf5(23, 5))
console.log(getMultipleOf5(5, 5))
console.log(getMultipleOf5(2, 4))


const reverseStringWords = (str) => {
    str = str.trim();
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}
console.log(reverseStringWords("Hello World"))
console.log(reverseStringWords("I like JavaScript"))
console.log(reverseStringWords("Hello"))
console.log(reverseStringWords(""))
console.log(reverseStringWords("    "))

const isEmailValid = (str) => {
    str = str.trim();
    if(str.includes(' ') || str.split('@').length !== 2) return false;
    let begin = str.split('@')[0];
    let mid = str.split('@')[1].split('.')[0];
    let end = str.split('@')[1].split('.')[1];
    if(begin === undefined || mid === undefined || end === undefined) return false;
    return (begin.length >= 2 && mid.length >= 2 && end.length >= 2);
    
}

console.log(isEmailValid(""))
console.log(isEmailValid("@gmail.com"))
console.log(isEmailValid("johndoe@yahoo"))
console.log(isEmailValid("johndoe@.com"))
console.log(isEmailValid("a@outlook.com"))
console.log(isEmailValid("johndoe@a.com"))
console.log(isEmailValid("johndoe@@gmail.com"))
console.log(isEmailValid("johndoe@gmail.com")) 
console.log(isEmailValid('zarinashakimova@gmail.com'))


const firstPos = (arr) => {
 for(let elem of arr) {
    if(elem > 0) return elem;
 }
}
console.log(firstPos([0, 3, -9,  5, 8]))
console.log(firstPos([-2, 0, -7, 10, -5]))
console.log(firstPos([1, 2, 3, -2]))


const lastNeg = (arr) => {
    for(let elem of arr.reverse()) {
        if(elem < 0) return elem;
    }
    return 
}
console.log(lastNeg([-2, 0, -7, 10, -5]))
console.log(lastNeg([0, 3, -9,  5, 8]))
console.log(lastNeg([1, 2, 3, -2])) 

