
const rangeValues = require('../../../range-values');
const midiNRPNs = {

  // Mod Matrix 3
  ' 1:93': [
    {
      'name': 'mod matrix 3 source 1',
      'range': [0, rangeValues.modMatrix.source.length - 1],
      'rangeValues': rangeValues.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 1:94': [
    {
      'name': 'mod matrix 3 source 2',
      'range': [0, rangeValues.modMatrix.source.length - 1],
      'rangeValues': rangeValues.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 1:96': [
    {
      'name': 'mod matrix 3 depth',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 64
    }
  ],
  ' 1:97': [
    {
      'name': 'mod matrix 3 destination',
      'range': [0, rangeValues.modMatrix.destination.length - 1],
      'rangeValues': rangeValues.modMatrix.destination,
      'defaultValue': 0
    }
  ]
};

module.exports = midiNRPNs;