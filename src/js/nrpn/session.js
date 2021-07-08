(function () {
  var rangeValues = require('../range-values');
  var midiNRPNs = {};
  var midiComponents = {};

  midiNRPNs = {

    // Reverb
    '1:18': [
      {
        'name': 'type',
        'range': [0, 5],
        'rangeValues': [
          'Chamber',
          'Small Room',
          'Large Room',
          'Small Hall',
          'Large Hall',
          'Great Hall'
        ],
        'default': 127
      }
    ],
    '1:19': [
      {
        'name': 'decay',
        'range': [0, 127],
        'default': 64
      }
    ],
    '1:20': [
      {
        'name': 'damping',
        'range': [0, 127],
        'default': 64
      }
    ],

    // Delay
    '1:6': [
      {
        'name': 'time',
        'range': [0, 127],
        'default': 64
      }
    ],
    '1:7': [
      {
        'name': 'time sync',
        'range': [0, 35],
        'default': 20
      }
    ],
    '1:8': [
      {
        'name': 'feedback',
        'range': [0, 127],
        'default': 64
      }
    ],
    '1:9': [
      {
        'name': 'width',
        'range': [0, 127],
        'default': 127
      }
    ],
    '1:10': [
      {
        'name': 'left-right ratio',
        'range': [0, 12],
        'rangeValues': [
          '1:1',
          '4:3',
          '3:4',
          '3:2',
          '2:3',
          '2:1',
          '1:2',
          '3:1',
          '1:3',
          '4:1',
          '1:4',
          '1:OFF',
          'OFF:1'
        ],
        'default': 4
      }
    ],
    '1:11': [
      {
        'name': 'slew rate',
        'range': [0, 127],
        'default': 5
      }
    ],

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
    '2:69': [
      {
        'name': 'synth 2 depth',
        'range': [0, 127],
        'default': 0
      }
    ],

    // Additional Controls
    '1:21': [
      {
        'name': 'FX Bypass',
        'range': [0, 1],
        'rangeValues': ['OFF', 'ON'],
        'default': 0
      }
    ],
  };


  // midiComponents = {
  //   'voice': ['3', '5', '9', '13'],
  //   'osc 1': ['19', '20', '21', '22', '24', '25', '26', '27', '28'],
  //   'osc 2': ['29', '30', '31', '33', '35', '36', '37', '39', '40'],
  //   'mixer': ['51', '52', '54', '56', '58', '59'],
  //   'filter': ['60', '63', '65', '68', '74', '69', '71', '78', '79'],
  //   'envelope': ['108', '73', '75', '70', '72'],
  //   'effects': ['91', '93'],
  //   'macro': ['80', '81', '82', '83', '84', '85', '86', '87']
  // };

  module.exports = {
    midiNRPNs: midiNRPNs
  };
})();
