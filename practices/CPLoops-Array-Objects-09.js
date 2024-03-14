
/* TASK-1
    You are given a JS Array below:
     - Count how many users are older than 30. // 2
	 - Count how many users live in Chicago. // 2
	 - Count how many users live in IL. // 3
	 - Count how many users’ emails has Gmail domain. // 2
	 - Find and store all the users name younger than 35. // [ 'Tech', 'Jane', 'Alex' ]
	 - Find average of ages of all users. // 28
*/


const users = [
    {
        firstName: 'Tech',
        lastName: 'Global',
        email: 'tech.global@techglobal.com',
        age: 3,
        address: {
            street_line_1: '2800 S River Rd',
            street_line_2: 'Suite 310',
            city: 'Des Plaines',
            state: 'IL',
            zip: '60018'
        }
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        age: 47,
        address: {
            street_line_1: '123 Abc St',
            street_line_2: '',
            city: 'Chicago',
            state: 'IL',
            zip: '12345'
        }
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'janedoe@gmail.com',
        age: 30,
        address: {
            street_line_1: '123 Abc St',
            street_line_2: '',
            city: 'Chicago',
            state: 'IL',
            zip: '12345'
        }
    },
    {
        firstName: 'Alex',
        lastName: 'Smith',
        email: 'alexsmith@outlook.com',
        age: 32,
        address: {
            street_line_1: '456 Xyz St',
            street_line_2: '',
            city: 'Miami',
            state: 'Florida',
            zip: '67890'
        }
    }
];

const overAge30 = users.filter( x => x.age > 30).length;
console.log(overAge30);
const chicagoPeople = users.filter(x => x.address.city === 'Chicago').length;
console.log(chicagoPeople);
const peopleIL = users.filter(x => x.address.state === 'IL').length;
console.log(peopleIL);
const gmailUsers = users.filter(x => x.email.endsWith('@gmail.com')).length;
console.log(gmailUsers);
const ageUnder35 = users.filter(x => x.age < 35).map(user => user.firstName);
console.log(ageUnder35);
const avrgAge = users.reduce((sum, x) => sum + x.age, 0) / users.length;
console.log(avrgAge);



/* TASK-2
     You are given a JS Array below:
	  -  Find the most expensive product. // MacBook Pro 16-inch
	  - Find the least expensive product. // AirPods Pro
	  - Find the product with the biggest quantity. // AirPods Pro
	  - Find the product with the smallest quantity. // MacBook Pro 16-inch
	  - Find all the product names. // [ 'iPhone 14 Pro', 'MacBook Pro 16-inch', 'iPad Air', 'Apple Watch Series 7', 'AirPods Pro' ]
*/


const appleStore = [
    {
        productName: "iPhone 14 Pro",
        quantity: 50,
        price: 1099.99,
    },
    {
        productName: "MacBook Pro 16-inch",
        quantity: 30,
        price: 2399.99,
    },
    {
        productName: "iPad Air",
        quantity: 75,
        price: 599.99,
    },
    {
        productName: "Apple Watch Series 7",
        quantity: 100,
        price: 399.99,
    },
    {
        productName: "AirPods Pro",
        quantity: 200,
        price: 249.99,
    },
];

const mostExpensive = appleStore.reduce((prev, curr) => prev.price > curr.price ? prev : curr);
console.log("Most expensive product:", mostExpensive.productName);

const leastExpensive = appleStore.reduce((prev, curr) => prev.price < curr.price ? prev : curr);
console.log("Least expensive product:", leastExpensive.productName);

const biggestQuantity = appleStore.reduce((prev, curr) => prev.quantity > curr.quantity ? prev : curr);
console.log("Product with the biggest quantity:", biggestQuantity.productName);

const smallestQuantity = appleStore.reduce((prev, curr) => prev.quantity < curr.quantity ? prev : curr);
console.log("Product with the smallest quantity:", smallestQuantity.productName);

const productNames = appleStore.map(product => product.productName);
console.log("Product names:", productNames);



/*TASK-3
    You are given a JS Array below:
	- Find the cheapest book in the bookstore . // To Kill a Mockingbird
	- Find the most expensive book in the bookstore. // Harry Potter and the Sorcerer's Stone
	- Find all Classic books. // [ 'The Great Gatsby', 'To Kill a Mockingbird' ]
*/

const bookstore = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic",
        price: 9.99
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Classic",
        price: 7.99
    },
    {
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        genre: "Science Fiction",
        price: 12.49
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        genre: "Fantasy",
        price: 14.99
    },
    {
        title: "The Da Vinci Code",
        author: "Dan Brown",
        genre: "Mystery",
        price: 10.99
    }
];

let cheapBook = bookstore.sort((a, b) => a.price - b.price)[0].title;
console.log(cheapBook);


let expBook = bookstore.sort((a, b) => b.price - a.price)[0].title;
console.log(expBook);



let classicBook = bookstore.reduce((classicTitles, book) => {
    if (book.genre === 'Classic') {
        classicTitles.push(book.title);
    }
    return classicTitles;
}, []);

console.log(classicBook);




/* TASK-4
    You are given a JS Array below:
	- Calculate the total price of products in the cart. // 2444
	- Find the brands of all the products in the cart. // [ 'Dell', 'Apple', 'Sony' ]
	- Find all the items in the cart with their quantity. // [ 'Laptop, 1', 'Smartphone 2', 'Headphones, 3' ]
 */

    
const shoppingCart = {
    userId: 12345,
    items: [
        {
            productId: 1,
            productName: 'Laptop',
            price: 999.00,
            quantity: 1,
            specifications: {
                brand: 'Dell',
                screen: '15.6 inches',
                processor: 'Intel Core i7'
            }
        },
        {
            productId: 2,
            productName: 'Smartphone',
            price: 499.00,
            quantity: 2,
            specifications: {
                brand: 'Apple',
                model: 'iPhone 12',
                color: 'Space Gray'
            }
        },
        {
            productId: 3,
            productName: 'Headphones',
            price: 149.00,
            quantity: 3,
            specifications: {
                brand: 'Sony',
                type: 'Over-ear',
                wireless: true
            }
        }
    ],
    shippingAddress: {
        street: '123 Main Street',
        city: 'Anytown',
        zipCode: '12345'
    },
    orderDate: '2023-08-29'
};


const totalPrice = shoppingCart.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
console.log("Total Price:", totalPrice);

const brands = shoppingCart.items.map(item => item.specifications.brand);
console.log("Brands:", brands);

const itemsWithQuantity = shoppingCart.items.map(item => `${item.productName}, ${item.quantity}`);
console.log("Items with Quantity:", itemsWithQuantity);

