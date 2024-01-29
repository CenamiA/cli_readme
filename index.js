const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user

    const questions = [

        {
          type: "input",
          name:"title",
          message: "What is your project name?",
          validate: function(answer){
              if (answer === "") {
                  return "Invalid input, enter a project name to proceed"
              }return true    
          }
  
        },
  
        {
          type: "input",
          name:"description",
          message: "Please provide a short description of your project",
          validate: function(answer){
              if (answer === "") {
                  return "Invalid input, please provide a short description of your project "
              }return true    
          }
        },
  
          {
          type: "input",
          name:"usage",
          message: "Please provide instructions and examples on how to use your project."
        },
  
        {
          type: "list",
          name:"license",
          message: "Please choose a license for your project",
          choices: ["MIT", "APACHE 2.0", "GNU 3.0", "BSD 3", "None"],
          default: "None"
        },
  
          {
          type: "input",
          name:"contribution",
          message: "Please provide guidelines on how to contribute to your project",
          default: "N/A"
        },
  
        {
          type: "input",
          name:"dependencies",
          message: "What command should be run to install dependencies?",
          default: "npm install",
        },
  
        {
          type: "input",
          name:"tests",
          message: "What command should be run to run tests?",
          default: "npm test"
        },
  
        {
          type: "input",
          name:"credits",
          message: "List your collaborators if any, with links to their Github profiles ",
          default: "N/A"
        },
  
        {
          type: "input",
          name:"github",
          message: "What is your Github username?",
          validate: function(answer){
              if (answer === "") {
                  return "Invalid input, please provide your Github username to proceed"
              }return true    
          }
        },
  
        {
          type: "input",
          name:"email",
          message: "What is your email address?",
          validate: function(answer){
              if (answer === "") {
                  return "Invalid input, please provide your email address to proceed"
              }return true    
          }
        },
  
  ];
  

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=>{
     if (err){
        console.log(err)
     } else{
        console.log("Your README file is ready!")
     }
    })
}

console.log("README Generator");

// function to initialize program
function init() {
    inquirer
    .prompt(questions)/* Pass your questions in here */
     
    .then((answers) => {
      // Use user feedback for... whatever!!
      console.log(answers)
      const readmeContent = generateMarkdown(answers);
      writeToFile("myREADME.md",readmeContent)
    })
}

// function call to initialize program
init();
