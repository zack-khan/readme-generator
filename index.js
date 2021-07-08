const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the project title?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'What is your location?',
            name: 'location',
        },
        {
            type: 'input',
            message: 'Tell us about yourself:',
            name: 'bio',
        },
        {
            type: 'input',
            message: 'What is your LinkedIn url?',
            name: 'linkedin',
        },
        {
            type: 'input',
            message: 'at is your Github url?',
            name: 'github',
        },

    ])
    .then((response) =>
        fs.writeFile('index.html', `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/style.css">
    <title>Portfolio</title>
</head>

<body>
    <h1>${response.name}</h1>
    <h2>${response.location}</h2>
    <p>${response.bio}</p>
    <footer>
        <ul>
            <li>
                <a href="https://${response.linkedin}" target="_blank">LinkedIn</a>
            </li>
            <li>
                <a href="https://${response.github}" target="_blank">Github</a>
            </li>
        </ul>
    </footer>
</body>
</html>`, (err) =>
            err ? console.error(err) : console.log('Page updated!')
        )
);