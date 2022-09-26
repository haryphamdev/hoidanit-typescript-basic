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
