import { getElementByXPAth } from '../utils/browser'

export async function clickOnNavigationLink(text: string) {
  const button = await getElementByXPAth(`//button[contains(., '${text}')]`)
  if (button) {
    await button.click()
  }
}
