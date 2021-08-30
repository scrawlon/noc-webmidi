
const rangeValues = require('../../range-values');

const midiNRPNs = {
  ' 0:104': [
    {
      'name': 'EQ	bass frequency',
      'range': [0, 127],
      'defaultValue': 64
    }
  ],
  ' 0:105': [
    {
      'name': 'EQ	bass level',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 64
    }
  ],
  ' 0:106': [
    {
      'name': 'EQ	mid frequency',
      'range': [0, 127],
      'defaultValue': 64
    }
  ],
  ' 0:107': [
    {
      'name': 'EQ	mid level',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 64
    }
  ],
  ' 0:108': [
    {
      'name': 'EQ	treble frequency',
      'range': [0, 127],
      'defaultValue': 64
    }
  ],
  ' 0:109': [
    {
      'name': 'EQ	treble level',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 64
    }
  ],
  ' 1:0': [
    {
      'name': 'distortion type',
      'range': [0, rangeValues.distortion.driveType.length - 1],
      'rangeValues': rangeValues.distortion.driveType,
      'defaultValue': 0
    }
  ],
  ' 1:1': [
    {
      'name': 'distortion compenstation',
      'range': [0, 127],
      'defaultValue': 100
    }
  ],
  ' 1:24': [
    {
      'name': 'chorus type',
      'range': [0, 1],
      'rangeValues': ['Phaser', 'Chorus'],
      'defaultValue': 1
    }
  ],
  ' 1:25': [
    {
      'name': 'chorus rate',
      'range': [0, 127],
      'defaultValue': 84
    }
  ],
  ' 1:26': [
    {
      'name': 'chorus rate sync',
      'range': [0, 35],
      'defaultValue': 0
    }
  ],
  ' 1:27': [
    {
      'name': 'chorus feedback',
      'range': [0, 127],
      'rangeValues': [-64, 63],
      'defaultValue': 74
    }
  ],
  ' 1:28': [
    {
      'name': 'chorus mod depth',
      'range': [0, 127],
      'defaultValue': 64
    }
  ],
  ' 1:29': [
    {
      'name': 'chorus delay',
      'range': [0, 127],
      'defaultValue': 64
    }
  ],
};

module.exports = midiNRPNs;
