import React, { useEffect } from 'react'

import { Stack, Divider } from '@btplc/ui-kit'

import { Header } from '@common'
import { App } from '@src/app'
import SeoComponent from '@common/SEO/SEO'
import useSEO from '../../hooks/seo/useSeo'

const SeoComponentPageWithHooks: React.FC = () => {
  const [newSeoConfig, updateSeoConfig] = useSEO()
  const HeadArgs = {
    // override headerConfig
    title: 'with hooks',
    description: 'with hooks!',
    openGraph: {
      type: 'Override with hooks',
    },
  }
  useEffect(() => {
    updateSeoConfig(HeadArgs)
  }, [])
  return (
    <App>
      <SeoComponent {...newSeoConfig} />
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

export default SeoComponentPageWithHooks
