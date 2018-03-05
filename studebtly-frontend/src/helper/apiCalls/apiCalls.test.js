import {getColleges} from './apiCalls';

const mockData = {
  name: 'rest',
  date: 'tomorrow',
  when: 'predict',
  from: 'came',
  who: 'damn'
};

window.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    status: 200,
    json: () => Promise.resolve(mockData)
  })
);

describe('getColleges tests', () => {

  it('should be called correctly', () => {
    expect(getColleges).toBeAFunction;
  });

  it('should return an object', async () => {
    const response = await getColleges();

    expect(typeof response).toEqual('object');
  });

  it('should throw an error if the GET fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        status: 500
      })
    );
    const response = await getColleges();
    const expected = Error('Fetch Restaurants Failed');

    expect(response).toEqual(expected);
  });

});
