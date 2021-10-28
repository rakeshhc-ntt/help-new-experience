import React from 'react'
import Head from 'next/head'

import { Stack, Divider } from '@btplc/ui-kit'

import { Header } from '@common'
import { App } from '@src/app'
import WithNextSeo from '../../common/HOC/WithNextSEO/WithNextSEO'

const SeoTestPage: React.FC = () => (
  <App>
    <Head>
      <title>Next.js, Apollo - Welcome</title>
    </Head>
    <Stack space="large">
      <Divider />
      <Header />
      <Divider />
      Next SEO page with Next SEO
      <Divider />
    </Stack>
  </App>
)

export default WithNextSeo(SeoTestPage, {
  title: 'Override - Get BT HOC ',
  description: 'This app is awesome!',
  openGraph: {
    type: 'Override website',
  },
})
