import { When, Then } from 'cucumber'
import { HOMEPAGE } from '../pages/constants'
import { clickOnNavigationLink } from '../pages/common'
import expect from 'expect'
import { getCurrentUrl, openPage, waitForNavigation } from '../utils/browser'

When('I open homepage', async () => {
  await openPage(HOMEPAGE)
})

When(/^I click on header button "(.*)"$/, async function (headerButtonText) {
  await clickOnNavigationLink(headerButtonText)
  await waitForNavigation()
})

Then(/^I should be navigated to url ending with "(.*)"$/, async function (
  endOfUrl
) {
  expect((await getCurrentUrl()).endsWith(endOfUrl)).toBeTruthy()
})
