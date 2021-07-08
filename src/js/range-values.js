(function () {
  "use strict";

  var distortion;
  var filter;
  var modMatrix;
  var lfo;
  var osc;

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
    ]
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

  module.exports = {
    distortion: distortion,
    filter: filter,
    lfo: lfo,
    modMatrix: modMatrix,
    osc: osc
  };
})();