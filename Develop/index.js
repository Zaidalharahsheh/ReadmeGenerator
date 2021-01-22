// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const Generate = require('./utils/generateMarkdown');


 const questions = [

        { //title
            type: 'input',
            name: 'title',
            message: 'What is your project name?',
        },

        { //description
            type: 'input',
            name: 'description',
            message: 'Project description?',
         

        },
        {//languges
            type: 'checkbox',
            message: 'What languages are you using?',
            name: 'language',
            choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
        },
        { //installation
            type: 'input',
            name: 'installation',
            message: 'installation instructions?',
        },
        { // license
            type: 'checkbox',
            name: 'License',
            message: 'Choose a License .',
            choices: [
                "MIT",
                "Apache",
                "GPL",

            ]
        },
        { //badges 
            type: 'input',
            name: 'badge',
            message: 'please provide your badge URL here'
        },
        {
            // Aurthors
            type: 'input',
            name: 'Aurthors',
            message: 'What is the Aurthor name?',

        },
        { // screenshots 
            type: 'input',
            name: 'screenshots',
            message: 'Please provide the URL for a screenshot or a video'

        },
        { //github
            type: 'input',
            name: 'Gtihub',
            message: 'what is your github user name?',
        },
        {//Github url
            type: 'input',
            name: 'githubURL',
            message: 'What is you github URL?',
        },
        { //Email
            type: 'input',
            name: 'email',
            message: 'What is your Email address?',
        },
        {//Linkedin
            type: 'input',
            name: 'Linkedin',
            message: 'What is your Linkedin URL',

        },
];
inquirer 
.prompt(questions)
.then((data) => {
fs.writeFile("README.md",generateMarkdown(data),function(err) {
    if(err) {
        throw err;
    };
console.log("Readme File Created!!");
});
});
