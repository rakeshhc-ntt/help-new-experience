import React from 'react'
import { Stack, Divider, Text } from '@btplc/ui-kit'
import App from '../../src/components/app/app'
import Head from 'next/head'
import Header from '../../src/components/Header'

interface Data {
  data: {
    name: string
    description: string
  }
}

export default ({ data }: Data) => {
  return (
    <App>
      <Head>
        <title>Next.js, Apollo - Welcome</title>
      </Head>
      <Stack space="large">
        <Divider />
        <Header />
        <Divider />
        <Text variant="h4">{data.name}</Text>
        <Text variant="body">{data.description}</Text>
        <Divider />
      </Stack>
    </App>
  )
}

export async function getStaticPaths(context) {
  const data = require('./data.json')
  return {
    paths: data.map(({ slug }) => ({
      params: {
        product: slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const data = require('./data.json')
  return {
    props: {
      data: data.find(({ slug }) => slug === params.product),
    },
  }
}
