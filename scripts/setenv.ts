const { writeFile } = require('fs');
const { argv } = require('yargs');

// read environment variables from .env file
require('dotenv').config();

// read the command line argument passed
// with yargs
const environment = argv.environment;
const isProduction = environment === 'prod';

if (!process.env.API_KEY) {
  console.log('All the required environment variables were not provided.');
  process.exit(-1);
}

const targetPath = isProduction
  ? `./src/environments/environment.prod.ts`
  : `./src/environments/environment.ts`;

// we have access to our environment variables
// in the process.env object
const environmentFileContent = `
export const environment = {
  production: ${isProduction},
  API_KEY: '${process.env.API_KEY}',
  countryAPI: '${process.env.countryAPI}',
  weatherAPI: '${process.env.weatherAPI}',
  countryFields: ${process.env.countryFields}
};
`;

// write the content to the respective file
writeFile(targetPath, environmentFileContent, function (err) {
  if (err) {
    console.log(err);
  }

  console.log(`Wrote variables to ${targetPath}`);
});
