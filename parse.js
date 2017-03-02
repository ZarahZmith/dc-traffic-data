

module.exports = function parseFunction(fileName) {

  let fileSystem = require('fs');
  let movingTrafficData = fileSystem.readFileSync(fileName);

  let stringValue = movingTrafficData.toString();
  let rows = stringValue.split('\n');

  let data = [];

  for (let i = 0; i < rows.length ; i++ ) {
    data.push(rows[i].split(','));
  }

  console.log(data);

  return data;
}

parseFunction('./traffic-data/simple_data/moving_jan_2016.csv');
