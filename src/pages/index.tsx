import React from 'react'
import Head from 'next/head'
import { Stack, Text, Divider, Link, Button, Box } from '@btplc/ui-kit'
import { Header } from '@common'
import { App } from '@src/app'
import { NextSeo } from 'next-seo'

const WelcomePage: React.FC = () => (
  <App>
    <Head>
      <title>Next.js - Welcome</title>
    </Head>
    <NextSeo />
    <Stack space="large">
      <Divider />
      <Header />
      <Divider />
      <Text variant="h3">
        This application is using Next.js and Apollo Client to showcase
        capabilities of those frameworks and to bootstrap a simple form
        application{' '}
        <span role="img" aria-label="rocket">
          🚀
        </span>
      </Text>
      <Divider />
      <Text variant="h4">
        <span role="img" aria-label="route">
          🛣️
        </span>{' '}
        Routing:
      </Text>
      <Text variant="body">
        Next.js has a file-system based router built on the concept of pages.
        When a file is added to the pages directory it&apos;s automatically
        available as a route. The files inside the pages directory can be used
        to define most common patterns.
      </Text>
      <Link href="/example">
        <Button variant="primary" fill="solid">
          Press here to navigate to example page
        </Button>
      </Link>
      <Divider />
      <Text variant="h4">
        <span role="img" aria-label="server">
          🖥️
        </span>{' '}
        Server-side rendering(SSR):
      </Text>
      <Text variant="body">
        You can render your entire React-based Apollo application on a Node
        server using rendering functions built into React Apollo. These
        functions take care of the job of fetching all queries that are required
        to rendering your component tree. Typically you would use these
        functions from within a HTTP server such as Express.
      </Text>
      <Text variant="h4">
        <span role="img" aria-label="rocket">
          🚀
        </span>{' '}
        Static assets:
      </Text>
      <Text variant="body">
        You can add you assets inside public folder, and access them here
      </Text>
      <Box>
        <img src={`${process.env.BASE_PATH}/CodeACake.jpg`} alt="Code a Cake" />
      </Box>
      <Divider />
    </Stack>
  </App>
)

export default WelcomePage
