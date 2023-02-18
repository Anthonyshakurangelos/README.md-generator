function renderLicenseBadge(license) {
   
  if (license === 'MIT'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }  
  else if (license === 'None') {
      return '';
    }  
  else if (license === 'Apache') {
      return '[![license](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    } 
  else if (license === 'Mozilla') {
    return '[![license: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  }
};  




// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectName}
  ## License
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  - [License](#License)
  - [Description](#Description)
  - [Installation](#installation)
  - [Usage](#Usage)
  - [Credits](#credits)
  - [Tests](#Tests)
  - [Questions](#Questions)
  
  ## Installation
  ${data.installation}
  ## Usage
  ![alttext](./assets/images/{add name of picture here})
  ${data.usage}
  
  ## Credits
  ${data.credits}
  ## Tests
  ${data.tests}
  ## Questions
  If you would like to ask me any questions. Contact me at my email address below or you can check out my Github profile.
  - Email-${data.email}
  - Github user name- ${data.githubUsername}
  
  
`;
}

module.exports = generateMarkdown;


// # README.md Generator

// ## Description
// This application is to generate a README file in the command line.

// ## Installation
//  Use the "index.js" and generateMarkdown.js". Once you have that, go to the command line and run  "npm ij " and "npm install inquirer@8.2.4". Once that is done run "node index.js" Here is a video demo.
//  https://watch.screencastify.com/v/raGN3mEkDmOu91BX4O0m

// ## Usage
// *npm i inquirer@8.2.4
// *npm install

// ## Credits 
// N/A

// ## License
// MIT