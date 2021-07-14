
const midiCCs = {

  // Drum 4
  '50': {
    'name': 'drum 4 patch select',
    'range': [0, 63],
    'defaultValue': 0
  },
  '53': {
    'name': 'drum 4 level',
    'range': [0, 127],
    'rangeValues': [-63, 64],
    'defaultValue': 0
  },
  '55': {
    'name': 'drum 4 pitch',
    'range': [0, 127],
    'defaultValue': 64
  },
  '57': {
    'name': 'drum 4 decay',
    'range': [0, 127],
    'defaultValue': 0
  },
  '61': {
    'name': 'drum 4 distortion',
    'range': [0, 127],
    'defaultValue': 0
  },
  '76': {
    'name': 'drum 4 EQ',
    'range': [0, 127],
    'rangeValues': [-63, 64],
    'defaultValue': 64
  }
};

module.exports = midiCCs;