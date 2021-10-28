# Env setup
 
## Why do we need this?
 
With release of NextJs 9.4, we can no longer use dotenv package to locate build environments.
NextJs provides out of box solution to locate .env files, but it is limited to only three environments @see [Default Environment Variables](https://nextjs.org/docs/basic-features/environment-variables#default-environment-variables)
 
As with nextJs out of box solution we can only build applications with production only .env.
Setup script will copy the correct env file derived from NODE_ENV in the project root and name it **.env.production** before running the build.
 