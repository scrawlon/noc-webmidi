
const midiNRPNs = {

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

module.exports = {
  midiNRPNs: midiNRPNs
}