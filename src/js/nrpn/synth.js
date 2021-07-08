(function () {
  var rangeValues = require('../range-values');
  var midiNRPNs = {};
  var midiComponents = {};

  midiNRPNs = { // Circuit Synths: midi channels 1 and 2
    // Section: Envelope
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

    // Section: LFO 1
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

    // Section: LFO 2
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
    ],

    // Effects and EQ
    '0:104': [
      {
        'name': 'EQ bass level',
        'range': [0, 127],
        'default': 0
      },
    ],
    '0:105': [
      {
        'name': 'EQ bass frequency',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 0
      },
    ],
    '0:106': [
      {
        'name': 'EQ mid level',
        'range': [0, 127],
        'default': 0
      },
    ],
    '0:107': [
      {
        'name': 'EQ mid frequency',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 0
      },
    ],
    '0:108': [
      {
        'name': 'EQ treble level',
        'range': [0, 127],
        'default': 0
      },
    ],
    '0:109': [
      {
        'name': 'EQ treble frequency',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 0
      },
    ],
    '1:0': [
      {
        'name': 'distortion type',
        'range': [0, rangeValues.distortion.driveType.length - 1],
        'rangeValues': rangeValues.distortion.driveType,
        'default': 0
      }
    ],
    '1:1': [
      {
        'name': 'distortion compensation',
        'range': [0, 127],
        'default': 100
      }
    ],
    '1:24': [
      {
        'name': 'chorus type',
        'range': [0, 1],
        'rangeValues': ['phaser', 'chorus'],
        'default': 1
      }
    ],
    '1:25': [
      {
        'name': 'chorus rate',
        'range': [0, 127],
        'default': 84
      }
    ],
    '1:26': [
      {
        'name': 'chorus rate sync',
        'range': [0, 35],
        'default': 0
      }
    ],
    '1:27': [
      {
        'name': 'chorus feedback',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 74
      }
    ],
    '1:28': [
      {
        'name': 'chorus mod depth',
        'range': [0, 127],
        'default': 64
      }
    ],
    '1:29': [
      {
        'name': 'chorus delay',
        'range': [0, 127],
        'default': 64
      }
    ],

    // Mod Matrix
    '1:83': [
      {
        'name': 'mod matrix 1 source 1',
        'range': [0, rangeValues.modMatrix.source.length - 1],
        'rangeValues': rangeValues.modMatrix.source,
        'default': 0
      }
    ],
    '1:84': [
      {
        'name': 'mod matrix 1 source 2',
        'range': [0, rangeValues.modMatrix.source.length - 1],
        'rangeValues': rangeValues.modMatrix.source,
        'default': 0
      }
    ],
    '1:86': [
      {
        'name': 'mod matrix 1 depth',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 64
      }
    ],
    '1:87': [
      {
        'name': 'mod matrix 1 destination',
        'range': [0, rangeValues.modMatrix.destination.length - 1],
        'rangeValues': rangeValues.modMatrix.destination,
        'default': 0
      }
    ],

    '1:88': [
      {
        'name': 'mod matrix 2 source 1',
        'range': [0, rangeValues.modMatrix.source.length - 1],
        'rangeValues': rangeValues.modMatrix.source,
        'default': 0
      }
    ],
    '1:89': [
      {
        'name': 'mod matrix 2 source 2',
        'range': [0, rangeValues.modMatrix.source.length - 1],
        'rangeValues': rangeValues.modMatrix.source,
        'default': 0
      }
    ],
    '1:91': [
      {
        'name': 'mod matrix 2 depth',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 64
      }
    ],
    '1:92': [
      {
        'name': 'mod matrix 2 destination',
        'range': [0, rangeValues.modMatrix.destination.length - 1],
        'rangeValues': rangeValues.modMatrix.destination,
        'default': 0
      }
    ],

    '1:93': [
      {
        'name': 'mod matrix 3 source 1',
        'range': [0, rangeValues.modMatrix.source.length - 1],
        'rangeValues': rangeValues.modMatrix.source,
        'default': 0
      }
    ],
    '1:94': [
      {
        'name': 'mod matrix 3 source 2',
        'range': [0, rangeValues.modMatrix.source.length - 1],
        'rangeValues': rangeValues.modMatrix.source,
        'default': 0
      }
    ],
    '1:96': [
      {
        'name': 'mod matrix 3 depth',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 64
      }
    ],
    '1:97': [
      {
        'name': 'mod matrix 3 destination',
        'range': [0, rangeValues.modMatrix.destination.length - 1],
        'rangeValues': rangeValues.modMatrix.destination,
        'default': 0
      }
    ],

    '1:98': [
      {
        'name': 'mod matrix 4 source 1',
        'range': [0, rangeValues.modMatrix.source.length - 1],
        'rangeValues': rangeValues.modMatrix.source,
        'default': 0
      }
    ],
    '1:99': [
      {
        'name': 'mod matrix 4 source 2',
        'range': [0, rangeValues.modMatrix.source.length - 1],
        'rangeValues': rangeValues.modMatrix.source,
        'default': 0
      }
    ],
    '1:101': [
      {
        'name': 'mod matrix 4 depth',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 64
      }
    ],
    '1:102': [
      {
        'name': 'mod matrix 4 destination',
        'range': [0, rangeValues.modMatrix.destination.length - 1],
        'rangeValues': rangeValues.modMatrix.destination,
        'default': 0
      }
    ],

    '1:103': [
      {
        'name': 'mod matrix 5 source 1',
        'range': [0, rangeValues.modMatrix.source.length - 1],
        'rangeValues': rangeValues.modMatrix.source,
        'default': 0
      }
    ],
    '1:104': [
      {
        'name': 'mod matrix 5 source 2',
        'range': [0, rangeValues.modMatrix.source.length - 1],
        'rangeValues': rangeValues.modMatrix.source,
        'default': 0
      }
    ],
    '1:106': [
      {
        'name': 'mod matrix 5 depth',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 64
      }
    ],
    '1:107': [
      {
        'name': 'mod matrix 5 destination',
        'range': [0, rangeValues.modMatrix.destination.length - 1],
        'rangeValues': rangeValues.modMatrix.destination,
        'default': 0
      }
    ],

    '1:108': [
      {
        'name': 'mod matrix 6 source 1',
        'range': [0, rangeValues.modMatrix.source.length - 1],
        'rangeValues': rangeValues.modMatrix.source,
        'default': 0
      }
    ],
    '1:109': [
      {
        'name': 'mod matrix 6 source 2',
        'range': [0, rangeValues.modMatrix.source.length - 1],
        'rangeValues': rangeValues.modMatrix.source,
        'default': 0
      }
    ],
    '1:111': [
      {
        'name': 'mod matrix 6 depth',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 64
      }
    ],
    '1:112': [
      {
        'name': 'mod matrix 6 destination',
        'range': [0, rangeValues.modMatrix.destination.length - 1],
        'rangeValues': rangeValues.modMatrix.destination,
        'default': 0
      }
    ],

    '1:113': [
      {
        'name': 'mod matrix 7 source 1',
        'range': [0, rangeValues.modMatrix.source.length - 1],
        'rangeValues': rangeValues.modMatrix.source,
        'default': 0
      }
    ],
    '1:114': [
      {
        'name': 'mod matrix 7 source 2',
        'range': [0, rangeValues.modMatrix.source.length - 1],
        'rangeValues': rangeValues.modMatrix.source,
        'default': 0
      }
    ],
    '1:116': [
      {
        'name': 'mod matrix 7 depth',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 64
      }
    ],
    '1:117': [
      {
        'name': 'mod matrix 7 destination',
        'range': [0, rangeValues.modMatrix.destination.length - 1],
        'rangeValues': rangeValues.modMatrix.destination,
        'default': 0
      }
    ],

    '1:118': [
      {
        'name': 'mod matrix 8 source 1',
        'range': [0, rangeValues.modMatrix.source.length - 1],
        'rangeValues': rangeValues.modMatrix.source,
        'default': 0
      }
    ],
    '1:119': [
      {
        'name': 'mod matrix 8 source 2',
        'range': [0, rangeValues.modMatrix.source.length - 1],
        'rangeValues': rangeValues.modMatrix.source,
        'default': 0
      }
    ],
    '1:121': [
      {
        'name': 'mod matrix 8 depth',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 64
      }
    ],
    '1:122': [
      {
        'name': 'mod matrix 8 destination',
        'range': [0, rangeValues.modMatrix.destination.length - 1],
        'rangeValues': rangeValues.modMatrix.destination,
        'default': 0
      }
    ],

    '1:123': [
      {
        'name': 'mod matrix 9 source 1',
        'range': [0, rangeValues.modMatrix.source.length - 1],
        'rangeValues': rangeValues.modMatrix.source,
        'default': 0
      }
    ],
    '1:124': [
      {
        'name': 'mod matrix 9 source 2',
        'range': [0, rangeValues.modMatrix.source.length - 1],
        'rangeValues': rangeValues.modMatrix.source,
        'default': 0
      }
    ],
    '1:126': [
      {
        'name': 'mod matrix 9 depth',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 64
      }
    ],
    '1:127': [
      {
        'name': 'mod matrix 9 destination',
        'range': [0, rangeValues.modMatrix.destination.length - 1],
        'rangeValues': rangeValues.modMatrix.destination,
        'default': 0
      }
    ],

    '2:0': [
      {
        'name': 'mod matrix 10 source 1',
        'range': [0, rangeValues.modMatrix.source.length - 1],
        'rangeValues': rangeValues.modMatrix.source,
        'default': 0
      }
    ],
    '2:1': [
      {
        'name': 'mod matrix 10 source 2',
        'range': [0, rangeValues.modMatrix.source.length - 1],
        'rangeValues': rangeValues.modMatrix.source,
        'default': 0
      }
    ],
    '2:3': [
      {
        'name': 'mod matrix 10 depth',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 64
      }
    ],
    '2:4': [
      {
        'name': 'mod matrix 10 destination',
        'range': [0, rangeValues.modMatrix.destination.length - 1],
        'rangeValues': rangeValues.modMatrix.destination,
        'default': 0
      }
    ],

    '2:5': [
      {
        'name': 'mod matrix 11 source 1',
        'range': [0, rangeValues.modMatrix.source.length - 1],
        'rangeValues': rangeValues.modMatrix.source,
        'default': 0
      }
    ],
    '2:6': [
      {
        'name': 'mod matrix 11 source 2',
        'range': [0, rangeValues.modMatrix.source.length - 1],
        'rangeValues': rangeValues.modMatrix.source,
        'default': 0
      }
    ],
    '2:8': [
      {
        'name': 'mod matrix 11 depth',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 64
      }
    ],
    '2:9': [
      {
        'name': 'mod matrix 11 destination',
        'range': [0, rangeValues.modMatrix.destination.length - 1],
        'rangeValues': rangeValues.modMatrix.destination,
        'default': 0
      }
    ],

    '2:10': [
      {
        'name': 'mod matrix 12 source 1',
        'range': [0, rangeValues.modMatrix.source.length - 1],
        'rangeValues': rangeValues.modMatrix.source,
        'default': 0
      }
    ],
    '2:11': [
      {
        'name': 'mod matrix 12 source 2',
        'range': [0, rangeValues.modMatrix.source.length - 1],
        'rangeValues': rangeValues.modMatrix.source,
        'default': 0
      }
    ],
    '2:13': [
      {
        'name': 'mod matrix 12 depth',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 64
      }
    ],
    '2:14': [
      {
        'name': 'mod matrix 12 destination',
        'range': [0, rangeValues.modMatrix.destination.length - 1],
        'rangeValues': rangeValues.modMatrix.destination,
        'default': 0
      }
    ],

    '2:15': [
      {
        'name': 'mod matrix 13 source 1',
        'range': [0, rangeValues.modMatrix.source.length - 1],
        'rangeValues': rangeValues.modMatrix.source,
        'default': 0
      }
    ],
    '2:16': [
      {
        'name': 'mod matrix 13 source 2',
        'range': [0, rangeValues.modMatrix.source.length - 1],
        'rangeValues': rangeValues.modMatrix.source,
        'default': 0
      }
    ],
    '2:18': [
      {
        'name': 'mod matrix 13 depth',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 64
      }
    ],
    '2:19': [
      {
        'name': 'mod matrix 13 destination',
        'range': [0, rangeValues.modMatrix.destination.length - 1],
        'rangeValues': rangeValues.modMatrix.destination,
        'default': 0
      }
    ],

    '2:20': [
      {
        'name': 'mod matrix 14 source 1',
        'range': [0, rangeValues.modMatrix.source.length - 1],
        'rangeValues': rangeValues.modMatrix.source,
        'default': 0
      }
    ],
    '2:21': [
      {
        'name': 'mod matrix 14 source 2',
        'range': [0, rangeValues.modMatrix.source.length - 1],
        'rangeValues': rangeValues.modMatrix.source,
        'default': 0
      }
    ],
    '2:23': [
      {
        'name': 'mod matrix 14 depth',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 64
      }
    ],
    '2:24': [
      {
        'name': 'mod matrix 14 destination',
        'range': [0, rangeValues.modMatrix.destination.length - 1],
        'rangeValues': rangeValues.modMatrix.destination,
        'default': 0
      }
    ],

    '2:25': [
      {
        'name': 'mod matrix 15 source 1',
        'range': [0, rangeValues.modMatrix.source.length - 1],
        'rangeValues': rangeValues.modMatrix.source,
        'default': 0
      }
    ],
    '2:27': [
      {
        'name': 'mod matrix 15 source 2',
        'range': [0, rangeValues.modMatrix.source.length - 1],
        'rangeValues': rangeValues.modMatrix.source,
        'default': 0
      }
    ],
    '2:28': [
      {
        'name': 'mod matrix 15 depth',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 64
      }
    ],
    '2:29': [
      {
        'name': 'mod matrix 15 destination',
        'range': [0, rangeValues.modMatrix.destination.length - 1],
        'rangeValues': rangeValues.modMatrix.destination,
        'default': 0
      }
    ],

    '2:30': [
      {
        'name': 'mod matrix 16 source 1',
        'range': [0, rangeValues.modMatrix.source.length - 1],
        'rangeValues': rangeValues.modMatrix.source,
        'default': 0
      }
    ],
    '2:32': [
      {
        'name': 'mod matrix 16 source 2',
        'range': [0, rangeValues.modMatrix.source.length - 1],
        'rangeValues': rangeValues.modMatrix.source,
        'default': 0
      }
    ],
    '2:33': [
      {
        'name': 'mod matrix 16 depth',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 64
      }
    ],
    '2:34': [
      {
        'name': 'mod matrix 16 destination',
        'range': [0, rangeValues.modMatrix.destination.length - 1],
        'rangeValues': rangeValues.modMatrix.destination,
        'default': 0
      }
    ],

    '2:35': [
      {
        'name': 'mod matrix 17 source 1',
        'range': [0, rangeValues.modMatrix.source.length - 1],
        'rangeValues': rangeValues.modMatrix.source,
        'default': 0
      }
    ],
    '2:37': [
      {
        'name': 'mod matrix 17 source 2',
        'range': [0, rangeValues.modMatrix.source.length - 1],
        'rangeValues': rangeValues.modMatrix.source,
        'default': 0
      }
    ],
    '2:38': [
      {
        'name': 'mod matrix 17 depth',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 64
      }
    ],
    '2:39': [
      {
        'name': 'mod matrix 17 destination',
        'range': [0, rangeValues.modMatrix.destination.length - 1],
        'rangeValues': rangeValues.modMatrix.destination,
        'default': 0
      }
    ],

    '2:40': [
      {
        'name': 'mod matrix 18 source 1',
        'range': [0, rangeValues.modMatrix.source.length - 1],
        'rangeValues': rangeValues.modMatrix.source,
        'default': 0
      }
    ],
    '2:42': [
      {
        'name': 'mod matrix 18 source 2',
        'range': [0, rangeValues.modMatrix.source.length - 1],
        'rangeValues': rangeValues.modMatrix.source,
        'default': 0
      }
    ],
    '2:43': [
      {
        'name': 'mod matrix 18 depth',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 64
      }
    ],
    '2:44': [
      {
        'name': 'mod matrix 18 destination',
        'range': [0, rangeValues.modMatrix.destination.length - 1],
        'rangeValues': rangeValues.modMatrix.destination,
        'default': 0
      }
    ],

    '2:45': [
      {
        'name': 'mod matrix 19 source 1',
        'range': [0, rangeValues.modMatrix.source.length - 1],
        'rangeValues': rangeValues.modMatrix.source,
        'default': 0
      }
    ],
    '2:47': [
      {
        'name': 'mod matrix 19 source 2',
        'range': [0, rangeValues.modMatrix.source.length - 1],
        'rangeValues': rangeValues.modMatrix.source,
        'default': 0
      }
    ],
    '2:48': [
      {
        'name': 'mod matrix 19 depth',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 64
      }
    ],
    '2:49': [
      {
        'name': 'mod matrix 19 destination',
        'range': [0, rangeValues.modMatrix.destination.length - 1],
        'rangeValues': rangeValues.modMatrix.destination,
        'default': 0
      }
    ],

    '2:50': [
      {
        'name': 'mod matrix 20 source 1',
        'range': [0, rangeValues.modMatrix.source.length - 1],
        'rangeValues': rangeValues.modMatrix.source,
        'default': 0
      }
    ],
    '2:52': [
      {
        'name': 'mod matrix 20 source 2',
        'range': [0, rangeValues.modMatrix.source.length - 1],
        'rangeValues': rangeValues.modMatrix.source,
        'default': 0
      }
    ],
    '2:53': [
      {
        'name': 'mod matrix 20 depth',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 64
      }
    ],
    '2:54': [
      {
        'name': 'mod matrix 20 destination',
        'range': [0, rangeValues.modMatrix.destination.length - 1],
        'rangeValues': rangeValues.modMatrix.destination,
        'default': 0
      }
    ],

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
    ],

    // Macro Knob 2
    '3:16': [
      {
        'name': 'macro knob 2 destination A',
        'range': [0, 70],
        'default': 0
      }
    ],
    '3:17': [
      {
        'name': 'macro knob 2 start position A',
        'range': [0, 127],
        'default': 0
      }
    ],
    '3:18': [
      {
        'name': 'macro knob 2 end position A',
        'range': [0, 127],
        'default': 127
      }
    ],
    '3:19': [
      {
        'name': 'macro knob 2 depth A',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 0
      }
    ],

    '3:20': [
      {
        'name': 'macro knob 2 destination B',
        'range': [0, 70],
        'default': 0
      }
    ],
    '3:21': [
      {
        'name': 'macro knob 2 start position B',
        'range': [0, 127],
        'default': 0
      }
    ],
    '3:22': [
      {
        'name': 'macro knob 2 end position B',
        'range': [0, 127],
        'default': 127
      }
    ],
    '3:23': [
      {
        'name': 'macro knob 2 depth B',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 0
      }
    ],

    '3:24': [
      {
        'name': 'macro knob 2 destination C',
        'range': [0, 70],
        'default': 0
      }
    ],
    '3:25': [
      {
        'name': 'macro knob 2 start position C',
        'range': [0, 127],
        'default': 0
      }
    ],
    '3:26': [
      {
        'name': 'macro knob 2 end position C',
        'range': [0, 127],
        'default': 127
      }
    ],
    '3:27': [
      {
        'name': 'macro knob 2 depth C',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 0
      }
    ],

    '3:28': [
      {
        'name': 'macro knob 2 destination D',
        'range': [0, 70],
        'default': 0
      }
    ],
    '3:29': [
      {
        'name': 'macro knob 2 start position D',
        'range': [0, 127],
        'default': 0
      }
    ],
    '3:30': [
      {
        'name': 'macro knob 2 end position D',
        'range': [0, 127],
        'default': 127
      }
    ],
    '3:31': [
      {
        'name': 'macro knob 2 depth D',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 0
      }
    ],

    // Macro Knob 3
    '3:32': [
      {
        'name': 'macro knob 3 destination A',
        'range': [0, 70],
        'default': 0
      }
    ],
    '3:33': [
      {
        'name': 'macro knob 3 start position A',
        'range': [0, 127],
        'default': 0
      }
    ],
    '3:34': [
      {
        'name': 'macro knob 3 end position A',
        'range': [0, 127],
        'default': 127
      }
    ],
    '3:35': [
      {
        'name': 'macro knob 3 depth A',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 0
      }
    ],

    '3:36': [
      {
        'name': 'macro knob 3 destination B',
        'range': [0, 70],
        'default': 0
      }
    ],
    '3:37': [
      {
        'name': 'macro knob 3 start position B',
        'range': [0, 127],
        'default': 0
      }
    ],
    '3:38': [
      {
        'name': 'macro knob 3 end position B',
        'range': [0, 127],
        'default': 127
      }
    ],
    '3:39': [
      {
        'name': 'macro knob 3 depth B',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 0
      }
    ],

    '3:40': [
      {
        'name': 'macro knob 3 destination C',
        'range': [0, 70],
        'default': 0
      }
    ],
    '3:41': [
      {
        'name': 'macro knob 3 start position C',
        'range': [0, 127],
        'default': 0
      }
    ],
    '3:42': [
      {
        'name': 'macro knob 3 end position C',
        'range': [0, 127],
        'default': 127
      }
    ],
    '3:43': [
      {
        'name': 'macro knob 3 depth C',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 0
      }
    ],

    '3:44': [
      {
        'name': 'macro knob 3 destination D',
        'range': [0, 70],
        'default': 0
      }
    ],
    '3:45': [
      {
        'name': 'macro knob 3 start position D',
        'range': [0, 127],
        'default': 0
      }
    ],
    '3:46': [
      {
        'name': 'macro knob 3 end position D',
        'range': [0, 127],
        'default': 127
      }
    ],
    '3:47': [
      {
        'name': 'macro knob 3 depth D',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 0
      }
    ],

    // Macro Knob 4
    '3:48': [
      {
        'name': 'macro knob 4 destination A',
        'range': [0, 70],
        'default': 0
      }
    ],
    '3:49': [
      {
        'name': 'macro knob 4 start position A',
        'range': [0, 127],
        'default': 0
      }
    ],
    '3:50': [
      {
        'name': 'macro knob 4 end position A',
        'range': [0, 127],
        'default': 127
      }
    ],
    '3:51': [
      {
        'name': 'macro knob 4 depth A',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 0
      }
    ],

    '3:52': [
      {
        'name': 'macro knob 4 destination B',
        'range': [0, 70],
        'default': 0
      }
    ],
    '3:53': [
      {
        'name': 'macro knob 4 start position B',
        'range': [0, 127],
        'default': 0
      }
    ],
    '3:54': [
      {
        'name': 'macro knob 4 end position B',
        'range': [0, 127],
        'default': 127
      }
    ],
    '3:55': [
      {
        'name': 'macro knob 4 depth B',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 0
      }
    ],

    '3:56': [
      {
        'name': 'macro knob 4 destination C',
        'range': [0, 70],
        'default': 0
      }
    ],
    '3:57': [
      {
        'name': 'macro knob 4 start position C',
        'range': [0, 127],
        'default': 0
      }
    ],
    '3:58': [
      {
        'name': 'macro knob 4 end position C',
        'range': [0, 127],
        'default': 127
      }
    ],
    '3:59': [
      {
        'name': 'macro knob 4 depth C',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 0
      }
    ],

    '3:60': [
      {
        'name': 'macro knob 4 destination D',
        'range': [0, 70],
        'default': 0
      }
    ],
    '3:61': [
      {
        'name': 'macro knob 4 start position D',
        'range': [0, 127],
        'default': 0
      }
    ],
    '3:62': [
      {
        'name': 'macro knob 4 end position D',
        'range': [0, 127],
        'default': 127
      }
    ],
    '3:63': [
      {
        'name': 'macro knob 4 depth D',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 0
      }
    ],

    // Macro Knob 5
    '3:64': [
      {
        'name': 'macro knob 5 destination A',
        'range': [0, 70],
        'default': 0
      }
    ],
    '3:65': [
      {
        'name': 'macro knob 5 start position A',
        'range': [0, 127],
        'default': 0
      }
    ],
    '3:66': [
      {
        'name': 'macro knob 5 end position A',
        'range': [0, 127],
        'default': 127
      }
    ],
    '3:67': [
      {
        'name': 'macro knob 5 depth A',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 0
      }
    ],

    '3:68': [
      {
        'name': 'macro knob 5 destination B',
        'range': [0, 70],
        'default': 0
      }
    ],
    '3:69': [
      {
        'name': 'macro knob 5 start position B',
        'range': [0, 127],
        'default': 0
      }
    ],
    '3:70': [
      {
        'name': 'macro knob 5 end position B',
        'range': [0, 127],
        'default': 127
      }
    ],
    '3:71': [
      {
        'name': 'macro knob 5 depth B',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 0
      }
    ],

    '3:72': [
      {
        'name': 'macro knob 5 destination C',
        'range': [0, 70],
        'default': 0
      }
    ],
    '3:73': [
      {
        'name': 'macro knob 5 start position C',
        'range': [0, 127],
        'default': 0
      }
    ],
    '3:74': [
      {
        'name': 'macro knob 5 end position C',
        'range': [0, 127],
        'default': 127
      }
    ],
    '3:75': [
      {
        'name': 'macro knob 5 depth C',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 0
      }
    ],

    '3:76': [
      {
        'name': 'macro knob 5 destination D',
        'range': [0, 70],
        'default': 0
      }
    ],
    '3:77': [
      {
        'name': 'macro knob 5 start position D',
        'range': [0, 127],
        'default': 0
      }
    ],
    '3:78': [
      {
        'name': 'macro knob 5 end position D',
        'range': [0, 127],
        'default': 127
      }
    ],
    '3:79': [
      {
        'name': 'macro knob 5 depth D',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 0
      }
    ],

    // Macro Knob 6
    '3:80': [
      {
        'name': 'macro knob 6 destination A',
        'range': [0, 70],
        'default': 0
      }
    ],
    '3:81': [
      {
        'name': 'macro knob 6 start position A',
        'range': [0, 127],
        'default': 0
      }
    ],
    '3:82': [
      {
        'name': 'macro knob 6 end position A',
        'range': [0, 127],
        'default': 127
      }
    ],
    '3:83': [
      {
        'name': 'macro knob 6 depth A',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 0
      }
    ],

    '3:84': [
      {
        'name': 'macro knob 6 destination B',
        'range': [0, 70],
        'default': 0
      }
    ],
    '3:85': [
      {
        'name': 'macro knob 6 start position B',
        'range': [0, 127],
        'default': 0
      }
    ],
    '3:86': [
      {
        'name': 'macro knob 6 end position B',
        'range': [0, 127],
        'default': 127
      }
    ],
    '3:87': [
      {
        'name': 'macro knob 6 depth B',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 0
      }
    ],

    '3:88': [
      {
        'name': 'macro knob 6 destination C',
        'range': [0, 70],
        'default': 0
      }
    ],
    '3:89': [
      {
        'name': 'macro knob 6 start position C',
        'range': [0, 127],
        'default': 0
      }
    ],
    '3:90': [
      {
        'name': 'macro knob 6 end position C',
        'range': [0, 127],
        'default': 127
      }
    ],
    '3:91': [
      {
        'name': 'macro knob 6 depth C',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 0
      }
    ],

    '3:92': [
      {
        'name': 'macro knob 6 destination D',
        'range': [0, 70],
        'default': 0
      }
    ],
    '3:93': [
      {
        'name': 'macro knob 6 start position D',
        'range': [0, 127],
        'default': 0
      }
    ],
    '3:94': [
      {
        'name': 'macro knob 6 end position D',
        'range': [0, 127],
        'default': 127
      }
    ],
    '3:95': [
      {
        'name': 'macro knob 6 depth D',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 0
      }
    ],

    // Macro Knob 7
    '3:96': [
      {
        'name': 'macro knob 7 destination A',
        'range': [0, 70],
        'default': 0
      }
    ],
    '3:97': [
      {
        'name': 'macro knob 7 start position A',
        'range': [0, 127],
        'default': 0
      }
    ],
    '3:98': [
      {
        'name': 'macro knob 7 end position A',
        'range': [0, 127],
        'default': 127
      }
    ],
    '3:99': [
      {
        'name': 'macro knob 7 depth A',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 0
      }
    ],

    '3:100': [
      {
        'name': 'macro knob 7 destination B',
        'range': [0, 70],
        'default': 0
      }
    ],
    '3:101': [
      {
        'name': 'macro knob 7 start position B',
        'range': [0, 127],
        'default': 0
      }
    ],
    '3:102': [
      {
        'name': 'macro knob 7 end position B',
        'range': [0, 127],
        'default': 127
      }
    ],
    '3:103': [
      {
        'name': 'macro knob 7 depth B',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 0
      }
    ],

    '3:104': [
      {
        'name': 'macro knob 7 destination C',
        'range': [0, 70],
        'default': 0
      }
    ],
    '3:105': [
      {
        'name': 'macro knob 7 start position C',
        'range': [0, 127],
        'default': 0
      }
    ],
    '3:106': [
      {
        'name': 'macro knob 7 end position C',
        'range': [0, 127],
        'default': 127
      }
    ],
    '3:107': [
      {
        'name': 'macro knob 7 depth C',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 0
      }
    ],

    '3:108': [
      {
        'name': 'macro knob 7 destination D',
        'range': [0, 70],
        'default': 0
      }
    ],
    '3:109': [
      {
        'name': 'macro knob 7 start position D',
        'range': [0, 127],
        'default': 0
      }
    ],
    '3:110': [
      {
        'name': 'macro knob 7 end position D',
        'range': [0, 127],
        'default': 127
      }
    ],
    '3:111': [
      {
        'name': 'macro knob 7 depth D',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 0
      }
    ],

    // Macro Knob 8
    '3:112': [
      {
        'name': 'macro knob 8 destination A',
        'range': [0, 70],
        'default': 0
      }
    ],
    '3:113': [
      {
        'name': 'macro knob 8 start position A',
        'range': [0, 127],
        'default': 0
      }
    ],
    '3:114': [
      {
        'name': 'macro knob 8 end position A',
        'range': [0, 127],
        'default': 127
      }
    ],
    '3:115': [
      {
        'name': 'macro knob 8 depth A',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 0
      }
    ],

    '3:116': [
      {
        'name': 'macro knob 8 destination B',
        'range': [0, 70],
        'default': 0
      }
    ],
    '3:117': [
      {
        'name': 'macro knob 8 start position B',
        'range': [0, 127],
        'default': 0
      }
    ],
    '3:118': [
      {
        'name': 'macro knob 8 end position B',
        'range': [0, 127],
        'default': 127
      }
    ],
    '3:119': [
      {
        'name': 'macro knob 8 depth B',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 0
      }
    ],

    '3:120': [
      {
        'name': 'macro knob 8 destination C',
        'range': [0, 70],
        'default': 0
      }
    ],
    '3:121': [
      {
        'name': 'macro knob 8 start position C',
        'range': [0, 127],
        'default': 0
      }
    ],
    '3:122': [
      {
        'name': 'macro knob 8 end position C',
        'range': [0, 127],
        'default': 127
      }
    ],
    '3:123': [
      {
        'name': 'macro knob 8 depth C',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 0
      }
    ],

    '3:124': [
      {
        'name': 'macro knob 8 destination D',
        'range': [0, 70],
        'default': 0
      }
    ],
    '3:125': [
      {
        'name': 'macro knob 8 start position D',
        'range': [0, 127],
        'default': 0
      }
    ],
    '3:126': [
      {
        'name': 'macro knob 8 end position D',
        'range': [0, 127],
        'default': 127
      }
    ],
    '3:127': [
      {
        'name': 'macro knob 8 depth D',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 0
      }
    ]
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