// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

function init() {

const generateREADMEmd = ({ title, description, motivation, installation, usage, credits, license }) =>

`
# ${title}

## Description
${description}

## Installation
 ${installation}

## Usage
${usage}

## Credits 
${credits}

## License
${license}
`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your title name?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'what is your description of this app?',
    },
    {
      type: 'input',
      name: 'motivation',
      message: 'What is your motivation?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'usage? Example..([alt text(assets/images/screenshot.png)]',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'List your collaborators, if any, with links with their GitHub',
    },
    {
      type: 'list',
      message: 'Add a license',
      name: 'License',
      choices: ['Apache', 'Boost', 'MIT', 'Mozilla', 'ISC', 'IBM'],
    },
  ])
  .then((answers) => {
    const READMEmdFile = generateREADMEmd(answers);

    fs.writeFile('generateREADME.md', READMEmdFile, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
// TODO: Create a function to initialize app
 }

// Function call to initialize app
init();
