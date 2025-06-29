//creating a base class Employee with name and Department
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    describe() {
        return `Name: ${this.name}, Department: ${this.department}`;
    }
}


// creating a subclass Manager that extends Employee
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

//creating a new sample employee and manager using new Employee and new Manager 
const employee1 = new Employee("Steven", "Sales");
const employee2 = new Employee("Alice", "Logistics"); 
const employee3 = new Employee("Roger", "Marketing");   
const manager1 = new Manager("Jane", "HR", 5);
const manager2 = new Manager("Bob", "Accounts", 10);
// logging the details of the employee and manager
// console.log(employee1.describe());  
// console.log(employee2.describe());  
// console.log(employee3.describe());  
// console.log(manager.describe());  


//Create a class company with property employees(an Array).
// Adding a method addEmployee() to add an Employee to the Array
// Adding a method listEmployee() to log each  employee's description

class Company{
    constructor(){
        this.employees = [];

    }
    addEmployee(employee){
        console.log("Adding an employee to the Array");
        this.employees.push(employee);
    }

    listEmployees(){
        this.employees.forEach(emp=>{
        console.log(emp.describe());
        }
        );
    }

}

//Instantiate the Company object, add both employee and manager instances and calling listEmployees()
const myCompany = new Company();
myCompany.addEmployee(employee1);
myCompany.addEmployee(employee2);
myCompany.addEmployee(employee3);
myCompany.addEmployee(manager1);
myCompany.addEmployee(manager2);

myCompany.listEmployees();
