const names = ['John', 'Jane', 'Alex', 'Max'];
// Print each name in the array

names.forEach((name=> console.log(name)))
names.forEach((name=> console.log(name[0])))

names.forEach((name=> console.log(name.toUpperCase())))


names.forEach(function (name) {
    if(name.toLowerCase().startsWith('j')){
        console.log(name)
    }
    })

names.forEach((name) => {
if(name.toLowerCase().startsWith('j')) console.log(name);
})


let  count = 0;
names.forEach((name) => {
    if(name.length === 4) {
        count++;
    }
})
console.log(count)

const numbers = [5, 10,3, 0, -2]
numbers.forEach(number => console.log(number))
numbers.forEach(number => console.log(number % 2 === 0))


const numbers = [15, 30, 9, 0, -6];
const multNum = [];
numbers.forEach(num => multNum.push(num * 3));

console.log(multNum);

const numbers = [10, 0, -2];
const even = [];
numbers.forEach(num => num % 2 === 0)
console.log(even);



