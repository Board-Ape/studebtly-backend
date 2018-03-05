/* eslint-disable */
import collegesData from '../collegesReducer';
import favorites from '../favoritesReducer';
import * as actions from '../../actions';

describe('collegesData reducer tests', () => {
  it('should return the initial store', () => {
    const expected = [];

    expect(collegesData(undefined, {})).toEqual(expected);
  });

  it('should return a new store with event data', () => {
    const mockLocationData = [];
    const expected = [...mockLocationData];
    const action = actions.fetchLocationSuccess(mockLocationData);

    expect(collegesData(undefined, action)).toEqual(expected);
  });
});

describe('favorites reducer tests', () => {
  it('should return the initial store', () => {
    const expected = [];

    expect(favorites(undefined, {})).toEqual(expected);
  });

  it('should return a new store with event data', () => {
    const mockEventData = [];
    const mockID = '100';
    const expected = [{"id": [], "name": "100"}];
    const action = actions.addEventName(mockID, mockEventData);

    expect(favorites(undefined, action)).toEqual(expected);
  });
});

describe('favorites reducer tests', () => {
  it('should return the initial store', () => {
    const expected = [];

    expect(favorites(undefined, {})).toEqual(expected);
  });

  it('should return a new store with favorites data', () => {
    const mockEventData = [];
    const expected = mockEventData;
    const action = actions.addFavorite(mockEventData);

    expect(favorites(undefined, action)).toEqual(expected);
  });

  it('should delete and filter favorites', () => {
    const mockEventData = [];
    const expected = mockEventData;
    const action = actions.deleteFavorite(mockEventData);

    expect(favorites(undefined, action)).toEqual(expected);
  });

});
