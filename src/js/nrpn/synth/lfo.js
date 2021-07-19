
const rangeValues = require('../../range-values');

const midiNRPNs = {

  // LFO 1
  '0:70': [
    {
      'name': 'lfo 1 waveform',
      'range': [0, rangeValues.lfo.wave.length - 1],
      'rangeValues': rangeValues.lfo.wave,
      'default': 0
    }
  ],
  '0:71': [
    {
      'name': 'lfo 1 phase offset',
      'range': [0, 119],
      'default': 0
    }
  ],
  '0:72': [
    {
      'name': 'lfo 1 slew rate',
      'range': [0, 127],
      'default': 0
    }
  ],
  '0:74': [
    {
      'name': 'lfo 1 delay',
      'range': [0, 127],
      'default': 0
    }
  ],
  '0:75': [
    {
      'name': 'lfo 1 delay sync',
      'range': [0, 35],
      'default': 0
    }
  ],
  '0:76': [
    {
      'name': 'lfo 1 rate',
      'range': [0, 127],
      'default': 68
    }
  ],
  '0:77': [
    {
      'name': 'lfo 1 rate sync',
      'range': [0, 35],
      'default': 0
    }
  ],

  // LFO 2
  '0:79': [
    {
      'name': 'lfo 2 waveform',
      'range': [0, rangeValues.lfo.wave.length - 1],
      'rangeValues': rangeValues.lfo.wave,
      'default': 0
    }
  ],
  '0:80': [
    {
      'name': 'lfo 2 phase offset',
      'range': [0, 119],
      'default': 0
    }
  ],
  '0:81': [
    {
      'name': 'lfo 2 slew rate',
      'range': [0, 127],
      'default': 0
    }
  ],
  '0:82': [
    {
      'name': 'lfo 2 delay',
      'range': [0, 127],
      'default': 0
    }
  ],
  '0:83': [
    {
      'name': 'lfo 2 delay sync',
      'range': [0, 35],
      'default': 0
    }
  ],
  '0:83': [
    {
      'name': 'lfo 2 rate',
      'range': [0, 127],
      'default': 68
    }
  ],
  '0:84': [
    {
      'name': 'lfo 2 rate sync',
      'range': [0, 35],
      'default': 0
    }
  ],

  // LFO 1 and 2
  '0:122': [

    // LFO 1
    {
      'name': 'lfo 1 one shot',
      'range': [12, 13],
      'rangeValues': ['OFF', 'ON'],
      'default': 12
    },
    {
      'name': 'lfo 1 key sync',
      'range': [14, 15],
      'rangeValues': ['OFF', 'ON'],
      'default': 14
    },
    {
      'name': 'lfo 1 common sync',
      'range': [16, 17],
      'rangeValues': ['OFF', 'ON'],
      'default': 16
    },
    {
      'name': 'lfo 1 delay trigger',
      'range': [18, 19],
      'rangeValues': ['OFF', 'ON'],
      'default': 18
    },

    // LFO 2
    {
      'name': 'lfo 2 one shot',
      'range': [22, 23],
      'rangeValues': ['OFF', 'ON'],
      'default': 12
    },
    {
      'name': 'lfo 2 key sync',
      'range': [24, 25],
      'rangeValues': ['OFF', 'ON'],
      'default': 14
    },
    {
      'name': 'lfo 2 common sync',
      'range': [26, 27],
      'rangeValues': ['OFF', 'ON'],
      'default': 16
    },
    {
      'name': 'lfo 2 delay trigger',
      'range': [28, 29],
      'rangeValues': ['OFF', 'ON'],
      'default': 18
    }
  ],
  '0:123': [

    // LFO 1
    {
      'name': 'lfo 1 fade mode',
      'range': [0, rangeValues.lfo.fadeMode.length - 1],
      'rangeValues': rangeValues.lfo.fadeMode,
      'default': 0
    },

    // LFO 2
    {
      'name': 'lfo 2 fade mode',
      'range': [4, 4 + rangeValues.lfo.fadeMode.length - 1],
      'rangeValues': rangeValues.lfo.fadeMode,
      'default': 4
    }
  ]
};

module.exports = midiNRPNs;