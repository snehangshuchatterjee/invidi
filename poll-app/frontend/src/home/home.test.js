import React from 'react';
import {shallow} from 'enzyme';
import Home from './';

describe("Home", () => {
    let wrapper;
    beforeEach(() => {});

    it("should render the component properly", () => {
        wrapper = shallow(
            <Home />
        );

        expect(wrapper.find('div')).toHaveLength(1);
    });
})