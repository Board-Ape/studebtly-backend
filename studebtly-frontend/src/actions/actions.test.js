import * as actions from './index.js';

describe('action', () => {

  it('should fetch colleges', () => {
    const colleges = ['Traps', 'Biceps', 'Quads'];
    const expected = {
      type: 'GET_COLLEGES',
      colleges
    };

    expect(actions.getColleges(colleges)).toEqual(expected);
  });

  it('should create an action when adding a favorite', () => {
    const favorites = ['Georges', 'Moores', 'Taylors'];
    const expected ={
      type: 'ADD_FAVORITE',
      favorites
    };

    expect(actions.addFavorite(favorites)).toEqual(expected);
  });

  it('should create an action when deleting a favorite', () => {
    const favorites = ['Georges', 'Moores', 'Taylors'];
    const expected = {
      type: 'DELETE_FAVORITE',
      favorites
    };

    expect(actions.deleteFavorite(favorites)).toEqual(expected);
  });

});
