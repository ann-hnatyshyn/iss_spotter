const { fetchMyIP } = require('./iss.js');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP:' , ip);
});

const { fetchCoordsByIP } = require('./iss.js');

fetchCoordsByIP((error, lang) => {
  lang = "http://ipwho.is/?lang=en";
  if (error) {
    console.log("It didn't work!" , error.message);
    return;
  }
  console.log('It worked! Returned lang:' , lang);
});