const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let counter = 0

  matrix.forEach((elem, globalKey) => {
    elem.forEach((elem, key) => {
      if(matrix[globalKey - 1]) {
        if (matrix[globalKey - 1][key] !== 0) {
          counter += elem
        }
      } else {
        counter += elem
      }
    })
  })

  return counter
}

module.exports = {
  getMatrixElementsSum
};
