//lesson 30

let sum7 = (x: number, y: number, z: boolean = false) => {
    if (z === false) {
        return x + y;
    }

    if (z)
        return x - y;
}

console.log(">>> check sum7 = ", sum7(1, 2), sum7(1, 2, true))
