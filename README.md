# Team Profile Generator

## Description

A Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person as per the Design Requirements below.

## How to Use

The application is invoked by using the following command:

```bash
node index.js
```

The user will follow the prompts when presented. Please note that a team must contain at least one manager and one other member.

1. Enter the team manager information when prompted.

2. Select an Engineer or an Intern to add to the team and enter their information.

3. When prompted select Yes to keep adding team members, or No to exit the program.

4. teamprofile.html file is generated in the dist/ directory


## Design Requirements:

### User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

### Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

### Mock-Up

The following image shows a mock-up of the generated HTML’s appearance and functionality:

![HTML webpage titled “My Team” features five boxes listing employee names, titles, and other key info.](./Assets/10-object-oriented-programming-homework-demo.png)


## Screenshots

* Sample HTML output:

![sample HTML output](./Assets/Team%20Profile%20sample%20HTML%20output.png)

* Unit test results:
![JEST test results](./Assets/Team%20Profile%20Generator%20JEST%20test%20results.png)

## Technology

Application uses [Jest](https://www.npmjs.com/package/jest) for running the unit tests and [Inquirer](https://www.npmjs.com/package/inquirer/v/8.2.4) for collecting input from the user. The application utilizes the following directory structure:

```md
.
├── __tests__/             //jest tests
│   ├── Employee.test.js
│   ├── Engineer.test.js
│   ├── Intern.test.js
│   └── Manager.test.js
├── dist/                  // rendered output (HTML) and CSS style sheet      
├── lib/                   // classes
├── src/                   // HTML template helper code 
├── .gitignore             // indicates which folders and files Git should ignore
├── index.js               // runs the application
└── package.json           
```

## Testing

All classes in __tests__/ were unit tested using Jest and have passed as shown in in Screenshots section above.

## Deployment

### A walkthrough video:

https://drive.google.com/file/d/1ty2D7WojR2iT315v8VvjHEAzz3kH6zVe/view?usp=sharing

### Sample HTML file generated using your application (featured in the VIDEO):

[Sample html file](./dist/teamprofile.html)

### GitHub repository:

https://github.com/pav1593/Team-Profile-Generator



