export const handleError = (e) => {
  if (e.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    // console.log(e.response.data);
    // console.log(e.response.status);
    const { data } = e.response;
    return data;
  }
  // Something happened in setting up the request that triggered an Error
  return e;
};
