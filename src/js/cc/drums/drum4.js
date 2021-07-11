
const midiCCs = {

  // Drum 4
  '50': {
    'name': 'drum 4 patch select',
    'range': [0, 63],
    'default': 0
  },
  '53': {
    'name': 'drum 4 level',
    'range': [0, 127],
    'rangeValues': [-63, 64],
    'default': 0
  },
  '55': {
    'name': 'drum 4 pitch',
    'range': [0, 127],
    'default': 64
  },
  '57': {
    'name': 'drum 4 decay',
    'range': [0, 127],
    'default': 0
  },
  '61': {
    'name': 'drum 4 distortion',
    'range': [0, 127],
    'default': 0
  },
  '76': {
    'name': 'drum 4 EQ',
    'range': [0, 127],
    'rangeValues': [-63, 64],
    'default': 64
  }
};

module.exports = midiCCs;