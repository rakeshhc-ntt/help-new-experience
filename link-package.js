const util = require('util')

const exec = util.promisify(require('child_process').exec)
const parseArgs = require('minimist')
const chalk = require('chalk')

async function linkLibrary(packageName, hasReact) {
  try {
    const { stdout, stderr } = await exec(
      `sh link-package.sh ${packageName} --react=${hasReact}`
    )
    console.log(chalk.green(stdout))
    if (stderr) console.error(chalk.red(stderr))
  } catch (err) {
    console.error(chalk.red(err))
  }
}
(async () => {
  try {
    const argv = parseArgs(process.argv.slice(2))
    const hasReact = argv.react
    await linkLibrary(argv._[0], hasReact)
    await console.log('Finished linking package')
    process.exit(0)
  } catch (err) {
    console.error(chalk.red(err))
    process.exit(1)
  }
})()
