
const midiCCs = {

  // Section: Master Filter
  '74': {
    'name': 'frequency',
    'range': [0, 127],
    'rangeValues': [-63, 64],
    'rangeConditions': { // 0-63=Low Pass, 64=OFF, 65-127=High Pass
      '<64': 'Low Pass',
      '=0': 'OFF',
      '>64': 'High Pass'
    },
    'default': 64
  },
  '71': {
    'name': 'resonance',
    'range': [0, 127],
    'default': 30
  }
};

module.exports = midiCCs;