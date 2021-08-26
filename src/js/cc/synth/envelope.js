
const midiCCs = {

  // Section: Envelope
  ' 108': {
    'name': 'env 1 velocity',
    'range': [0, 127],
    'rangeValues': [-64, 63],
    'defaultValue': 64
  },
  ' 73': {
    'name': 'env 1 attack',
    'range': [0, 127],
    'defaultValue': 2
  },
  ' 75': {
    'name': 'env 1 decay',
    'range': [0, 127],
    'defaultValue': 90
  },
  ' 70': {
    'name': 'env 1 sustain',
    'range': [0, 127],
    'defaultValue': 127
  },
  ' 72': {
    'name': 'env 1 release',
    'range': [0, 127],
    'defaultValue': 40
  }
};

module.exports = midiCCs;