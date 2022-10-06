let sum6 = (x, y, z = false) => {
    if (z === false) {
        return x + y;
    }

    if (z)
        return x - y;
}

console.log(">>> check sum6 = ", sum6(1, 2), sum6(1, 2, 3))
// sum6(1, 2) => z = undefined => 0
// sum6(1, 2, 3) => z = 3


// let sum4 = (x, y, z) => { //z: optional params
//     console.log(">> check z = ", z)
//     if (z) {
//         return x + y + z;
//     }
//     return x + y;

// }

// console.log(">>> check sum 4 = ", sum4(1, 2), sum4(1, 2, 3)) //NaN : not a number;; null/ undefined