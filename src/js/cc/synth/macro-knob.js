
var midiCCs = {};
var midiComponents = {};

midiCCs = {

  // Section: Macro Knob
  '80': {
    'name': 'macro knob 1 position',
    'range': [0, 127],
    'default': 0
  },
  '81': {
    'name': 'macro knob 2 position',
    'range': [0, 127],
    'default': 0
  },
  '82': {
    'name': 'macro knob 3 position',
    'range': [0, 127],
    'default': 0
  },
  '83': {
    'name': 'macro knob 4 position',
    'range': [0, 127],
    'default': 0
  },
  '84': {
    'name': 'macro knob 5 position',
    'range': [0, 127],
    'default': 0
  },
  '85': {
    'name': 'macro knob 6 position',
    'range': [0, 127],
    'default': 0
  },
  '86': {
    'name': 'macro knob 7 position',
    'range': [0, 127],
    'default': 0
  },
  '87': {
    'name': 'macro knob 8 position',
    'range': [0, 127],
    'default': 0
  }
}

midiComponents = [
  '80',
  '81',
  '82',
  '83',
  '84',
  '85',
  '86',
  '87'
];

module.exports = {
  midiCCs: midiCCs,
  midiComponents: midiComponents
}