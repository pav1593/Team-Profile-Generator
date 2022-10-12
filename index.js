// import required modules

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require('fs');

// set path and filename of the output HTML file

const filename="./dist/teamprofile.html";

// initialize arrays to store team member objects

const managers = []; // array for managers
const engineers = []; //array for engineers
const interns = []; //array for interns

// setup Manager questions
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
        name: 'officeNumber',
        validate(text) {
          if (text==="") {
            return `Manager must have an office number.`;
          }
          return true;
        },
      }
  ];

  // setup Engineer questions

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

  // setup Intern questions
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
        name: 'internEmail',
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

// called when adding an Engineer that prompts questions, creates a new object and adds it to the engineers array then calls the quit() function
function addEngineer() {
    console.log("\n-----Add an Engineer-----\n");
    inquirer.prompt(EngineerQuestions).then((answers)=>{
        console.log("\n-----Engineer Added-----\n");
        const newEngineer = new Engineer(answers.engineerName,answers.engineerID,answers.engineerEmail,answers.engineerGithub);
        engineers.push(newEngineer);
        quit();
    });
}

// called when adding an Intern that prompts questions, creates a new object and adds it to the interns array then calls the quit() function
function addIntern() {
    console.log("\n-----Add an Intern-----\n");
    inquirer.prompt(InternQuestions).then((answers)=>{
        console.log("\n-----Intern Added----\n");
        const newIntern = new Intern(answers.internName,answers.internID,answers.internEmail,answers.internSchool);
        interns.push(newIntern);
        quit();
    });
}

// funciton which prompts the user to select team member to add to the team and call appropriate function based on type
function addToTeam() {
    console.log("\n-----Add Team Members-----\n");
    inquirer.prompt([{
      type: 'rawlist',
      name: 'addTeamMember',
      message: 'Select a team member to add:',
      choices: ['Engineer','Intern'],
    }]).then((answers)=>{
        switch (answers.addTeamMember) {
            case 'Engineer': addEngineer();
                break;
            case 'Intern': addIntern();
                break;
        }
    });
}

// functing returns a dynamically rendered HTML after dynamically populating the card information depending on team member type;
function renderHTML() {

const topHTML= `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <title>Document</title>
</head>
<body style="background-color: white;">
    <div class="jumbotron text-center text-white bg-primary jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Team Profile</h1>
        </div>
    </div>
    <div class="container">
      <div class="card-deck">`;


const bottomHTML=
`     </div>
</body>
</html>`;

let dynamicHTML='';

managers.forEach((item)=> {

           dynamicHTML+=`
            <div class="card border-dark mb-3" style="min-width: 20rem; max-width: 20rem;box-shadow: 5px 5px #888888;">
            <div class="card-header text-white bg-primary" style="font-size: 1.5rem; font-weight: bold;">${item.getName()}<br/>☕️ ${item.getRole()}</div> 
            <div class="card-body text-dark">
              <ul class="list-group"style="width: 17rem;">
                <li class="list-group-item">ID: <span>${item.getID()}</span></li>
                <li class="list-group-item">Email: <a href="mailto:${item.getEmail()}">${item.getEmail()}</a></li>
                <li class="list-group-item">Office: <span>${item.officeNumber}</span></li>
            </ul>
            </div>
            </div>\n`;  
  });

  engineers.forEach((item)=> {
          
    dynamicHTML+=`
     <div class="card border-dark mb-3" style="min-width: 20rem; max-width: 20rem;box-shadow: 5px 5px #888888;">
     <div class="card-header text-white bg-primary" style="font-size: 1.5rem; font-weight: bold;">${item.getName()}<br/>🥽 ${item.getRole()}</div> 
     <div class="card-body text-dark">
       <ul class="list-group"style="width: 17rem;">
       <li class="list-group-item">ID: <span>${item.getID()}</span></li>
       <li class="list-group-item">Email: <a href="mailto:${item.getEmail()}">${item.getEmail()}</a></li>
       <li class="list-group-item">Github User: <a href="https://github.com/${item.getGitHub()}" target="_blank">${item.getGitHub()}</a></li>
     </ul>
     </div>
     </div>\n`;  

});
     interns.forEach((item)=> {
          
      dynamicHTML+=`
       <div class="card border-dark mb-3" style="min-width: 20rem; max-width: 20rem;box-shadow: 5px 5px #888888;">
       <div class="card-header text-white bg-primary" style="font-size: 1.5rem; font-weight: bold;">${item.getName()}<br/>🎓 ${item.getRole()}</div> 
       <div class="card-body text-dark">
         <ul class="list-group"style="width: 17rem;">
         <li class="list-group-item">ID: <span>${item.getID()}</span></li>
         <li class="list-group-item">Email: <a href="mailto:${item.getEmail()}">${item.getEmail()}</a></li>
         <li class="list-group-item">School: <span>${item.getSchool()}</span></li>
       </ul>
       </div>
       </div>\n`;  
});

 return topHTML + '\n' +dynamicHTML + '\n' + bottomHTML;

}

// function prompts the user on whether they want to add more team members or quit the program
function quit() {
    console.log("\n\n");
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'askAgain',
            message: 'Want to add another team member, or do you want to quit the program (hit enter for YES)?',
            default: true,
        }
    ]).then((answers)=>{

            if (answers.askAgain) {
                addToTeam();
            } else {

                // write the rendered HTML file 

                fs.writeFile(filename, renderHTML(), (error) =>
                error 
                ? console.error(error) 
                : console.log('Saving HTML and exiting program!'));
            }


    });
}

// initialize function to start the program
function init() {

      // display intro and Use instructions for the user
      console.log("\n\n*******TEAM PROFILE MANAGER**********\n\n");
      console.log("## How to Use\n");
      console.log("Please note that a team must contain at least one manager and one other member.\n");
      console.log("1. Enter the team manager information.\n");
      console.log("2. Select an Engineer or an Intern to add to the team and enter their information.\n");
      console.log("3. When prompted select Yes to keep adding team members, or No to exit the program.\n");
      console.log("\n-----Add a Team Manager-----\n");

      // initial questions to setup Team Manager profile, create the object and push to Manager array.
      inquirer.prompt(ManagerQuestions).then((answers)=>{
              
          // init manager object and add to array
          const newManager = new Manager(answers.managerName,answers.managerID,answers.managerEmail,answers.officeNumber);
          managers.push(newManager);

          addToTeam();
      });

}

init();