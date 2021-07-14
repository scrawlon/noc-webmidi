
const midiCCs = {

  // Section: Mixer
  '12': {
    'name': 'synth 1 level',
    'range': [0, 127],
    'defaultValue': 100
  },
  '14': {
    'name': 'synth 2 level',
    'range': [0, 127],
    'defaultValue': 100
  }
};

module.exports = midiCCs;