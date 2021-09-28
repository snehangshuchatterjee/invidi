import React from 'react';
import {shallow, mount} from 'enzyme';
import Polls from './';
import PollItem from './pollItem';
import store from '../redux/store';

describe.only("Polls", () => {
    let wrapperNoName;
    beforeEach(() => {
        wrapperNoName = shallow(<Polls store={store}/>);
    });

    it("should render the component properly asking for the user's name if the name is not there", () => {
        let currentWrapper = wrapperNoName.dive().dive();

        expect(currentWrapper.find('div')).toHaveLength(2);
        expect(currentWrapper.find('span')).toHaveLength(3);
        expect(currentWrapper.find('input')).toHaveLength(2);
        expect(currentWrapper.text()).toEqual("Hi There....!! I am ");
    });
})