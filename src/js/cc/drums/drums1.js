
const midiCCs = {

  // Drum 1
  '8': {
    'name': 'drum 1 patch select',
    'range': [0, 63],
    'defaultValue': 0
  },
  '12': {
    'name': 'drum 1 level',
    'range': [0, 127],
    'rangeValues': [-63, 64],
    'defaultValue': 0
  },
  '14': {
    'name': 'drum 1 pitch',
    'range': [0, 127],
    'defaultValue': 64
  },
  '15': {
    'name': 'drum 1 decay',
    'range': [0, 127],
    'defaultValue': 0
  },
  '16': {
    'name': 'drum 1 distortion',
    'range': [0, 127],
    'defaultValue': 0
  },
  '17': {
    'name': 'drum 1 EQ',
    'range': [0, 127],
    'rangeValues': [-63, 64],
    'defaultValue': 64
  }
};

module.exports = midiCCs;