const { mkdirSync, existsSync } = require('fs')

const reportDir = `${__dirname}/reports`
const dirs = {
  jsonDir: `${reportDir}/json`,
  htmlDir: `${reportDir}/html`,
}
// Create dirs if not exists
Object.values(dirs).forEach((dir) => {
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true })
})

module.exports = {
  ...dirs,
}
