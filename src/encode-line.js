const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let resStr = ''
  let arr = str.split('')
  let counter = 1 
  arr.forEach((elem, key) => {
    if (arr[key] === arr[key + 1]) {
      counter++
    } else {
      resStr += `${(counter === 1) ? '' : counter}${arr[key]}`
      counter = 1
    }
  })
  console.log(resStr)
  return resStr
}

module.exports = {
  encodeLine
};
