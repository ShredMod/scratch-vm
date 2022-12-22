const formatMessage = require('format-message');
const BlockType = require('../../extension-support/block-type');
const ArgumentType = require('../../extension-support/argument-type');
const Cast = require('../../util/cast');

class SaveExt {
    getInfo() {
      return {
        id: 'saveext', // change this if you make an actual extension!
        name: 'Save Data',
        blocks: [
          {
            opcode: 'save',
            blockType: BlockType.COMMAND,
            text: 'Save [ONE] to [TWO]',
            arguments: {
              ONE: {
                type: ArgumentType.STRING,
                defaultValue: 'First value'
              },
              TWO: {
                type: ArgumentType.STRING,
                defaultValue: 'First value'
              }
            }
          },
          {
            opcode: 'load',
            blockType: BlockType.REPORTER,
            text: 'Load [ONE]',
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
    save(args) {
      // Note strict equality: Inputs must match exactly: in type, case, etc.
      return localStorage.setItem(args.TWO,args.ONE)
    }
    load(args) {
        return localStorage.getItem(args.ONE)
    }
  }
module.exports = SaveExt;