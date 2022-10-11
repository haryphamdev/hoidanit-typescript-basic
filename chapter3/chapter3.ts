//lesson 31
//spread syntax vs rest => copy all
function getTotal(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
    //[10, 20].forEach((num) => total += num);
    //[].forEach((num) => total += num);
    return total;
}

// console.log(getTotal()); // 0
// console.log(getTotal(10, 20)); // 30
// console.log(getTotal(10, 20, 30)); // 60

function multiply(n: number, ...m: number[]) {
    let a = [69, 96, 3, 4].map((x) => {
        console.log("check x = ", x)
        return n * x
    });

    return m.map((x) => n * x);
}
// 'a' gets value [10, 20, 30, 40]
// const test31 = multiply(15, 69, 96, 3, 4);

// console.log(">>> check test31 = ", test31)


function Greet(greeting: string, ...names: string[]) {
    return greeting + " " + names.join(", ") + "!";
}

console.log(Greet("Xin chao", "Eric &", "Hoi dan it")); // returns "Hello Steve, Bill!"

//Greet("Hello");// returns "Hello !"


