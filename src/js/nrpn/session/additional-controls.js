
var midiNRPNs = {};
var midiComponents = {};

midiNRPNs = {

  // Additional Controls
  '1:21': [
    {
      'name': 'FX Bypass',
      'range': [0, 1],
      'rangeValues': ['OFF', 'ON'],
      'default': 0
    }
  ]
};

midiComponents = ['1:21'];

module.exports = {
  midiNRPNs: midiNRPNs,
  midiComponents: midiComponents
}