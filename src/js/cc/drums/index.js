
const drum1 = require('./drum1');
const drum2 = require('./drum2');
const drum3 = require('./drum3');
const drum4 = require('./drum4');

module.exports = {
  midiCCs: {
    ...drum1,
    ...drum2,
    ...drum3,
    ...drum4
  },
  midiComponents: {
    '1': {
      'settings': Object.keys(drum1)
    },
    '2': {
      'settings': Object.keys(drum2)
    },
    '3': {
      'settings': Object.keys(drum3)
    },
    '4': {
      'settings': Object.keys(drum4)
    }
  }
};
