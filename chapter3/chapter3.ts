//lesson 39
abstract class Employee39 {
    constructor(private firstName: string, private lastName: string) {
    }
    abstract getSalary(): number; //abstract method

    //normal method
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    compensationStatement(): string {
        return `${this.fullName} makes ${this.getSalary()} a month.`;
    }
}

// const e1 = new Employee39("eric", "hoi dan it");
class FullTimeEmployee extends Employee39 {
    constructor(firstName: string, lastName: string, private salary: number) {
        super(firstName, lastName); //dùng super để kế thừa lại cha
    }

    // cần viết method này, vì nó được khai báo abstract ở trên
    getSalary(): number {
        //asdfasdfasdf
        //asdfasdfasfd
        return this.salary;
    }
}

class Contractor extends Employee39 {
    constructor(firstName: string, lastName: string, private rate: number, private hours: number) {
        super(firstName, lastName);
    }
    getSalary(): number {
        return this.rate * this.hours;
    }
}

const test1 = new FullTimeEmployee("eric", 'hoi dan it', 1000);
console.log(">>> test 1 : ", test1.getSalary())