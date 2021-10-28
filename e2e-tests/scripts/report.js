const report = require('multiple-cucumber-html-reporter')
const { jsonDir, htmlDir } = require('../configs')

generateReport()

function generateReport() {
  report.generate({
    displayDuration: true,
    pageTitle: 'Cucumber reports',
    reportName: 'Cucumber reports',
    pageFooter: '<div class="created-by">BT.com</div>',
    jsonDir,
    reportPath: htmlDir,
  })
}
