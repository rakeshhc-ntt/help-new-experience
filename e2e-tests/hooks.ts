import { After, AfterAll } from 'cucumber'
import { closeBrowser, closePage } from './utils/browser'

After(async function () {
  await closePage()
})

AfterAll(async function () {
  closeBrowser()
})
