
const rangeValues = require('../../../range-values');
const midiNRPNs = {

  // Mod Matrix 17
  ' 2:35': [
    {
      'name': 'mod matrix 17 source 1',
      'range': [0, rangeValues.modMatrix.source.length - 1],
      'rangeValues': rangeValues.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 2:37': [
    {
      'name': 'mod matrix 17 source 2',
      'range': [0, rangeValues.modMatrix.source.length - 1],
      'rangeValues': rangeValues.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 2:38': [
    {
      'name': 'mod matrix 17 depth',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 64
    }
  ],
  ' 2:39': [
    {
      'name': 'mod matrix 17 destination',
      'range': [0, rangeValues.modMatrix.destination.length - 1],
      'rangeValues': rangeValues.modMatrix.destination,
      'defaultValue': 0
    }
  ]
};

module.exports = midiNRPNs;