
const drums1 = require('./drums1');
const drums2 = require('./drums2');
const drums3 = require('./drums3');
const drums4 = require('./drums4');

module.exports = {
  midiCCs: {
    ...drums1,
    ...drums2,
    ...drums3,
    ...drums4
  },
  midiComponents: {
    '1': {
      'settings': Object.keys(drums1)
    },
    '2': {
      'settings': Object.keys(drums2)
    },
    '3': {
      'settings': Object.keys(drums3)
    },
    '4': {
      'settings': Object.keys(drums4)
    }
  }
};
