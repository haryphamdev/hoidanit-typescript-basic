
//perfect
const sum = (x, y) => {
    return x + y;
}

console.log(">>> check sum1 = ", sum(5, 10)); //15

//need to validate
const sum2 = (x, y) => {
    //validate: x, y are numbers ???
    return x + y;
}

console.log(">>> check sum2 = ", sum2('name', 10)); //15

