import { When, Then } from 'cucumber'
import { SSR_DISABLED, SSR_ENABLED } from '../pages/constants'
import {
  commentsItemSelector,
  commentsLoadingIndicatorSelector,
  commentsTitleSelector,
} from '../pages/ssr'
import expect from 'expect'
import { getElementByTestID, openPage } from '../utils/browser'

When(/^I open "(SSR Enabled|SSR Disabled)" page$/, async function (pageType) {
  await openPage(pageType === 'SSR Enabled' ? SSR_ENABLED : SSR_DISABLED)
})

When('I see comments section', async function () {
  await getElementByTestID(commentsTitleSelector)
})

Then(/^I should (see|not see) Loading comment indicator$/, async function (
  seeType
) {
  const shouldBeVisible = seeType === 'see'
  const isVisible =
    (await getElementByTestID(commentsLoadingIndicatorSelector, {
      wait: false,
    })) !== null
  expect(shouldBeVisible === isVisible).toBeTruthy()
})

Then('I should see comments loaded', async function () {
  expect((await getElementByTestID(commentsItemSelector)) !== null).toBeTruthy()
})
