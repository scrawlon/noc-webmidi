
const midiCCs = {

  // Section: Effects and EQ
  ' 91': {
    'name': 'distortion level',
    'range': [0, 127],
    'defaultValue': 0
  },
  ' 93': {
    'name': 'chorus level',
    'range': [0, 127],
    'defaultValue': 0
  }
};

module.exports = midiCCs;