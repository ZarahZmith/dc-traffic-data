let parseFunction = require('./parse.js');


function movingViolations() {

  let movingData = parseFunction('./traffic-data/simple_data/moving_jan_2016.csv');
  // console.log('prints out an array of arrays that contain moving data', movingData);


  let frequency = {};
  let fineTotal = 0;
  let numberOfTickets = 0;

//forEach start
  movingData.forEach(function commonViolation(row){
    // console.log('this gives me the content of the index 17 within my array', row[17]);


/* -------------------------------------------------------- */
    // ticket type frequency
    if(!frequency[row[17]]) {
      frequency[row[17]] = 1;
    } else {
      frequency[row[17]] = frequency[row[17]] + 1;
    }
/* -------------------------------------------------------- */


/* -------------------------------------------------------- */
    //average fine amount

    let fineAmount = Number(row[10]);
    if (fineAmount) {
      numberOfTickets++;
      fineTotal = fineAmount + fineTotal;
    }
/* -------------------------------------------------------- */

  });
// forEach end

  // console.log("this logs out the ticket type frequency", frequency);
  // console.log('this logs out the total amount of fines collected', fineTotal);
  // console.log( 'how many tickets are there?', numberOfTickets );
  console.log('average fine amount', fineTotal/numberOfTickets);

/* -------------------------------------------------------- */
  /** What was the most common violation type for a moving violation?*/

  let specificViolation = Object.keys(frequency); //this spits out a list object properties in my array
  // console.log('this logs out the most frequent violation', specificViolation);
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
  console.log('logs out the name and count of the highest violation',highestViolation);
/* -------------------------------------------------------- */


  // return some collection of the responses
}

movingViolations();
