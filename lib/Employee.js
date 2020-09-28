const fs = require('fs')
const inquirer = require("inquirer")

// TODO: Write code to define and export the Employee class
//Require file systrem and inquirer package



class Employee{

    constructor(name, id, email){
        this.name = name
        this.id = id
        this.email = email
    }

    getName(){
        return this.name
    }

    getId(){
        return this.id
    }

    getEmail(){
        return this.email
    }

    getRole(){
        return "Employee"
    }
}

// const e1 = new Employee("Alice",20,"123@123.com")
// console.log(e1.getName())
// console.log(e1.getID())
// console.log(e1.getEmail())
// console.log(e1.getRole())


// console.log(e1)



//export this to test
module.exports = Employee;
