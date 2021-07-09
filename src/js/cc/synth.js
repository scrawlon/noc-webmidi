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

  module.exports = {
    midiCCs: midiCCs,
    midiComponents: midiComponents
  };
})();
