const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'What is the project title?',
            validate: titleInput => {
                if (titleInput){
                    return true;
                } else {
                    console.log("What is the project title?")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'motivation',
            message: 'What was your motivation?',
            validate: motivationInput => {
                if (motivationInput) {
                    return true;
                } else {
                    console.log("What was your motivation?");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Why',
            message: 'Why did you build this project:',
            validate: WhyInput => {
                if (WhyInput) {
                    return true;
                } else {
                    console.log("Why did you build this project?");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'problem',
            message: 'What problem did it solve?',
            validate: (problemInput) => {
                if (problemInput) {
                    return true;
                } else {
                    console.log("What problem did it solve?");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'learn',
            message: 'What did you learn?',
            validate: (learnInput) => {
                if (learnInput) {
                    return true;
                } else {
                    console.log("What learn did you learn?");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub username:',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter your GitHub username");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'link',
            message: 'Please enter the GitHub link your project:',
            validate: linkInput => {
                if(linkInput) {
                    return true;
                } else {
                    console.log("Please enter the GitHub link to your project");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email:',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter your email");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?',
            validate: installationInput => {
                if (installationInput){
                    return true;
                } else {
                    console.log("What are the steps required to install your project?");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use.',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log("Provide instructions and examples for use");
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What is the license used?',
            choices: ["GNU AGPLv3", "GNU GPLv3","GNU LGPLv3", "Mozilla Public License 2.0", 
            "Apache License 2.0", "MIT License", "Boost Software License 1.0", "The Unlicense"],
            validate: licenseCheckbox => {
                if (licenseCheckbox) {
                    return true;
                } else {
                    console.log("What is the license used?");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'How can you contribute?',
            validate: contributeInput => {
                if (contributeInput) {
                    return true;
                } else {
                    console.log("How can you contribute?");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please write tests:',
            validate: testsInput => {
                if (testsInput) {
                    return true;
                } else {
                    console.log("Please write tests:");
                    return false;
                }
            }
        }
];


// // TODO: Create a function to write README file
function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if (err) {
            return console.log(err);
        }
    })
};

// // // TODO: Create a function to initialize app
function init () {
    inquirer.prompt(questions)
    .then(function (userInput) {
        writeToFile(`README.md`, generateMarkdown(userInput));
    });
};

// // // Function call to initialize app
init();
