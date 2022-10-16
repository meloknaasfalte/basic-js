const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  if (!date) {
    return 'Unable to determine the time of year!'
  }
  try {
    date.getTime();
  }
  catch (e) {
    throw new Error('Invalid date!');
  }

  const thirtyDays = [8, 10, 3, 5];
  const arrSeason = [['winter', 11, 0, 1], ['spring', 2, 3, 4], ['summer', 5, 6, 7], ['autumn', 8, 9, 10]];
  const year = date.getFullYear();
  const month = date.getMonth();
  const dateOfMonth = date.getDate();
  let season = '';
  console.log(typeof month);

  console.log(year, month, dateOfMonth);


  if (dateOfMonth > 31)
    throw new Error('Invalid date!');

  if (month === 1) {
    if (year % 4 === 0) {
      if (dateOfMonth > 29)
        throw new Error('Invalid date!');
    }
    else {
      if (dateOfMonth > 28)
        throw new Error('Invalid date!');
    }
  }

  if (thirtyDays.includes(month)) {

    if (dateOfMonth > 30) {

      throw new Error('Invalid date!');
    }
  }

  arrSeason.forEach(element => {
    console.log(element);
    if (element.includes(month)) {
      season = element[0];
    }
  })
  return season;
}

module.exports = {
  getSeason
};
