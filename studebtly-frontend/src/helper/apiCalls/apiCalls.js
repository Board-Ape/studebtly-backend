export const fetchCollegesData = async() => {
  try {
    const initialFetch = await fetch('api/v1/colleges');
    const parsedResponse = await initialFetch.json();
    return parsedResponse;
  } catch (type) {
    return Error('Fetch Failed to retrieve collegs');
  }
};
