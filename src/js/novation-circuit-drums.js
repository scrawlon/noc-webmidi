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
