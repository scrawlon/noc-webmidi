
var midiNRPNs = {};
var midiComponents = {};

midiNRPNs = {

  // Side Chain
  '2:55': [
    {
      'name': 'synth 1 source',
      'range': [0, 4],
      'rangeValues': [
        'Drum 1',
        'Drum 2',
        'Drum 3',
        'Drum 4',
        'OFF'
      ],
      'default': 0
    }
  ],
  '2:56': [
    {
      'name': 'synth 1 attack',
      'range': [0, 127],
      'default': 0
    }
  ],
  '2:57': [
    {
      'name': 'synth 1 hold',
      'range': [0, 127],
      'default': 50
    }
  ],
  '2:58': [
    {
      'name': 'synth 1 decay',
      'range': [0, 127],
      'default': 70
    }
  ],
  '2:59': [
    {
      'name': 'synth 1 depth',
      'range': [0, 127],
      'default': 0
    }
  ],

  '2:65': [
    {
      'name': 'synth 2 source',
      'range': [0, 4],
      'rangeValues': [
        'Drum 1',
        'Drum 2',
        'Drum 3',
        'Drum 4',
        'OFF'
      ],
      'default': 0
    }
  ],
  '2:66': [
    {
      'name': 'synth 2 attack',
      'range': [0, 127],
      'default': 0
    }
  ],
  '2:67': [
    {
      'name': 'synth 2 hold',
      'range': [0, 127],
      'default': 50
    }
  ],
  '2:68': [
    {
      'name': 'synth 2 decay',
      'range': [0, 127],
      'default': 70
    }
  ],
  '1:69': [
    {
      'name': 'synth 2 depth',
      'range': [0, 127],
      'default': 0
    }
  ]
};

midiComponents = [
  '2:55',
  '2:56',
  '2:57',
  '2:58',
  '2:59',
  '2:65',
  '2:66',
  '2:67',
  '2:68',
  '1:69'
];

module.exports = {
  midiNRPNs: midiNRPNs,
  midiComponents: midiComponents
}