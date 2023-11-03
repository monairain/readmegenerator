// function to generate markdown for README
function renderLicenseBadge(license) {
  if(license !== "None") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
return ''
}

function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

`;
}

module.exports = generateMarkdown;
