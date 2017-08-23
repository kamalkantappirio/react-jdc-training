import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Header from './Header';

describe('Header', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Header />, div)
  });

  it('should render properly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('a')).to.have.length(0);
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle a click event', () => {
    throw 'TODO';
  });
});