let parseFunction = require('./parse.js');

// ticket type frequency --> for most common violation type
frequency = {};
// for most common state licence plate
stateFrequency = {};

function parkingViolations() {

  let parkingData = parseFunction('./traffic-data/simple_data/parking_feb_2016.csv');

  parkingData.forEach(function commonViolation(row){
/* -------------------------------------------------------- */
    // ticket type frequency --> for most common violation type
    if(!frequency[row[9]]) {
      frequency[row[9]] = 1;
    } else {
      frequency[row[9]] = frequency[row[9]] + 1;
    }
/* -------------------------------------------------------- */

/* -------------------------------------------------------- */
    // for most common state licence plate
    if(!stateFrequency[row[12]]) {
      stateFrequency[row[12]] = 1;
    } else {
      stateFrequency[row[12]] = stateFrequency[row[12]] + 1;
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
  //How many different types of parking tickets were issued?
  console.log('How many different types of parking tickets were issued?', specificViolation.length);
  //What state license plate gets the most tickets?
  let specificStateViolation = Object.keys(stateFrequency);
  let stateViolation = {
    name: 'default',
    count: 0
  };
  specificStateViolation.forEach(function mostFrequentViolation(stateViolationCode){
    if (stateFrequency[stateViolationCode] > stateViolation.count) {
      stateViolation.count = stateFrequency[stateViolationCode];
      stateViolation.name = stateViolationCode;
    }
  });
  console.log('What state license plate gets the most tickets?', stateViolation.name);

}

parkingViolations();
