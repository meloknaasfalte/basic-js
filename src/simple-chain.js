const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  res: [],
  error: 0,
  getLength() {
    return chainMaker['res'].length
  },
  addLink(value) {
    if (arguments.length === 0)
      chainMaker['res'].push('( )')
    else
      chainMaker['res'].push(`(${' ' + value + ' '})`)
    console.log(chainMaker['res'], 'add');
    return this
  },
  removeLink(position) {
    if (typeof position !== 'number' || chainMaker['res'][position - 1] === undefined || !Number.isInteger(position)) {
      chainMaker['res'] = []
      throw new Error("You can't remove incorrect link!")
    }
    chainMaker['res'].splice(position - 1, 1)
    console.log(chainMaker['res'], 'remove');
    return this
  },
  reverseChain() {
    chainMaker['res'] = chainMaker['res'].reverse()
    return this
  },
  finishChain() {
    this.str = ''

    for (let i = 0; i < chainMaker['res'].length; i++) {
      if (i === chainMaker['res'].length - 1) {
        this.str += `${chainMaker['res'][i]}`
        chainMaker['res'] = []
        return this.str
      }
      else
        this.str += `${chainMaker['res'][i]}` + '~~'
    }
  }
};

module.exports = {
  chainMaker
};
