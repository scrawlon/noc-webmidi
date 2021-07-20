
const rangeValues = require('../../../range-values');
const midiNRPNs = {

  // Mod Matrix 1
  '1:83': [
    {
      'name': 'mod matrix 1 source 1',
      'range': [0, rangeValues.modMatrix.source.length - 1],
      'rangeValues': rangeValues.modMatrix.source,
      'default': 0
    }
  ],
  '1:84': [
    {
      'name': 'mod matrix 1 source 2',
      'range': [0, rangeValues.modMatrix.source.length - 1],
      'rangeValues': rangeValues.modMatrix.source,
      'default': 0
    }
  ],
  '1:86': [
    {
      'name': 'mod matrix 1 depth',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'default': 64
    }
  ],
  '1:87': [
    {
      'name': 'mod matrix 1 destination',
      'range': [0, rangeValues.modMatrix.destination.length - 1],
      'rangeValues': rangeValues.modMatrix.destination,
      'default': 0
    }
  ]
};

module.exports = midiNRPNs;