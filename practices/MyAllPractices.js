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