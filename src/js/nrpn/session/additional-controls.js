
const midiNRPNs = {

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

module.exports = {
  midiNRPNs: midiNRPNs
}