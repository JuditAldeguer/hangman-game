// Fichero src/services/api.js

const callToApi2 = () => {
  // Llamamos al API
  return fetch('//random-word-api.herokuapp.com//word?number=1')
    .then((response) => response.json())
    .then((responsedata) => {
      return responsedata[0];
    });
};

const callToApi = () => {
  // Llamamos al API
  return fetch('https://palabras-aleatorias-public-api.herokuapp.com/random')
    .then((response) => response.json())
    .then((responsedata) => {
      const result = responsedata.body.Word;
      return result;
    });
};

const objectFunctions = { callToApi: callToApi, callToApi2: callToApi2 };

export default objectFunctions;
