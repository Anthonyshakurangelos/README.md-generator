const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");


const questions = () =>{ 
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'What is your project name?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project and why you created it?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What is the installation?',
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What license will this be under?',
            choices: ['None', 'MIT', 'Apache',  'Mozilla'],
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Who all contributed to this project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the purpose of the project?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'what tests have you ran?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'what is your Github user name?',
        },
    ]);
};


function init() {
    questions()
    .then((data) => {
        console.log(data);
        return fs.writeFileSync("./README.md", generateMarkdown(data));
      })
      .catch((err) => {
        if (err) {
          throw err;
        }
      });
}


init();