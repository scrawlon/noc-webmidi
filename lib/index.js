const midiCCs$g = {

  // Drum 1
  '8': {
    'name': 'drum 1 patch select',
    'range': [0, 63],
    'defaultValue': 0
  },
  '12': {
    'name': 'drum 1 level',
    'range': [0, 127],
    'rangeValues': [-63, 64],
    'defaultValue': 0
  },
  '14': {
    'name': 'drum 1 pitch',
    'range': [0, 127],
    'defaultValue': 64
  },
  '15': {
    'name': 'drum 1 decay',
    'range': [0, 127],
    'defaultValue': 0
  },
  '16': {
    'name': 'drum 1 distortion',
    'range': [0, 127],
    'defaultValue': 0
  },
  '17': {
    'name': 'drum 1 EQ',
    'range': [0, 127],
    'rangeValues': [-63, 64],
    'defaultValue': 64
  }
};

var drums1$1 = midiCCs$g;

const midiCCs$f = {

  // Drum 2
  '18': {
    'name': 'drum 2 patch select',
    'range': [0, 63],
    'defaultValue': 0
  },
  '23': {
    'name': 'drum 2 level',
    'range': [0, 127],
    'rangeValues': [-63, 64],
    'defaultValue': 0
  },
  '34': {
    'name': 'drum 2 pitch',
    'range': [0, 127],
    'defaultValue': 64
  },
  '40': {
    'name': 'drum 2 decay',
    'range': [0, 127],
    'defaultValue': 0
  },
  '42': {
    'name': 'drum 2 distortion',
    'range': [0, 127],
    'defaultValue': 0
  },
  '43': {
    'name': 'drum 2 EQ',
    'range': [0, 127],
    'rangeValues': [-63, 64],
    'defaultValue': 64
  }
};

var drums2$1 = midiCCs$f;

const midiCCs$e = {

  // Drum 3
  '44': {
    'name': 'drum 3 patch select',
    'range': [0, 63],
    'defaultValue': 0
  },
  '45': {
    'name': 'drum 3 level',
    'range': [0, 127],
    'rangeValues': [-63, 64],
    'defaultValue': 0
  },
  '46': {
    'name': 'drum 3 pitch',
    'range': [0, 127],
    'defaultValue': 64
  },
  '47': {
    'name': 'drum 3 decay',
    'range': [0, 127],
    'defaultValue': 0
  },
  '48': {
    'name': 'drum 3 distortion',
    'range': [0, 127],
    'defaultValue': 0
  },
  '49': {
    'name': 'drum 3 EQ',
    'range': [0, 127],
    'rangeValues': [-63, 64],
    'defaultValue': 64
  }
};

var drums3$1 = midiCCs$e;

const midiCCs$d = {

  // Drum 4
  '50': {
    'name': 'drum 4 patch select',
    'range': [0, 63],
    'defaultValue': 0
  },
  '53': {
    'name': 'drum 4 level',
    'range': [0, 127],
    'rangeValues': [-63, 64],
    'defaultValue': 0
  },
  '55': {
    'name': 'drum 4 pitch',
    'range': [0, 127],
    'defaultValue': 64
  },
  '57': {
    'name': 'drum 4 decay',
    'range': [0, 127],
    'defaultValue': 0
  },
  '61': {
    'name': 'drum 4 distortion',
    'range': [0, 127],
    'defaultValue': 0
  },
  '76': {
    'name': 'drum 4 EQ',
    'range': [0, 127],
    'rangeValues': [-63, 64],
    'defaultValue': 64
  }
};

var drums4$1 = midiCCs$d;

const drums1 = drums1$1;
const drums2 = drums2$1;
const drums3 = drums3$1;
const drums4 = drums4$1;

var drums$1 = {
  midiCCs: {
    ...drums1,
    ...drums2,
    ...drums3,
    ...drums4
  },
  midiComponents: {
    '1': {
      'settings': Object.keys(drums1)
    },
    '2': {
      'settings': Object.keys(drums2)
    },
    '3': {
      'settings': Object.keys(drums3)
    },
    '4': {
      'settings': Object.keys(drums4)
    }
  }
};

const midiCCs$c = {

  // Section: Delay
  '111': {
    'name': 'synth 1 send level',
    'range': [0, 127],
    'defaultValue': 0
  },
  '112': {
    'name': 'synth 2 send level',
    'range': [0, 127],
    'defaultValue': 0
  },
  '113': {
    'name': 'drum 1 send level',
    'range': [0, 127],
    'defaultValue': 0
  },
  '114': {
    'name': 'drum 2 send level',
    'range': [0, 127],
    'defaultValue': 0
  },
  '115': {
    'name': 'drum 3 send level',
    'range': [0, 127],
    'defaultValue': 0
  },
  '116': {
    'name': 'drum 4 send level',
    'range': [0, 127],
    'defaultValue': 0
  }
};

var delay$3 = midiCCs$c;

const midiCCs$b = {

  // Section: Master Filter
  '74': {
    'name': 'frequency',
    'range': [0, 127],
    'rangeValues': [-63, 64],
    'rangeConditions': { // 0-63=Low Pass, 64=OFF, 65-127=High Pass
      '<64': 'Low Pass',
      '=0': 'OFF',
      '>64': 'High Pass'
    },
    'defaultValue': 64
  },
  '71': {
    'name': 'resonance',
    'range': [0, 127],
    'defaultValue': 30
  }
};

var masterFilter$1 = midiCCs$b;

const midiCCs$a = {

  // Section: Mixer
  '12': {
    'name': 'synth 1 level',
    'range': [0, 127],
    'defaultValue': 100
  },
  '14': {
    'name': 'synth 2 level',
    'range': [0, 127],
    'defaultValue': 100
  }
};

var mixer$3 = midiCCs$a;

const midiCCs$9 = {

  // Section: Pan
  '117': {
    'name': 'synth 1 pan',
    'range': [0, 127],
    'defaultValue': 100
  },
  '118': {
    'name': 'synth 2 pan',
    'range': [0, 127],
    'defaultValue': 100
  }
};

var pan$1 = midiCCs$9;

const midiCCs$8 = {

  // Section: Reverb
  '88': {
    'name': 'synth 1 send level',
    'range': [0, 127],
    'defaultValue': 0
  },
  '89': {
    'name': 'synth 2 send level',
    'range': [0, 127],
    'defaultValue': 0
  },
  '90': {
    'name': 'drum 1 send level',
    'range': [0, 127],
    'defaultValue': 0
  },
  '106': {
    'name': 'drum 2 send level',
    'range': [0, 127],
    'defaultValue': 0
  },
  '109': {
    'name': 'drum 3 send level',
    'range': [0, 127],
    'defaultValue': 0
  },
  '110': {
    'name': 'drum 4 send level',
    'range': [0, 127],
    'defaultValue': 0
  }
};

var reverb$3 = midiCCs$8;

const delay$2 = delay$3;
const masterFilter = masterFilter$1;
const mixer$2 = mixer$3;
const pan = pan$1;
const reverb$2 = reverb$3;

var session$3 = {
  midiCCs: {
    ...reverb$2,
    ...delay$2,
    ...masterFilter,
    ...mixer$2,
    ...pan
  },
  midiComponents: {
    'reverb': Object.keys(reverb$2),
    'delay': Object.keys(delay$2),
    'master filter': Object.keys(masterFilter),
    'mixer': Object.keys(mixer$2),
    'pan': Object.keys(pan)
  }
};

const midiCCs$7 = {

  // Section: Effects and EQ
  ' 91': {
    'name': 'distortion level',
    'range': [0, 127],
    'defaultValue': 0
  },
  ' 93': {
    'name': 'chorus level',
    'range': [0, 127],
    'defaultValue': 0
  }
};

var effects$3 = midiCCs$7;

const midiCCs$6 = {

  // Section: Envelope
  ' 108': {
    'name': 'env 1 velocity',
    'range': [0, 127],
    'rangeValues': [-64, 63],
    'defaultValue': 64
  },
  ' 73': {
    'name': 'env 1 attack',
    'range': [0, 127],
    'defaultValue': 2
  },
  ' 75': {
    'name': 'env 1 decay',
    'range': [0, 127],
    'defaultValue': 90
  },
  ' 70': {
    'name': 'env 1 sustain',
    'range': [0, 127],
    'defaultValue': 127
  },
  ' 72': {
    'name': 'env 1 release',
    'range': [0, 127],
    'defaultValue': 40
  }
};

var envelope$3 = midiCCs$6;

var rangeValues$q = {exports: {}};

