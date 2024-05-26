const needle = require('needle');

const fetchMyIP = function(callback) {
  return needle('get', 'https://api.ipify.org?format=json')
    .then((response) => {
      const body = response.body; // retrieve the body value from the response object
      const ip = body.ip; // retrieve the ip from the body object
      return ip;
    });
};

const fetchCoordsByIP = function(ip) {
  return needle('get', '`http://ipwho.is/${ip}`')
    .then((response) => {
      const body = response.body;
      const latitude = body.latitude;
      const longitude = body.longitude;
      return {latitude, longitude};
    });
};

const fetchISSFlyOverTimes = function() {
  return needle('get', '` https://iss-flyover.herokuapp.com `')
    .then((response) => {
      const body = response.body;
      const flyOverTimes = body.flyOverTimes;
      return flyOverTimes;
    });
};


module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };