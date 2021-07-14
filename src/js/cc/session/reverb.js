
const midiCCs = {

  // Section: Reverb
  '88': {
    'name': 'synth 1 send level',
    'range': [0, 127],
    'defaultValue': 0
  },
  '89': {
    'name': 'synth 2 send level',
    'range': [0, 127],
    'defaultValue': 0
  },
  '90': {
    'name': 'drum 1 send level',
    'range': [0, 127],
    'defaultValue': 0
  },
  '106': {
    'name': 'drum 2 send level',
    'range': [0, 127],
    'defaultValue': 0
  },
  '109': {
    'name': 'drum 3 send level',
    'range': [0, 127],
    'defaultValue': 0
  },
  '110': {
    'name': 'drum 4 send level',
    'range': [0, 127],
    'defaultValue': 0
  }
};

module.exports = midiCCs;