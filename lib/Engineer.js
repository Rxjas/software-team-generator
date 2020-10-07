// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./Employee')

class Engineer extends Employee{
   
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github
    }

    getRole(){
        return "Engineer"
    }

    getGithub(){
        return this.github
    }
}

// const e1 = new Manager("Alice",20,"123@123.com",2000)
// console.log(e1)
// console.log(e1.getName())
// console.log(e1.getId())
// console.log(e1.getEmail())
// console.log(e1.getRole())
// console.log(e1.getGithub())

module.exports = Engineer