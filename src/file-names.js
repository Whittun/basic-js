const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {

  names.forEach((elem, key) => {
    if (names.slice(key + 1, names.length).includes(elem)) {
      console.log('iteration:', key, 'elem:', elem, 'if:', names.slice(key + 1, names.length).includes(elem))
      console.log('slice array: ', names.slice(key + 1, names.length))

      names[names.indexOf(elem, key + 1)] = `${names[names.indexOf(elem, key + 1)]}(1)`
      console.log('resultArr', names)
    } else if (elem.indexOf('(1)(1)') !== -1 && names.slice(key + 1, names.length).includes(elem.replace('(1)(1)', ''))) {
      names[names.indexOf(elem.replace('(1)(1)', ''), key + 1)] = `${names[names.indexOf(elem.replace('(1)(1)', ''), key + 1)]}(2)`
    }
  })
  console.log(names)
  return names
}

module.exports = {
  renameFiles
};
