
    const BASE_PATH = process.env.BASE_PATH || `/exp/sample-bt-help-app`
    module.exports = {
        target: `serverless`, // Required for serverless deployment
        basePath: BASE_PATH, // See references below
        env: {
                APP_NAME: process.env.APP_NAME,
                APP_VERSION: process.env.npm_package_version,
                BASE_PATH, // See references below
                
            }
        }

