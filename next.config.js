module.exports = {
  target: 'serverless',
  env: {
    BUILD_NUMBER: process.env.GITHUB_RUN_NUMBER || 'dev',
    API_HOST: process.env.API_HOST,
    BASE_URL: process.env.BASE_URL
  },
}
