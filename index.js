// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Create an array of questions for user input
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
        type: 'list',
        name: 'license',
        message: 'Is your application using a license?',
        choices: ['Apache 2.0', 'Boost', 'BSD 3', 'BSD 2', 'GNU', 'MIT', 'Mozilla Public 2.0', 'Eclipse Public 2.0', 'No license', 'Other'],
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

// Create a function to write README file
const generateREADME =({title, description, installation, usage, license, contribution, testing, gitHub, email}) =>
`# ${title}

## Description

${description}

### Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## License

${license}

## Contributing
    
${contribution}

## Tests

${testing}

## Questions

Have any questions?

Reach out on GitHub: https://github.com/${gitHub}

or

Email me: ${email} `;

// Initialize questions through inquirer
inquirer.prompt(questions)
.then((answers) => {
    // console.log(answers.license);
    // if(answers.license === 'Apache 2.0') {
    //    let renderLicense = 
    // }
    // Once the user has answered all questions, store input in the README format, and write a new md file with that content titled README.md
    const readMeContent = generateREADME(answers);
    
    fs.writeFile('README.md', readMeContent, (err) =>
    err ? console.log(err) : console.log('Created README.md file!!')
    );
});








// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
