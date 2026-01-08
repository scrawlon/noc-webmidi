(function() {
  var midiCCs = {},
    midiComponents = {};

  midiCCs = { // Circuit Synths: midi channels 1 and 2
    // Section: Voice
    '3': {
        'name': 'Polyphony Mode',
        'range': [0, 2],
        'rangeValues': ['Mono', 'Mono AG', 'Poly'],
        'default': 2
    },
    '5': {
        'name': 'Portamento Rate',
        'range': [0, 127],
        'default': 0
    },
    '9': {
        'name': 'Pre-Glide',
        'range': [52, 76],
        'rangeValues': [-12, 12],
        'default': 64
    },
    '13': {
        'name': 'Keyboard Octave',
        'range': [60, 68],
        'rangeValues': [-4, 4],
        'default': 64
    },
    // Section: Oscillator
    '19': {
        'name': 'osc 1 wave',
        'range': [0, 29],
        'rangeValues': [
            'sine',
            'triangle',
            'sawtooth',
            'saw 9:1 PW',
            'saw 8:2 PW',
            'saw 7:3 PW',
            'saw 6:4 PW',
            'saw 5:5 PW',
            'saw 4:6 PW',
            'saw 3:7 PW',
            'saw 2:8 PW',
            'saw 1:9 PW',
            'pulse width',
            'square',
            'sine table',
            'analogue pulse',
            'analogue sync',
            'triangle-saw blend',
            'digital nasty 1',
            'digital nasty 2',
            'digital saw-square',
            'digital vocal 1',
            'digital vocal 2',
            'digital vocal 3',
            'digital vocal 4',
            'digital vocal 5',
            'digital vocal 6',
            'random collection 1',
            'random collection 2',
            'random collection 3'
        ],
        'default': 2
    },
    '20': {
        'name': 'osc 1 wave interpolate',
        'range': [0, 127],
        'default': 0
    },
    '21': {
        'name': 'osc 1 pulse width index',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 127
    },
    '22': {
        'name': 'osc 1 virtual sync depth',
        'range': [0, 127],
        'default': 0
    },
    '24': {
        'name': 'osc 1 density',
        'range': [0, 127],
        'default': 0
    },
    '25': {
        'name': 'osc 1 density detune',
        'range': [0, 127],
        'default': 0
    },
    '26': {
        'name': 'osc 1 semitones',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 64
    },
    '27': {
        'name': 'osc 1 cents',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 64
    },
    '28': {
        'name': 'osc 1 pitchbend',
        'range': [52, 76],
        'rangeValues': [-12, 12],
        'default': 76
    },
    '29': {
        'name': 'osc 2 wave',
        'range': [0, 29],
        'rangeValues': [
            'sine',
            'triangle',
            'sawtooth',
            'saw 9:1 PW',
            'saw 8:2 PW',
            'saw 7:3 PW',
            'saw 6:4 PW',
            'saw 5:5 PW',
            'saw 4:6 PW',
            'saw 3:7 PW',
            'saw 2:8 PW',
            'saw 1:9 PW',
            'pulse width',
            'square',
            'sine table',
            'analogue pulse',
            'analogue sync',
            'triangle-saw blend',
            'digital nasty 1',
            'digital nasty 2',
            'digital saw-square',
            'digital vocal 1',
            'digital vocal 2',
            'digital vocal 3',
            'digital vocal 4',
            'digital vocal 5',
            'digital vocal 6',
            'random collection 1',
            'random collection 2',
            'random collection 3'
        ],
        'default': 2
    },
    '30': {
        'name': 'osc 2 wave interpolate',
        'range': [0, 127],
        'default': 0
    },
    '31': {
        'name': 'osc 2 pulse width index',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 127
    },
    '33': {
        'name': 'osc 2 virtual sync depth',
        'range': [0, 127],
        'default': 0
    },
    '35': {
        'name': 'osc 2 density',
        'range': [0, 127],
        'default': 0
    },
    '36': {
        'name': 'osc 2 density detune',
        'range': [0, 127],
        'default': 0
    },
    '37': {
        'name': 'osc 2 semitones',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 64
    },
    '39': {
        'name': 'osc 2 cents',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 64
    },
    '40': {
        'name': 'osc 2 pitchbend',
        'range': [52, 76],
        'rangeValues': [-12, 12],
        'default': 76
    },
    // Section: Mixer
    '51': {
        'name': 'osc 1 level',
        'range': [0, 127],
        'default': 127
    },
    '52': {
        'name': 'osc 2 level',
        'range': [0, 127],
        'default': 0
    },
    '54': {
        'name': 'ring mod level',
        'range': [0, 127],
        'default': 0
    },
    '56': {
        'name': 'noise level',
        'range': [0, 127],
        'default': 0
    },
    '58': {
        'name': 'pre FX level',
        'range': [52, 82],
        'rangeValues': [-12, 18],
        'default': 64
    },
    '59': {
        'name': 'post FX level',
        'range': [52, 82],
        'rangeValues': [-12, 18],
        'default': 64
    },
    // Section: Filter
    '60': {
        'name': 'routing',
        'range': [0, 2],
        'rangeValues': [
            'Normal',
            'Osc 1 bypasses the filter',
            'Osc 1 + Osc 2 bypasses the filter',
        ],
        'default': 0
    },
    '63': {
        'name': 'drive',
        'range': [0, 127],
        'default': 0
    },
    '65': {
        'name': 'drive type',
        'range': [0, 6],
        'rangeValues': [
            'diode',
            'valve',
            'clipper',
            'cross-over',
            'rectifier',
            'bit reducer',
            'rate reducer'
        ],
        'default': 0
    },
    '68': {
        'name': 'type',
        'range': [0, 5],
        'rangeValues': [
            'low pass 12dB',
            'low pass 24dB',
            'band pass 6dB',
            'band pass 12dB',
            'high pass 12dB',
            'high pass 24dB'
        ],
        'default': 1
    },
    '74': {
        'name': 'frequency',
        'range': [0, 127],
        'default': 127
    },
    '69': {
        'name': 'tracking',
        'range': [0, 127],
        'default': 127
    },
    '71': {
        'name': 'resonance',
        'range': [0, 127],
        'default': 0
    },
    '78': {
        'name': 'Q normalize',
        'range': [0, 127],
        'default': 64
    },
    '79': {
        'name': 'env 2 to frequency',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 64
    },
    // Section: Envelope
    '108': {
        'name': 'env 1 velocity',
        'range': [0, 127],
        'rangeValues': [-64, 63],
        'default': 64
    },
    '73': {
        'name': 'env 1 attack',
        'range': [0, 127],
        'default': 2
    },
    '75': {
        'name': 'env 1 decay',
        'range': [0, 127],
        'default': 90
    },
    '70': {
        'name': 'env 1 sustain',
        'range': [0, 127],
        'default': 127
    },
    '72': {
        'name': 'env 1 release',
        'range': [0, 127],
        'default': 40
    },
    // Section: Effects and EQ
    '91': {
        'name': 'distortion level',
        'range': [0, 127],
        'default': 0
    },
    '93': {
        'name': 'chorus level',
        'range': [0, 127],
        'default': 0
    },
    // Section: Macro Knob
    '80': {
        'name': 'macro knob 1 position',
        'range': [0, 127],
        'default': 0
    },
    '81': {
        'name': 'macro knob 2 position',
        'range': [0, 127],
        'default': 0
    },
    '82': {
        'name': 'macro knob 3 position',
        'range': [0, 127],
        'default': 0
    },
    '83': {
        'name': 'macro knob 4 position',
        'range': [0, 127],
        'default': 0
    },
    '84': {
        'name': 'macro knob 5 position',
        'range': [0, 127],
        'default': 0
    },
    '85': {
        'name': 'macro knob 6 position',
        'range': [0, 127],
        'default': 0
    },
    '86': {
        'name': 'macro knob 7 position',
        'range': [0, 127],
        'default': 0
    },
    '87': {
        'name': 'macro knob 8 position',
        'range': [0, 127],
        'default': 0
    }
  };

  midiComponents = {
    'voice': ['3','5','9','13'],
    'osc 1': ['19','20','21','22','24','25','26','27','28'],
    'osc 2': ['29','30','31','33','35','36','37','39','40'],
    'mixer': ['51','52','54','56','58','59'],
    'filter': ['60','63','65','68','74','69','71','78','79'],
    'envelope': ['108','73','75','70','72'],
    'effects': ['91','93'],
    'macro': ['80','81','82','83','84','85','86','87']
  };

  var midiNRPNs = {
    // Envelope 2 Parameters
    '0:0': { name: 'Envelope 2 Velocity', range: [0, 127], default: 64 },
    '0:1': { name: 'Envelope 2 Attack', range: [0, 127], default: 2 },
    '0:2': { name: 'Envelope 2 Decay', range: [0, 127], default: 90 },
    '0:3': { name: 'Envelope 2 Sustain', range: [0, 127], default: 127 },
    '0:4': { name: 'Envelope 2 Release', range: [0, 127], default: 40 },
    // LFO 1 Parameters
    '0:14': { name: 'LFO 1 Delay', range: [0, 127], default: 0 },
    '0:15': { name: 'LFO 1 Rate', range: [0, 127], default: 68 },
    '0:16': { name: 'LFO 1 One Shot', range: [12, 13], default: 12, notes: '12=OFF, 13=ON' },
    '0:17': { name: 'LFO 1 Key Sync', range: [14, 15], default: 14, notes: '14=OFF, 15=ON' },
    '0:18': { name: 'LFO 1 Common Sync', range: [16, 17], default: 16, notes: '16=OFF, 17=ON' },
    '0:70': { name: 'LFO 1 Delay Trigger', range: [18, 19], default: 18, notes: '18=OFF, 19=ON' },
    '0:71': { name: 'LFO 1 Fade Mode', range: [0, 3], default: 0, notes: '0=Fade In, 1=Fade Out, 2=Gate In, 3=Gate Out' },
    // LFO 2 Parameters
    '0:72': { name: 'LFO 2 Waveform', range: [0, 37], default: 0, notes: 'See LFO Waveform Table' },
    '0:74': { name: 'LFO 2 Phase Offset', range: [0, 119], default: 0, notes: '(0° - 357°) in steps of 3°' },
    '0:75': { name: 'LFO 2 Slew Rate', range: [0, 127], default: 0 },
    '0:76': { name: 'LFO 2 Delay', range: [0, 127], default: 0 },
    '0:77': { name: 'LFO 2 Delay Sync', range: [0, 35], default: 0 },
    '0:122': { name: 'LFO 2 Rate', range: [0, 127], default: 68 },
    '0:123': { name: 'LFO 2 Rate Sync', range: [0, 35], default: 0 },
    // Note: 0:122 and 0:123 seem to have multiple params; adjusted based on PDF
    // Effects Parameters
    '0:104': { name: 'Distortion Compensation', range: [0, 127], default: 0 },
    '0:105': { name: 'Chorus Rate', range: [0, 127], default: 64 },
    '0:106': { name: 'Chorus Rate Sync', range: [0, 35], default: 0 },
    '0:107': { name: 'Chorus Feedback', range: [0, 127], default: 64 },
    '0:108': { name: 'Chorus Mod Depth', range: [0, 127], default: 64 },
    '0:109': { name: 'Chorus Delay', range: [0, 127], default: 125 },
    // Mod Matrix Parameters (NRPN 1:0 to 1:127)
    '1:0': { name: 'Mod Matrix 1 Source 1', range: [0, 17], default: 0 },
    '1:1': { name: 'Mod Matrix 1 Source 2', range: [0, 12], default: 0 },
    '1:2': { name: 'Mod Matrix 1 Destination', range: [0, 17], default: 0 },
    '1:3': { name: 'Mod Matrix 2 Source 1', range: [0, 17], default: 0 },
    '1:4': { name: 'Mod Matrix 2 Source 2', range: [0, 12], default: 0 },
    '1:5': { name: 'Mod Matrix 2 Destination', range: [0, 17], default: 0 },
    '1:6': { name: 'Mod Matrix 3 Source 1', range: [0, 17], default: 0 },
    '1:7': { name: 'Mod Matrix 3 Source 2', range: [0, 12], default: 0 },
    '1:8': { name: 'Mod Matrix 3 Destination', range: [0, 17], default: 0 },
    '1:9': { name: 'Mod Matrix 4 Source 1', range: [0, 17], default: 0 },
    '1:10': { name: 'Mod Matrix 4 Source 2', range: [0, 12], default: 0 },
    '1:11': { name: 'Mod Matrix 4 Destination', range: [0, 17], default: 0 },
    '1:12': { name: 'Mod Matrix 5 Source 1', range: [0, 17], default: 0 },
    '1:13': { name: 'Mod Matrix 5 Source 2', range: [0, 12], default: 0 },
    '1:14': { name: 'Mod Matrix 5 Destination', range: [0, 17], default: 0 },
    '1:15': { name: 'Mod Matrix 6 Source 1', range: [0, 17], default: 0 },
    '1:16': { name: 'Mod Matrix 6 Source 2', range: [0, 12], default: 0 },
    '1:17': { name: 'Mod Matrix 6 Destination', range: [0, 17], default: 0 },
    '1:18': { name: 'Mod Matrix 7 Source 1', range: [0, 17], default: 0 },
    '1:19': { name: 'Mod Matrix 7 Source 2', range: [0, 12], default: 0 },
    '1:20': { name: 'Mod Matrix 7 Destination', range: [0, 17], default: 0 },
    '1:21': { name: 'Mod Matrix 8 Source 1', range: [0, 17], default: 0 },
    '1:22': { name: 'Mod Matrix 8 Source 2', range: [0, 12], default: 0 },
    '1:23': { name: 'Mod Matrix 8 Destination', range: [0, 17], default: 0 },
    '1:24': { name: 'Mod Matrix 1 Depth', range: [0, 127], default: 64, notes: 'Bipolar -64 to 63' },
    '1:25': { name: 'Mod Matrix 2 Depth', range: [0, 127], default: 64, notes: 'Bipolar -64 to 63' },
    '1:26': { name: 'Mod Matrix 3 Depth', range: [0, 127], default: 64, notes: 'Bipolar -64 to 63' },
    '1:27': { name: 'Mod Matrix 4 Depth', range: [0, 127], default: 64, notes: 'Bipolar -64 to 63' },
    '1:28': { name: 'Mod Matrix 5 Depth', range: [0, 127], default: 64, notes: 'Bipolar -64 to 63' },
    '1:29': { name: 'Mod Matrix 6 Depth', range: [0, 127], default: 64, notes: 'Bipolar -64 to 63' },
    '1:30': { name: 'Mod Matrix 7 Depth', range: [0, 127], default: 64, notes: 'Bipolar -64 to 63' },
    '1:31': { name: 'Mod Matrix 8 Depth', range: [0, 127], default: 64, notes: 'Bipolar -64 to 63' },
    // Additional Mod Matrix (continuing from PDF)
    '1:83': { name: 'Mod Matrix 9 Source 1', range: [0, 17], default: 0 },
    '1:84': { name: 'Mod Matrix 9 Source 2', range: [0, 12], default: 0 },
    '1:85': { name: 'Mod Matrix 9 Destination', range: [0, 17], default: 0 },
    '1:86': { name: 'Mod Matrix 10 Source 1', range: [0, 17], default: 0 },
    '1:87': { name: 'Mod Matrix 10 Source 2', range: [0, 12], default: 0 },
    '1:88': { name: 'Mod Matrix 10 Destination', range: [0, 17], default: 0 },
    '1:89': { name: 'Mod Matrix 11 Source 1', range: [0, 17], default: 0 },
    '1:90': { name: 'Mod Matrix 11 Source 2', range: [0, 12], default: 0 },
    '1:91': { name: 'Mod Matrix 11 Destination', range: [0, 17], default: 0 },
    '1:92': { name: 'Mod Matrix 12 Source 1', range: [0, 17], default: 0 },
    '1:93': { name: 'Mod Matrix 12 Source 2', range: [0, 12], default: 0 },
    '1:94': { name: 'Mod Matrix 12 Destination', range: [0, 17], default: 0 },
    '1:95': { name: 'Mod Matrix 13 Source 1', range: [0, 17], default: 0 },
    '1:96': { name: 'Mod Matrix 13 Source 2', range: [0, 12], default: 0 },
    '1:97': { name: 'Mod Matrix 13 Destination', range: [0, 17], default: 0 },
    '1:98': { name: 'Mod Matrix 14 Source 1', range: [0, 17], default: 0 },
    '1:99': { name: 'Mod Matrix 14 Source 2', range: [0, 12], default: 0 },
    '1:100': { name: 'Mod Matrix 14 Destination', range: [0, 17], default: 0 },
    '1:101': { name: 'Mod Matrix 15 Source 1', range: [0, 17], default: 0 },
    '1:102': { name: 'Mod Matrix 15 Source 2', range: [0, 12], default: 0 },
    '1:103': { name: 'Mod Matrix 15 Destination', range: [0, 17], default: 0 },
    '1:104': { name: 'Mod Matrix 16 Source 1', range: [0, 17], default: 0 },
    '1:105': { name: 'Mod Matrix 16 Source 2', range: [0, 12], default: 0 },
    '1:106': { name: 'Mod Matrix 16 Destination', range: [0, 17], default: 0 },
    '1:107': { name: 'Mod Matrix 17 Source 1', range: [0, 17], default: 0 },
    '1:108': { name: 'Mod Matrix 17 Source 2', range: [0, 12], default: 0 },
    '1:109': { name: 'Mod Matrix 17 Destination', range: [0, 17], default: 0 },
    '1:110': { name: 'Mod Matrix 18 Source 1', range: [0, 17], default: 0 },
    '1:111': { name: 'Mod Matrix 18 Source 2', range: [0, 12], default: 0 },
    '1:112': { name: 'Mod Matrix 18 Destination', range: [0, 17], default: 0 },
    '1:113': { name: 'Mod Matrix 19 Source 1', range: [0, 17], default: 0 },
    '1:114': { name: 'Mod Matrix 19 Source 2', range: [0, 12], default: 0 },
    '1:115': { name: 'Mod Matrix 19 Destination', range: [0, 17], default: 0 },
    '1:116': { name: 'Mod Matrix 20 Source 1', range: [0, 17], default: 0 },
    '1:117': { name: 'Mod Matrix 20 Source 2', range: [0, 12], default: 0 },
    '1:118': { name: 'Mod Matrix 20 Destination', range: [0, 17], default: 0 },
    '1:119': { name: 'Mod Matrix 9 Depth', range: [0, 127], default: 64, notes: 'Bipolar -64 to 63' },
    '1:120': { name: 'Mod Matrix 10 Depth', range: [0, 127], default: 64, notes: 'Bipolar -64 to 63' },
    '1:121': { name: 'Mod Matrix 11 Depth', range: [0, 127], default: 64, notes: 'Bipolar -64 to 63' },
    '1:122': { name: 'Mod Matrix 12 Depth', range: [0, 127], default: 64, notes: 'Bipolar -64 to 63' },
    '1:123': { name: 'Mod Matrix 13 Depth', range: [0, 127], default: 64, notes: 'Bipolar -64 to 63' },
    '1:124': { name: 'Mod Matrix 14 Depth', range: [0, 127], default: 64, notes: 'Bipolar -64 to 63' },
    '1:125': { name: 'Mod Matrix 15 Depth', range: [0, 127], default: 64, notes: 'Bipolar -64 to 63' },
    '1:126': { name: 'Mod Matrix 16 Depth', range: [0, 127], default: 64, notes: 'Bipolar -64 to 63' },
    '1:127': { name: 'Mod Matrix 17 Depth', range: [0, 127], default: 64, notes: 'Bipolar -64 to 63' },
    // Note: Mod Matrix 18-20 depths not listed in PDF excerpt; assuming similar
    // Macro Knobs Parameters (NRPN 3:35 to 3:127)
    '3:35': { name: 'Macro Knob 1 Source 1', range: [0, 17], default: 0 },
    '3:36': { name: 'Macro Knob 1 Source 2', range: [0, 12], default: 0 },
    '3:37': { name: 'Macro Knob 1 Destination', range: [0, 17], default: 0 },
    '3:38': { name: 'Macro Knob 1 Depth', range: [0, 127], default: 64, notes: 'Bipolar -64 to 63' },
    '3:39': { name: 'Macro Knob 1 Min', range: [0, 127], default: 0 },
    '3:40': { name: 'Macro Knob 1 Max', range: [0, 127], default: 127 },
    '3:41': { name: 'Macro Knob 1 Curve', range: [0, 127], default: 64 },
    '3:42': { name: 'Macro Knob 1 Mode', range: [0, 1], default: 0 },
    '3:43': { name: 'Macro Knob 1 Parameter 1', range: [0, 127], default: 0 },
    '3:44': { name: 'Macro Knob 1 Parameter 2', range: [0, 127], default: 0 },
    '3:45': { name: 'Macro Knob 1 Parameter 3', range: [0, 127], default: 0 },
    '3:46': { name: 'Macro Knob 1 Parameter 4', range: [0, 127], default: 0 },
    '3:47': { name: 'Macro Knob 2 Source 1', range: [0, 17], default: 0 },
    '3:48': { name: 'Macro Knob 2 Source 2', range: [0, 12], default: 0 },
    '3:49': { name: 'Macro Knob 2 Destination', range: [0, 17], default: 0 },
    '3:50': { name: 'Macro Knob 2 Depth', range: [0, 127], default: 64, notes: 'Bipolar -64 to 63' },
    '3:51': { name: 'Macro Knob 2 Min', range: [0, 127], default: 0 },
    '3:52': { name: 'Macro Knob 2 Max', range: [0, 127], default: 127 },
    '3:53': { name: 'Macro Knob 2 Curve', range: [0, 127], default: 64 },
    '3:54': { name: 'Macro Knob 2 Mode', range: [0, 1], default: 0 },
    '3:55': { name: 'Macro Knob 2 Parameter 1', range: [0, 127], default: 0 },
    '3:56': { name: 'Macro Knob 2 Parameter 2', range: [0, 127], default: 0 },
    '3:57': { name: 'Macro Knob 2 Parameter 3', range: [0, 127], default: 0 },
    '3:58': { name: 'Macro Knob 2 Parameter 4', range: [0, 127], default: 0 },
    '3:59': { name: 'Macro Knob 3 Source 1', range: [0, 17], default: 0 },
    '3:60': { name: 'Macro Knob 3 Source 2', range: [0, 12], default: 0 },
    '3:61': { name: 'Macro Knob 3 Destination', range: [0, 17], default: 0 },
    '3:62': { name: 'Macro Knob 3 Depth', range: [0, 127], default: 64, notes: 'Bipolar -64 to 63' },
    '3:63': { name: 'Macro Knob 3 Min', range: [0, 127], default: 0 },
    '3:64': { name: 'Macro Knob 3 Max', range: [0, 127], default: 127 },
    '3:65': { name: 'Macro Knob 3 Curve', range: [0, 127], default: 64 },
    '3:66': { name: 'Macro Knob 3 Mode', range: [0, 1], default: 0 },
    '3:67': { name: 'Macro Knob 3 Parameter 1', range: [0, 127], default: 0 },
    '3:68': { name: 'Macro Knob 3 Parameter 2', range: [0, 127], default: 0 },
    '3:69': { name: 'Macro Knob 3 Parameter 3', range: [0, 127], default: 0 },
    '3:70': { name: 'Macro Knob 3 Parameter 4', range: [0, 127], default: 0 },
    '3:71': { name: 'Macro Knob 4 Source 1', range: [0, 17], default: 0 },
    '3:72': { name: 'Macro Knob 4 Source 2', range: [0, 12], default: 0 },
    '3:73': { name: 'Macro Knob 4 Destination', range: [0, 17], default: 0 },
    '3:74': { name: 'Macro Knob 4 Depth', range: [0, 127], default: 64, notes: 'Bipolar -64 to 63' },
    '3:75': { name: 'Macro Knob 4 Min', range: [0, 127], default: 0 },
    '3:76': { name: 'Macro Knob 4 Max', range: [0, 127], default: 127 },
    '3:77': { name: 'Macro Knob 4 Curve', range: [0, 127], default: 64 },
    '3:78': { name: 'Macro Knob 4 Mode', range: [0, 1], default: 0 },
    '3:79': { name: 'Macro Knob 4 Parameter 1', range: [0, 127], default: 0 },
    '3:80': { name: 'Macro Knob 4 Parameter 2', range: [0, 127], default: 0 },
    '3:81': { name: 'Macro Knob 4 Parameter 3', range: [0, 127], default: 0 },
    '3:82': { name: 'Macro Knob 4 Parameter 4', range: [0, 127], default: 0 },
    '3:83': { name: 'Macro Knob 5 Source 1', range: [0, 17], default: 0 },
    '3:84': { name: 'Macro Knob 5 Source 2', range: [0, 12], default: 0 },
    '3:85': { name: 'Macro Knob 5 Destination', range: [0, 17], default: 0 },
    '3:86': { name: 'Macro Knob 5 Depth', range: [0, 127], default: 64, notes: 'Bipolar -64 to 63' },
    '3:87': { name: 'Macro Knob 5 Min', range: [0, 127], default: 0 },
    '3:88': { name: 'Macro Knob 5 Max', range: [0, 127], default: 127 },
    '3:89': { name: 'Macro Knob 5 Curve', range: [0, 127], default: 64 },
    '3:90': { name: 'Macro Knob 5 Mode', range: [0, 1], default: 0 },
    '3:91': { name: 'Macro Knob 5 Parameter 1', range: [0, 127], default: 0 },
    '3:92': { name: 'Macro Knob 5 Parameter 2', range: [0, 127], default: 0 },
    '3:93': { name: 'Macro Knob 5 Parameter 3', range: [0, 127], default: 0 },
    '3:94': { name: 'Macro Knob 5 Parameter 4', range: [0, 127], default: 0 },
    '3:95': { name: 'Macro Knob 6 Source 1', range: [0, 17], default: 0 },
    '3:96': { name: 'Macro Knob 6 Source 2', range: [0, 12], default: 0 },
    '3:97': { name: 'Macro Knob 6 Destination', range: [0, 17], default: 0 },
    '3:98': { name: 'Macro Knob 6 Depth', range: [0, 127], default: 64, notes: 'Bipolar -64 to 63' },
    '3:99': { name: 'Macro Knob 6 Min', range: [0, 127], default: 0 },
    '3:100': { name: 'Macro Knob 6 Max', range: [0, 127], default: 127 },
    '3:101': { name: 'Macro Knob 6 Curve', range: [0, 127], default: 64 },
    '3:102': { name: 'Macro Knob 6 Mode', range: [0, 1], default: 0 },
    '3:103': { name: 'Macro Knob 6 Parameter 1', range: [0, 127], default: 0 },
    '3:104': { name: 'Macro Knob 6 Parameter 2', range: [0, 127], default: 0 },
    '3:105': { name: 'Macro Knob 6 Parameter 3', range: [0, 127], default: 0 },
    '3:106': { name: 'Macro Knob 6 Parameter 4', range: [0, 127], default: 0 },
    '3:107': { name: 'Macro Knob 7 Source 1', range: [0, 17], default: 0 },
    '3:108': { name: 'Macro Knob 7 Source 2', range: [0, 12], default: 0 },
    '3:109': { name: 'Macro Knob 7 Destination', range: [0, 17], default: 0 },
    '3:110': { name: 'Macro Knob 7 Depth', range: [0, 127], default: 64, notes: 'Bipolar -64 to 63' },
    '3:111': { name: 'Macro Knob 7 Min', range: [0, 127], default: 0 },
    '3:112': { name: 'Macro Knob 7 Max', range: [0, 127], default: 127 },
    '3:113': { name: 'Macro Knob 7 Curve', range: [0, 127], default: 64 },
    '3:114': { name: 'Macro Knob 7 Mode', range: [0, 1], default: 0 },
    '3:115': { name: 'Macro Knob 7 Parameter 1', range: [0, 127], default: 0 },
    '3:116': { name: 'Macro Knob 7 Parameter 2', range: [0, 127], default: 0 },
    '3:117': { name: 'Macro Knob 7 Parameter 3', range: [0, 127], default: 0 },
    '3:118': { name: 'Macro Knob 7 Parameter 4', range: [0, 127], default: 0 },
    '3:119': { name: 'Macro Knob 8 Source 1', range: [0, 17], default: 0 },
    '3:120': { name: 'Macro Knob 8 Source 2', range: [0, 12], default: 0 },
    '3:121': { name: 'Macro Knob 8 Destination', range: [0, 17], default: 0 },
    '3:122': { name: 'Macro Knob 8 Depth', range: [0, 127], default: 64, notes: 'Bipolar -64 to 63' },
    '3:123': { name: 'Macro Knob 8 Min', range: [0, 127], default: 0 },
    '3:124': { name: 'Macro Knob 8 Max', range: [0, 127], default: 127 },
    '3:125': { name: 'Macro Knob 8 Curve', range: [0, 127], default: 64 },
    '3:126': { name: 'Macro Knob 8 Mode', range: [0, 1], default: 0 },
    '3:127': { name: 'Macro Knob 8 Parameter 4', range: [0, 127], default: 0 }
  };

  module.exports = {
    midiCCs: midiCCs,
    midiComponents: midiComponents,
    midiNRPNs: midiNRPNs
  };
})();
