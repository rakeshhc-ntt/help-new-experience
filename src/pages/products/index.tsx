import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import fs from 'fs'
import path from 'path'

import { Stack, Divider, Box, Text } from '@btplc/ui-kit'

import { Header } from '@common'
import { App } from '@src/app'

import { ProductData } from './[product]'

interface ProductPageProps {
  data: ProductData[]
}

const DATA_FILE_NAME = 'products_data.json'
const DATA_FILE_PATH = path.join('public', DATA_FILE_NAME)

const readDataFile = async (): Promise<ReturnType<typeof JSON.parse>> => {
  const fileContents = await fs.promises.readFile(DATA_FILE_PATH, 'utf8')

  return JSON.parse(fileContents)
}

const ProductPage: React.FC<ProductPageProps> = ({ data }) => (
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
          <Link href={`/products/${slug}`}>
            <a href={`/products/${slug}`}>{name}</a>
          </Link>
        </Box>
      ))}
      <Divider />
    </Stack>
  </App>
)

export const getStaticProps = async (): Promise<{
  props: ProductPageProps
}> => ({
  props: {
    data: await readDataFile(),
  },
})

export default ProductPage
