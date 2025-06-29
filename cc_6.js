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


//step 4: Creating a class Company with property employees(an Array).
// Adding a method addEmployee() to add an Employee to the Array
// Adding a method listEmployee() to log each  employee's description

class Company{
    constructor(){
        this.employees = []; //creating an Array to hold employees

    }
    addEmployee(employee){
        console.log("Adding an employee to the Array");
        this.employees.push(employee);
    }

    // method to list all employees
    // using forEach to iterate over the employees Array
    listEmployees(){
        this.employees.forEach(emp=>{
        console.log(emp.describe());
        }
        );
    }

}


//step 5: Instantiating the Company object
// adding both employee and manager instances and calling listEmployees()
const myCompany = new Company();
myCompany.addEmployee(employee1);
myCompany.addEmployee(employee2);
myCompany.addEmployee(employee3);
myCompany.addEmployee(manager1);
myCompany.addEmployee(manager2);

myCompany.listEmployees();