(function () {

  var distortion;
  var filter;
  var modMatrix;
  var lfo;
  var osc;
  var synth;

  distortion = {
    'driveType': [
      'diode',
      'valve',
      'clipper',
      'cross-over',
      'rectifier',
      'bit reducer',
      'rate reducer'
    ]
  };

  filter = {
    'routing': [
      'Normal',
      'Osc 1 bypasses the filter',
      'Osc 1 + Osc 2 bypasses the filter',
    ],
    'type': [
      'low pass 12dB',
      'low pass 24dB',
      'band pass 6dB',
      'band pass 12dB',
      'high pass 12dB',
      'high pass 24dB'
    ],
  };

  lfo = {
    'fadeMode': [
      'Fade In',
      'Fade Out',
      'Gate In',
      'Gate Out'
    ],
    'wave': [
      'sine',
      'triangle',
      'sawtooth',
      'square',
      'random S/H',
      'time S/H',
      'piano envelope',
      'sequence 1',
      'sequence 2',
      'sequence 3',
      'sequence 4',
      'sequence 5',
      'sequence 6',
      'sequence 7',
      'alternative 1',
      'alternative 2',
      'alternative 3',
      'alternative 4',
      'alternative 5',
      'alternative 6',
      'alternative 7',
      'alternative 8',
      'chromatic',
      'chromatic 16',
      'major',
      'major 7',
      'minor 7',
      'min arp 1',
      'min arp 2',
      'diminished',
      'dec minor',
      'minor 3rd',
      'pedal',
      '4ths',
      '4ths x12',
      '1625 maj',
      '1625 min',
      '2511'
    ]
  };

  modMatrix = {
    'source': [
      'direct',
      'modulation wheel',
      'after touch',
      'expression',
      'velocity',
      'keyboard',
      'LFO 1 +',
      'LFO 1 +/-',
      'LFO 2 +',
      'LFO 2 +/-',
      'env amp',
      'env filter',
      'env 3'
    ],
    'destination': [
      'osc 1 & 2 pitch',
      'osc 1 pitch',
      'osc 2 pitch',
      'osc 1 v-pitch',
      'osc 2 v-pitch',
      'osc 1 pulse width / index',
      'osc 2 pulse width / index',
      'osc 1 level',
      'osc 2 level',
      'noise level',
      'ring modulation 1*2 level',
      'filter drive amount',
      'filter frequency',
      'filter resonance',
      'LFO 1 rate',
      'LFO 2 rate',
      'amp envelope decay',
      'filter envelope decay'
    ]
  };

  osc = {
    'wave': [
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
    ]
  };

  synth = {
    'polyphonyMode': ['Mono', 'Mono AG', 'Poly'],
    'waveforms': [
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
  };

  rangeValues$q.exports = {
    distortion: distortion,
    filter: filter,
    lfo: lfo,
    modMatrix: modMatrix,
    osc: osc,
    synth: synth
  };
})();

const rangeValues$p = rangeValues$q.exports;
const midiCCs$5 = {

  // Section: Filter
  ' 60': {
    'name': 'routing',
    'range': [0, rangeValues$p.filter.routing.length - 1],
    'rangeValues': rangeValues$p.filter.routing,
    'defaultValue': 0
  },
  ' 63': {
    'name': 'drive',
    'range': [0, 127],
    'defaultValue': 0
  },
  ' 65': {
    'name': 'drive type',
    'range': [0, rangeValues$p.distortion.driveType.length - 1],
    'rangeValues': rangeValues$p.distortion.driveType,
    'defaultValue': 0
  },
  ' 68': {
    'name': 'type',
    'range': [0, rangeValues$p.filter.type.length - 1],
    'rangeValues': rangeValues$p.filter.type,
    'defaultValue': 1
  },
  ' 74': {
    'name': 'frequency',
    'range': [0, 127],
    'defaultValue': 127
  },
  ' 69': {
    'name': 'tracking',
    'range': [0, 127],
    'defaultValue': 127
  },
  ' 71': {
    'name': 'resonance',
    'range': [0, 127],
    'defaultValue': 0
  },
  ' 78': {
    'name': 'Q normalize',
    'range': [0, 127],
    'defaultValue': 64
  },
  ' 79': {
    'name': 'env 2 to frequency',
    'range': [0, 127],
    'rangeValues': [-64, 63],
    'defaultValue': 64
  }
};

var filter$1 = midiCCs$5;

const midiCCs$4 = {

  // Section: Mixer
  ' 51': {
    'name': 'osc 1 level',
    'range': [0, 127],
    'defaultValue': 127
  },
  ' 52': {
    'name': 'osc 2 level',
    'range': [0, 127],
    'defaultValue': 0
  },
  ' 54': {
    'name': 'ring mod level',
    'range': [0, 127],
    'defaultValue': 0
  },
  ' 56': {
    'name': 'noise level',
    'range': [0, 127],
    'defaultValue': 0
  },
  ' 58': {
    'name': 'pre FX level',
    'range': [52, 82],
    'rangeValues': [-12, 18],
    'defaultValue': 64
  },
  ' 59': {
    'name': 'post FX level',
    'range': [52, 82],
    'rangeValues': [-12, 18],
    'defaultValue': 64
  }
};

var mixer$1 = midiCCs$4;

const midiCCs$3 = {

  // Section: Macro Knob
  ' 80': {
    'name': 'macro knob 1 position',
    'range': [0, 127],
    'defaultValue': 0
  },
  ' 81': {
    'name': 'macro knob 2 position',
    'range': [0, 127],
    'defaultValue': 0
  },
  ' 82': {
    'name': 'macro knob 3 position',
    'range': [0, 127],
    'defaultValue': 0
  },
  ' 83': {
    'name': 'macro knob 4 position',
    'range': [0, 127],
    'defaultValue': 0
  },
  ' 84': {
    'name': 'macro knob 5 position',
    'range': [0, 127],
    'defaultValue': 0
  },
  ' 85': {
    'name': 'macro knob 6 position',
    'range': [0, 127],
    'defaultValue': 0
  },
  ' 86': {
    'name': 'macro knob 7 position',
    'range': [0, 127],
    'defaultValue': 0
  },
  ' 87': {
    'name': 'macro knob 8 position',
    'range': [0, 127],
    'defaultValue': 0
  }
};

var macroKnobs$1 = midiCCs$3;

const rangeValues$o = rangeValues$q.exports;
const midiCCs$2 = {

  // Section: Oscillator 1
  ' 19': {
    'name': 'osc 1 wave',
    'range': [0, rangeValues$o.synth.waveforms.length - 1],
    'rangeValues': rangeValues$o.synth.waveforms,
    'defaultValue': 2
  },
  ' 20': {
    'name': 'osc 1 wave interpolate',
    'range': [0, 127],
    'defaultValue': 0
  },
  ' 21': {
    'name': 'osc 1 pulse width index',
    'range': [0, 127],
    'rangeValues': [-64, 63],
    'defaultValue': 127
  },
  ' 22': {
    'name': 'osc 1 virtual sync depth',
    'range': [0, 127],
    'defaultValue': 0
  },
  ' 24': {
    'name': 'osc 1 density',
    'range': [0, 127],
    'defaultValue': 0
  },
  ' 25': {
    'name': 'osc 1 density detune',
    'range': [0, 127],
    'defaultValue': 0
  },
  ' 26': {
    'name': 'osc 1 semitones',
    'range': [0, 127],
    'rangeValues': [-64, 63],
    'defaultValue': 64
  },
  ' 27': {
    'name': 'osc 1 cents',
    'range': [0, 127],
    'rangeValues': [-64, 63],
    'defaultValue': 64
  },
  ' 28': {
    'name': 'osc 1 pitchbend',
    'range': [52, 76],
    'rangeValues': [-12, 12],
    'defaultValue': 76
  }
};

var osc1$1 = midiCCs$2;

const rangeValues$n = rangeValues$q.exports;
const midiCCs$1 = {

  // Section: Oscillator 2
  ' 29': {
    'name': 'osc 2 wave',
    'range': [0, rangeValues$n.synth.waveforms.length - 1],
    'rangeValues': rangeValues$n.synth.waveforms,
    'defaultValue': 2
  },
  ' 30': {
    'name': 'osc 2 wave interpolate',
    'range': [0, 127],
    'defaultValue': 0
  },
  ' 31': {
    'name': 'osc 2 pulse width index',
    'range': [0, 127],
    'rangeValues': [-64, 63],
    'defaultValue': 127
  },
  ' 33': {
    'name': 'osc 2 virtual sync depth',
    'range': [0, 127],
    'defaultValue': 0
  },
  ' 35': {
    'name': 'osc 2 density',
    'range': [0, 127],
    'defaultValue': 0
  },
  ' 36': {
    'name': 'osc 2 density detune',
    'range': [0, 127],
    'defaultValue': 0
  },
  ' 37': {
    'name': 'osc 2 semitones',
    'range': [0, 127],
    'rangeValues': [-64, 63],
    'defaultValue': 64
  },
  ' 39': {
    'name': 'osc 2 cents',
    'range': [0, 127],
    'rangeValues': [-64, 63],
    'defaultValue': 64
  },
  ' 40': {
    'name': 'osc 2 pitchbend',
    'range': [52, 76],
    'rangeValues': [-12, 12],
    'defaultValue': 76
  },
};


var osc2$1 = midiCCs$1;

const rangeValues$m = rangeValues$q.exports;
const midiCCs = {

  // Section: Voice
  ' 3': {
    'name': 'Polyphony Mode',
    'range': [0, rangeValues$m.synth.polyphonyMode.length - 1],
    'rangeValues': rangeValues$m.synth.polyphonyMode,
    'defaultValue': 2
  },
  ' 5': {
    'name': 'Portamento Rate',
    'range': [0, 127],
    'defaultValue': 0
  },
  ' 9': {
    'name': 'Pre-Glide',
    'range': [52, 76],
    'rangeValues': [-12, 12],
    'defaultValue': 64
  },
  ' 13': {
    'name': 'Keyboard Octave',
    'range': [60, 68],
    'rangeValues': [-4, 4],
    'defaultValue': 64
  }
};

var voice$1 = midiCCs;

const effects$2 = effects$3;
const envelope$2 = envelope$3;
const filter = filter$1;
const mixer = mixer$1;
const macroKnobs = macroKnobs$1;
const osc1 = osc1$1;
const osc2 = osc2$1;
const voice = voice$1;

var synth$3 = {
  midiCCs: {
    ...voice,
    ...osc1,
    ...osc2,
    ...mixer,
    ...filter,
    ...envelope$2,
    ...effects$2,
    ...macroKnobs
  },
  midiComponents: {
    'voice': Object.keys(voice),
    'osc 1': Object.keys(osc1),
    'osc 2': Object.keys(osc2),
    'mixer': Object.keys(mixer),
    'filter': Object.keys(filter),
    'envelope': Object.keys(envelope$2),
    'effects': Object.keys(effects$2),
    'macro knobs': Object.keys(macroKnobs)
  }
};

const drums = drums$1;
const session$2 = session$3;
const synth$2 = synth$3;

var cc = {
  midiCCs: {
    'synth': synth$2.midiCCs,
    'drums': drums.midiCCs,
    'session': session$2.midiCCs
  },
  ccComponents: {
    'synth 1': synth$2.midiComponents,
    'synth 2': synth$2.midiComponents,
    'drums 1': drums.midiComponents['1'],
    'drums 2': drums.midiComponents['2'],
    'drums 3': drums.midiComponents['3'],
    'drums 4': drums.midiComponents['4'],
    'session': session$2.midiComponents
  },
  midiChannels: {
    'synth 1': 1,
    'synth 2': 2,
    'drums 1': 10,
    'drums 2': 10,
    'drums 3': 10,
    'drums 4': 10,
    'session': 16
  }
};

const midiNRPNs$y = {

  // Additional Controls
  ' 1:21': [
    {
      'name': 'FX Bypass',
      'range': [0, 1],
      'rangeValues': ['OFF', 'ON'],
      'defaultValue': 0
    }
  ]
};

var additionalControls = {
  midiNRPNs: midiNRPNs$y
};

const midiNRPNs$x = {

  // Delay
  ' 1:6': [
    {
      'name': 'time',
      'range': [0, 127],
      'defaultValue': 64
    }
  ],
  ' 1:7': [
    {
      'name': 'time sync',
      'range': [0, 35],
      'defaultValue': 20
    }
  ],
  ' 1:8': [
    {
      'name': 'feedback',
      'range': [0, 127],
      'defaultValue': 64
    }
  ],
  ' 1:9': [
    {
      'name': 'width',
      'range': [0, 127],
      'defaultValue': 127
    }
  ],
  ' 1:10': [
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
      'defaultValue': 4
    }
  ],
  ' 1:11': [
    {
      'name': 'slew rate',
      'range': [0, 127],
      'defaultValue': 5
    }
  ]
};

