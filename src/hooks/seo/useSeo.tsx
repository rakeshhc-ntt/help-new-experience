import { useState } from 'react'

type OpenGraph = Record<'type', string>

type SeoConfig = {
    title: string
    description: string
    openGraph: OpenGraph
}

const useSEO = (
    initialValue = {
        title: '',
        description: '',
        openGraph: {
            type: '',
        },
    },
): [SeoConfig, (item: SeoConfig) => void] => {
    const [newSeoConfig, setNewSeoConfig] = useState<SeoConfig>(initialValue)

    const updateSeoConfig = (config: SeoConfig) => {
        const seoConfig = {
            title: config.title,
            description: config.description,
            openGraph: {
                type: config.openGraph.type,
            },
        }
        setNewSeoConfig(seoConfig)
    }
    return [newSeoConfig, updateSeoConfig]
}

export default useSEO
