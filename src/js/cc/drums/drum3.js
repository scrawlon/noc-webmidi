
const midiCCs = {

  // Drum 3
  '44': {
    'name': 'drum 3 patch select',
    'range': [0, 63],
    'default': 0
  },
  '45': {
    'name': 'drum 3 level',
    'range': [0, 127],
    'rangeValues': [-63, 64],
    'default': 0
  },
  '46': {
    'name': 'drum 3 pitch',
    'range': [0, 127],
    'default': 64
  },
  '47': {
    'name': 'drum 3 decay',
    'range': [0, 127],
    'default': 0
  },
  '48': {
    'name': 'drum 3 distortion',
    'range': [0, 127],
    'default': 0
  },
  '49': {
    'name': 'drum 3 EQ',
    'range': [0, 127],
    'rangeValues': [-63, 64],
    'default': 64
  }
};

module.exports = midiCCs;