var delay$1 = {
  midiNRPNs: midiNRPNs$x
};

const midiNRPNs$w = {

  // Reverb
  ' 1:18': [
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
      'defaultValue': 127
    }
  ],
  ' 1:19': [
    {
      'name': 'decay',
      'range': [0, 127],
      'defaultValue': 64
    }
  ],
  ' 1:20': [
    {
      'name': 'damping',
      'range': [0, 127],
      'defaultValue': 64
    }
  ]
};

var reverb$1 = {
  midiNRPNs: midiNRPNs$w
};

const midiNRPNs$v = {

  // Side Chain
  ' 2:55': [
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
      'defaultValue': 0
    }
  ],
  ' 2:56': [
    {
      'name': 'synth 1 attack',
      'range': [0, 127],
      'defaultValue': 0
    }
  ],
  ' 2:57': [
    {
      'name': 'synth 1 hold',
      'range': [0, 127],
      'defaultValue': 50
    }
  ],
  ' 2:58': [
    {
      'name': 'synth 1 decay',
      'range': [0, 127],
      'defaultValue': 70
    }
  ],
  ' 2:59': [
    {
      'name': 'synth 1 depth',
      'range': [0, 127],
      'defaultValue': 0
    }
  ],

  ' 2:65': [
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
      'defaultValue': 0
    }
  ],
  ' 2:66': [
    {
      'name': 'synth 2 attack',
      'range': [0, 127],
      'defaultValue': 0
    }
  ],
  ' 2:67': [
    {
      'name': 'synth 2 hold',
      'range': [0, 127],
      'defaultValue': 50
    }
  ],
  ' 2:68': [
    {
      'name': 'synth 2 decay',
      'range': [0, 127],
      'defaultValue': 70
    }
  ],
  ' 1:69': [
    {
      'name': 'synth 2 depth',
      'range': [0, 127],
      'defaultValue': 0
    }
  ]
};

var sidechain$1 = {
  midiNRPNs: midiNRPNs$v
};

var addtionalControls = additionalControls;
var delay = delay$1;
var reverb = reverb$1;
var sidechain = sidechain$1;

var session$1 = {
  midiNRPNs: {
    ...reverb.midiNRPNs,
    ...delay.midiNRPNs,
    ...sidechain.midiNRPNs,
    ...addtionalControls.midiNRPNs
  },
  midiComponents: {
    'reverb': Object.keys(reverb.midiNRPNs),
    'delay': Object.keys(delay.midiNRPNs),
    'sidechain': Object.keys(sidechain.midiNRPNs),
    'addtional controls': Object.keys(addtionalControls.midiNRPNs)
  }
};

const rangeValues$l = rangeValues$q.exports;

const midiNRPNs$u = {
  ' 0:79': [
    {
      'name': 'lfo 2 waveform',
      'range': [0, rangeValues$l.lfo.wave.length - 1],
      'rangeValues': rangeValues$l.lfo.wave,
      'defaultValue': 0
    }
  ],
  ' 0:80': [
    {
      'name': 'lfo 2 phase offset',
      'range': [0, 119],
      'defaultValue': 0
    }
  ],
  ' 0:81': [
    {
      'name': 'lfo 2 slew rate',
      'range': [0, 127],
      'defaultValue': 0
    }
  ],
  ' 0:82': [
    {
      'name': 'lfo 2 delay',
      'range': [0, 127],
      'defaultValue': 0
    }
  ],
  ' 0:83': [
    {
      'name': 'lfo 2 delay sync',
      'range': [0, 35],
      'defaultValue': 0
    }
  ],
  ' 0:83': [
    {
      'name': 'lfo 2 rate',
      'range': [0, 127],
      'defaultValue': 68
    }
  ],
  ' 0:84': [
    {
      'name': 'lfo 2 rate sync',
      'range': [0, 35],
      'defaultValue': 0
    }
  ],
};

var effects$1 = midiNRPNs$u;

const midiNRPNs$t = {
  ' 0:0': [
    {
      'name': 'env 2 velocity',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 64
    }
  ],
  ' 0:1': [
    {
      'name': 'env 2 attack',
      'range': [0, 127],
      'defaultValue': 2
    }
  ],
  ' 0:2': [
    {
      'name': 'env 2 decay',
      'range': [0, 127],
      'defaultValue': 75
    }
  ],
  ' 0:3': [
    {
      'name': 'env 2 sustain',
      'range': [0, 127],
      'defaultValue': 35
    }
  ],
  ' 0:4': [
    {
      'name': 'env 2 release',
      'range': [0, 127],
      'defaultValue': 45
    }
  ],
  ' 0:14': [
    {
      'name': 'env 3 delay',
      'range': [0, 127],
      'defaultValue': 0
    }
  ],
  ' 0:15': [
    {
      'name': 'env 3 attack',
      'range': [0, 127],
      'defaultValue': 10
    }
  ],
  ' 0:16': [
    {
      'name': 'env 3 decay',
      'range': [0, 127],
      'defaultValue': 70
    }
  ],
  ' 0:17': [
    {
      'name': 'env 3 sustain',
      'range': [0, 127],
      'defaultValue': 35
    }
  ],
  ' 0:18': [
    {
      'name': 'env 3 release',
      'range': [0, 127],
      'defaultValue': 45
    }
  ],
};

var envelope$1 = midiNRPNs$t;

const rangeValues$k = rangeValues$q.exports;

