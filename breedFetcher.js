const request = require('request');
const fetchBreedDescription = (breedName, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      let error = this.error;
      return callback(error, null);
    } else {
      if (body === '[]') {
        let error = 'Name not found';
        return callback(error, null);
      } else {
        const data = JSON.parse(body);
        const desc = data[0].description;
        return callback(null, desc);
      }
    }
  })
  ;
};



module.exports = { fetchBreedDescription };
