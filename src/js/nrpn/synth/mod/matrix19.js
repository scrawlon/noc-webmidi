
const rangeValues = require('../../../range-values');
const midiNRPNs = {

  // Mod Matrix 19
  '2:45': [
    {
      'name': 'mod matrix 19 source 1',
      'range': [0, rangeValues.modMatrix.source.length - 1],
      'rangeValues': rangeValues.modMatrix.source,
      'defaultValue': 0
    }
  ],
  '2:47': [
    {
      'name': 'mod matrix 19 source 2',
      'range': [0, rangeValues.modMatrix.source.length - 1],
      'rangeValues': rangeValues.modMatrix.source,
      'defaultValue': 0
    }
  ],
  '2:48': [
    {
      'name': 'mod matrix 19 depth',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 64
    }
  ],
  '2:49': [
    {
      'name': 'mod matrix 19 destination',
      'range': [0, rangeValues.modMatrix.destination.length - 1],
      'rangeValues': rangeValues.modMatrix.destination,
      'defaultValue': 0
    }
  ]
};

module.exports = midiNRPNs;