// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const printForecast = function (arr) {
  let forecast = '... ';
  for (let i = 1; i <= arr.length; i++) {
    forecast += `${arr[i - 1]} C in ${i} days ... `;
  }
  console.log(forecast);
};

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
