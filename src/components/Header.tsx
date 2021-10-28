import React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { Button, Grid, Logo } from '@btplc/ui-kit'

const Header = ({ router: { pathname } }) => (
  <Grid
    container
    spacing={1}
    direction="row"
    style={{ width: '100%' }}
    data-testid="navbar"
    data-analytics-region="header"
  >
    <Grid item>
      <Logo size={40} />
    </Grid>
    <Grid item>
      <Link href="/" data-analytics-link="Welcome">
        <Button
          variant="primary"
          fill={pathname === '/' ? 'solid' : 'outlined'}
          data-testid="header-welcome"
        >
          Welcome
        </Button>
      </Link>
    </Grid>
    <Grid item>
      <a href="/ssr-enabled" data-analytics-link="SSR">
        <Button
          variant="primary"
          fill={pathname === '/ssr-enabled' ? 'solid' : 'outlined'}
        >
          SSR
        </Button>
      </a>
    </Grid>
    <Grid item>
      <a href="/ssr-disabled" data-analytics-link="SSR Disabled">
        <Button
          variant="primary"
          fill={pathname === '/ssr-disabled' ? 'solid' : 'outlined'}
        >
          SSR Disabled
        </Button>
      </a>
    </Grid>
    <Grid item>
      <Link href="/products" data-analytics-link="Products">
        <Button
          variant="primary"
          fill={pathname.indexOf('/products') === 0 ? 'solid' : 'outlined'}
        >
          SSG
        </Button>
      </Link>
    </Grid>
    <Grid item>
      <a href="/bt-auth" data-analytics-link="BT Auth">
        <Button
          variant="primary"
          fill={pathname === '/bt-auth' ? 'solid' : 'outlined'}
        >
          BT Auth
        </Button>
      </a>
    </Grid>
    <Grid item>
      <a href="/auth" data-analytics-link="Auth">
        <Button
          variant="primary"
          fill={pathname.indexOf('/auth') === 0 ? 'solid' : 'outlined'}
        >
          EE Auth
        </Button>
      </a>
    </Grid>
    <Grid item>
      <Link href="/seo" data-analytics-link="SEO">
        <Button
          variant="primary"
          fill={pathname.indexOf('/seo') === 0 ? 'solid' : 'outlined'}
        >
          SEO
        </Button>
      </Link>
    </Grid>
    <style jsx>{`
      a {
        text-decoration: none;
      }
    `}</style>
  </Grid>
)

export default withRouter(Header)
