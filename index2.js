const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss_promised.js');


fetchMyIP()
  .then((ip) => fetchCoordsByIP(ip))
  .then((body) => console.log(body));
