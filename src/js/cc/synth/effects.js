
var midiCCs = {};
var midiComponents = {};

midiCCs = {

  // Section: Effects and EQ
  '91': {
    'name': 'distortion level',
    'range': [0, 127],
    'default': 0
  },
  '93': {
    'name': 'chorus level',
    'range': [0, 127],
    'default': 0
  }
};

midiComponents = [
  '91',
  '93'
];

module.exports = {
  midiCCs: midiCCs,
  midiComponents: midiComponents
}