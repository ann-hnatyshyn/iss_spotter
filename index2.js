const { fetchMyIp } = require('./iss_promised.js');

fetchMyIp()
  .then((response) => console.log(response));
