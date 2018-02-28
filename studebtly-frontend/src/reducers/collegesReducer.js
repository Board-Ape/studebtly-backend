const collegesData = (state = [], action) => {
  console.log('Inside collegesReducer');
  switch (action.type) {
  case 'GET_COLLEGES':
    return action.collegesArray;
  default:
    return state;
  }
};

export default collegesData;
