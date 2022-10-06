//lesson 27
// function sum(a , b) {
//     return a + b;
// }

function sum(a: number, b: number) {
    return a + b;
}

//anonymous function
const sum2 = (a: number, b: number) => {
    return a + b;
}

console.log(">>> check sum: ", sum2(6, 9))