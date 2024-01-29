
// function to return badges

function licenseBadge(license) {

  if (license === "None") {
    return "License: None";
  } else if (license == "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)]`;
  } else if(license == "Apache 2.0"){
    return `[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-yellow.svg)]`;
  } else if (license == "GNU"){
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-red.svg)]`;
  } else if(license == "BSD 3"){
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-lightblue.svg)]`;
  }

}



// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
