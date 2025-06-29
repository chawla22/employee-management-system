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


//step 3: creating objects of  employees and managers using new Employee() and new Manager()
const employee1 = new Employee("Steven", "Sales");
const employee2 = new Employee("Alice", "Logistics"); 
const employee3 = new Employee("Roger", "Marketing");   
const manager1 = new Manager("Jane", "HR", 5);
const manager2 = new Manager("Bob", "Accounts", 10);
