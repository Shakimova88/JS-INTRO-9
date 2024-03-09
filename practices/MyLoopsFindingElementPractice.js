// Finding Sum and Average of array numbers;

const numbers = [3, 4, 5, 7, 8, 10];
let sum = 0;
for(let number of numbers) {
    sum += number; 

}
 console.log(`Sum is = `, sum);
 console.log(`Average is = `,Math.floor(sum/numbers.length));

// Finding Product of all the numbers starting from index 4;

let numbers1 = [29, 20, 3, 5, 23, 13, 1, 7];
let product = 1;
for(let i = 4; i < numbers1.length; i++) {
    product *= numbers1[i];
}
console.log(product);

// Find the sum of first 3 and last 3 elements;

const nums = [ 1, 5, 7, 2, 3, 4, 9, 4, 5, 2, 1, 0, 10, 3, 5 ];
let sumResult = 0;
for(let i = 0; i <= 2; i++) {
    sumResult += nums[i] + nums.at(-i - 1);
}
console.log(`The sum of first 3 and last 3 elements is =`, sumResult);

// Count how many positive numbers we have in array;

const numbers2 = [-7, 2, 0, 2, 0, 5, 5, 10, 100, 0];

let positiveNum = 0;
for(let num of numbers2) {
    if(num > 0) positiveNum++;
}

console.log(positiveNum);

// Count how many negative or neutral numbers in array;

const numbers3 = [3, -2, 0, 0, 20, 13, -4, 0, -25];
let countNandNeutral = 0;

for(let num of numbers3) {
    if(!(num > 0)) countNandNeutral++;
}

console.log( countNandNeutral );


// Count how many even numbers in Array;

const numbers4 = [2, 3, 4, 5, 6, 9, 12, 20, 34, 14];
let even = 0;
for(num of numbers4) {
    if(num % 2 === 0) even++;
}
console.log(even);

// Count how many numbers Even but Not Negative in array;

const numbers5 = [2, 0, 14, 16, 50, -4, 0, 1, 12];
let countEbutNN = 0;
for(i of numbers5) {
    if(i % 2 === 0 && i >= 0) countEbutNN++;
}
console.log(countEbutNN);



/// //////// ////////


function findLongestWord(arr) {
    let longest = arr[0];
    for(let word of arr) {
        if(word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}
console.log(findLongestWord(['Hello', 'World', 'Hi', 'Privet']));