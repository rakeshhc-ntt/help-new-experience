const testFolder = './e2e-tests'
const { jsonDir } = require(`${testFolder}/configs.js`)
const profiles = {
  default: [
    testFolder,
    '-require-module ts-node/register',
    `-r ${testFolder}/**/*.ts`,
    `-r ${testFolder}/*.ts`,
    `-f json:${jsonDir}/cucumber_report.json`,
  ].join(' '),
}

module.exports = profiles
