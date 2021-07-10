
var rangeValues = require('../../range-values');
var midiNRPNs = {};
var midiComponents = {};

midiNRPNs = {

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
};

midiComponents = {

  'Mod Matrix 1': [
    '1:83',
    '1:84',
    '1:86',
    '1:87'
  ],

  'Mod Matrix 2': [
    '1:88',
    '1:89',
    '1:91',
    '1:92',
  ],

  'Mod Matrix 3': [
    '1:93',
    '1:94',
    '1:96',
    '1:97',
  ],

  'Mod Matrix 4': [
    '1:98',
    '1:99',
    '1:101',
    '1:102',
  ],

  'Mod Matrix 5': [
    '1:103',
    '1:104',
    '1:106',
    '1:107',
  ],

  'Mod Matrix 6': [
    '1:108',
    '1:109',
    '1:111',
    '1:112',
  ],

  'Mod Matrix 7': [
    '1:113',
    '1:114',
    '1:116',
    '1:117',
  ],

  'Mod Matrix 8': [
    '1:118',
    '1:119',
    '1:121',
    '1:122',
  ],

  'Mod Matrix 9': [
    '1:123',
    '1:124',
    '1:126',
    '1:127',
  ],

  'Mod Matrix 10': [
    '2:0',
    '2:1',
    '2:3',
    '2:4',
  ],

  'Mod Matrix 11': [
    '2:5',
    '2:6',
    '2:8',
    '2:9',
  ],

  'Mod Matrix 12': [
    '2:10',
    '2:11',
    '2:13',
    '2:14',
  ],

  'Mod Matrix 13': [
    '2:15',
    '2:16',
    '2:18',
    '2:19',
  ],

  'Mod Matrix 14': [
    '2:20',
    '2:21',
    '2:23',
    '2:24',
  ],

  'Mod Matrix 15': [
    '2:25',
    '2:27',
    '2:28',
    '2:29',
  ],

  'Mod Matrix 16': [
    '2:30',
    '2:32',
    '2:33',
    '2:34',
  ],

  'Mod Matrix 17': [
    '2:35',
    '2:37',
    '2:38',
    '2:39',
  ],

  'Mod Matrix 18': [
    '2:40',
    '2:42',
    '2:43',
    '2:4r',
  ],

  'Mod Matrix 19': [
    '2:45',
    '2:47',
    '2:48',
    '2:49',
  ],

  'Mod Matrix 20': [
    '2:50',
    '2:52',
    '2:53',
    '2:54',
  ]
};

module.exports = {
  midiNRPNs: midiNRPNs,
  midiComponents: midiComponents
}