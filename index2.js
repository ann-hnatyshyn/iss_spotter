// const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss_promised.js');
const {nextISSTimesForMyLocation} = require('./iss_promised.js');

// fetchMyIP()
//   .then((ip) => fetchCoordsByIP(ip))
//   .then((coords) => fetchISSFlyOverTimes(coords))
//   .then((body) => console.log(body));
nextISSTimesForMyLocation()
  .then((passTimes) => {
    console.log(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });