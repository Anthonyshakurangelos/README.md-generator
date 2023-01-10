// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");



const questions = () => {
  return inquirer.prompt([
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
      type: 'checkbox',
      message: 'Add a license',
      name: 'License',
      choices: ['Apache', 'Mozilla','MIT', 'None'],
    },
  ]);
};
function init() {
   questions()
  .then((data) => {
    
    return fs.writeFileSync('./README.md', generateMarkdown(data));
  })
  .catch((err) => {
    if (err) {
      throw err;
    }
  });
}
// TODO: Create a function to initialize app

// Function call to initialize app
init();
