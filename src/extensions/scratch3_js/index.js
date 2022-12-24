const formatMessage = require('format-message');
const BlockType = require('../../extension-support/block-type');
const ArgumentType = require('../../extension-support/argument-type');
const Cast = require('../../util/cast');

class JSExt {
    getInfo() {
      alert("This project will run custom JS. Are you sure?");
      return {
        id: 'javascript', // change this if you make an actual extension!
        name: 'JavaScript',
        blocks: [
          {
            opcode: 'exec',
            blockType: BlockType.COMMAND,
            text: 'JS [ONE]',
            arguments: {
              ONE: {
                type: ArgumentType.STRING,
                defaultValue: 'First value'
              }
            }
          },
          {
            opcode: 'evalu',
            blockType: BlockType.REPORTER,
            text: 'JS [ONE]',
            arguments: {
              ONE: {
                type: ArgumentType.STRING,
                defaultValue: 'First value'
              }
            }
          }
        ]
      };
    }
    exec(args) {
      // Note strict equality: Inputs must match exactly: in type, case, etc.
      return eval(args.ONE)
    }
    evalu(args) {
        return eval(args.ONE)
    }
  }
module.exports = JSExt;