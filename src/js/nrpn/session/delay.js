
const midiNRPNs = {

  // Delay
  '1:6': [
    {
      'name': 'time',
      'range': [0, 127],
      'default': 64
    }
  ],
  '1:7': [
    {
      'name': 'time sync',
      'range': [0, 35],
      'default': 20
    }
  ],
  '1:8': [
    {
      'name': 'feedback',
      'range': [0, 127],
      'default': 64
    }
  ],
  '1:9': [
    {
      'name': 'width',
      'range': [0, 127],
      'default': 127
    }
  ],
  '1:10': [
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
      'default': 4
    }
  ],
  '1:11': [
    {
      'name': 'slew rate',
      'range': [0, 127],
      'default': 5
    }
  ]
};

module.exports = {
  midiNRPNs: midiNRPNs
}