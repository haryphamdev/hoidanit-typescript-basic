//lesson 41

interface IEmployee {
    empCode: number;
    name: string;
    getSalary: (empCode1: number) => number;
}

class Eric implements IEmployee {
    public empCode: number;
    public name: string;

    getSalary = (code: number): number => {
        return 100 * code;
    }

    getName = () => {
        return 'hoi dan it'
    }
}

//lesson 40
interface IPerson {
    readonly firstName: string;
    lastName?: string;
    address: string
}

type Person41 = {
    firstName: string;
    lastName: string
}

function getFullName(person: IPerson) {
    return `${person.firstName} ${person.lastName}`;
}

let person40 = {
    firstName: 'Eric',
    lastName: 'Hoi Dan IT',
    address: 'Ha noi'
};

console.log(getFullName(person40)); // Eric Hoi Dan IT


//lesson 38
class Circle {
    static pi: number = 3.14;
    public test: number = 69;

    static calculateArea(radius: number) {
        return this.pi * radius * radius;
    }
}

let t = new Circle();
console.log(">>> check pi= ", Circle.calculateArea(10));


//lesson 37

class Person3 {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    describe(): string {
        return `This is ${this.firstName} ${this.lastName}.`;
    }
}

//để kế thừa 1 class, chúng ta sử dụng keyword extends

class Employee1 extends Person3 {
    private jobTitle;
    constructor(
        firstName: string,
        lastName: string,
        jobTitle: string) {

        // call the constructor of the Person class:
        super(firstName, lastName);
        this.jobTitle = jobTitle;
    }
    //overwrite
    describe(): string {
        return `${super.describe()} from parent - describe Hoi Dan IT`;
    }
}

// let employee = new Employee('John','Doe','Front-end Developer');

//Employee kết thừa lại person => dùng đc method của parent
let employee = new Employee1('Hoi Dan IT', 'Eric', 'Web Developer');

console.log(employee.getFullName());
console.log(employee.describe());

//lesson 36
class Person2 {
    private _age: number;
    public firstName: string;
    public lastName: string;

    constructor(_age: number, firstName: string, lastName: string) {
        this._age = _age;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    //getter
    get age() {
        return this._age;
    }

    //setter
    set age(age2: number) {
        if (age2 < 0 || age2 > 150) {
            throw Error("Invalid age")
        }
        this._age = age2;
    }
}

let person2 = new Person2(25, 'Hoi Dan IT', 'Eric');
let checkAge = person2.age; //getter

person2.age = 69 // setter
// person2.setAge(69) //setter
console.log(">>> check age: ", person2) //getter
// person2.age = 26;

//lesson 35
class Person1 {
    readonly birthDate: Date;

    constructor(birthDate: Date) {
        this.birthDate = birthDate;
    }
}

let person = new Person1(new Date(1990, 12, 25));
// person.birthDate = new Date(1991, 12, 25); // Compile error

//lesson 34
class Employee {
    public empName: string;
    protected empCode: number;

    constructor(name: string, code: number) {
        this.empName = name;
        this.empCode = code;
    }
}


class SalesEmployee extends Employee {
    private department: string;

    constructor(name: string, code: number, department: string) {
        super(name, code);
        this.department = department;
    }
}

let emp = new SalesEmployee("John Smith", 123, "Sales");
// emp.empCode; //Compiler Error

//lesson33
class Person {
    public ssn: string;
    firstName: string;
    lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `calling method: ${this.firstName} ${this.lastName}`;
    }
}

let hoidanit = new Person("123", "Hoi Dan IT", " Eric");
console.log(">> check class: ", hoidanit.getFullName())


//lesson 32

function addNumbers(a: number, b: number): number {
    return a + b;
}

function addStrings(a: string, b: string): string {
    return a + b;
}

// 2 functions làm nhiệm vụ tương tự nhau => có thể gồm thành 1 với union type
function add111(a: number | string, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number')
        return a + b;

    if (typeof a === 'string' && typeof b === 'string')
        return a + b;
}

//overloading
function addNew(a: number, b: number): number;

function addNew(a: string, b: string): string;

function addNew(a: any, b: any) {
    return a + b;
}

// console.log(">>> check add new: ", addNew(6, 9), addNew(" Hoi Dan IT", " & Eric"))


class Counter {
    private current: number = 0;
    count(): number;
    count(target: number): number[];
    count(target?: number): number | number[] {
        if (target) {
            let values: number[] = [];
            for (let start = this.current; start <= target; start++) {
                values.push(start);
            }
            return values;
        }
        return ++this.current;
    }
}

let counter111 = new Counter();

console.log(counter111.count()); // return a number
console.log(counter111.count(20)); // return an array

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



//lesson 30

let sum7 = (x: number, y: number, z: boolean = false) => {
    if (z === false) {
        return x + y;
    }

    if (z)
        return x - y;
}

console.log(">>> check sum7 = ", sum7(1, 2), sum7(1, 2, true))

//lesson 29: optional params

const sum5 = (x: number, y: number, z?: number) => {
    if (z) return x + y + z;
    return x + y;
}

console.log(">>> check sum 4 = ", sum5(2, 5),
    sum5(1, 2, 3)) //NaN : not a number;; null/ undefined

//lesson 28

const sum3 = (x: number, y: number): number => {
    return x + y;
}

// function sum4(x: number, y: number): number {
//     return x + y;
// }

console.log(">> check sum3 = ", sum3(1, 10))

let a = 10;//number
a = sum3(1, 10) //string

//lesson 27
// function sum(a , b) {
//     return a + b;
// }

function sum(a: number, b: number) {
    return a + b;
}

//anonymous function () => {}
const sum2 = (a: number, b: number) => {
    return a + b;
}

console.log(">>> check sum: ", sum2(6, 9))

//lesson 26
for (let index = 0; index < 9; index++) {

    // if index is odd, skip it
    if (index % 2 === 1) { continue; } // 1; 0

    // the following code will be skipped for odd numbers
    // console.log(index);
}



// let index = -1;

// while (index < 9) {
//     index = index + 1;
//     if (index % 2)
//         continue;
//     console.log(index);
// }


let index = 9;
let count = 0;

do {
    index += 1;

    if (index % 2)
        continue;
    count += 1;
} while (index < 99);
console.log(count); // 45




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
