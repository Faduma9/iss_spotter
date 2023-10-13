const { fetchMyIP, fetchCoordsByIP } = require('./iss_promised');

fetchMyIP()
  .then(fetchCoordsByIP)
  .then(body => console.log(body));

const { nextISSTimesForMyLocation } = require('./iss_promised');
const { printPassTimes } = require('./index');

nextISSTimesForMyLocation()
  .then(passTimes => {
    printPassTimes(passTimes);
  })
  .catch(error => {
    console.log("It didn't work: ", error.message);
  });
