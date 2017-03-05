

module.exports = function parseFunction(fileName) {

  let fileSystem = require('fs');
  let selectTrafficData = fileSystem.readFileSync(fileName);

  let stringValue = selectTrafficData.toString();
  let rows = stringValue.split('\n');

  let data = [];

  for (let i = 0; i < rows.length ; i++ ) {
    data.push(rows[i].split(','));
  }

  // console.log(data); //logs out the array of arrays

  return data;
}

// parseFunction('./traffic-data/simple_data/moving_jan_2016.csv');
