
// function to return badges

function licenseBadge(license) {

  if (license === "None") {
    return "License: None";
  } else if (license == "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)]`;
  } else if(license == "APACHE 2.0"){
    return `[![License: APACHE 2.0](https://img.shields.io/badge/License-Apache_2.0-yellow.svg)]`;
  } else if (license == "GNU"){
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-red.svg)]`;
  } else if(license == "BSD 3"){
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-lightblue.svg)]`;
  }

}

// Function to return license urls

function licenseLink(license) {
  if (license === "None") {
    return "None";
  } else if (license == "MIT") {
    return `Notice: https://opensource.org/licenses/MIT`;
  } else if(license == "Apache 2.0" ){
    return `Notice: https://opensource.org/licenses/Apache-2.0`;
  } else if(license == "GNU"){
    return `Notice: https://www.gnu.org/licenses/gpl-3.0`;
  } else if(license == "BSD 3"){
    return `Notice: https://opensource.org/license/bsd-3-clause/`;
  } 
}

// Function for license notice which will lead to license websites

function licenseNotice(license) {
  if (license === "None") {
    return "";
  } else {
    return `
  ${licenseLink(license)} 
    `
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${licenseBadge(data.license)}

## Table of Contents
* [Description](#description)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Dependencies](#dependencies)
* [Tests](#tests)
* [Credits](#credits)
* [Questions](#questions)

## Description
${data.description}
## Usage
${data.usage}
## License
${data.license}\n
${licenseNotice(data.license)}
## Contribution 
${data.contribution}
## Dependencies
${data.dependencies}
## Tests
${data.tests}
## Credits
${data.credits}
## Questions
GitHub: ${data.github} (https://github.com/${data.github})\n
Email address: ${data.email}

`;
}

module.exports = generateMarkdown;
