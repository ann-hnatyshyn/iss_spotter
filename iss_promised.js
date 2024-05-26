const needle = require('needle');

const fetchMyIp = function(error, callback) {
  needle('get', 'https://api.ipify.org?format=json')
    .then(function(response) {
      return response.body;
    })
    .catch(function(error) {
      return (error.message);
    });
};

module.exports(fetchMyIp);