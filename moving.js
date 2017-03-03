let parseFunction = require('./parse.js');


function movingViolations() {

  let movingData = parseFunction('./traffic-data/simple_data/moving_jan_2016.csv');
  // console.log(movingData); //prints out an array of arrays

  let frequency = {};

  movingData.forEach(function commonViolation(row){
    // console.log(row[17]); //prints out the content of the 17th position within the array

    // I then want to compare the array to how often it occurs so i can hold on to the type of parking violation that occurs the most
    //
    //
    // general set up for frequency array via iteration hw assignment
    if(!frequency[row[17]]) {
      frequency[row[17]] = 1;
    } else {
      frequency[row[17]] = frequency[row[17]] + 1;
    }
  });

  // console.log(frequency);
  let specificViolation = Object.keys(frequency); //this spits out a list object properties in my array
  console.log(specificViolation);
  specificViolation.forEach(function mostFrequentViolation(){
    if () {
      let ___ =
    } else () {

    }
  });



}

movingViolations();