const midiNRPNs$s = {

  // LFO 1
  ' 0:70': [
    {
      'name': 'lfo 1 waveform',
      'range': [0, rangeValues$k.lfo.wave.length - 1],
      'rangeValues': rangeValues$k.lfo.wave,
      'defaultValue': 0
    }
  ],
  ' 0:71': [
    {
      'name': 'lfo 1 phase offset',
      'range': [0, 119],
      'defaultValue': 0
    }
  ],
  ' 0:72': [
    {
      'name': 'lfo 1 slew rate',
      'range': [0, 127],
      'defaultValue': 0
    }
  ],
  ' 0:74': [
    {
      'name': 'lfo 1 delay',
      'range': [0, 127],
      'defaultValue': 0
    }
  ],
  ' 0:75': [
    {
      'name': 'lfo 1 delay sync',
      'range': [0, 35],
      'defaultValue': 0
    }
  ],
  ' 0:76': [
    {
      'name': 'lfo 1 rate',
      'range': [0, 127],
      'defaultValue': 68
    }
  ],
  ' 0:77': [
    {
      'name': 'lfo 1 rate sync',
      'range': [0, 35],
      'defaultValue': 0
    }
  ],

  // LFO 2
  ' 0:79': [
    {
      'name': 'lfo 2 waveform',
      'range': [0, rangeValues$k.lfo.wave.length - 1],
      'rangeValues': rangeValues$k.lfo.wave,
      'defaultValue': 0
    }
  ],
  ' 0:80': [
    {
      'name': 'lfo 2 phase offset',
      'range': [0, 119],
      'defaultValue': 0
    }
  ],
  ' 0:81': [
    {
      'name': 'lfo 2 slew rate',
      'range': [0, 127],
      'defaultValue': 0
    }
  ],
  ' 0:82': [
    {
      'name': 'lfo 2 delay',
      'range': [0, 127],
      'defaultValue': 0
    }
  ],
  ' 0:83': [
    {
      'name': 'lfo 2 delay sync',
      'range': [0, 35],
      'defaultValue': 0
    }
  ],
  ' 0:83': [
    {
      'name': 'lfo 2 rate',
      'range': [0, 127],
      'defaultValue': 68
    }
  ],
  ' 0:84': [
    {
      'name': 'lfo 2 rate sync',
      'range': [0, 35],
      'defaultValue': 0
    }
  ],

  // LFO 1 and 2
  ' 0:122': [

    // LFO 1
    {
      'name': 'lfo 1 one shot',
      'range': [12, 13],
      'rangeValues': ['OFF', 'ON'],
      'defaultValue': 12
    },
    {
      'name': 'lfo 1 key sync',
      'range': [14, 15],
      'rangeValues': ['OFF', 'ON'],
      'defaultValue': 14
    },
    {
      'name': 'lfo 1 common sync',
      'range': [16, 17],
      'rangeValues': ['OFF', 'ON'],
      'defaultValue': 16
    },
    {
      'name': 'lfo 1 delay trigger',
      'range': [18, 19],
      'rangeValues': ['OFF', 'ON'],
      'defaultValue': 18
    },

    // LFO 2
    {
      'name': 'lfo 2 one shot',
      'range': [22, 23],
      'rangeValues': ['OFF', 'ON'],
      'defaultValue': 12
    },
    {
      'name': 'lfo 2 key sync',
      'range': [24, 25],
      'rangeValues': ['OFF', 'ON'],
      'defaultValue': 14
    },
    {
      'name': 'lfo 2 common sync',
      'range': [26, 27],
      'rangeValues': ['OFF', 'ON'],
      'defaultValue': 16
    },
    {
      'name': 'lfo 2 delay trigger',
      'range': [28, 29],
      'rangeValues': ['OFF', 'ON'],
      'defaultValue': 18
    }
  ],
  ' 0:123': [

    // LFO 1
    {
      'name': 'lfo 1 fade mode',
      'range': [0, rangeValues$k.lfo.fadeMode.length - 1],
      'rangeValues': rangeValues$k.lfo.fadeMode,
      'defaultValue': 0
    },

    // LFO 2
    {
      'name': 'lfo 2 fade mode',
      'range': [4, 4 + rangeValues$k.lfo.fadeMode.length - 1],
      'rangeValues': rangeValues$k.lfo.fadeMode,
      'defaultValue': 4
    }
  ]
};

var lfo$1 = midiNRPNs$s;

const midiNRPNs$r = {

  // Macro Knob 1
  ' 3:0': [
    {
      'name': 'macro knob 1 destination A',
      'range': [0, 70],
      'defaultValue': 0
    }
  ],
  ' 3:1': [
    {
      'name': 'macro knob 1 start position A',
      'range': [0, 127],
      'defaultValue': 0
    }
  ],
  ' 3:2': [
    {
      'name': 'macro knob 1 end position A',
      'range': [0, 127],
      'defaultValue': 127
    }
  ],
  ' 3:3': [
    {
      'name': 'macro knob 1 depth A',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 0
    }
  ],

  ' 3:4': [
    {
      'name': 'macro knob 1 destination B',
      'range': [0, 70],
      'defaultValue': 0
    }
  ],
  ' 3:5': [
    {
      'name': 'macro knob 1 start position B',
      'range': [0, 127],
      'defaultValue': 0
    }
  ],
  ' 3:6': [
    {
      'name': 'macro knob 1 end position B',
      'range': [0, 127],
      'defaultValue': 127
    }
  ],
  ' 3:7': [
    {
      'name': 'macro knob 1 depth B',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 0
    }
  ],

  ' 3:8': [
    {
      'name': 'macro knob 1 destination C',
      'range': [0, 70],
      'defaultValue': 0
    }
  ],
  ' 3:9': [
    {
      'name': 'macro knob 1 start position C',
      'range': [0, 127],
      'defaultValue': 0
    }
  ],
  ' 3:10': [
    {
      'name': 'macro knob 1 end position C',
      'range': [0, 127],
      'defaultValue': 127
    }
  ],
  ' 3:11': [
    {
      'name': 'macro knob 1 depth C',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 0
    }
  ],

  ' 3:12': [
    {
      'name': 'macro knob 1 destination D',
      'range': [0, 70],
      'defaultValue': 0
    }
  ],
  ' 3:13': [
    {
      'name': 'macro knob 1 start position D',
      'range': [0, 127],
      'defaultValue': 0
    }
  ],
  ' 3:14': [
    {
      'name': 'macro knob 1 end position D',
      'range': [0, 127],
      'defaultValue': 127
    }
  ],
  ' 3:15': [
    {
      'name': 'macro knob 1 depth D',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 0
    }
  ]
};

var knob1$1 = midiNRPNs$r;

const midiNRPNs$q = {

  // Macro Knob 2
  ' 3:16': [
    {
      'name': 'macro knob 2 destination A',
      'range': [0, 70],
      'defaultValue': 0
    }
  ],
  ' 3:17': [
    {
      'name': 'macro knob 2 start position A',
      'range': [0, 127],
      'defaultValue': 0
    }
  ],
  ' 3:18': [
    {
      'name': 'macro knob 2 end position A',
      'range': [0, 127],
      'defaultValue': 127
    }
  ],
  ' 3:19': [
    {
      'name': 'macro knob 2 depth A',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 0
    }
  ],

  ' 3:20': [
    {
      'name': 'macro knob 2 destination B',
      'range': [0, 70],
      'defaultValue': 0
    }
  ],
  ' 3:21': [
    {
      'name': 'macro knob 2 start position B',
      'range': [0, 127],
      'defaultValue': 0
    }
  ],
  ' 3:22': [
    {
      'name': 'macro knob 2 end position B',
      'range': [0, 127],
      'defaultValue': 127
    }
  ],
  ' 3:23': [
    {
      'name': 'macro knob 2 depth B',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 0
    }
  ],

  ' 3:24': [
    {
      'name': 'macro knob 2 destination C',
      'range': [0, 70],
      'defaultValue': 0
    }
  ],
  ' 3:25': [
    {
      'name': 'macro knob 2 start position C',
      'range': [0, 127],
      'defaultValue': 0
    }
  ],
  ' 3:26': [
    {
      'name': 'macro knob 2 end position C',
      'range': [0, 127],
      'defaultValue': 127
    }
  ],
  ' 3:27': [
    {
      'name': 'macro knob 2 depth C',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 0
    }
  ],

  ' 3:28': [
    {
      'name': 'macro knob 2 destination D',
      'range': [0, 70],
      'defaultValue': 0
    }
  ],
  ' 3:29': [
    {
      'name': 'macro knob 2 start position D',
      'range': [0, 127],
      'defaultValue': 0
    }
  ],
  ' 3:30': [
    {
      'name': 'macro knob 2 end position D',
      'range': [0, 127],
      'defaultValue': 127
    }
  ],
  ' 3:31': [
    {
      'name': 'macro knob 2 depth D',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 0
    }
  ],
};

var knob2$1 = midiNRPNs$q;

const midiNRPNs$p = {

  // Macro Knob 3
  ' 3:32': [
    {
      'name': 'macro knob 3 destination A',
      'range': [0, 70],
      'defaultValue': 0
    }
  ],
  ' 3:33': [
    {
      'name': 'macro knob 3 start position A',
      'range': [0, 127],
      'defaultValue': 0
    }
  ],
  ' 3:34': [
    {
      'name': 'macro knob 3 end position A',
      'range': [0, 127],
      'defaultValue': 127
    }
  ],
  ' 3:35': [
    {
      'name': 'macro knob 3 depth A',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 0
    }
  ],

  ' 3:36': [
    {
      'name': 'macro knob 3 destination B',
      'range': [0, 70],
      'defaultValue': 0
    }
  ],
  ' 3:37': [
    {
      'name': 'macro knob 3 start position B',
      'range': [0, 127],
      'defaultValue': 0
    }
  ],
  ' 3:38': [
    {
      'name': 'macro knob 3 end position B',
      'range': [0, 127],
      'defaultValue': 127
    }
  ],
  ' 3:39': [
    {
      'name': 'macro knob 3 depth B',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 0
    }
  ],

  ' 3:40': [
    {
      'name': 'macro knob 3 destination C',
      'range': [0, 70],
      'defaultValue': 0
    }
  ],
  ' 3:41': [
    {
      'name': 'macro knob 3 start position C',
      'range': [0, 127],
      'defaultValue': 0
    }
  ],
  ' 3:42': [
    {
      'name': 'macro knob 3 end position C',
      'range': [0, 127],
      'defaultValue': 127
    }
  ],
  ' 3:43': [
    {
      'name': 'macro knob 3 depth C',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 0
    }
  ],

  ' 3:44': [
    {
      'name': 'macro knob 3 destination D',
      'range': [0, 70],
      'defaultValue': 0
    }
  ],
  ' 3:45': [
    {
      'name': 'macro knob 3 start position D',
      'range': [0, 127],
      'defaultValue': 0
    }
  ],
  ' 3:46': [
    {
      'name': 'macro knob 3 end position D',
      'range': [0, 127],
      'defaultValue': 127
    }
  ],
  ' 3:47': [
    {
      'name': 'macro knob 3 depth D',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 0
    }
  ]
};

var knob3$1 = midiNRPNs$p;

