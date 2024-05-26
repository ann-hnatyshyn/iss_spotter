const needle = require("needle");

const fetchMyIP = function (callback) {
  needle.get(
    "https://api.ipify.org?format=json",
    function (error, response, body) {
      if (error) {
        callback(error, null);
        return;
      }
      if (response.statusCode !== 200) {
        const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
        callback(Error(msg), null);
        return;
      }
      const bodyObj = JSON.parse(body);
      const ip = bodyObj.ip;
      callback(null, ip);
    }
  );
};

const fetchCoordsByIP = function(ip, callback) {
  needle.get(`http://ipwho.is/${ip}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (!body.success) {
      const message = `Success status was ${body.success}. Server message says: ${body.message} when fetching for IP ${body.ip}`;
      callback(Error(message), null);
      return;
    }
    const latitude = body.latitude;
    const longitude = body.longitude;
    callback(null, { latitude, longitude });
  });
};


module.exports = { fetchCoordsByIP };
module.exports = { fetchMyIP };
