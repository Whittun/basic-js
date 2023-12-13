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
  console.log('result date: ', date)

  if (!date) return 'Unable to determine the time of year!'

  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length) throw new Error('Invalid date!')

  const month = date.getMonth() + 1
  if (month < 3 || month > 11) {
    return 'winter'
  } else if (month < 6) {
    return 'spring'
  } else if (month < 9) {
    return 'summer'
  }
  else if (month < 12) {
    return 'autumn'
  }
}

module.exports = {
  getSeason
};
