/* eslint-disable @typescript-eslint/no-explicit-any */
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { NextSeo } from 'next-seo'

import WithNextSEO from './WithNextSEO'

configure({ adapter: new Adapter() })

describe('withNextSEO should render', () => {
    let WithNextSEOComponent: any

    beforeEach(() => {
        const mockedComponent = jest.fn()
        WithNextSEOComponent = WithNextSEO(mockedComponent, {
            title: 'test',
            description: 'test',
            openGraph: {
                type: 'test',
            },
        })
    })
    it('testing if the WithNextSEO with default meta data', () => {
        const wrapper = shallow(<WithNextSEOComponent />)
        wrapper.update()
        expect(wrapper.find(NextSeo).props().title).toBe('test')
        expect(wrapper.find(NextSeo).props().description).toBe('test')
    })
})
