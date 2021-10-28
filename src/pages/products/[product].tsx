import React from 'react'
import Head from 'next/head'

import fs from 'fs'
import path from 'path'

import { Stack, Divider, Text } from '@btplc/ui-kit'

import { Header } from '@common'
import { App } from '@src/app'

export interface ProductData {
  slug: string
  name: string
  description: string
}

interface ProductProps {
  data: ProductData | undefined
}

const DATA_FILE_NAME = 'products_data.json'
const DATA_FILE_PATH = path.join('public', DATA_FILE_NAME)

const readDataFile = async (): Promise<ReturnType<typeof JSON.parse>> => {
  const fileContents = await fs.promises.readFile(DATA_FILE_PATH, 'utf8')

  return JSON.parse(fileContents)
}

const Product: React.FC<ProductProps> = ({ data }) => (
  <App>
    <Head>
      <title>Next.js, Apollo - Welcome</title>
    </Head>
    <Stack space="large">
      <Divider />
      <Header />
      <Divider />
      <Text variant="h4">{data?.name}</Text>
      <Text variant="body">{data?.description}</Text>
      <Divider />
    </Stack>
  </App>
)

interface ProductPathParams {
  params: {
    product: string
  }
}

export const getStaticPaths = async (): Promise<{
  paths: ProductPathParams[]
  fallback: false
}> => {
  const data: ProductData[] = await readDataFile()

  return {
    paths: data.map<ProductPathParams>(({ slug }) => ({
      params: {
        product: slug,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps = async ({
  params,
}: ProductPathParams): Promise<{ props: ProductProps }> => {
  const data: ProductData[] = await readDataFile()

  return {
    props: {
      // eslint-disable-next-line
      data: data.find(({ slug }) => slug === params.product),
    },
  }
}

export default Product
