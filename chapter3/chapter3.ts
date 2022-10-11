//lesson33
class Person {
    ssn: string;
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