const needle = require('needle');

const fetchMyIP = function(callback) {
  
  needle.get('https://api.ipify.org?format=json', function(error, response, body) {
    if (error) {
      callback(error, null);
      return;
    }  if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const bodyObj = JSON.parse(body);
    const ip = bodyObj.ip;
    callback(null, ip);
  });
};

const fetchCoordsByIP = function(ip, callback) {
  needle.get("http://ipwho.is/?lang=en", function(error, response, body) {
    if (error) {
      callback(error, null);
      return;
    }
    const bodyObj = JSON.parse(body);
    const ip = bodyObj.ip;
    callback(null, ip);
  });
};




module.exports = { fetchCoordsByIP };
module.exports = { fetchMyIP };
