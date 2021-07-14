
const midiCCs = {

  // Drum 2
  '18': {
    'name': 'drum 2 patch select',
    'range': [0, 63],
    'defaultValue': 0
  },
  '23': {
    'name': 'drum 2 level',
    'range': [0, 127],
    'rangeValues': [-63, 64],
    'defaultValue': 0
  },
  '34': {
    'name': 'drum 2 pitch',
    'range': [0, 127],
    'defaultValue': 64
  },
  '40': {
    'name': 'drum 2 decay',
    'range': [0, 127],
    'defaultValue': 0
  },
  '42': {
    'name': 'drum 2 distortion',
    'range': [0, 127],
    'defaultValue': 0
  },
  '43': {
    'name': 'drum 2 EQ',
    'range': [0, 127],
    'rangeValues': [-63, 64],
    'defaultValue': 64
  }
};

module.exports = midiCCs;