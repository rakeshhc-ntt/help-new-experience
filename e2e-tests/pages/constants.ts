const BASE_URL = process.env.APP_URL || 'http:localhost:3000'
console.log(BASE_URL)

export const HOMEPAGE = BASE_URL
export const SSR_ENABLED = `${BASE_URL}/ssr-enabled`
export const SSR_DISABLED = `${BASE_URL}/ssr-disabled`
