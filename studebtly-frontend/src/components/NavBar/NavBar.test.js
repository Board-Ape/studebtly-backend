import React from 'react';
import { shallow } from 'enzyme';
import NavBar from '../NavBar';

describe('NavBar', () => {
  let renderedNavBar;

  beforeEach(() => {
    renderedNavBar = shallow(<NavBar />);
  });

  it('should exist', () => {
    expect(renderedNavBar).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(renderedNavBar).toMatchSnapshot();
  });

});
