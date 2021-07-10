
var midiNRPNs = {};
var midiComponents = {};

midiNRPNs = {

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

midiComponents = {

  'Macro Knob 1': [
    '3:0',
    '3:1',
    '3:2',
    '3:3',
    '3:4',
    '3:5',
    '3:6',
    '3:7',
    '3:8',
    '3:9',
    '3:10',
    '3:11',
    '3:12',
    '3:13',
    '3:14',
    '3:15'
  ],

  'Macro Knob 2': [
    '3:16',
    '3:17',
    '3:18',
    '3:19',
    '3:20',
    '3:21',
    '3:22',
    '3:23',
    '3:24',
    '3:25',
    '3:26',
    '3:27',
    '3:28',
    '3:29',
    '3:30',
    '3:31'
  ],

  'Macro Knob 3': [
    '3:32',
    '3:33',
    '3:34',
    '3:35',
    '3:36',
    '3:37',
    '3:38',
    '3:39',
    '3:40',
    '3:41',
    '3:42',
    '3:43',
    '3:44',
    '3:45',
    '3:46',
    '3:47'
  ],

  'Macro Knob 4': [
    '3:48',
    '3:49',
    '3:50',
    '3:51',
    '3:52',
    '3:53',
    '3:54',
    '3:55',
    '3:56',
    '3:57',
    '3:58',
    '3:59',
    '3:60',
    '3:61',
    '3:62',
    '3:63'
  ],

  'Macro Knob 5': [
    '3:64',
    '3:65',
    '3:66',
    '3:67',
    '3:68',
    '3:69',
    '3:70',
    '3:71',
    '3:72',
    '3:73',
    '3:74',
    '3:75',
    '3:76',
    '3:77',
    '3:78',
    '3:79'
  ],

  'Macro Knob 6': [
    '3:80',
    '3:81',
    '3:82',
    '3:83',
    '3:84',
    '3:85',
    '3:86',
    '3:87',
    '3:88',
    '3:89',
    '3:90',
    '3:91',
    '3:92',
    '3:93',
    '3:94',
    '3:95'
  ],

  'Macro Knob 7': [
    '3:96',
    '3:97',
    '3:98',
    '3:99',
    '3:100',
    '3:101',
    '3:102',
    '3:103',
    '3:104',
    '3:105',
    '3:106',
    '3:107',
    '3:108',
    '3:109',
    '3:110',
    '3:111'
  ],

  'Macro Knob 8': [
    '3:112',
    '3:113',
    '3:114',
    '3:115',
    '3:116',
    '3:117',
    '3:118',
    '3:119',
    '3:120',
    '3:121',
    '3:122',
    '3:123',
    '3:124',
    '3:125',
    '3:126',
    '3:127'
  ]
};

module.exports = {
  midiNRPNs: midiNRPNs,
  midiComponents: midiComponents
}