
var midiNRPNs = {};
var midiComponents = {};

midiNRPNs = {
  '0:0': [
    {
      'name': 'env 2 velocity',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'default': 64
    }
  ],
  '0:1': [
    {
      'name': 'env 2 attack',
      'range': [0, 127],
      'default': 2
    }
  ],
  '0:2': [
    {
      'name': 'env 2 decay',
      'range': [0, 127],
      'default': 75
    }
  ],
  '0:3': [
    {
      'name': 'env 2 sustain',
      'range': [0, 127],
      'default': 35
    }
  ],
  '0:4': [
    {
      'name': 'env 2 release',
      'range': [0, 127],
      'default': 45
    }
  ],
  '0:14': [
    {
      'name': 'env 3 delay',
      'range': [0, 127],
      'default': 0
    }
  ],
  '0:15': [
    {
      'name': 'env 3 attack',
      'range': [0, 127],
      'default': 10
    }
  ],
  '0:16': [
    {
      'name': 'env 3 decay',
      'range': [0, 127],
      'default': 70
    }
  ],
  '0:17': [
    {
      'name': 'env 3 sustain',
      'range': [0, 127],
      'default': 35
    }
  ],
  '0:18': [
    {
      'name': 'env 3 release',
      'range': [0, 127],
      'default': 45
    }
  ],
};

midiComponents = [
  '0:0',
  '0:1',
  '0:2',
  '0:4',
  '0:14',
  '0:15',
  '0:16',
  '0:17',
  '0:18'
];

module.exports = {
  midiNRPNs: midiNRPNs,
  midiComponents: midiComponents
}
