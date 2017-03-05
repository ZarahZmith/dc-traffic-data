let parseFunction = require('./parse.js');

frequency = {};

function parkingViolations() {

  let parkingData = parseFunction('./traffic-data/simple_data/parking_feb_2016.csv');

  parkingData.forEach(function commonViolation(row){
/* -------------------------------------------------------- */
    if(!frequency[row[9]]) {
      frequency[row[9]] = 1;
    } else {
      frequency[row[9]] = frequency[row[9]] + 1;
    }
/* -------------------------------------------------------- */
  });

  //What was the most common violation type for a parking ticket?
  let specificViolation = Object.keys(frequency);
  let highestViolation = {
    name: 'default',
    count: 0
  };
  specificViolation.forEach(function mostFrequentViolation(violationCode){
    if (frequency[violationCode] > highestViolation.count) {
      highestViolation.count = frequency[violationCode];
      highestViolation.name = violationCode;
    }
  });
  console.log('What was the most common violation type for a parking ticket?', highestViolation.name);

}

parkingViolations();
