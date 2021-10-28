import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { pageNames } from './page-name-config'

declare global {
  export interface Window {
    emitToExhaust: (eventName: string, data: unknown) => void
  }
}

// The analytics team will help you define a data layer based on the KPIs that
// your squad needs to measure
export function createDataLayer(pageName?: string): {
  application: {
    name: string
    environment: string
    is_spa: boolean
    version: string
  }
  user: Record<string, unknown>
  vendor: {
    adobe: {
      analytics: {
        pageName?: string
      }
    }
  }
} {
  return {
    application: {
      name: 'DBS Boilerplate',
      environment: process.env.NODE_ENV,
      is_spa: true, // this stop the default page load call happening
      version: '0.0.0', // replace with package.json version
    },
    user: {},
    vendor: {
      adobe: {
        analytics: {
          pageName,
        },
      },
    },
  }
}

interface SendEventToTagManager {
  eventName: string
  data: unknown
}

export function sendEventToTagManager({
  eventName,
  data,
}: SendEventToTagManager): void {
  try {
    if (typeof window !== 'undefined') {
      window.emitToExhaust(eventName, data)
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('Error sending event to tag manager:', e)
  }
}

export function usePageTracker(): void {
  const router = useRouter()

  const pageName = pageNames[router.pathname] || null

  useEffect(() => {
    if (!pageName) {
      // eslint-disable-next-line no-console
      console.error(`No page name configured for ${pageName}`)
    } else {
      sendEventToTagManager({
        eventName: 'Page.viewed',
        data: createDataLayer(pageName),
      })
    }
  }, [pageName])
}
