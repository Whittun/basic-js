const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  console.log(sampleActivity)
  if (+sampleActivity > 0 && +sampleActivity < 15 && typeof sampleActivity === "string") {
    const age = (Math.log(MODERN_ACTIVITY / sampleActivity) * HALF_LIFE_PERIOD) / Math.log(2)
    return Math.ceil(age)
  } else {
    return false
  }
}

module.exports = {
  dateSample
};
