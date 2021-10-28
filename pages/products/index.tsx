import React from 'react'
import Link from 'next/link'
import { Stack, Divider, Box, Text } from '@btplc/ui-kit'
import App from '../../src/components/app/app'
import Head from 'next/head'
import Header from '../../src/components/Header'

export default ({ data }) => {
  return (
    <App>
      <Head>
        <title>Next.js, Apollo - SSG</title>
      </Head>
      <Stack space="large">
        <Divider />
        <Header />
        <Divider />
        <Text variant="h3">
          Static Site Generation (SSG) Example{' '}
          <span role="img" aria-label="rocket">
            🚀
          </span>
        </Text>
        {data.map(({ slug, name }) => (
          <Box key={slug}>
            <Link href="products/[product]" as={`products/${slug}`}>
              <a href="products/[product]">{name}</a>
            </Link>
          </Box>
        ))}
        <Divider />
      </Stack>
    </App>
  )
}

export async function getStaticProps(context) {
  const data = require('./data.json')
  return {
    props: {
      data,
    },
  }
}
