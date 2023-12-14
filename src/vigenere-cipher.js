const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type
    this.letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!')

    let text = message.toUpperCase()
    let encryptedText = ''

    let j = 0
    for (let i = 0; i < text.length; i++) {
      if (j === key.length) j = 0

      if (this.letters.includes(text[i])) {
        encryptedText += this.letters[(this.letters.indexOf(text[i]) + this.letters.indexOf(key.toUpperCase()[j])) % 26]
        j++
      } else {
        encryptedText += text[i]
      }
    }

    return (this.type) ? encryptedText : encryptedText.split('').reverse().join('')
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error('Incorrect arguments!')

    let text = encryptedMessage.toUpperCase()
    let decryptedText = ''

    let j = 0
    for (let i = 0; i < text.length; i++) {
      if (j === key.length) j = 0

      if (this.letters.includes(text[i])) {

        let num = (this.letters.indexOf(text[i]) - this.letters.indexOf(key.toUpperCase()[j]))

        decryptedText += this.letters[(num < 0) ? (num + 26) % 26 : num % 26]
        j++
      } else {
        decryptedText += text[i]
      }
    }
    return (this.type) ? decryptedText : decryptedText.split('').reverse().join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};
