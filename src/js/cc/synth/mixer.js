
var midiCCs = {};
var midiComponents = {};

midiCCs = {

  // Section: Mixer
  '51': {
    'name': 'osc 1 level',
    'range': [0, 127],
    'default': 127
  },
  '52': {
    'name': 'osc 2 level',
    'range': [0, 127],
    'default': 0
  },
  '54': {
    'name': 'ring mod level',
    'range': [0, 127],
    'default': 0
  },
  '56': {
    'name': 'noise level',
    'range': [0, 127],
    'default': 0
  },
  '58': {
    'name': 'pre FX level',
    'range': [52, 82],
    'rangeValues': [-12, 18],
    'default': 64
  },
  '59': {
    'name': 'post FX level',
    'range': [52, 82],
    'rangeValues': [-12, 18],
    'default': 64
  }
};

midiComponents = [
  '51',
  '52',
  '54',
  '56',
  '58',
  '59'
];

module.exports = {
  midiCCs: midiCCs,
  midiComponents: midiComponents
}