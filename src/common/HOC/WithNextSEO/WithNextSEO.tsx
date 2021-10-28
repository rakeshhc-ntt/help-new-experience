/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { NextSeo } from 'next-seo'

interface SeoHOCComponentsProps {
    Component: React.Component
}
interface SEOArgsInterface {
    title: string
    description: string
    openGraph: {
        type: string
    }
}

// the SEO args is a object you into to pass into the HOC for override the defaults
/*
{
    title: 'Override - Get BT HOC ',
    description: 'This app is awesome!',
    openGraph: {
        type: 'Override website',
    }
}

*/
const WithNextSeo = (
    Component: React.ComponentType,
    SEOArgs: SEOArgsInterface,
): any => {
    const NextSeoComponent: React.ComponentType<SeoHOCComponentsProps> = () => {
        return (
            <>
                <NextSeo {...SEOArgs} />
                <Component />
            </>
        )
    }

    return NextSeoComponent
}

export default WithNextSeo
