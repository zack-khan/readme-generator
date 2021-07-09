// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = ['Enter your Github username: ', 'Enter your email address: ', 'What is the project title?', 'Describe the project: ', 'Describe how to install the project: ', 'Describe how to use the project: ', 'Describe how to contribute to the project: ', 'Describe how to test the project: ', 'Choose a license: '];

// TODO: Create a function to write README file
const filename = "yourREADME.md"
function writeToFile(filename, response) {
    switch (response.license) {
        case 'MIT':
            license = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            break;
        case 'Apache':
            license = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
            break;
        case 'Creative Commons':
            license = '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)';
            break;
    }
    fs.writeFile(filename,
`# ${response.title}
## Table of Contents
1. [Description](#Description)
2. [Installation](#Installation)
3. [Use](#How to Use)
4. [Contribute](#How to Contribute)
5. [Test](#How to Test)
## Description
${response.description}
## Installation
${response.installation}
## How to Use
${response.use}
## How to Contribute
${response.contribute}
## How to Test
${response.test}
## Questions
My Github profile: https://github.com/${response.username}
My Email Address: ${response.email}
### License
${license}`, (err) =>
        err ? console.error(err) : console.log('Page updated!')
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'username',
        },
        {
            type: 'input',
            message: questions[1],
            name: 'email',
        },
        {
            type: 'input',
            message: questions[2],
            name: 'title',
        },
        {
            type: 'input',
            message: questions[3],
            name: 'description',
        },
        {
            type: 'input',
            message: questions[4],
            name: 'installation',
        },
        {
            type: 'input',
            message: questions[5],
            name: 'use',
        },
        {
            type: 'input',
            message: questions[6],
            name: 'contribute',
        },
        {
            type: 'input',
            message: questions[7],
            name: 'test',
        },
        {
            type: 'select',
            message: questions[8],
            name: 'license',
            choices: ['MIT', 'Apache', 'Creative Commons'],
        },

    ])
    
    .then((response) =>
        writeToFile(filename, response)
);
}

// Function call to initialize app
init();
