

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


//lesson 24
let counter2 = 6;
do {
    console.log("counter = ", counter2);
    if (counter2 % 2 === 1) break;
    counter2++;
} while (counter2 < 5);


//lesson 23
// let counter = 0;

// while (counter < 5) {
//     console.log("counter = ", counter);
//     if (counter % 2 === 1) break;
//     counter++;
// }

//lesson 23
let counter = 0;

while (counter < 5) {
    console.log("counter = ", counter);
    if (counter % 2 === 1) break;
    counter++;
}

//lesson 22

for (let i = 0; i < 10; i++) {
    console.log(">> i= ", i);
    //i = 9 => 10
}

let i1 = 0;
for (; i1 < 10; i1++) {
    console.log(i1);
}


for (let i = 0; ; i++) {
    console.log(i);
    if (i > 9) break; // cần có if/break để không khiến vòng lặp chạy vô hạn
}


let i = 0;
for (; ;) {
    console.log(i);
    i++;
    if (i > 9) break;
}


//lesson21
const age: number = 20;

switch (age) {
    case 20: //waterfall
    case 19:
        // code block
        console.log("Đã đi làm")
        break;
    case 12:
        console.log("Đã đi làm sinh viên")
        break;
    default:
        // code block
        console.log(">>> run default")
}

//////

//lesson 20
let name123: string = '';

//convert to Boolean => Boolean(age)
if (name123) {
    console.log("You can watch JAV...")
}
else {
    console.log("Oops >>> You can watch Cartoon...")
}



let discount: number;
let itemCount = 11;

if (itemCount > 0 && itemCount <= 5) {
    discount = 5;  // 5% discount
} else if (itemCount > 5 && itemCount <= 10) {
    discount = 10; // 10% discount 
}
else if (itemCount > 10 && itemCount <= 15) {
    discount = 20;
}

else {
    discount = 15; // 15%
}

console.log(`You got ${discount}% discount. `);
