
const rangeValues = require('../../range-values');

const midiNRPNs = {
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

module.exports = midiNRPNs;
