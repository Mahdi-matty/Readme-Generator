const inquirer = require ("inquirer");
const fs = require("fs");
const { emit } = require("process");

const generateReadMe = ({title, description, instalation, github, email, license, usage, contribution, test}) =>{ 

const licenseBadges = {
    'MIT license': 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'Boost software license': 'https://img.shields.io/badge/License-Boost%201.0-lightblue.svg',
    'GNU': 'https://img.shields.io/badge/License-GPLv3-blue.svg',
    'unlicense': 'https://img.shields.io/badge/license-Unlicense-blue.svg'
};
const licenseBadge = licenseBadges[license] || '';
const tableOfContents = `
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Test](#test)
- [Questions](#questions)
- [License](#license)
`;

    const licenseSection = `
## License

This project is licensed under the [${license}](${licenseBadges[license]}) license - see the [LICENSE.md](LICENSE.md) file for details.
`;


const readmeContent= `
![badge] (${licenseBadge})
${title}




${licenseSection}

# description
${description}

## instalation 
${instalation}

### usage
${usage}

#### contribution 
${contribution}

##### test
${test}

###### questions
- Email: ${email}
- GitHub: [${github}](https://github.com/${github})
`;

    return tableOfContents + readmeContent;
}


 inquirer
 .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the projects title??',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'how aplication can be used?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'describe the project?',
    },
    {
        type: 'input',
        name: 'instalation',
        message: 'how should it be installed?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'how other people can contribute to this project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'what is the best way to test the aplication?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'enter your email address?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'enter your github address?',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What license you are using??',
        choices: ['MIT license', 'Boost software license', 'GNU', 'unlicense']
    }
 ]).then((answers)=>{
    const readmeGenerate = generateReadMe(answers);

    fs.writeFile('redme.md', readmeGenerate, (err) =>
      err ? console.log(err) : console.log('Successfully created readme.md!')
    );
 })


