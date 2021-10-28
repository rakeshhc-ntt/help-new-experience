/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { NextSeo, NextSeoProps } from 'next-seo'
import axios from 'axios'

import { Stack, Divider, Text, Grid, Card, Link } from '@btplc/ui-kit'
// @TODO - importing these component from @material-ui are for demo purpose,
// you should create them in @btplc/ui-kit
import { List, ListItem } from '@material-ui/core'

import { App } from '@src/app'
import { Header } from '@src/common'

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
}

const SeoPageSSG: React.FC<SeoPageProps> = ({ seo, char }) => {
  return (
    <App>
      <NextSeo {...seo} />
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

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  const { data } = await axios.get(
    `https://rickandmortyapi.com/api/character/3`,
  )
  const char = { ...data }
  return {
    props: {
      char,
      seo: {
        title: `${char.name} | EE`,
        description: `${char.name} is in rick and morty`,
        openGraph: {
          type: 'website',
          site_name: 'EE',
          title: `${char.name}`,
          description: `${char.name} is in rick and morty`,
          url: `${char.url}`,
        },
      },
    },
  }
}

export default SeoPageSSG
