//lesson 34
class Employee {
    private empCode: string;
    private empName: string;
    constructor(empCode: string, empName: string) {
        this.empCode = empCode;
        this.empName = empName;
    }
    //getter/setter
}

let emp = new Employee(" aaa", "bbbb"); //immutable
// emp.empCode = "123";
// emp.empName = "HOi Dan IT";

console.log(">>> check emp: ", emp)
