// Step 1: creating a base class Employee with name and Department as properties
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

// Step 2: creating a subclass Manager that extends Employee
// using super to inherit name and department properties
// and adding a new property teamSize
class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }

    // overriding the describe method to include teamSize
    // using super to call the parent class describe method     
    describe() {
        return `${super.describe()}, Team Size: ${this.teamSize}`;
    }
}