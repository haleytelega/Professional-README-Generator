const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the project title?'
        },
        {
            type: 'input',
            name: 'motivation',
            message: 'What was your motivation?'
        },
        {
            type: 'input',
            name: 'Why',
            message: 'Why did you build this project:'
        },
        {
            type: 'input',
            name: 'problem',
            message: 'What problem did it solve?'
        },
        {
            type: 'input',
            name: 'learn',
            message: 'What did you learn?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub username:'
        },
        {
            type: 'input',
            name: 'link',
            message: 'Please enter the GitHub link your project:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email:'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use.'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What is the license?',
            choices: ["GNU AGPLv3", "GNU GPLv3","GNU LGPLv3", "Mozilla Public License 2.0", 
            "Apache License 2.0", "MIT License", "Boost Software License 1.0", "The Unlicense"]
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'How can you contribute?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please write tests:',
        }
    ])
};


// // TODO: Create a function to write README file
// function writeToFile(filename, data) {
//     fs.writeFile(filename, data, (err) => {
//         if (err) {
//             return console.log(err);
//         }
//     })
// };

// // // TODO: Create a function to initialize app
function init () {
    inquirer.prompt(questions)
    // .then(function (userInput) {
    //     writeToFile(`README.md`, generateMarkdown(userInput));
    // });
};

// // // Function call to initialize app
init();
