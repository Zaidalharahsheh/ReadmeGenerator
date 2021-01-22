if (license !== 'None'){
  return `\n* [License](#License)\n`;
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license!=='None') {
    return `##Licens
    This project is licensed under the ${License} License. `;
   }
   return
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}.

 ## description
  ${ data.description }
##  Contents
    - [description](#description)
    - [Installation](#Installation)
    - [language](#language)
    - [License](#License)
    - [badge](#badge)
    - [Aurthors](#Aurthors)
    - [screenshots](#screenshots)
    - [Github](#Github)
    - [GithubURL](#githubURL)
    - [Linkedin](#Linkedin)

## Installation
  ${ data.installation }
        ## language
  ${ data.language }

## License
  ${ data.license }

## badge
  ${ data.badge }


## Aurthors
  ${ data.Aurthors }


## screenshots
  ${ data.screenshots }


## Github
  ${ data.Github }

## GithubURL
  ${ data.GithubURL }

## Linkedin
  ${ data.Linkedin }
`;
}

module.exports = generateMarkdown;









