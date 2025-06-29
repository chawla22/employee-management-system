//creating a base class Employee with name and Department as properties
// anding a method to describe the employee
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    describe() {
        return `Employee Name: ${this.name}, Department: ${this.department}`;
    }
}