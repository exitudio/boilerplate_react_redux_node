//component
import React from 'react'
import { mount, shallow } from 'enzyme'
import ItemText from './ItemText.jsx'
import { expect } from 'chai'


describe('ItemText component', () => {
    it('should render ItemText component', () => {
        const props = {
            name:'name1',
            status:'status1'
        }
        const enzymeWrapper = shallow(<ItemText {...props}/>)

        expect(enzymeWrapper.find('h1').hasClass('name-text')).to.be.true
        expect(enzymeWrapper.find('h1.name-text').text()).equal('name1')
        expect(enzymeWrapper.find('div.status-text')).to.have.lengthOf(1)
        expect(enzymeWrapper.find('div.status-text').text()).equal('status1')
    })
})