const midiNRPNs$o = {

  // Macro Knob 4
  ' 3:48': [
    {
      'name': 'macro knob 4 destination A',
      'range': [0, 70],
      'defaultValue': 0
    }
  ],
  ' 3:49': [
    {
      'name': 'macro knob 4 start position A',
      'range': [0, 127],
      'defaultValue': 0
    }
  ],
  ' 3:50': [
    {
      'name': 'macro knob 4 end position A',
      'range': [0, 127],
      'defaultValue': 127
    }
  ],
  ' 3:51': [
    {
      'name': 'macro knob 4 depth A',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 0
    }
  ],

  ' 3:52': [
    {
      'name': 'macro knob 4 destination B',
      'range': [0, 70],
      'defaultValue': 0
    }
  ],
  ' 3:53': [
    {
      'name': 'macro knob 4 start position B',
      'range': [0, 127],
      'defaultValue': 0
    }
  ],
  ' 3:54': [
    {
      'name': 'macro knob 4 end position B',
      'range': [0, 127],
      'defaultValue': 127
    }
  ],
  ' 3:55': [
    {
      'name': 'macro knob 4 depth B',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 0
    }
  ],

  ' 3:56': [
    {
      'name': 'macro knob 4 destination C',
      'range': [0, 70],
      'defaultValue': 0
    }
  ],
  ' 3:57': [
    {
      'name': 'macro knob 4 start position C',
      'range': [0, 127],
      'defaultValue': 0
    }
  ],
  ' 3:58': [
    {
      'name': 'macro knob 4 end position C',
      'range': [0, 127],
      'defaultValue': 127
    }
  ],
  ' 3:59': [
    {
      'name': 'macro knob 4 depth C',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 0
    }
  ],

  ' 3:60': [
    {
      'name': 'macro knob 4 destination D',
      'range': [0, 70],
      'defaultValue': 0
    }
  ],
  ' 3:61': [
    {
      'name': 'macro knob 4 start position D',
      'range': [0, 127],
      'defaultValue': 0
    }
  ],
  ' 3:62': [
    {
      'name': 'macro knob 4 end position D',
      'range': [0, 127],
      'defaultValue': 127
    }
  ],
  ' 3:63': [
    {
      'name': 'macro knob 4 depth D',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 0
    }
  ]
};

var knob4$1 = midiNRPNs$o;

const midiNRPNs$n = {

  // Macro Knob 5
  ' 3:64': [
    {
      'name': 'macro knob 5 destination A',
      'range': [0, 70],
      'defaultValue': 0
    }
  ],
  ' 3:65': [
    {
      'name': 'macro knob 5 start position A',
      'range': [0, 127],
      'defaultValue': 0
    }
  ],
  ' 3:66': [
    {
      'name': 'macro knob 5 end position A',
      'range': [0, 127],
      'defaultValue': 127
    }
  ],
  ' 3:67': [
    {
      'name': 'macro knob 5 depth A',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 0
    }
  ],

  ' 3:68': [
    {
      'name': 'macro knob 5 destination B',
      'range': [0, 70],
      'defaultValue': 0
    }
  ],
  ' 3:69': [
    {
      'name': 'macro knob 5 start position B',
      'range': [0, 127],
      'defaultValue': 0
    }
  ],
  ' 3:70': [
    {
      'name': 'macro knob 5 end position B',
      'range': [0, 127],
      'defaultValue': 127
    }
  ],
  ' 3:71': [
    {
      'name': 'macro knob 5 depth B',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 0
    }
  ],

  ' 3:72': [
    {
      'name': 'macro knob 5 destination C',
      'range': [0, 70],
      'defaultValue': 0
    }
  ],
  ' 3:73': [
    {
      'name': 'macro knob 5 start position C',
      'range': [0, 127],
      'defaultValue': 0
    }
  ],
  ' 3:74': [
    {
      'name': 'macro knob 5 end position C',
      'range': [0, 127],
      'defaultValue': 127
    }
  ],
  ' 3:75': [
    {
      'name': 'macro knob 5 depth C',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 0
    }
  ],

  ' 3:76': [
    {
      'name': 'macro knob 5 destination D',
      'range': [0, 70],
      'defaultValue': 0
    }
  ],
  ' 3:77': [
    {
      'name': 'macro knob 5 start position D',
      'range': [0, 127],
      'defaultValue': 0
    }
  ],
  ' 3:78': [
    {
      'name': 'macro knob 5 end position D',
      'range': [0, 127],
      'defaultValue': 127
    }
  ],
  ' 3:79': [
    {
      'name': 'macro knob 5 depth D',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 0
    }
  ]
};

var knob5$1 = midiNRPNs$n;

const midiNRPNs$m = {

  // Macro Knob 6
  ' 3:80': [
    {
      'name': 'macro knob 6 destination A',
      'range': [0, 70],
      'defaultValue': 0
    }
  ],
  ' 3:81': [
    {
      'name': 'macro knob 6 start position A',
      'range': [0, 127],
      'defaultValue': 0
    }
  ],
  ' 3:82': [
    {
      'name': 'macro knob 6 end position A',
      'range': [0, 127],
      'defaultValue': 127
    }
  ],
  ' 3:83': [
    {
      'name': 'macro knob 6 depth A',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 0
    }
  ],

  ' 3:84': [
    {
      'name': 'macro knob 6 destination B',
      'range': [0, 70],
      'defaultValue': 0
    }
  ],
  ' 3:85': [
    {
      'name': 'macro knob 6 start position B',
      'range': [0, 127],
      'defaultValue': 0
    }
  ],
  ' 3:86': [
    {
      'name': 'macro knob 6 end position B',
      'range': [0, 127],
      'defaultValue': 127
    }
  ],
  ' 3:87': [
    {
      'name': 'macro knob 6 depth B',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 0
    }
  ],

  ' 3:88': [
    {
      'name': 'macro knob 6 destination C',
      'range': [0, 70],
      'defaultValue': 0
    }
  ],
  ' 3:89': [
    {
      'name': 'macro knob 6 start position C',
      'range': [0, 127],
      'defaultValue': 0
    }
  ],
  ' 3:90': [
    {
      'name': 'macro knob 6 end position C',
      'range': [0, 127],
      'defaultValue': 127
    }
  ],
  ' 3:91': [
    {
      'name': 'macro knob 6 depth C',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 0
    }
  ],

  ' 3:92': [
    {
      'name': 'macro knob 6 destination D',
      'range': [0, 70],
      'defaultValue': 0
    }
  ],
  ' 3:93': [
    {
      'name': 'macro knob 6 start position D',
      'range': [0, 127],
      'defaultValue': 0
    }
  ],
  ' 3:94': [
    {
      'name': 'macro knob 6 end position D',
      'range': [0, 127],
      'defaultValue': 127
    }
  ],
  ' 3:95': [
    {
      'name': 'macro knob 6 depth D',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 0
    }
  ]
};

var knob6$1 = midiNRPNs$m;

const midiNRPNs$l = {

  // Macro Knob 7
  ' 3:96': [
    {
      'name': 'macro knob 7 destination A',
      'range': [0, 70],
      'defaultValue': 0
    }
  ],
  ' 3:97': [
    {
      'name': 'macro knob 7 start position A',
      'range': [0, 127],
      'defaultValue': 0
    }
  ],
  ' 3:98': [
    {
      'name': 'macro knob 7 end position A',
      'range': [0, 127],
      'defaultValue': 127
    }
  ],
  ' 3:99': [
    {
      'name': 'macro knob 7 depth A',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 0
    }
  ],

  ' 3:100': [
    {
      'name': 'macro knob 7 destination B',
      'range': [0, 70],
      'defaultValue': 0
    }
  ],
  ' 3:101': [
    {
      'name': 'macro knob 7 start position B',
      'range': [0, 127],
      'defaultValue': 0
    }
  ],
  ' 3:102': [
    {
      'name': 'macro knob 7 end position B',
      'range': [0, 127],
      'defaultValue': 127
    }
  ],
  ' 3:103': [
    {
      'name': 'macro knob 7 depth B',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 0
    }
  ],

  ' 3:104': [
    {
      'name': 'macro knob 7 destination C',
      'range': [0, 70],
      'defaultValue': 0
    }
  ],
  ' 3:105': [
    {
      'name': 'macro knob 7 start position C',
      'range': [0, 127],
      'defaultValue': 0
    }
  ],
  ' 3:106': [
    {
      'name': 'macro knob 7 end position C',
      'range': [0, 127],
      'defaultValue': 127
    }
  ],
  ' 3:107': [
    {
      'name': 'macro knob 7 depth C',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 0
    }
  ],

  ' 3:108': [
    {
      'name': 'macro knob 7 destination D',
      'range': [0, 70],
      'defaultValue': 0
    }
  ],
  ' 3:109': [
    {
      'name': 'macro knob 7 start position D',
      'range': [0, 127],
      'defaultValue': 0
    }
  ],
  ' 3:110': [
    {
      'name': 'macro knob 7 end position D',
      'range': [0, 127],
      'defaultValue': 127
    }
  ],
  ' 3:111': [
    {
      'name': 'macro knob 7 depth D',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 0
    }
  ]
};

var knob7$1 = midiNRPNs$l;

