function product1 (num, num2) {
    console.log(num * num2);
}
product1(5, 15);


const product2 = (num, num2) {
   return num * num2;
}
console.log(product1(5, 15));


const product3 = (num, num2) => {
    return num * num2;
}

const upperCaseName = str=> str.toUpperCase();
console.log(upperCaseName('Johnn'))