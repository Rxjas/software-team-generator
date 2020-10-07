const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Choices = require("inquirer/lib/objects/choices");

//arrays to push the employees
const employeeArray = [];

const start =([{
    type: 'list',
    name: 'start',
    message: 'Would you like to begin the Software Team Generator?',
    choices: ['Yes', 'No']
}
]) 

const employeeRole =([{
    type: 'list',
    name: 'role',
    message: 'What is the role of the Employee?',
    choices: ['Engineer', 'Intern', 'Finished Creating Team.']
}])

const managerQs = ([
    {
    type: 'input',
    name: 'name',
    message: 'What is the name of the Manager?',
    },

    {
        type: 'input',
        name: 'id',
        message: 'What is the ID of the Manager?',
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is the E-mail of the Manager?',
    },

    {
        type: 'input',
        name: 'office',
        message: 'What is the office number of the Manager?',
    }
]);

const engineerQs = ([
    {
    type: 'input',
    name: 'name',
    message: 'What is the name of the Engineer?',
    },

    {
        type: 'input',
        name: 'id',
        message: 'What is the ID of the Engineer?',
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is the E-mail of the Engineer?',
    },

    {
        type: 'input',
        name: 'github',
        message: 'What is the GitHub username of the Engineer?',
    }
]);

const internQs = ([
    {
    type: 'input',
    name: 'name',
    message: 'What is the name of the Intern?',
    },

    {
        type: 'input',
        name: 'id',
        message: 'What is the ID of the Intern?',
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is the E-mail of the Intern?',
    },

    {
        type: 'input',
        name: 'school',
        message: 'Where did the Intern go to school?',
    }
]);

function addManager(){
    inquirer.prompt(managerQs)
        .then(function(ans){

            let manager = new Manager(ans.name, ans.id, ans.email, ans.office);
            employeeArray.push(manager);
            addEmployee();

        });
};

function addEngineer(){
    inquirer.prompt(engineerQs)
        .then(function(ans){

            let engineer = new Engineer(ans.name, ans.id, ans.email, ans.github);
            employeeArray.push(engineer);
            addEmployee();

        });
};

function addIntern(){
    inquirer.prompt(internQs)
        .then(function(ans){

            let intern = new Intern(ans.name, ans.id, ans.email, ans.school);
            employeeArray.push(intern);
            addEmployee();

        });
};

function addEmployee(){
    inquirer.prompt(employeeRole)
        .then(function(ans){
            if (ans.role === 'Engineer'){
                return addEngineer();
            }
            else if (ans.role === 'Intern'){
                return addIntern();
            }
            else {

                console.log('Check the output folder for your team!')
                return fs.writeFileSync(outputPath, render(employeeArray), "utf-8");
            };
        })
};

function init(){

    //question to initialize program
    inquirer.prompt(start)
        .then(function (data){

            // Ask for the employee's role
            if (data.start === 'Yes'){
                addManager();
            } 
            //if the user chooses to not start the program
            else {
                console.log('Run Application When Ready')
            };

        })// end of start THEN
}//end of init

init();

