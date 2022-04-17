// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if (!license) {
//   return '';
// }
//   if (data.license === "GNU AGPLv3") {
//     licenseLink =  "https://choosealicense.com/licenses/agpl-3.0/";
//   }
// }
// console.log(licenseLink)
// if (license !== "none") {
//   return `![GitHub license](https://choosealicense.com/licenses/${license})`;
// }
// return "";
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   if (!license) {
//     return '';
// }
//   return `
//   ## License
//   License used: ${data.license} 
//   `
// };

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}
  # ${data.title}

  ## Description
  Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
  What was your motivation? ${data.motivation}
  Why did you build this project? ${data.Why}
  What problem does it solve? ${data.problem}
  What did you learn? ${data.learn}

  ## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

  ## Installation
  What are the steps required to install your project? ${data.installation}

  ## Usage
  Provide instructions and examples for use: ${data.usage}

  ## Contributing
  List your collaborators: ${data.contributing}

  ## Tests
  ${data.tests}

  ## License
  License used: ${data.license}

  ## Questions
  GitHub Username: ${data.github}
  GitHub Profile: ${data.link}
  Please feel free to reach out to me at: ${data.email}

`;
}

module.exports = generateMarkdown;
