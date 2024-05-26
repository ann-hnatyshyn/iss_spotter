const needle = require('needle');

const fetchMyIp = function(error, callback) {
  return needle('get', 'https://api.ipify.org?format=json')
    .then((response) => {
      const body = response.body; // retrieve the body value from the response object
      const ip = body.ip; // retrieve the ip from the body object
      return ip;
    })
    .catch(function(error) {
      return (error.message);
    });
};

module.exports = {fetchMyIp};