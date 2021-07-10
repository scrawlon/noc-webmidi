
var rangeValues = require('../../range-values');
var midiNRPNs = {};
var midiComponents = {};

midiNRPNs = {
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
};

midiComponents = [
  '0:104',
  '0:105',
  '0:106',
  '0:107',
  '0:108',
  '0:109',
  '1:0',
  '1:1',
  '1:24',
  '1:25',
  '1:26',
  '1:27',
  '1:28',
  '1:29'
];

module.exports = {
  midiNRPNs: midiNRPNs,
  midiComponents: midiComponents
}