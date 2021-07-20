
const rangeValues = require('../../../range-values');;
const midiNRPNs = {

  // Mod Matrix 14
  '2:20': [
    {
      'name': 'mod matrix 14 source 1',
      'range': [0, rangeValues.modMatrix.source.length - 1],
      'rangeValues': rangeValues.modMatrix.source,
      'default': 0
    }
  ],
  '2:21': [
    {
      'name': 'mod matrix 14 source 2',
      'range': [0, rangeValues.modMatrix.source.length - 1],
      'rangeValues': rangeValues.modMatrix.source,
      'default': 0
    }
  ],
  '2:23': [
    {
      'name': 'mod matrix 14 depth',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'default': 64
    }
  ],
  '2:24': [
    {
      'name': 'mod matrix 14 destination',
      'range': [0, rangeValues.modMatrix.destination.length - 1],
      'rangeValues': rangeValues.modMatrix.destination,
      'default': 0
    }
  ]
};

module.exports = midiNRPNs;