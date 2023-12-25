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

  constructor(isReverse) {
    this.isReverse = true
    if (isReverse === false) {
      this.isReverse = false;
    }
  }

  getKey(str, key) {
    let keyArr = [];
    keyArr = key.split("");
    if (str.length == keyArr.length)
      return keyArr.join("");

    const keyArrLength = keyArr.length;
    for (let i = 0; i < (str.length - keyArrLength); i++) {

      keyArr.push(keyArr[i % ((keyArr).length)])
    }

    return keyArr.join("");
  }

  encrypt(str, key) {
    if (!str || !key) {
      throw new Error('Incorrect arguments!');
    }
    let res = "";
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let keyStr = this.getKey(str, key);
    let j = 0;
    for (let i = 0; i < str.length; i += 1) {
      if (alphabet.includes(str[i].toUpperCase())) {
        const x = (alphabet.indexOf(str[i].toUpperCase()) +
          alphabet.indexOf(keyStr[j].toUpperCase())) % 26;
        res += alphabet[x];
        j += 1;
        continue;
      }
      res += str[i];
    }
    if (this.isReverse) {
      return res;
    }
    return res.split('').reverse().join('');
  }

  decrypt(str, key) {
    if (!str || !key) {
      throw new Error('Incorrect arguments!');
    }
    let res = "";
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let keyStr = this.getKey(str, key);
    let j = 0;
    for (let i = 0; i < str.length; i += 1) {
      if (alphabet.includes(str[i].toUpperCase())) {
        const x = (alphabet.indexOf(str[i].toUpperCase()) -
          alphabet.indexOf(keyStr[j].toUpperCase()) + 26) % 26;
        res += alphabet[x];
        j += 1;
        continue;
      }
      res += str[i];
    }
    if (this.isReverse) {
      return res;
    }
    return res.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
