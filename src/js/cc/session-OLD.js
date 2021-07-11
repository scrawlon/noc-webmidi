(function() {
  var midiCCs = {},
    midiComponents = {};

  midiCCs = { // Circuit Session Control: midi channel 16
    // Section: Reverb
    '88': {
      'name': 'synth 1 send level',
      'range': [0,127],
      'default': 0
    },
    '89': {
      'name': 'synth 2 send level',
      'range': [0,127],
      'default': 0
    },
    '90': {
      'name': 'drum 1 send level',
      'range': [0,127],
      'default': 0
    },
    '106': {
      'name': 'drum 2 send level',
      'range': [0,127],
      'default': 0
    },
    '109': {
      'name': 'drum 3 send level',
      'range': [0,127],
      'default': 0
    },
    '110': {
      'name': 'drum 4 send level',
      'range': [0,127],
      'default': 0
    },
    // Section: Delay
    '111': {
      'name': 'synth 1 send level',
      'range': [0,127],
      'default': 0
    },
    '112': {
      'name': 'synth 2 send level',
      'range': [0,127],
      'default': 0
    },
    '113': {
      'name': 'drum 1 send level',
      'range': [0,127],
      'default': 0
    },
    '114': {
      'name': 'drum 2 send level',
      'range': [0,127],
      'default': 0
    },
    '115': {
      'name': 'drum 3 send level',
      'range': [0,127],
      'default': 0
    },
    '116': {
      'name': 'drum 4 send level',
      'range': [0,127],
      'default': 0
    },
    // Section: Master Filter
    '74': {
      'name': 'frequency',
      'range': [0,127],
      'rangeValues': [-63,64],
      'rangeConditions': { // 0-63=Low Pass, 64=OFF, 65-127=High Pass
        '<64': 'Low Pass',
        '=0': 'OFF',
        '<64': 'High Pass'
      },
      'default': 64
    },
    '71': {
      'name': 'resonance',
      'range': [0,127],
      'default': 30
    },
    // Section: Mixer
    '12': {
      'name': 'synth 1 level',
      'range': [0,127],
      'default': 100
    },
    '14': {
      'name': 'synth 2 level',
      'range': [0,127],
      'default': 100
    },
    // Section: Pan
    '117': {
      'name': 'synth 1 pan',
      'range': [0,127],
      'default': 100
    },
    '118': {
      'name': 'synth 2 pan',
      'range': [0,127],
      'default': 100
    }
  };

  midiComponents =  {
    'reverb': ['88','89','90','106','109','110'],
    'delay': ['111','112','113','114','115','116'],
    'master filter': ['74','71'],
    'mixer': ['12','14','117','118']
  };

  module.exports = {
    midiCCs: midiCCs,
    midiComponents: midiComponents
  };
})();
