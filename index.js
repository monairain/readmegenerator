// Required modules
const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username? 🐙'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? 📩'
    },
    {
        type: 'input',
        name: 'title',
        message: "What is your project's name?"
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license?',
        choices: ["MIT", "APACHE 2.0", "GPL", "None"]
    },    
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        default: 'npm i'   // Default installation command
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to carry out tests?',
        default: 'npm test' // Default testing command
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What information should users be aware of when utilizing this repository?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What should contributors know about this repository?',
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    // Determine the full path of the output file
    const filePath = path.join(process.cwd(), fileName);
    // Write the data to the specified file
    return fs.writeFileSync(filePath, data);
}

// Function to initialize the program
function init() {
    // Use inquirer to prompt the user with questions
    inquirer.prompt(questions).then((response) => {
        console.log('\nGenerating README-gen.md...');
        writeToFile('README-gen.md', generateMarkdown({ ...response }));
        console.log('README-gen.md successfully generated!\n');

        // Display the user's input
        console.log('Your input:\n');
        for (const key in response) {
            if (response.hasOwnProperty(key)) {
                console.log(`${key}: ${response[key]}`);
            }
        }
    });
}

// Call the function to initialize the program
init();