const midiNRPNs$k = {

  // Macro Knob 8
  ' 3:112': [
    {
      'name': 'macro knob 8 destination A',
      'range': [0, 70],
      'defaultValue': 0
    }
  ],
  ' 3:113': [
    {
      'name': 'macro knob 8 start position A',
      'range': [0, 127],
      'defaultValue': 0
    }
  ],
  ' 3:114': [
    {
      'name': 'macro knob 8 end position A',
      'range': [0, 127],
      'defaultValue': 127
    }
  ],
  ' 3:115': [
    {
      'name': 'macro knob 8 depth A',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 0
    }
  ],

  ' 3:116': [
    {
      'name': 'macro knob 8 destination B',
      'range': [0, 70],
      'defaultValue': 0
    }
  ],
  ' 3:117': [
    {
      'name': 'macro knob 8 start position B',
      'range': [0, 127],
      'defaultValue': 0
    }
  ],
  ' 3:118': [
    {
      'name': 'macro knob 8 end position B',
      'range': [0, 127],
      'defaultValue': 127
    }
  ],
  ' 3:119': [
    {
      'name': 'macro knob 8 depth B',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 0
    }
  ],

  ' 3:120': [
    {
      'name': 'macro knob 8 destination C',
      'range': [0, 70],
      'defaultValue': 0
    }
  ],
  ' 3:121': [
    {
      'name': 'macro knob 8 start position C',
      'range': [0, 127],
      'defaultValue': 0
    }
  ],
  ' 3:122': [
    {
      'name': 'macro knob 8 end position C',
      'range': [0, 127],
      'defaultValue': 127
    }
  ],
  ' 3:123': [
    {
      'name': 'macro knob 8 depth C',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 0
    }
  ],

  ' 3:124': [
    {
      'name': 'macro knob 8 destination D',
      'range': [0, 70],
      'defaultValue': 0
    }
  ],
  ' 3:125': [
    {
      'name': 'macro knob 8 start position D',
      'range': [0, 127],
      'defaultValue': 0
    }
  ],
  ' 3:126': [
    {
      'name': 'macro knob 8 end position D',
      'range': [0, 127],
      'defaultValue': 127
    }
  ],
  ' 3:127': [
    {
      'name': 'macro knob 8 depth D',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 0
    }
  ]
};

var knob8$1 = midiNRPNs$k;

const knob1 = knob1$1;
const knob2 = knob2$1;
const knob3 = knob3$1;
const knob4 = knob4$1;
const knob5 = knob5$1;
const knob6 = knob6$1;
const knob7 = knob7$1;
const knob8 = knob8$1;

var macro$1 = {
  knob1: knob1,
  knob2: knob2,
  knob3: knob3,
  knob4: knob4,
  knob5: knob5,
  knob6: knob6,
  knob7: knob7,
  knob8: knob8
};

