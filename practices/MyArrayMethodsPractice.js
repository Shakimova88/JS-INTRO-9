//creating array one-dimentional 

const arr1 =['Dio', 'Zarina', 'Zane'];// 1. using array literals [] -> square brackets 
const arr2 = new Array(); //  2. using array constructor with the new keyword

let name = 'John'; // 3. using split() method and getting an array from a string
let sentence = 'I like arrays'; //
const arr3 = name.split('');
const arr4 = sentence.split(' ');
console.log(arr3); // [ 'J', 'o', 'h', 'n' ]
console.log(arr4); // [ 'I', 'like', 'arrays' ]

// Array methods 

const cities = [ 'Chicago', 'Rome', 'Berlin', 'Tokyo' ];
cities[0] = 'Milan'; // changed first element

console.log(cities[2]); // extracting element by giving it's index('Tokyo)
console.log(cities); // result of changed first element ([ 'Milan', 'Rome', 'Berlin', 'Tokyo' ])
console.log(cities.at(-3)); // best to use extracting element from the tail (Rome)
console.log(cities[cities.length-2]); // same as at()
console.log(Array.isArray(cities)); // cheking if varible is Array(true)
console.log(typeof cities); // will give me (object) because varible in squere bracets

const numbers = [ 5, 100, 50, 25, 200, 500 ];

// Removing elements from the beginning of the array; shift()

const names = ['Zarina', 'Dio', 'Zane', 'Tomi', 'Nick'];

names.shift('Zarina',) // it return  Zarina also
console.log(names);//[ 'Dio', 'Zane', 'Tomi', 'Nick' ]

// Adding element to the beginning of the array; unshift() it could be more then 1 
names.unshift('Mike')
console.log(names); // [ 'Mike', 'Dio', 'Zane', 'Tomi', 'Nick' ]

// Adding elements to the end of the array; push() it could be more then 1

const names2 = ['Zarina', 'Dio', 'Zane'];

names2.push('Jane', 'John')
console.log(names2); // [ 'Zarina', 'Dio', 'Zane', 'Jane', 'John' ]

// Removing elements from the end of the array; pop()

names2.pop('John')
console.log(names2); // [ 'Zarina', 'Dio', 'Zane', 'Jane' ]


// Searching in Array methods; includes(), indexOf(), lastIndexOf

const num_s = [ 5, 10, 5, 10, 25, 100, 77, 5, 5 ];

console.log(num_s.includes(10)); // true
console.log(num_s.indexOf(5)) // 0   both indexOf & lastIndexOf give back(-1) if element not exist
console.log(num_s.indexOf(10)) // 1
console.log(num_s.lastIndexOf(5)) // 1
console.log(num_s.lastIndexOf(10)) //3


// check if the above array has both 5 and 7
// print true if it has both or false otherwise

console.log(num_s.includes(5) && num_s.includes(7)); // false
console.log(num_s.indexOf(5) >= 0 && num_s.indexOf(7) >= 0);
console.log(num_s.lastIndexOf(5) >= 0 && num_s.lastIndexOf(7) >= 0);

// search for 10 after the index of 4 (4 is included)
const num_s = [ 5, 10, 5, 10, 25, 100, 77, 5, 5 ];
console.log(num_s.includes(10, 4)); // false

// Merging Arrays with concat() or spread operator []

const arr1 = [1, 2], arr2 = [55, 56], arr3 = [ 101, 102, 103 ];

console.log(arr1.concat(arr2, arr3)); // [ 1, 2, 55, 56, 101, 102, 103]
console.log([...arr1, ...arr2, ...arr3]); // [ 1, 2, 55, 56, 101, 102, 103 ]
console.log(arr1.concat(555, 666)); // [ 1, 2, 555, 666 ]
console.log(`The new arrays is ${arr1.concat(555, 666)}`); // 'The new arrays is 1,2,555,666'

// Reversing()-arrays

const fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits.reverse()); // [ 'Orange', 'Banana', 'Apple' ]

/* INTERVIEW QUESTION 
How to have your array reversed keeping the original order
*/

const numbers = [ 1, 2, 3, 4, 5 ];
const numbersCopy = [...numbers]; // we used... so we don't have to retype
console.log(numbersCopy); // [ 1, 2, 3, 4, 5 ]
console.log(numbersCopy.reverse());

// Slicing()-Splicing()-Arrays

const animals = [ 'Cat', 'Dog', 'Cow', 'Monkey', 'Bird' ];

console.log(animals.slice(1, 3)); // [ 'Dog', 'Cow' ]
console.log(animals.slice(2)); // [ 'Cow', 'Monkey', 'Bird' ]
console.log(animals.slice(-3)); // [ 'Cow', 'Monkey', 'Bird' ]
console.log(animals.slice(-5, -2)); // [ 'Cat', 'Dog', 'Cow' ]

console.log(animals.splice(1, 2, 'Rabbit', 'Cat', 'Lion')); // [ 'Dog', 'Cow' ]
console.log(animals); // [ 'Cat', 'Rabbit', 'Cat', 'Lion', 'Monkey', 'Bird' ]

const numbers = [ 0, 5, -1, -3, 10, 15 ];
numbers.splice(-1, 3, 100, 101, 102); 
console.log(numbers.length)
console.log(numbers);

// Sorting-Arrays sort()

const names = [ 'alex', 'Adam', 'Jane', 'John', 'alexander'];
console.log(names.sort()); // [ 'Adam', 'Jane', 'John', 'alex', 'alexander' ] using ASCII

const numbers = [ 5, 2, 22, 1, 100 ]; // sorting alphabetically
console.log(numbers.sort()); // [ 1, 100, 2, 22, 5 ]


const nums = [ 5, 2, 22, 1, 100 ];

nums.sort((x, y) => x - y); // Formula for  ascending

console.log(nums); // [ 1, 2, 5, 22, 100 ]

// Nested Array

const students = [
 [
    ['Emre', 'Nadejda', 'Zarina'],
    ['Ameer', 'Ali', 'Tania', 'Civan'],
    ['Marta', 'Niko']
 ],
[
    ['Jane', 'Alex', 'John'],
    ['Maria', 'Max']
]

]

console.log(students.length); // 2
console.log(students[0].length); // 3
console.log(students[0][1].length); // 4
console.log(students[0][1][2]); // 'Tania

// In total, how many students we have? 14

const oneDimentionalStudents = students.flat(1)
console.log(totalStudents = oneDimentionalStudents.length);


// Converting to String-Arrays;

const objects = [ 'Mouse', 'Computer', 'Remote' ]; 
let stringObjects = objects.toString(); // or object.join()
const numbers = [ 10, 15, 20, 25 ];
let stringNumbers = numbers.join(' $ '); // you can putt any symbols
console.log(stringObjects); // 'Mouse,Computer,Remote'
console.log(stringNumbers); // '10, 15, 20, 25'


// Spred-Operator in Arrays

const studentsBatch9Group1 = [ 'Alex', 'Max', 'Rabe' ];
const studentsBatch9Group2 = [ 'James', 'Ameer', 'Niko' ];
const allStudents = [ ...studentsBatch9Group1,  ...studentsBatch9Group2 ];
console.log(allStudents);

const nums = [ 5, 6, 7, 8, 9, 10, 11];
let max = Math.max(...nums);
let min = Math.min(...nums);
console.log(max, min)
const nums1_15 = [ 1, 2, 3, 4, ...nums, 12, 13, 14, 15 ];
console.log(nums1_15);
