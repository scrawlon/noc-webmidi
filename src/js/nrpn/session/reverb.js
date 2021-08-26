
const midiNRPNs = {

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

module.exports = {
  midiNRPNs: midiNRPNs
}
