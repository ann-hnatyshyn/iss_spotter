const needle = require("needle");

const fetchMyIP = function(callback) {
  needle.get(
    "https://api.ipify.org?format=json",
    function(error, response, body) {
      if (error) {
        callback(error, null);
        return;
      }
      if (response.statusCode !== 200) {
        const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
        callback(Error(msg), null);
        return;
      }
      console.log(typeof body); // Check the type of body
      console.log(body);
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

const fetchISSFlyOverTimes = function(coords, callback) {
  needle.get(`https://iss-flyover.herokuapp.com/json/?lat=44.6488625&lon=-63.5753196`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (!body.success) {
      const message = `Success status was ${body.success}. Server message says: ${body.message} when fetching for coords ${body.coords}`;
      callback(Error(message), null);
      return;
    }
    callback(null, { coords });
  });
};







module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };
