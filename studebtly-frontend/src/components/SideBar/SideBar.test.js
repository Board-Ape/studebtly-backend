import React from 'react';
import { shallow } from 'enzyme';
import SideBar from '../SideBar';

describe('SideBar', () => {
  let renderedSideBar;

  beforeEach(() => {
    renderedSideBar = shallow(<SideBar />);
  });

  it('should exist', () => {
    expect(renderedSideBar).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(renderedSideBar).toMatchSnapshot();
  });

});
