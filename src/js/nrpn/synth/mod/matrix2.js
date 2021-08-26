
const rangeValues = require('../../../range-values');
const midiNRPNs = {

  // Mod Matrix 2
  ' 1:88': [
    {
      'name': 'mod matrix 2 source 1',
      'range': [0, rangeValues.modMatrix.source.length - 1],
      'rangeValues': rangeValues.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 1:89': [
    {
      'name': 'mod matrix 2 source 2',
      'range': [0, rangeValues.modMatrix.source.length - 1],
      'rangeValues': rangeValues.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 1:91': [
    {
      'name': 'mod matrix 2 depth',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 64
    }
  ],
  ' 1:92': [
    {
      'name': 'mod matrix 2 destination',
      'range': [0, rangeValues.modMatrix.destination.length - 1],
      'rangeValues': rangeValues.modMatrix.destination,
      'defaultValue': 0
    }
  ]
};

module.exports = midiNRPNs;