
const midiCCs = {

  // Section: Mixer
  '12': {
    'name': 'synth 1 level',
    'range': [0, 127],
    'default': 100
  },
  '14': {
    'name': 'synth 2 level',
    'range': [0, 127],
    'default': 100
  }
};

module.exports = midiCCs;