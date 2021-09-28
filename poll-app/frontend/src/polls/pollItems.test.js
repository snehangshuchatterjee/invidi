import React from 'react';
import {shallow} from 'enzyme';
import PollItem from './pollItem';
import store from '../redux/store';
import { POLL_HEADING } from "./constants";

describe("Poll Item", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<PollItem store={store}/>);
    });

    it("should render the component properly", () => {
        const currentWrapper = wrapper;

        expect(currentWrapper.find('div')).toHaveLength(3);
    });
})