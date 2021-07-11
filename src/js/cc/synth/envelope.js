
var midiCCs = {};
var midiComponents = {};

midiCCs = {

  // Section: Envelope
  '108': {
    'name': 'env 1 velocity',
    'range': [0, 127],
    'rangeValues': [-64, 63],
    'default': 64
  },
  '73': {
    'name': 'env 1 attack',
    'range': [0, 127],
    'default': 2
  },
  '75': {
    'name': 'env 1 decay',
    'range': [0, 127],
    'default': 90
  },
  '70': {
    'name': 'env 1 sustain',
    'range': [0, 127],
    'default': 127
  },
  '72': {
    'name': 'env 1 release',
    'range': [0, 127],
    'default': 40
  }
};

midiComponents = [
  '108',
  '73',
  '75',
  '70',
  '72'
];

module.exports = {
  midiCCs: midiCCs,
  midiComponents: midiComponents
}