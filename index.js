// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is your project's title?",
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a brief desctription of your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Describe the installation instructions',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Outline the usage information',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Outline the contribution guidelines',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Detail testing information',
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    }

];

const generateREADME =({title, description, installation, usage, contribution, testing, gitHub, email}) =>
    `## ${title}

    ## Description
    
    ${description}
    
    ### Table of Contents
    
    1. [Installation](#installation)
    2. [Usage](#usage)
    3. [License](#)
    4. [Contributing](#contribution)
    5. [Tests](#testing)
    6. [Questions](#gitHub)
    
    ## Installation
    
    ${installation}
    
    ## Usage
    
    ${usage}
    
    ## Contributing
    
    ${contribution}
    
    ## Tests
    
    ${testing}
    
    ## Questions
    
    Have any questions?
    
    ${gitHub}
    
    ${email} `;

    
    // TODO: Create a function to write README file
    inquirer.prompt(questions)
        .then((answers) => {
            const readMeContent = generateREADME(answers);
    
            fs.writeFile('README.md', readMeContent, (err) =>
                err ? console.log(err) : console.log('Created README.md')
            );
        });
    
// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
