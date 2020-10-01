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

//export this to test
module.exports = Employee;
