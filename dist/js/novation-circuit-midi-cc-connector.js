(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
var allMidiCCs = require('./novation-circuit-midi-ccs.js');

(function() {
  var midiCCs = allMidiCCs.midiCCs;

  module.exports = {
    getCircuitMidiCC: function (midiChannel, midiCCNumber) {
      var circuitCCValues = false;

      switch( midiChannel ) {
        case 0:
        case 1:
          circuitCCValues = midiCCs.synth[midiCCNumber];
          break;
        case 9:
          circuitCCValues = midiCCs.drum[midiCCNumber];
          break;
        case 15:
          circuitCCValues = midiCCs.session[midiCCNumber];
          break;
      }

      return circuitCCValues;
    }

  }
})();

},{"./novation-circuit-midi-ccs.js":4}],2:[function(require,module,exports){
(function() {
  var midiCCs = {},
    midiComponents = {};

  midiCCs = { // Circuit Drums: midi channel 10
    '8': {
      'name': 'drum 1 patch select',
      'range': [0,63],
      'default': 0
    },
    '12': {
      'name': 'drum 1 level',
      'range': [0,127],
      'rangeValues': [-63,64],
      'default': 0
    },
    '14': {
      'name': 'drum 1 pitch',
      'range': [0,127],
      'default': 64
    },
    '15': {
      'name': 'drum 1 decay',
      'range': [0,127],
      'default': 0
    },
    '16': {
      'name': 'drum 1 distortion',
      'range': [0,127],
      'default': 0
    },
    '17': {
      'name': 'drum 1 EQ',
      'range': [0,127],
      'rangeValues': [-63,64],
      'default': 64
    },
    '18': {
      'name': 'drum 2 patch select',
      'range': [0,63],
      'default': 0
    },
    '23': {
      'name': 'drum 2 level',
      'range': [0,127],
      'rangeValues': [-63,64],
      'default': 0
    },
    '34': {
      'name': 'drum 2 pitch',
      'range': [0,127],
      'default': 64
    },
    '40': {
      'name': 'drum 2 decay',
      'range': [0,127],
      'default': 0
    },
    '42': {
      'name': 'drum 2 distortion',
      'range': [0,127],
      'default': 0
    },
    '43': {
      'name': 'drum 2 EQ',
      'range': [0,127],
      'rangeValues': [-63,64],
      'default': 64
    },
    '44': {
      'name': 'drum 3 patch select',
      'range': [0,63],
      'default': 0
    },
    '45': {
      'name': 'drum 3 level',
      'range': [0,127],
      'rangeValues': [-63,64],
      'default': 0
    },
    '46': {
      'name': 'drum 3 pitch',
      'range': [0,127],
      'default': 64
    },
    '47': {
      'name': 'drum 3 decay',
      'range': [0,127],
      'default': 0
    },
    '48': {
      'name': 'drum 3 distortion',
      'range': [0,127],
      'default': 0
    },
    '49': {
      'name': 'drum 3 EQ',
      'range': [0,127],
      'rangeValues': [-63,64],
      'default': 64
    },
    '50': {
      'name': 'drum 3 patch select',
      'range': [0,63],
      'default': 0
    },
    '53': {
      'name': 'drum 3 level',
      'range': [0,127],
      'rangeValues': [-63,64],
      'default': 0
    },
    '55': {
      'name': 'drum 3 pitch',
      'range': [0,127],
      'default': 64
    },
    '57': {
      'name': 'drum 3 decay',
      'range': [0,127],
      'default': 0
    },
    '61': {
      'name': 'drum 3 distortion',
      'range': [0,127],
      'default': 0
    },
    '76': {
      'name': 'drum 3 EQ',
      'range': [0,127],
      'rangeValues': [-63,64],
      'default': 64
    }
  };

  midiComponents = [
    {'settings': ['8','12','14','15','16','17']},
    {'settings': ['18','23','34','40','42','43']},
    {'settings': ['44','45','46','47','48','49']},
    {'settings': ['50','53','55','57','61','76']}
  ];

  module.exports = {
    midiCCs: midiCCs,
    midiComponents: midiComponents
  };
})();

},{}],3:[function(require,module,exports){
var helpers = require('./helpers.js'),
  circuitMidi = require('./novation-circuit-midi.js');

circuitMidiApp = (function() {
  var midiCCs = circuitMidi.midiCCs,
    midiComponents = circuitMidi.midiComponents,
    midiDrumCCs = circuitMidi.midiDrumCCs,
    midiChannels = circuitMidi.midiChannels,
    getCircuitMidiCC = helpers.getCircuitMidiCC;

  return {
    midiCCs: midiCCs,
    midiComponents: midiComponents,
    midiDrumCCs: midiDrumCCs,
    midiChannels: midiChannels,
    getCircuitMidiCC: getCircuitMidiCC
  }
})();

},{"./helpers.js":1,"./novation-circuit-midi.js":5}],4:[function(require,module,exports){
var synth = require('./novation-circuit-synth.js'),
  drum = require('./novation-circuit-drums.js'),
  session = require('./novation-circuit-session.js');

(function() {
  var midiCCs = {
    'synth': synth.midiCCs,
    'drum': drum.midiCCs,
    'session': session.midiCCs
  };

  module.exports = {
    midiCCs: midiCCs
  }
})();

},{"./novation-circuit-drums.js":2,"./novation-circuit-session.js":6,"./novation-circuit-synth.js":7}],5:[function(require,module,exports){
var helpers = require('./helpers.js'),
  synth = require('./novation-circuit-synth.js'),
  drum = require('./novation-circuit-drums.js'),
  session = require('./novation-circuit-session.js'),
  allMidiCCs = require('./novation-circuit-midi-ccs.js');

(function() {
  var midiCCs = allMidiCCs.midiCCs,
    midiComponents = new Map(),
    midiDrumCCs = getDrumComponents(drum.midiComponents),
    midiChannels = {
      '0': 'synth 1',
      '1': 'synth 2',
      '9': 'drum',
      '15': 'session'
    };

  midiComponents.set('synth 1', getComponentSettings(0,synth.midiComponents));
  midiComponents.set('synth 2', getComponentSettings(1,synth.midiComponents));
  midiComponents.set('drum 1', getComponentSettings(9,drum.midiComponents[0]));
  midiComponents.set('drum 2', getComponentSettings(9,drum.midiComponents[1]));
  midiComponents.set('drum 3', getComponentSettings(9,drum.midiComponents[2]));
  midiComponents.set('drum 4', getComponentSettings(9,drum.midiComponents[3]));
  midiComponents.set('session', getComponentSettings(15,session.midiComponents));

  function getDrumComponents(drumComponents) {
    var drumComponentsArray = [];
    drumComponents.forEach(function(component) {
      drumComponentsArray.push(component.settings);
    });

    return drumComponentsArray;
  }

  function getComponentSettings(midiChannel, midiCCObject) {
    var midiCCObjectKeys = Object.keys(midiCCObject),
      componentSettings = new Map();

    midiCCObjectKeys.forEach(function(key) {
      componentSettings.set( key, getMidiSettings(midiChannel, midiCCObject[key]) );
    });

    return componentSettings;
  }

  function getMidiSettings(midiChannel, midiCCArray) {
    var midiCCArrayLength = midiCCArray.length,
      midiSettings = [];

    for (var i=0; i<midiCCArrayLength; i++) {
      var thisSetting = helpers.getCircuitMidiCC(midiChannel, midiCCArray[i]);

      midiSettings[midiCCArray[i]] = thisSetting;
    }

    return midiSettings;
  }

  function getMidiComponents(components) {
    var defaultPatch = new Map();

    components.forEach(function(value, key) {
      var componentValues = new Map();

      value.forEach(function(v, k) {
        var midiParameters = Object.keys(v),
          componentArray = [],
          componentType = "";

        midiParameters.forEach(function(parameter) {
          if (!componentType) {
            componentType = k;
          }

          componentArray.push({
            'cc': parameter,
            'name': getMidiParameterName(v[parameter]),
            'default': getMidiParameterDefault(v[parameter]),
            'range': getMidiParameterRange(v[parameter])
          });
        });

        componentValues.set( componentType, componentArray );
        defaultPatch.set( key, componentValues );
      });
    });

    return defaultPatch;
  }

  function getMidiParameterName(parameter) {
    return parameter['name'] ? parameter['name'] : false;
  }

  function getMidiParameterDefault(parameter) {
    return parameter['default'] ? parameter['default'] : false;
  }

  function getMidiParameterRange(parameter) {
    var range = parameter['range'] ? parameter['range'] : false,
      rangeValues = parameter['rangeValues'] ? parameter['rangeValues'] : false;

    if (rangeValues) {
      return getRangeValues(range, rangeValues);
    } else {
      return getRange(range);
    }
  }

  function getRangeValues(range, rangeValues) {
    var values = {},
      rangeStart = range[0],
      rangeValuesStart = rangeValues[0],
      rangeValuesType = typeof(rangeValues[0]),
      rangeLength = range[1] - range[0];

    for(var i=0; i<rangeLength+1; i++) {
      values[rangeStart+i] = rangeValuesType === 'number' ? rangeValuesStart+i : rangeValues[i];
    }

    return values;
  }

  function getRange(range) {
    var values = {},
      rangeValuesStart = range[0]
      rangeLength = range[1];

    for(var i=0; i<rangeLength+1; i++) {
      values[rangeValuesStart+i] = rangeValuesStart+i;
    }

    return values;
  }

  module.exports = {
    midiCCs: midiCCs,
    midiComponents: getMidiComponents(midiComponents),
    midiDrumCCs: midiDrumCCs,
    midiChannels: midiChannels
  };

})();

},{"./helpers.js":1,"./novation-circuit-drums.js":2,"./novation-circuit-midi-ccs.js":4,"./novation-circuit-session.js":6,"./novation-circuit-synth.js":7}],6:[function(require,module,exports){
(function() {
  var midiCCs = {},
    midiComponents = {};

  midiCCs = { // Circuit Session Control: midi channel 16
    // Section: Reverb
    '88': {
      'name': 'synth 1 send level',
      'range': [0,127],
      'default': 0
    },
    '89': {
      'name': 'synth 2 send level',
      'range': [0,127],
      'default': 0
    },
    '90': {
      'name': 'drum 1 send level',
      'range': [0,127],
      'default': 0
    },
    '106': {
      'name': 'drum 2 send level',
      'range': [0,127],
      'default': 0
    },
    '109': {
      'name': 'drum 3 send level',
      'range': [0,127],
      'default': 0
    },
    '110': {
      'name': 'drum 4 send level',
      'range': [0,127],
      'default': 0
    },
    // Section: Delay
    '111': {
      'name': 'synth 1 send level',
      'range': [0,127],
      'default': 0
    },
    '112': {
      'name': 'synth 2 send level',
      'range': [0,127],
      'default': 0
    },
    '113': {
      'name': 'drum 1 send level',
      'range': [0,127],
      'default': 0
    },
    '114': {
      'name': 'drum 2 send level',
      'range': [0,127],
      'default': 0
    },
    '115': {
      'name': 'drum 3 send level',
      'range': [0,127],
      'default': 0
    },
    '116': {
      'name': 'drum 4 send level',
      'range': [0,127],
      'default': 0
    },
    // Section: Master Filter
    '74': {
      'name': 'frequency',
      'range': [0,127],
      'rangeValues': [-63,64],
      'rangeConditions': { // 0-63=Low Pass, 64=OFF, 65-127=High Pass
        '<64': 'Low Pass',
        '=0': 'OFF',
        '<64': 'High Pass'
      },
      'default': 64
    },
    '71': {
      'name': 'resonance',
      'range': [0,127],
      'default': 30
    },
    // Section: Mixer
    '12': {
      'name': 'synth 1 level',
      'range': [0,127],
      'default': 100
    },
    '14': {
      'name': 'synth 2 level',
      'range': [0,127],
      'default': 100
    }
  };

  midiComponents =  {
    'reverb': ['88','89','90','106','109','110'],
    'delay': ['111','112','113','114','115','116'],
    'master filter': ['74','71'],
    'mixer': ['12','14']
  };

  module.exports = {
    midiCCs: midiCCs,
    midiComponents: midiComponents
  };
})();

},{}],7:[function(require,module,exports){
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

},{}]},{},[3]);
