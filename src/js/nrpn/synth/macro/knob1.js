
const midiNRPNs = {

  // Macro Knob 1
  '3:0': [
    {
      'name': 'macro knob 1 destination A',
      'range': [0, 70],
      'default': 0
    }
  ],
  '3:1': [
    {
      'name': 'macro knob 1 start position A',
      'range': [0, 127],
      'default': 0
    }
  ],
  '3:2': [
    {
      'name': 'macro knob 1 end position A',
      'range': [0, 127],
      'default': 127
    }
  ],
  '3:3': [
    {
      'name': 'macro knob 1 depth A',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'default': 0
    }
  ],

  '3:4': [
    {
      'name': 'macro knob 1 destination B',
      'range': [0, 70],
      'default': 0
    }
  ],
  '3:5': [
    {
      'name': 'macro knob 1 start position B',
      'range': [0, 127],
      'default': 0
    }
  ],
  '3:6': [
    {
      'name': 'macro knob 1 end position B',
      'range': [0, 127],
      'default': 127
    }
  ],
  '3:7': [
    {
      'name': 'macro knob 1 depth B',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'default': 0
    }
  ],

  '3:8': [
    {
      'name': 'macro knob 1 destination C',
      'range': [0, 70],
      'default': 0
    }
  ],
  '3:9': [
    {
      'name': 'macro knob 1 start position C',
      'range': [0, 127],
      'default': 0
    }
  ],
  '3:10': [
    {
      'name': 'macro knob 1 end position C',
      'range': [0, 127],
      'default': 127
    }
  ],
  '3:11': [
    {
      'name': 'macro knob 1 depth C',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'default': 0
    }
  ],

  '3:12': [
    {
      'name': 'macro knob 1 destination D',
      'range': [0, 70],
      'default': 0
    }
  ],
  '3:13': [
    {
      'name': 'macro knob 1 start position D',
      'range': [0, 127],
      'default': 0
    }
  ],
  '3:14': [
    {
      'name': 'macro knob 1 end position D',
      'range': [0, 127],
      'default': 127
    }
  ],
  '3:15': [
    {
      'name': 'macro knob 1 depth D',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'default': 0
    }
  ]
};

module.exports = midiNRPNs;