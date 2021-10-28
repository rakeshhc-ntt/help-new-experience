/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import {
  NextSeo,
  NextSeoProps,
  ProductJsonLd,
  ProductJsonLdProps,
} from 'next-seo'
import axios from 'axios'

import { Stack, Divider, Text, Grid, Card, Link } from '@btplc/ui-kit'
// @TODO - importing these component from @material-ui are for demo purpose,
// you should create them in @btplc/ui-kit
import { List, ListItem } from '@material-ui/core'

import { App } from '@src/app'
import { Header } from '@src/common'
import { DocumentContext } from 'next/document'

const getHost = (ctx: DocumentContext) => {
  const https =
    ctx?.req?.headers?.referer && ctx.req.headers.referer.startsWith('https://')

  return `http${https ? 's' : ''}://${ctx.req?.headers.host}`
}
interface OriginData {
  name: string
  url: string
}
interface LocationData {
  name: string
  url: string
}
interface CharData {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: OriginData
  location: LocationData
  image: string
  episode: string[]
  url: string
  created: string
}
interface SeoPageProps {
  char: CharData
  seo: NextSeoProps
  productJson: ProductJsonLdProps
}

const SeoPage: React.FC<SeoPageProps> = ({ seo, productJson, char }) => {
  return (
    <App>
      <NextSeo {...seo} />
      <ProductJsonLd {...productJson} />
      <Stack space="large">
        <Divider />
        <Header />
        <Divider />
        <Text variant="h1">SEO Example using next-seo</Text>
        <Card>
          <Grid key={char.id}>
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img alt={`image of ${char.name}`} src={char.image} />
            <Text variant="notes">{char.name}</Text>
            <Text variant="notes">{char.status}</Text>
            <Text variant="notes">{char.species}</Text>
            <Text variant="notes">{char.gender}</Text>
            <Text variant="notes">{char.type}</Text>
          </Grid>
        </Card>
        <List>
          <ListItem>
            <Link href="https://github.com/garmeeh/next-seo#readme">
              next-seo docs
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://cards-dev.twitter.com/validator">
              Twitter card validator
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://search.google.com/test/rich-results">
              Google rich results test
            </Link>
          </ListItem>
        </List>

        <Divider />
      </Stack>
    </App>
  )
}

export default SeoPage

export async function getServerSideProps(ctx: DocumentContext): Promise<{
  props: {
    productJson: any
    char: any
    seo: {
      description: string
      canonical: string
      title: string
      openGraph: {
        site_name: string
        description: string
        type: string
        title: string
        url: string
      }
    }
  }
}> {
  const host = getHost(ctx)
  const { data } = await axios.get(
    `https://rickandmortyapi.com/api/character/2`,
  )

  const char = { ...data }
  return {
    props: {
      char,
      seo: {
        title: `${char.name} | EE`,
        description: `${char.name} is in rick and morty`,
        canonical: `${host}/seo`,
        openGraph: {
          type: 'website',
          site_name: 'EE',
          title: `${char.name}`,
          description: `${char.name} is in rick and morty`,
          url: `${char.url}`,
        },
      },
      productJson: { productName: char.name, ...char },
    },
  }
}
