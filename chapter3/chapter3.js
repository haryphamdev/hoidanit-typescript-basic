let sum4 = (x, y, z) => { //z: optional params
    console.log(">> check z = ", z)
    if (z) {
        return x + y + z;
    }
    return x + y;

}

console.log(">>> check sum 4 = ", sum4(1, 2), sum4(1, 2, 3)) //NaN : not a number;; null/ undefined