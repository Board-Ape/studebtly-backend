import React from 'react';
import { CollegesCard, mapStateToProps, mapDispatchToProps} from '../CollegesCard';
import { shallow } from 'enzyme';

const mockData = {
  name: "Punch and Daisy",
  data: {
    Name: "Berkley School of Justice",
    Address: "105 Stuart St, Mullumbimby",
    url: "www.bsj.com"
  }
};

describe('CollegesCard', () => {
  let renderedCollegesPage;

  beforeEach(() => {
    renderedCollegesPage = shallow(
      <CollegesCard
        colleges={mockData}
      />
    );
  });

  it('should exist', () => {
    expect(renderedCollegesPage).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(renderedCollegesPage).toMatchSnapshot();
  });

  it('should render cards', () => {
    expect(renderedCollegesPage.find('div').length).toEqual(2);
    expect(renderedCollegesPage.find('h1').length).toEqual(1);
    expect(renderedCollegesPage.find('h2').length).toEqual(4);
    expect(renderedCollegesPage.find('span').length).toEqual(1);
  });

  describe('mapStateToProps tests', () => {
    let mockStore;
    let results;

    beforeEach(() => {
      mockStore = {
        favorites: ['Harvard', 'Bostom College', 'June'],
        addFavorite: jest.fn(),
        deleteFavorite: jest.fn()
      };
      results = mapStateToProps(mockStore);
    });

    it('should pull restaurants data from the store', () => {
      expect(results.favorites).toEqual(mockStore.favorites);
    });
  });

  describe('mapDispatchToProps tests', () => {
    let mockDispatch;
    let results;

    beforeEach(() => {
      mockDispatch = jest.fn();
      results = mapDispatchToProps(mockDispatch);
    });

    it('should dispatch correctly when storing favorites', () => {
      results.addFavorite();

      expect(mockDispatch).toHaveBeenCalled();
    });

    it('should dispatch correctly when deleting favorites', () => {
      results.deleteFavorite();

      expect(mockDispatch).toHaveBeenCalled();
    });
  });

});
