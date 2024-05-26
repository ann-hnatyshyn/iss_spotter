const needle = require('needle');

const fetchMyIp = function(error, callback) {
  needle('get', 'https://api.ipify.org?format=json')
    .then(function(resp) {
      
    })
    .catch(function(err) {
    // ...
    });
};