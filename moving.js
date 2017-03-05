let parseFunction = require('./parse.js');


function movingViolations() {

  let movingData = parseFunction('./traffic-data/simple_data/moving_jan_2016.csv');
  // console.log('prints out an array of arrays with the moving data file', movingData);

  // ticket type frequency
  let frequency = {};
  //for average fine amount
  let fineTotal = 0;
  let numberOfTickets = 0;
  //for total income from photo citations
  let photoFineTotal = 0;
  let photoCount = 0;


//movingData.forEach start
  movingData.forEach(function commonViolation(row){
    // console.log('this gives me the content of the index 17 within my array', row[17]);


/* -------------------------------------------------------- */
    // ticket type frequency --> for most common violation type
    if(!frequency[row[17]]) {
      frequency[row[17]] = 1;
    } else {
      frequency[row[17]] = frequency[row[17]] + 1;
    }
/* -------------------------------------------------------- */


/* -------------------------------------------------------- */
    //for average fine amount

    let fineAmount = Number(row[10]);
    if (fineAmount) {
      numberOfTickets++;
      fineTotal = fineAmount + fineTotal;
    }
/* -------------------------------------------------------- */

/* -------------------------------------------------------- */
    //for total income from photo citations
    let index10 = Number(row[10]);
    if (row[9] === 'Photo') {
      photoCount++;
      photoFineTotal = photoFineTotal + index10;
    }
/* -------------------------------------------------------- */

  });
//movingData.forEach end

//for most common violation type
  // console.log("this logs out the ticket type frequency", frequency);
// for: What is the average fine amount?
  // console.log('this logs out the total amount of fines collected', fineTotal);
  // console.log( 'how many tickets are there?', numberOfTickets );
  console.log('What is the average fine amount?', fineTotal/numberOfTickets);
//for: What was the total income from photo citations (tickettype = "Photo")?
  console.log('What was the total income from photo citations (tickettype = "Photo")?', photoFineTotal);


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
  console.log('What was the most common violation type for a moving violation?',highestViolation);
/* -------------------------------------------------------- */

/* -------------------------------------------------------- */
  //will make a new object that will contian all of the answers I have created
/* -------------------------------------------------------- */

  // return object of the responses
}

movingViolations();
