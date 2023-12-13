const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  array: [],

  getLength() {
    this.array.length
  },
  addLink(value) {
    this.array.push(value)
    return this
  },
  removeLink(position) {
    if (position < 1 || position > this.array.length || typeof position === 'string') {
      this.array = []
      throw new Error('You can\'t remove incorrect link!')
    }
    this.array.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.array.reverse()
    return this
  },
  finishChain() {
    let string = ''
    this.array.forEach((elem, key) => {
      if (this.array.length === 1) {
        string += `( ${elem} )`
      } else if (key === 0) {
        string += `( ${elem} )~`
      } else if (key === this.array.length - 1) {
        string += `~( ${elem} )`
      } else {
        string += `~( ${elem} )~`
      }
    })
    this.array = []
    return string
  }
}

module.exports = {
  chainMaker
};
