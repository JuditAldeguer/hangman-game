// Fichero src/services/api.js
const callToApi = () => {
  // Llamamos al API
  return fetch('//random-word-api.herokuapp.com//word?number=1')
    .then((response) => response.json())
    .then((responsedata) => {
      return responsedata[0];
    });
};

export default callToApi;
