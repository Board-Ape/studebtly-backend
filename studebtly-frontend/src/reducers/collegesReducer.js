const collegesData = (state = [], action) => {
  switch (action.type) {
  case 'GET_COLLEGES':
    return action.collegesArray;
  default:
    return state;
  }
};

export default collegesData;
