import { fetchCollegesData } from '../helper/apiCalls/apiCalls';

export const getColleges = (collegesArray) => ({
  type: 'GET_COLLEGES',
  collegesArray
});

export const fetchColleges = () => async(dispatch) => {
  const parsedResponse = await fetchCollegesData();
  dispatch(getColleges(parsedResponse));
};
