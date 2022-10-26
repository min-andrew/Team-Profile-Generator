function generateMarkdown(data) {
    return `# ${data.title}
    ${renderLicenseSection(data.license)}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  * [Installation](#installation)
  
  * [Usage](#usage)
  
  * [License](#license)
  
  * [Contribution](#contribution)
  
  * [Tests](#tests)
  
  * [Questions](#questions)
          
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${data.license}
  
  ## Contribution
  ${data.contribution}
  
  ## Tests
  ${data.test}
  
  ## Questions
  If you have any questions, please reach me at:
  
  [Github](https://github.com/${data.github})
  
  Email: ${data.email}
  `;
  };
  
  module.exports = generateMarkdown;