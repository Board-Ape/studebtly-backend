export const getColleges = colleges => ({
  type: 'GET_COLLEGES',
  colleges
});

export const fetchColleges = () => dispatch => {
  console.log('Inside actions fetch');
  fetch('http://localhost:3001/api/v1/colleges')
    .then(response => response.json())
    .then(parsedResponse => dispatch(getColleges(parsedResponse)))
    //eslint-disable-next-line
    .catch(error => console.log(`Error has occurred: ${error}`));
};
