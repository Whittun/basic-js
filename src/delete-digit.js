const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numStr = `${n}`
  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] < numStr[i + 1]) {
      numStr = numStr.slice(0, i) + numStr.slice(i + 1, numStr.length)
      return +numStr
    } else if (i === numStr.length - 1) {
      numStr = numStr.slice(0, i) + numStr.slice(i + 1, numStr.length)
      return +numStr
    } 
  }
}

module.exports = {
  deleteDigit
};
