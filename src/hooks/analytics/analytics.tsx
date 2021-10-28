import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { pageNames } from './page-name-config'

declare global {
  export interface Window {
    emitToExhaust: (eventName: string, data: any) => void
  }
}

// The analytics team will help you define a data layer based on the KPIs that
// your squad needs to measure
export function createDataLayer(pageName?: string) {
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

export function usePageTracker() {
  const router = useRouter()
  const pageName = pageNames[router.pathname] || ''

  useEffect(() => {
    if (!pageName) {
      console.error(`No page name configured for ${pageName}`)
      return
    }

    sendEventToTagManager({
      eventName: 'Page.viewed',
      data: createDataLayer(pageName),
    })
  }, [pageName])
}

interface sendEventToTagManager {
  eventName: string
  data: any
}

export function sendEventToTagManager({
  eventName,
  data,
}: sendEventToTagManager) {
  try {
    if (typeof window !== 'undefined') {
      window.emitToExhaust(eventName, data)
    }
  } catch (e) {
    console.error('Error sending event to tag manager:', e)
  }
}
