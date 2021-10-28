// @see https://docs-ui-kit-btplc.ps.intdigital.ee.co.uk/docs/seo/intro

import React from 'react'
import {
  NextSeo,
  NextSeoProps,
  ProductJsonLd,
  ProductJsonLdProps,
} from 'next-seo'

import {
  Stack,
  Divider,
  Text,
  Grid,
  Card,
  CardContent,
  Link,
} from '@btplc/ui-kit'
//@TODO - importing these component from @material-ui are for demo purpose,
// you should create them in @btplc/ui-kit
import { List, ListItem } from '@material-ui/core'

import App from '../src/components/app/app'
import Header from '../src/components/Header'
import axios from 'axios'

interface Data {
  data: {
    name: string
    description: string
    images: string[]
  }
  seo: NextSeoProps
  productJson: ProductJsonLdProps
}

const getHost = (ctx) => {
  const https =
    ctx?.req?.headers?.referer && ctx.req.headers.referer.startsWith('https://')

  return `http${https ? 's' : ''}://${ctx.req.headers.host}`
}

export default ({ seo, productJson, data }: Data) => {
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
          <CardContent>
            <Grid item>
              <img src={data.images[1]} alt={data.name} />
              <Text variant="h2">{data.name}</Text>
            </Grid>

            <Grid item>
              <Text variant="body">{data.description}</Text>
            </Grid>
          </CardContent>
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

export async function getServerSideProps(ctx) {
  const host = getHost(ctx)

  const { data } = await axios.get(`${host}/product.json`)
  const { name, ...rest } = data

  return {
    props: {
      data,
      seo: {
        title: `${name} | EE`,
        description: data.description,
        canonical: `${host}/seo`,
        openGraph: {
          type: 'website',
          site_name: 'EE',
          title: name,
          description: data.description,
          images: [
            {
              url: data.images[0],
            },
          ],
          url: `${host}/seo`,
        },
      },
      productJson: { productName: name, ...rest },
    },
  }
}
