import {shallow} from 'enzyme';
import App from './App';

describe("App", () => {
	let wrapper;

	it("should render the component properly", () => {
		wrapper = shallow(<App />);

		expect(wrapper.find('div')).toHaveLength(1);
	});
});
