const request = require('request');
const argvs = process.argv.slice(2).join('').trim();
const name = argvs;
const url = `https://api.thecatapi.com/v1/breeds/search?q=${name}`;
const getDescription = function(name, callback) {

  callback();
};

const callback = function() {
  request(url, (error, response, body) => {
    if (error) {
      console.log(error);
      return;
    }
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      console.log('The name is not found');
    } else {
      console.log(data[0]['description']);
    }
  });
};

getDescription(name, callback);