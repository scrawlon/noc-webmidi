
const rangeValues = require('../../../range-values');
const midiNRPNs = {

  // Mod Matrix 6
  '1:108': [
    {
      'name': 'mod matrix 6 source 1',
      'range': [0, rangeValues.modMatrix.source.length - 1],
      'rangeValues': rangeValues.modMatrix.source,
      'defaultValue': 0
    }
  ],
  '1:109': [
    {
      'name': 'mod matrix 6 source 2',
      'range': [0, rangeValues.modMatrix.source.length - 1],
      'rangeValues': rangeValues.modMatrix.source,
      'defaultValue': 0
    }
  ],
  '1:111': [
    {
      'name': 'mod matrix 6 depth',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 64
    }
  ],
  '1:112': [
    {
      'name': 'mod matrix 6 destination',
      'range': [0, rangeValues.modMatrix.destination.length - 1],
      'rangeValues': rangeValues.modMatrix.destination,
      'defaultValue': 0
    }
  ]
};

module.exports = midiNRPNs;