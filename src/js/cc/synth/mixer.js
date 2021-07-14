
const midiCCs = {

  // Section: Mixer
  '51': {
    'name': 'osc 1 level',
    'range': [0, 127],
    'defaultValue': 127
  },
  '52': {
    'name': 'osc 2 level',
    'range': [0, 127],
    'defaultValue': 0
  },
  '54': {
    'name': 'ring mod level',
    'range': [0, 127],
    'defaultValue': 0
  },
  '56': {
    'name': 'noise level',
    'range': [0, 127],
    'defaultValue': 0
  },
  '58': {
    'name': 'pre FX level',
    'range': [52, 82],
    'rangeValues': [-12, 18],
    'defaultValue': 64
  },
  '59': {
    'name': 'post FX level',
    'range': [52, 82],
    'rangeValues': [-12, 18],
    'defaultValue': 64
  }
};

module.exports = midiCCs;