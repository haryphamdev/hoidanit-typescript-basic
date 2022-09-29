//lesson 25
let products = [
    { name: 'phone', price: 700 }, //0
    { name: 'tablet', price: 900 }, //1
    { name: 'laptop', price: 1200 }
];

let discount1 = 0;
let product = products[1];
switch (product.name) {
    case 'phone':
        discount1 = 5;
        break;
    case 'tablet':
        discount1 = 10;
    // break;
    case 'laptop':
        discount1 = 15;
    // break;
    default:
        discount1 = 100;
}
console.log(`There is a ${discount1}% on ${product.name}.`);


// show the products


