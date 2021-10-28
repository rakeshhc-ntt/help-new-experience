import React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'

import { Button, Grid, Logo } from '@btplc/ui-kit'
import { WithRouterProps } from 'next/dist/client/with-router'

export const Header: React.FC<WithRouterProps> = ({ router: { pathname } }) => (
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
        <Link href="/">
          <Button
              variant="primary"
              fill={pathname === '/' ? 'solid' : 'outlined'}
              data-testid="header-welcome"
              data-analytics-link="Welcome"
          >
            Welcome
          </Button>
        </Link>
      </Grid>

      <Grid item>
        <Link href="/products">
          <Button
              variant="primary"
              fill={pathname.indexOf('/products') === 0 ? 'solid' : 'outlined'}
              data-analytics-link="Products"
          >
            SSG
          </Button>
        </Link>
      </Grid>

      <style jsx>
        {`
          a {
            text-decoration: none;
          }
        `}
      </style>
    </Grid>
)

export const withRouterHeader = withRouter(Header)
