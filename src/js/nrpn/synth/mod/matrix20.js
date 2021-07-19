
const rangeValues = require('../../../range-values');
const midiNRPNs = {

  // Mod Matrix 20
  '2:50': [
    {
      'name': 'mod matrix 20 source 1',
      'range': [0, rangeValues.modMatrix.source.length - 1],
      'rangeValues': rangeValues.modMatrix.source,
      'default': 0
    }
  ],
  '2:52': [
    {
      'name': 'mod matrix 20 source 2',
      'range': [0, rangeValues.modMatrix.source.length - 1],
      'rangeValues': rangeValues.modMatrix.source,
      'default': 0
    }
  ],
  '2:53': [
    {
      'name': 'mod matrix 20 depth',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'default': 64
    }
  ],
  '2:54': [
    {
      'name': 'mod matrix 20 destination',
      'range': [0, rangeValues.modMatrix.destination.length - 1],
      'rangeValues': rangeValues.modMatrix.destination,
      'default': 0
    }
  ]
};

module.exports = midiNRPNs;