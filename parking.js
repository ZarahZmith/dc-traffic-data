let parseFunction = require('./parse.js');

module.exports = function parkingViolations() {

  let parkingData = parseFunction('./traffic-data/simple_data/parking_feb_2016.csv');

  // ticket type frequency --> for most common violation type
  frequency = {};
  // for most common state licence plate
  stateFrequency = {};

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
  let commonViolationType = highestViolation.name;
  // console.log('What was the most common violation type for a parking ticket?', commonViolationType);
  //How many different types of parking tickets were issued?
  let parkingTicketType = specificViolation.length;
  // console.log('How many different types of parking tickets were issued?', parkingTicketType);
  //What state license plate gets the most tickets?
  let specificStateViolation = Object.keys(stateFrequency);
  let stateViolation = {
    name: 'default',
    count: 0
  };
  specificStateViolation.forEach(function mostFrequentStateViolation(stateViolationCode){
    if (stateFrequency[stateViolationCode] > stateViolation.count) {
      stateViolation.count = stateFrequency[stateViolationCode];
      stateViolation.name = stateViolationCode;
    }
  });
  let highestStateViolation = stateViolation.name;
  // console.log('What state license plate gets the most tickets?', highestStateViolation);

/* -------------------------------------------------------- */
  //will make a new object that will contian all of the answers I have created
  let parkingAnswers = {
    'How many different types of parking tickets were issued?': parkingTicketType,
    'What was the most common violation type for a parking ticket?': commonViolationType,
    'What state license plate gets the most tickets?': highestStateViolation
  }
/* -------------------------------------------------------- */

  return parkingAnswers;
}

parkingViolations();
