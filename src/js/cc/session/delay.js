
const midiCCs = {

  // Section: Delay
  '111': {
    'name': 'synth 1 send level',
    'range': [0, 127],
    'default': 0
  },
  '112': {
    'name': 'synth 2 send level',
    'range': [0, 127],
    'default': 0
  },
  '113': {
    'name': 'drum 1 send level',
    'range': [0, 127],
    'default': 0
  },
  '114': {
    'name': 'drum 2 send level',
    'range': [0, 127],
    'default': 0
  },
  '115': {
    'name': 'drum 3 send level',
    'range': [0, 127],
    'default': 0
  },
  '116': {
    'name': 'drum 4 send level',
    'range': [0, 127],
    'default': 0
  }
};

module.exports = midiCCs;