import { cleanup } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import { act } from 'react-test-renderer'
import useSEO from './useSeo'

const initialValue = {
    title: '',
    description: '',
    openGraph: {
        type: '',
    },
}

afterEach(cleanup)

test('testing useSeo', async () => {
    const HeadArgs = {
        // override headerConfig
        title: 'with hooks',
        description: 'with hooks!',
        openGraph: {
            type: 'Override with hooks',
        },
    }

    const { result } = renderHook(() => useSEO(initialValue))
    act(() => {
        result.current[1](HeadArgs)
    })
    expect(result.current[0].title).toBe('with hooks')
    expect(result.current[0].description).toBe('with hooks!')
})
