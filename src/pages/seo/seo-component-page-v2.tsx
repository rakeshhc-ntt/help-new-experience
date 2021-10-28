import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import { Stack, Divider } from '@btplc/ui-kit'

import { Header } from '@common'
import { App } from '@src/app'
import SeoComponent from '@common/SEO/SEO'

const SeoComponentPage: React.FC = () => {
  const [SEOData, setSEOData] = useState({
    title: '',
    description: '',
    openGraph: {
      type: '',
    },
  })
  useEffect(() => {
    setSEOData({
      title: 'boomting',
      description: 'ting!',
      openGraph: {
        type: 'stuff ',
      },
    })
  }, [])
  return (
    <App>
      <Head>
        <title>Next.js, Apollo - Welcome</title>
      </Head>
      <SeoComponent {...SEOData} />
      <Stack space="large">
        <Divider />
        <Header />
        <Divider />
        SEO page with SEO component with new title
        <Divider />
      </Stack>
    </App>
  )
}

export default SeoComponentPage
