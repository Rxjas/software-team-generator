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


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

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
            employeeRole.push(manager);
            addEmployee();

        });
};

function addEngineer(){
    inquirer.prompt(engineerQs)
        .then(function(ans){

            let engineer = new Engineer(ans.name, ans.id, ans.email, ans.github);
            employeeRole.push(engineer);
            addEmployee();

        });
};

function addEmployee(){
    inquirer.prompt(employeeRole)
        .then(function(ans){
            if (ans.role === 'Engineer'){
                addEngineer();
            }
            else if (ans.role === 'Intern'){
                //make an intern
            }
            else {
                return fs.writeFileSync(outputPath, render(employees), "utf-8");
            }
        })
}


function createTeam(data){
    const role = data.role

    if(role === 'Manager'){
        inquirer.prompt(managerQs)
            .then(function(answer){
            
                let manager = new Manager(name, id, email, office);
                console.log(manager)
                // arrayManagers.push(manager);
            })
    } 
    else if (role === 'Engineer'){
        inquirer.prompt(engineerQs)
            .then(function(answer){
                const name = answer.name
                const id = answer.id
                const email = answer.email
                const github = answer.github

                let engineer = new Engineer(name, id, email, github);
                arrayEngineers.push(engineer);
            })
    }
    else if (role === 'Intern'){
        inquirer.prompt(internQs)
            .then(function(answer){
                const name = answer.name
                const id = answer.id
                const email = answer.email
                const school = answer.school

                let intern = new Intern(name, id, email, school)
                arrayInterns.push(intern);
            })
    }
}

function init(){

    //question to initialize program
    inquirer.prompt(start)
        .then(function (data){

            // Ask for the employee's role
            if (data.start === 'Yes'){
                addManager(data);
            } 

            //if the user chooses to not start the program
            else{
                console.log('Run Application When Ready')
            };

        })// end of start THEN
}//end of init
init();
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
