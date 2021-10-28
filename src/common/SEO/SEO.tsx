import React from 'react'
import {NextSeo} from 'next-seo'

interface SeoProps {
  title: string
  description: string
  openGraph: {
    type: string
  }
}

const SeoComponent: React.FC<SeoProps> = ({
     title ='',
     description = '',
     openGraph = {
       type: '',
     },
}) => {
    return (
        <>
            <NextSeo title={title} description={description} {...openGraph} />
        </>
    )
}

export default SeoComponent
