
const rangeValues = require('../../../range-values');
const midiNRPNs = {

  // Mod Matrix 5
  '1:103': [
    {
      'name': 'mod matrix 5 source 1',
      'range': [0, rangeValues.modMatrix.source.length - 1],
      'rangeValues': rangeValues.modMatrix.source,
      'defaultValue': 0
    }
  ],
  '1:104': [
    {
      'name': 'mod matrix 5 source 2',
      'range': [0, rangeValues.modMatrix.source.length - 1],
      'rangeValues': rangeValues.modMatrix.source,
      'defaultValue': 0
    }
  ],
  '1:106': [
    {
      'name': 'mod matrix 5 depth',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 64
    }
  ],
  '1:107': [
    {
      'name': 'mod matrix 5 destination',
      'range': [0, rangeValues.modMatrix.destination.length - 1],
      'rangeValues': rangeValues.modMatrix.destination,
      'defaultValue': 0
    }
  ]
};

module.exports = midiNRPNs;