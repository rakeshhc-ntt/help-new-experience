import React from 'react'

import { NextSeo } from 'next-seo'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SeoComponent from './SEO'

configure({ adapter: new Adapter() })

describe('SeoComponent', () => {
    it('renders correctly with props', () => {
        const wrapper = shallow(<SeoComponent title="boom" description="stuff"  openGraph={{ type: 'opengraph' }} />)
        expect(wrapper.find(NextSeo).props().title).toBe('boom')
        expect(wrapper.find(NextSeo).props().description).toBe('stuff')
        expect(wrapper.find(NextSeo).props().openGraph).not.toBeNull()
    })
})
