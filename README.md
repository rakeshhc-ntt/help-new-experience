# ⛔️ DEPRECATED
Please use https://github.com/BTplc/create-bt-app

# NextJS Apollo example

[![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/)
![Deploy App to Lambda AWS](https://github.com/BTplc/bt-group-next-apollo-example/workflows/Deploy%20App%20to%20Lambda%20AWS/badge.svg)
![Built Lint Test](https://github.com/BTplc/bt-group-next-apollo-example/workflows/Built%20Lint%20Test/badge.svg?event=push)

![Coverage lines](https://raw.githubusercontent.com/BTplc/bt-group-next-apollo-example/develop-coverage/.coverage/badge-lines.svg?token=ACFZSHXUSLRO2WLIYK43KX26WUF3M)
![Coverage functions](https://raw.githubusercontent.com/BTplc/bt-group-next-apollo-example/develop-coverage/.coverage/badge-functions.svg?token=ACFZSHTF4D5PWKITEF2BC7C6WUF3Q)
![Coverage branches](https://raw.githubusercontent.com/BTplc/bt-group-next-apollo-example/develop-coverage/.coverage/badge-branches.svg?token=ACFZSHV6CNYRJPTJKFESCM26WUFXS)
![Coverage statements](https://raw.githubusercontent.com/BTplc/bt-group-next-apollo-example/develop-coverage/.coverage/badge-statements.svg?token=ACFZSHWWPQTCRBDDHNYSUL26WUF3S)

## Why should I use this repo?
This boilerplate will save you days of setup and will enable you to:
 - build BT branded web applications with latest good practices
 - deploy to BT AWS infrastructure with zero configuration 
 - fetch data from BT backend services


1. Create new template
2. Setup your local development
3. Push your changes and create PR

Done! ✅ It all will be automatically deployed to AWS, checking your code against all BT best practices! Your final url link will be shared in your Issue/PR.
After successful approval process it will be merge to master and automatically creates release notes. Publish the release to automatically deploy to production.

### Read more:
- [More about FE Framework](https://bt-docs.now.sh/docs/boilerplate/intro)
- [Coding Style Guidelines](https://bt-docs.now.sh/docs/development/code-style)
- [Ui-Kit](https://bt-docs.now.sh/docs/ui-kit/intro)
- [CI/CD](https://bt-docs.now.sh/docs/ci-cd/intro)
- [GraphQL](https://bt-docs.now.sh/docs/graphql/intro)
- [Development](#Development)
- [Video 🎥](https://fe-docs-storage.s3.eu-west-2.amazonaws.com/BT+FE+Boilerplate.mp4)

### Features

- Initial project setup for React with NextJS ✅
- BT Ui-kit ✅ Check our [Storybook](https://bt-ui-kit-storybook.now.sh/?path=/story/button--all)
- CI/CD pipelines for Staging/Production environment on AWS ✅
- GraphQL Data Layer to fetch data from BT Backend ✅
- Example Form for comments with and GraphQL ✅
- Example layout and basic components ✅
- Example navigation ✅
- Quality checks configuration for local and remote development ✅
- Sever Side Rendering and Static Pages setup ✅

### Coming soon
- Check our [Radmap](https://bt-docs.now.sh/docs/roadmap)

## Development

### Install it and run:

## Authenticating to GitHub Packages

You need an access token to install packages from GitHub Packages. 

[How to generate Access Token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)

You can authenticate to GitHub Packages with npm by either editing your per-user ~/.npmrc file to include your personal access token or by logging in to npm on the command line using your username and personal access token.

To authenticate by adding your personal access token to your ~/.npmrc file, edit the ~/.npmrc file for your project to include the following line, replacing TOKEN with your personal access token. Create a new ~/.npmrc file if one doesn't exist.

```
//npm.pkg.github.com/:_authToken=TOKEN
```

To authenticate by logging in to npm, use the npm login command, replacing USERNAME with your GitHub username, TOKEN with your personal access token, and PUBLIC-EMAIL-ADDRESS with your email address.

```
$ npm login --registry=https://npm.pkg.github.com --scope=@btplc
> Username: USERNAME
> Password: TOKEN
> Email: PUBLIC-EMAIL-ADDRESS
```

```bash
yarn
```

### Run local

```bash
yarn dev
```
**Note:** Loads env variables from .env.local

### Build

```bash
yarn build
yarn start
```
**Note:** next build does not copy public folder. If your app has public folder, change your buold script to following:
```
"build": "next build && cp -rf ./public ./.next",
```

#### Build Environments

**.env.local**
Uses to run/build locally

**.env.development**
Uses to build for branches and pull requests

**.env.staging**
Uses to build for staging environment

**.env.production**
Uses to build for production environment

[Details here](/envs)

### Deploy

Commiting your code to feature/fix branch will automatically trigger deployment and sends link to the issue and PR

### Routing

Next.js has a file-system based router built on the concept of pages.

When a file is added to the pages directory it's automatically available as a route.

The files inside the pages directory can be used to define most common patterns.

Index routes
The router will automatically route files named index to the root of the directory.

`pages/index.js` → `/`
`pages/blog/index.js` → `/blog`

The Next.js router allows you to do client-side route transitions between pages, similarly to a single-page application.

A React component called `Link` is provided to do this client-side route transition.

```tsx
import Link from 'next/link'

function Home() {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </li>
    </ul>
  )
}

export default Home
```

### Server-side rendering

You can render your entire React-based Apollo application on a Node server using rendering functions built into React Apollo. These functions take care of the job of fetching all queries that are required to rendering your component tree. Typically you would use these functions from within a HTTP server such as Express.

No changes are required to client queries to support this, so your Apollo-based React UI should support SSR out of the box.

To use SSR wrap your page component with this code:

```tsx
import { withApollo } from '../src/services/graphql/apollo'
import ExamplePage from '../src/components/example-page/example-page'

export default withApollo({ ssr: true })(ExamplePage)
```

## Checks

### Main:

✅ SSR 

✅ Routing

✅ Backend Connection


### Git checks:

✅ husky for staged files:

  1. pre-commit:

    ✅ lint

    ✅ prettier

  2. pre-push:

    ✅ lint

    ✅ tsc (for TypeScript)
    
    ✅ test
      
✅ Git merge approval checks

✅ Github build check

✅ Deploy to Vercel

✅ Approval check


#### Main branch:
  ✅ develop
 
### CI/ CD
 
Quality gates:

  ✅ lint

  ✅ test

  ✅ code coverage
 
 Staging:
 **URL format: staging-REPO_NAME_SLUG-REPO_ORG_NAME_SLUG.ps.intdigital.ee.co.uk/**
 Following is the example where REPO_NAME_SLUG=bt-group-next-apollo-example and REPO_ORG_NAME_SLUG=btplc 
  ✅ Staging domain [https://staging-bt-group-next-apollo-example-btplc.ps.intdigital.ee.co.uk/]

  ✅ Auto deployment for staging
 
 Production:
 **URL format: REPO_ORG_NAME_SLUG-REPO_NAME_SLUG-production.ps.intdigital.ee.co.uk/**
 Following is the example where REPO_NAME_SLUG=bt-group-next-apollo-example and REPO_ORG_NAME_SLUG=btplc 
 

  ✅ Production domain [https://btplc-bt-group-next-apollo-example-production.ps.intdigital.ee.co.uk/]

  ✅ Auto deployment