const rangeValues$j = rangeValues$q.exports;
const midiNRPNs$j = {

  // Mod Matrix 1
  ' 1:83': [
    {
      'name': 'mod matrix 1 source 1',
      'range': [0, rangeValues$j.modMatrix.source.length - 1],
      'rangeValues': rangeValues$j.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 1:84': [
    {
      'name': 'mod matrix 1 source 2',
      'range': [0, rangeValues$j.modMatrix.source.length - 1],
      'rangeValues': rangeValues$j.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 1:86': [
    {
      'name': 'mod matrix 1 depth',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 64
    }
  ],
  ' 1:87': [
    {
      'name': 'mod matrix 1 destination',
      'range': [0, rangeValues$j.modMatrix.destination.length - 1],
      'rangeValues': rangeValues$j.modMatrix.destination,
      'defaultValue': 0
    }
  ]
};

var matrix1$1 = midiNRPNs$j;

const rangeValues$i = rangeValues$q.exports;
const midiNRPNs$i = {

  // Mod Matrix 2
  ' 1:88': [
    {
      'name': 'mod matrix 2 source 1',
      'range': [0, rangeValues$i.modMatrix.source.length - 1],
      'rangeValues': rangeValues$i.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 1:89': [
    {
      'name': 'mod matrix 2 source 2',
      'range': [0, rangeValues$i.modMatrix.source.length - 1],
      'rangeValues': rangeValues$i.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 1:91': [
    {
      'name': 'mod matrix 2 depth',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 64
    }
  ],
  ' 1:92': [
    {
      'name': 'mod matrix 2 destination',
      'range': [0, rangeValues$i.modMatrix.destination.length - 1],
      'rangeValues': rangeValues$i.modMatrix.destination,
      'defaultValue': 0
    }
  ]
};

var matrix2$1 = midiNRPNs$i;

const rangeValues$h = rangeValues$q.exports;
const midiNRPNs$h = {

  // Mod Matrix 3
  ' 1:93': [
    {
      'name': 'mod matrix 3 source 1',
      'range': [0, rangeValues$h.modMatrix.source.length - 1],
      'rangeValues': rangeValues$h.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 1:94': [
    {
      'name': 'mod matrix 3 source 2',
      'range': [0, rangeValues$h.modMatrix.source.length - 1],
      'rangeValues': rangeValues$h.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 1:96': [
    {
      'name': 'mod matrix 3 depth',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 64
    }
  ],
  ' 1:97': [
    {
      'name': 'mod matrix 3 destination',
      'range': [0, rangeValues$h.modMatrix.destination.length - 1],
      'rangeValues': rangeValues$h.modMatrix.destination,
      'defaultValue': 0
    }
  ]
};

var matrix3$1 = midiNRPNs$h;

const rangeValues$g = rangeValues$q.exports;
const midiNRPNs$g = {

  // Mod Matrix 4
  ' 1:98': [
    {
      'name': 'mod matrix 4 source 1',
      'range': [0, rangeValues$g.modMatrix.source.length - 1],
      'rangeValues': rangeValues$g.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 1:99': [
    {
      'name': 'mod matrix 4 source 2',
      'range': [0, rangeValues$g.modMatrix.source.length - 1],
      'rangeValues': rangeValues$g.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 1:101': [
    {
      'name': 'mod matrix 4 depth',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 64
    }
  ],
  ' 1:102': [
    {
      'name': 'mod matrix 4 destination',
      'range': [0, rangeValues$g.modMatrix.destination.length - 1],
      'rangeValues': rangeValues$g.modMatrix.destination,
      'defaultValue': 0
    }
  ]
};

var matrix4$1 = midiNRPNs$g;

const rangeValues$f = rangeValues$q.exports;
const midiNRPNs$f = {

  // Mod Matrix 5
  ' 1:103': [
    {
      'name': 'mod matrix 5 source 1',
      'range': [0, rangeValues$f.modMatrix.source.length - 1],
      'rangeValues': rangeValues$f.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 1:104': [
    {
      'name': 'mod matrix 5 source 2',
      'range': [0, rangeValues$f.modMatrix.source.length - 1],
      'rangeValues': rangeValues$f.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 1:106': [
    {
      'name': 'mod matrix 5 depth',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 64
    }
  ],
  ' 1:107': [
    {
      'name': 'mod matrix 5 destination',
      'range': [0, rangeValues$f.modMatrix.destination.length - 1],
      'rangeValues': rangeValues$f.modMatrix.destination,
      'defaultValue': 0
    }
  ]
};

var matrix5$1 = midiNRPNs$f;

const rangeValues$e = rangeValues$q.exports;
const midiNRPNs$e = {

  // Mod Matrix 6
  ' 1:108': [
    {
      'name': 'mod matrix 6 source 1',
      'range': [0, rangeValues$e.modMatrix.source.length - 1],
      'rangeValues': rangeValues$e.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 1:109': [
    {
      'name': 'mod matrix 6 source 2',
      'range': [0, rangeValues$e.modMatrix.source.length - 1],
      'rangeValues': rangeValues$e.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 1:111': [
    {
      'name': 'mod matrix 6 depth',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 64
    }
  ],
  ' 1:112': [
    {
      'name': 'mod matrix 6 destination',
      'range': [0, rangeValues$e.modMatrix.destination.length - 1],
      'rangeValues': rangeValues$e.modMatrix.destination,
      'defaultValue': 0
    }
  ]
};

var matrix6$1 = midiNRPNs$e;

const rangeValues$d = rangeValues$q.exports;
const midiNRPNs$d = {

  // Mod Matrix 7
  ' 1:113': [
    {
      'name': 'mod matrix 7 source 1',
      'range': [0, rangeValues$d.modMatrix.source.length - 1],
      'rangeValues': rangeValues$d.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 1:114': [
    {
      'name': 'mod matrix 7 source 2',
      'range': [0, rangeValues$d.modMatrix.source.length - 1],
      'rangeValues': rangeValues$d.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 1:116': [
    {
      'name': 'mod matrix 7 depth',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 64
    }
  ],
  ' 1:117': [
    {
      'name': 'mod matrix 7 destination',
      'range': [0, rangeValues$d.modMatrix.destination.length - 1],
      'rangeValues': rangeValues$d.modMatrix.destination,
      'defaultValue': 0
    }
  ]
};

var matrix7$1 = midiNRPNs$d;

const rangeValues$c = rangeValues$q.exports;
const midiNRPNs$c = {

  // Mod Matrix 8
  ' 1:118': [
    {
      'name': 'mod matrix 8 source 1',
      'range': [0, rangeValues$c.modMatrix.source.length - 1],
      'rangeValues': rangeValues$c.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 1:119': [
    {
      'name': 'mod matrix 8 source 2',
      'range': [0, rangeValues$c.modMatrix.source.length - 1],
      'rangeValues': rangeValues$c.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 1:121': [
    {
      'name': 'mod matrix 8 depth',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 64
    }
  ],
  ' 1:122': [
    {
      'name': 'mod matrix 8 destination',
      'range': [0, rangeValues$c.modMatrix.destination.length - 1],
      'rangeValues': rangeValues$c.modMatrix.destination,
      'defaultValue': 0
    }
  ]
};

var matrix8$1 = midiNRPNs$c;

const rangeValues$b = rangeValues$q.exports;const midiNRPNs$b = {

  // Mod Matrix 9
  ' 1:123': [
    {
      'name': 'mod matrix 9 source 1',
      'range': [0, rangeValues$b.modMatrix.source.length - 1],
      'rangeValues': rangeValues$b.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 1:124': [
    {
      'name': 'mod matrix 9 source 2',
      'range': [0, rangeValues$b.modMatrix.source.length - 1],
      'rangeValues': rangeValues$b.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 1:126': [
    {
      'name': 'mod matrix 9 depth',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 64
    }
  ],
  ' 1:127': [
    {
      'name': 'mod matrix 9 destination',
      'range': [0, rangeValues$b.modMatrix.destination.length - 1],
      'rangeValues': rangeValues$b.modMatrix.destination,
      'defaultValue': 0
    }
  ]
};

var matrix9$1 = midiNRPNs$b;

const rangeValues$a = rangeValues$q.exports;
const midiNRPNs$a = {

  // Mod Matrix 10
  ' 2:0': [
    {
      'name': 'mod matrix 10 source 1',
      'range': [0, rangeValues$a.modMatrix.source.length - 1],
      'rangeValues': rangeValues$a.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 2:1': [
    {
      'name': 'mod matrix 10 source 2',
      'range': [0, rangeValues$a.modMatrix.source.length - 1],
      'rangeValues': rangeValues$a.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 2:3': [
    {
      'name': 'mod matrix 10 depth',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 64
    }
  ],
  ' 2:4': [
    {
      'name': 'mod matrix 10 destination',
      'range': [0, rangeValues$a.modMatrix.destination.length - 1],
      'rangeValues': rangeValues$a.modMatrix.destination,
      'defaultValue': 0
    }
  ]
};

var matrix10$1 = midiNRPNs$a;

const rangeValues$9 = rangeValues$q.exports;
const midiNRPNs$9 = {

  // Mod Matrix 11
  ' 2:5': [
    {
      'name': 'mod matrix 11 source 1',
      'range': [0, rangeValues$9.modMatrix.source.length - 1],
      'rangeValues': rangeValues$9.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 2:6': [
    {
      'name': 'mod matrix 11 source 2',
      'range': [0, rangeValues$9.modMatrix.source.length - 1],
      'rangeValues': rangeValues$9.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 2:8': [
    {
      'name': 'mod matrix 11 depth',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 64
    }
  ],
  ' 2:9': [
    {
      'name': 'mod matrix 11 destination',
      'range': [0, rangeValues$9.modMatrix.destination.length - 1],
      'rangeValues': rangeValues$9.modMatrix.destination,
      'defaultValue': 0
    }
  ]
};

var matrix11$1 = midiNRPNs$9;

const rangeValues$8 = rangeValues$q.exports;
const midiNRPNs$8 = {

  // Mod Matrix 12
  ' 2:10': [
    {
      'name': 'mod matrix 12 source 1',
      'range': [0, rangeValues$8.modMatrix.source.length - 1],
      'rangeValues': rangeValues$8.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 2:11': [
    {
      'name': 'mod matrix 12 source 2',
      'range': [0, rangeValues$8.modMatrix.source.length - 1],
      'rangeValues': rangeValues$8.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 2:13': [
    {
      'name': 'mod matrix 12 depth',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 64
    }
  ],
  ' 2:14': [
    {
      'name': 'mod matrix 12 destination',
      'range': [0, rangeValues$8.modMatrix.destination.length - 1],
      'rangeValues': rangeValues$8.modMatrix.destination,
      'defaultValue': 0
    }
  ]
};

var matrix12$1 = midiNRPNs$8;

const rangeValues$7 = rangeValues$q.exports;
const midiNRPNs$7 = {

  // Mod Matrix 13
  ' 2:15': [
    {
      'name': 'mod matrix 13 source 1',
      'range': [0, rangeValues$7.modMatrix.source.length - 1],
      'rangeValues': rangeValues$7.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 2:16': [
    {
      'name': 'mod matrix 13 source 2',
      'range': [0, rangeValues$7.modMatrix.source.length - 1],
      'rangeValues': rangeValues$7.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 2:18': [
    {
      'name': 'mod matrix 13 depth',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 64
    }
  ],
  ' 2:19': [
    {
      'name': 'mod matrix 13 destination',
      'range': [0, rangeValues$7.modMatrix.destination.length - 1],
      'rangeValues': rangeValues$7.modMatrix.destination,
      'defaultValue': 0
    }
  ]
};

var matrix13$1 = midiNRPNs$7;

const rangeValues$6 = rangeValues$q.exports;const midiNRPNs$6 = {

  // Mod Matrix 14
  ' 2:20': [
    {
      'name': 'mod matrix 14 source 1',
      'range': [0, rangeValues$6.modMatrix.source.length - 1],
      'rangeValues': rangeValues$6.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 2:21': [
    {
      'name': 'mod matrix 14 source 2',
      'range': [0, rangeValues$6.modMatrix.source.length - 1],
      'rangeValues': rangeValues$6.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 2:23': [
    {
      'name': 'mod matrix 14 depth',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 64
    }
  ],
  ' 2:24': [
    {
      'name': 'mod matrix 14 destination',
      'range': [0, rangeValues$6.modMatrix.destination.length - 1],
      'rangeValues': rangeValues$6.modMatrix.destination,
      'defaultValue': 0
    }
  ]
};

var matrix14$1 = midiNRPNs$6;

const rangeValues$5 = rangeValues$q.exports;
const midiNRPNs$5 = {

  // Mod Matrix 15
  ' 2:25': [
    {
      'name': 'mod matrix 15 source 1',
      'range': [0, rangeValues$5.modMatrix.source.length - 1],
      'rangeValues': rangeValues$5.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 2:27': [
    {
      'name': 'mod matrix 15 source 2',
      'range': [0, rangeValues$5.modMatrix.source.length - 1],
      'rangeValues': rangeValues$5.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 2:28': [
    {
      'name': 'mod matrix 15 depth',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 64
    }
  ],
  ' 2:29': [
    {
      'name': 'mod matrix 15 destination',
      'range': [0, rangeValues$5.modMatrix.destination.length - 1],
      'rangeValues': rangeValues$5.modMatrix.destination,
      'defaultValue': 0
    }
  ]
};

var matrix15$1 = midiNRPNs$5;

const rangeValues$4 = rangeValues$q.exports;
const midiNRPNs$4 = {

  // Mod Matrix 16
  ' 2:30': [
    {
      'name': 'mod matrix 16 source 1',
      'range': [0, rangeValues$4.modMatrix.source.length - 1],
      'rangeValues': rangeValues$4.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 2:32': [
    {
      'name': 'mod matrix 16 source 2',
      'range': [0, rangeValues$4.modMatrix.source.length - 1],
      'rangeValues': rangeValues$4.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 2:33': [
    {
      'name': 'mod matrix 16 depth',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 64
    }
  ],
  ' 2:34': [
    {
      'name': 'mod matrix 16 destination',
      'range': [0, rangeValues$4.modMatrix.destination.length - 1],
      'rangeValues': rangeValues$4.modMatrix.destination,
      'defaultValue': 0
    }
  ]
};

var matrix16$1 = midiNRPNs$4;

const rangeValues$3 = rangeValues$q.exports;
const midiNRPNs$3 = {

  // Mod Matrix 17
  ' 2:35': [
    {
      'name': 'mod matrix 17 source 1',
      'range': [0, rangeValues$3.modMatrix.source.length - 1],
      'rangeValues': rangeValues$3.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 2:37': [
    {
      'name': 'mod matrix 17 source 2',
      'range': [0, rangeValues$3.modMatrix.source.length - 1],
      'rangeValues': rangeValues$3.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 2:38': [
    {
      'name': 'mod matrix 17 depth',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 64
    }
  ],
  ' 2:39': [
    {
      'name': 'mod matrix 17 destination',
      'range': [0, rangeValues$3.modMatrix.destination.length - 1],
      'rangeValues': rangeValues$3.modMatrix.destination,
      'defaultValue': 0
    }
  ]
};

var matrix17$1 = midiNRPNs$3;

const rangeValues$2 = rangeValues$q.exports;
const midiNRPNs$2 = {

  // Mod Matrix 18
  ' 2:40': [
    {
      'name': 'mod matrix 18 source 1',
      'range': [0, rangeValues$2.modMatrix.source.length - 1],
      'rangeValues': rangeValues$2.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 2:42': [
    {
      'name': 'mod matrix 18 source 2',
      'range': [0, rangeValues$2.modMatrix.source.length - 1],
      'rangeValues': rangeValues$2.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 2:43': [
    {
      'name': 'mod matrix 18 depth',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 64
    }
  ],
  ' 2:44': [
    {
      'name': 'mod matrix 18 destination',
      'range': [0, rangeValues$2.modMatrix.destination.length - 1],
      'rangeValues': rangeValues$2.modMatrix.destination,
      'defaultValue': 0
    }
  ]
};

var matrix18$1 = midiNRPNs$2;

const rangeValues$1 = rangeValues$q.exports;
const midiNRPNs$1 = {

  // Mod Matrix 19
  ' 2:45': [
    {
      'name': 'mod matrix 19 source 1',
      'range': [0, rangeValues$1.modMatrix.source.length - 1],
      'rangeValues': rangeValues$1.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 2:47': [
    {
      'name': 'mod matrix 19 source 2',
      'range': [0, rangeValues$1.modMatrix.source.length - 1],
      'rangeValues': rangeValues$1.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 2:48': [
    {
      'name': 'mod matrix 19 depth',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 64
    }
  ],
  ' 2:49': [
    {
      'name': 'mod matrix 19 destination',
      'range': [0, rangeValues$1.modMatrix.destination.length - 1],
      'rangeValues': rangeValues$1.modMatrix.destination,
      'defaultValue': 0
    }
  ]
};

var matrix19$1 = midiNRPNs$1;

const rangeValues = rangeValues$q.exports;
const midiNRPNs = {

  // Mod Matrix 20
  ' 2:50': [
    {
      'name': 'mod matrix 20 source 1',
      'range': [0, rangeValues.modMatrix.source.length - 1],
      'rangeValues': rangeValues.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 2:52': [
    {
      'name': 'mod matrix 20 source 2',
      'range': [0, rangeValues.modMatrix.source.length - 1],
      'rangeValues': rangeValues.modMatrix.source,
      'defaultValue': 0
    }
  ],
  ' 2:53': [
    {
      'name': 'mod matrix 20 depth',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 64
    }
  ],
  ' 2:54': [
    {
      'name': 'mod matrix 20 destination',
      'range': [0, rangeValues.modMatrix.destination.length - 1],
      'rangeValues': rangeValues.modMatrix.destination,
      'defaultValue': 0
    }
  ]
};

var matrix20$1 = midiNRPNs;

const matrix1 = matrix1$1;
const matrix2 = matrix2$1;
const matrix3 = matrix3$1;
const matrix4 = matrix4$1;
const matrix5 = matrix5$1;
const matrix6 = matrix6$1;
const matrix7 = matrix7$1;
const matrix8 = matrix8$1;
const matrix9 = matrix9$1;
const matrix10 = matrix10$1;
const matrix11 = matrix11$1;
const matrix12 = matrix12$1;
const matrix13 = matrix13$1;
const matrix14 = matrix14$1;
const matrix15 = matrix15$1;
const matrix16 = matrix16$1;
const matrix17 = matrix17$1;
const matrix18 = matrix18$1;
const matrix19 = matrix19$1;
const matrix20 = matrix20$1;

var mod$1 = {
  matrix1: matrix1,
  matrix2: matrix2,
  matrix3: matrix3,
  matrix4: matrix4,
  matrix5: matrix5,
  matrix6: matrix6,
  matrix7: matrix7,
  matrix8: matrix8,
  matrix9: matrix9,
  matrix10: matrix10,
  matrix11: matrix11,
  matrix12: matrix12,
  matrix13: matrix13,
  matrix14: matrix14,
  matrix15: matrix15,
  matrix16: matrix16,
  matrix17: matrix17,
  matrix18: matrix18,
  matrix19: matrix19,
  matrix20: matrix20,
};

var effects = effects$1;
var envelope = envelope$1;
var lfo = lfo$1;
var macro = macro$1;
var mod = mod$1;

var synth$1 = {
  midiNRPNs: {
    ...envelope,
    ...lfo,
    ...effects,
    ...macro.knob1,
    ...macro.knob2,
    ...macro.knob3,
    ...macro.knob4,
    ...macro.knob5,
    ...macro.knob6,
    ...macro.knob7,
    ...macro.knob8,
    ...mod.matrix1,
    ...mod.matrix2,
    ...mod.matrix3,
    ...mod.matrix4,
    ...mod.matrix5,
    ...mod.matrix6,
    ...mod.matrix7,
    ...mod.matrix8,
    ...mod.matrix9,
    ...mod.matrix10,
    ...mod.matrix11,
    ...mod.matrix12,
    ...mod.matrix13,
    ...mod.matrix14,
    ...mod.matrix15,
    ...mod.matrix16,
    ...mod.matrix17,
    ...mod.matrix18,
    ...mod.matrix19,
    ...mod.matrix20,
  },
  midiComponents: {
    'envelope': Object.keys(envelope),
    'lfo': Object.keys(lfo),
    'effects': Object.keys(effects),
    'macro knob 1': Object.keys(macro.knob1),
    'macro knob 2': Object.keys(macro.knob2),
    'macro knob 3': Object.keys(macro.knob3),
    'macro knob 4': Object.keys(macro.knob4),
    'macro knob 5': Object.keys(macro.knob5),
    'macro knob 6': Object.keys(macro.knob6),
    'macro knob 7': Object.keys(macro.knob7),
    'macro knob 8': Object.keys(macro.knob8),
    'mod matrix 1': Object.keys(mod.matrix1),
    'mod matrix 2': Object.keys(mod.matrix2),
    'mod matrix 3': Object.keys(mod.matrix3),
    'mod matrix 4': Object.keys(mod.matrix4),
    'mod matrix 5': Object.keys(mod.matrix5),
    'mod matrix 6': Object.keys(mod.matrix6),
    'mod matrix 7': Object.keys(mod.matrix7),
    'mod matrix 8': Object.keys(mod.matrix8),
    'mod matrix 9': Object.keys(mod.matrix9),
    'mod matrix 10': Object.keys(mod.matrix10),
    'mod matrix 11': Object.keys(mod.matrix11),
    'mod matrix 12': Object.keys(mod.matrix12),
    'mod matrix 13': Object.keys(mod.matrix13),
    'mod matrix 14': Object.keys(mod.matrix14),
    'mod matrix 15': Object.keys(mod.matrix15),
    'mod matrix 16': Object.keys(mod.matrix16),
    'mod matrix 17': Object.keys(mod.matrix17),
    'mod matrix 18': Object.keys(mod.matrix18),
    'mod matrix 19': Object.keys(mod.matrix19),
    'mod matrix 20': Object.keys(mod.matrix20),
  }
};

var session = session$1;
var synth = synth$1;

var nrpn = {
  midiNRPNs: {
    'synth': synth.midiNRPNs,
    'session': session.midiNRPNs
  },
  nrpnComponents: {
    'synth 1': synth.midiComponents,
    'synth 2': synth.midiComponents,
    'session': session.midiComponents
  }
};

let midiType;

function getMidiComponents(midiControllerType) {
  let components;
  let midiTypeValues;
  let defaultPatch = new Map();

  midiType = midiControllerType.toLowerCase();

  switch (midiType) {
    case 'cc':
      components = cc.ccComponents;
      midiTypeValues = cc.midiCCs;
      break;
    case 'nrpn':
      components = nrpn.nrpnComponents;
      midiTypeValues = nrpn.midiNRPNs;
      break;
    default:
      console.log('invalid Midi Component type');
      return false;
  }

  Object.keys(components).forEach(function (componentTypeSpecific) {
    const componentSettings = getComponentSettings(components, componentTypeSpecific, midiTypeValues);

    let componentValues = new Map();

    if (!componentSettings) {
      return false;
    }

    componentSettings.forEach(function (parameters, parameterType) {
      let componentArray = [];

      parameters.forEach(function (parameter) {
        let valueObject = {
          name: parameter.name,
          defaultValue: parameter.defaultValue,
          range: getMidiParameterRange(parameter)
        };

        valueObject[midiType] = parameter[midiType].trim();
        componentArray.push(valueObject);
      });

      componentValues.set(parameterType, componentArray);
    });

    defaultPatch.set(componentTypeSpecific, {
      midiChannel: cc.midiChannels[componentTypeSpecific],
      parameters: componentValues
    });
  });

  return defaultPatch;
}

function getComponentSettings(components, componentTypeSpecific, midiTypeValues) {
  const parameters = components[componentTypeSpecific];
  const componentTypeValues = parameters && getComponentTypeValues(componentTypeSpecific, midiTypeValues);

  let componentSettings = new Map();

  if (!componentTypeValues) {
    return componentSettings;
  }

  Object.keys(parameters).forEach(function (type) {
    componentSettings.set(type, getParameterSettings(parameters[type], componentTypeValues));
  });

  return componentSettings;
}

function getComponentTypeValues(component, midiTypeValues) {
  const midiTypeKeys = Object.keys(midiTypeValues);

  let componentType;

  midiTypeKeys.forEach(function (type) {
    if (component.toLowerCase().includes(type)) {
      componentType = type;
    }
  });

  return midiTypeValues[componentType];
}

function getParameterSettings(parameters, componentTypeValues) {
  var midiSettings = [];

  parameters.forEach(function (parameter) {
    let componentTypeValue = componentTypeValues[parameter];
    let values = Array.isArray(componentTypeValue) ? componentTypeValue : [componentTypeValue];

    values.forEach(function (value) {
      value[midiType] = parameter;
      midiSettings.push(value);
    });
  });

  return midiSettings;
}

function getMidiParameterRange(values) {
  const range = values && values.hasOwnProperty('range') ? values.range : false;
  const rangeValues = values && values.hasOwnProperty('rangeValues') ? values.rangeValues : false;

  return rangeValues ? getRangeValues(range, rangeValues) : getRange(range);
}

function getRangeValues(range, rangeValues) {
  const rangeStart = range[0];
  const rangeValuesStart = rangeValues[0];
  const rangeValuesType = typeof (rangeValues[0]);
  const rangeLength = range[1] - range[0];

  let values = {};

  for (var i = 0; i <= rangeLength; i++) {
    values[rangeStart + i] = rangeValuesType === 'number' ? rangeValuesStart + i : rangeValues[i];
  }

  return values;
}

function getRange(range) {
  const rangeValuesStart = range[0];
  const rangeLength = range[1];

  let values = {};

  for (var i = 0; i <= rangeLength; i++) {
    values[rangeValuesStart + i] = rangeValuesStart + i;
  }

  return values;
}

var midiCCs$h = cc.midiCCs;
var midiChannels = cc.midiChannels;
var midiNRPNs$z = nrpn.midiNRPNs;
export { getMidiComponents, midiCCs$h as midiCCs, midiChannels, midiNRPNs$z as midiNRPNs };
