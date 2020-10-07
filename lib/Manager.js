// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./Employee')

class Manager extends Employee{
   
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber
    }

    getRole(){
        return "Manager"
    }

    getOfficeNumber(){
        return this.officeNumber
    }
}

// const e1 = new Manager("Alice",20,"123@123.com",2000)
// console.log(e1)
// console.log(e1.getName())
// console.log(e1.getId())
// console.log(e1.getEmail())
// console.log(e1.getRole())
// console.log(e1.getOfficeNumber())



// export the class
module.exports = Manager