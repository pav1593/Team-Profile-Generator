// ## Acceptance Criteria

// ```md
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
// ```

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");

const ManagerQuestions = [      
    {
      type: 'input',
      message: "Enter team manager's name:",
      name: 'managerName',
      validate(text) {
        if (text==="") {
          return `Team must have a manager.`;
        }
        return true;
      },
    },
    {
        type: 'input',
        message: "Enter team manager's ID:",
        name: 'managerID',
        validate(text) {
          if (text==="") {
            return `Manager must have an ID.`;
          }
          return true;
        },
      },
      {
        type: 'input',
        message: "Enter team manager's email address:",
        name: 'managerEmail',
        validate(text) {
          if (text==="") {
            return `Manager must have an email address.`;
          }
          return true;
        },
      },
      {
        type: 'input',
        message: "Enter team manager's office number:",
        name: 'managerOfficeNumber',
        validate(text) {
          if (text==="") {
            return `Manager must have an office number.`;
          }
          return true;
        },
      }
  ];

  const EngineerQuestions = [      
    {
      type: 'input',
      message: "Enter engineers's name:",
      name: 'engineerName',
      validate(text) {
        if (text==="") {
          return `Engineer must have a name.`;
        }
        return true;
      },
    },
    {
        type: 'input',
        message: "Enter engineer's ID:",
        name: 'engineerID',
        validate(text) {
          if (text==="") {
            return `Engineer must have an ID.`;
          }
          return true;
        },
      },
      {
        type: 'input',
        message: "Enter engineer's email address:",
        name: 'engineerEmail',
        validate(text) {
          if (text==="") {
            return `Engineer must have an email address.`;
          }
          return true;
        },
      },
      {
        type: 'input',
        message: "Enter engineer's Github username:",
        name: 'engineerGithub',
        validate(text) {
          if (text==="") {
            return `Engineer must have a Github username.`;
          }
          return true;
        },
      }
  ];

  const InternQuestions = [      
    {
      type: 'input',
      message: "Enter intern's name:",
      name: 'internName',
      validate(text) {
        if (text==="") {
          return `Intern must have a name.`;
        }
        return true;
      },
    },
    {
        type: 'input',
        message: "Enter intern's ID:",
        name: 'internID',
        validate(text) {
          if (text==="") {
            return `Intern must have an ID.`;
          }
          return true;
        },
      },
      {
        type: 'input',
        message: "Enter intern's email address:",
        name: 'InternEmail',
        validate(text) {
          if (text==="") {
            return `Intern must have an email address.`;
          }
          return true;
        },
      },
      {
        type: 'input',
        message: "Enter intern's school:",
        name: 'internSchool',
        validate(text) {
          if (text==="") {
            return `Intern must have a school.`;
          }
          return true;
        },
      }
  ];

function addEngineer() {
    console.log("\n-----Add an Engineer-----\n");
    inquirer.prompt(EngineerQuestions).then((answers)=>{
        console.log("\n-----Engineer Added-----\n");
        console.log(answers);
        quit();
    });
}

function addIntern() {
    console.log("\n-----Add an Intern-----\n");
    inquirer.prompt(InternQuestions).then((answers)=>{
        console.log("\n-----Intern Added----\n");
        console.log(answers);
        quit();
    });
}

function addToTeam() {
    console.log("\n-----Add Team Members-----\n");
    inquirer.prompt([{
      type: 'rawlist',
      name: 'addTeamMember',
      message: 'Select a team member to add:',
      choices: ['Engineer','Intern'],
    }]).then((answers)=>{
        console.log(answers);
        switch (answers.addTeamMember) {
            case 'Engineer': addEngineer();
                break;
            case 'Intern': addIntern();
                break;
        }
    });
}

function quit() {
    console.log("\n\n");
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'askAgain',
            message: 'Want to add another team member (hit enter for YES)?',
            default: true,
        }
    ]).then((answers)=>{

            if (answers.askAgain) {
                addToTeam();
            } else {
                console.log('\nExiting program!\n');
            }


    });
}

function init() {
// const John = new Manager('John',1,'john@company.com',200);
// const Sam = new Engineer('Sam',2,'sam@company.com','sam9999');
// const Emily = new Intern('Emily',3,'emily@company.com','Mothercraft');

// console.log(`${John.getRole()}: ${John.getName()}, ${John.getID()}, ${John.getEmail()}, Office: ${John.officeNumber}`);

inquirer.prompt(ManagerQuestions).then((answers)=>{
        addToTeam();
});

}

init();