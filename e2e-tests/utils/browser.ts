import puppeteer, { Browser, Page } from 'puppeteer'

let browser: Browser
let page: Page

const HEADLESS = process.env.HEADLESS !== 'false'

export async function openPage(url: string) {
  if (!browser) {
    browser = await puppeteer.launch({ headless: HEADLESS })
  }
  page = await browser.newPage()
  await page.goto(url)
}

export async function closePage() {
  await page.close()
}

export async function closeBrowser() {
  await browser.close()
  browser = undefined
}

export async function waitForNavigation() {
  await page.waitForNavigation()
}

export async function getCurrentUrl(): Promise<string> {
  return page.url()
}

export async function getElementByTestID(testID, options?: { wait?: boolean }) {
  if (!options || options.wait === undefined || options.wait === true) {
    await page.waitForSelector(testID)
  }
  return page.$(testID)
}

export async function getElementByXPAth(xPath) {
  const [button] = await page.$x(xPath)
  return button || null
}
