import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Menu from '../components/menu';

describe('components', () => {
  describe('Menu', () => {
    it('should render correctly', () => {
      Enzyme.configure({ adapter: new Adapter() });
      const wrapper = shallow(<Menu />);
      expect(wrapper.find('nav').length).toBe(1);
      expect(wrapper.find('#navigationBar').length).toBe(1);
      expect(wrapper.find('#currentTime').length).toBe(1);
    });
  });
});

