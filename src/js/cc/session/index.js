
const delay = require('./delay');
const masterFilter = require('./master-filter');
const mixer = require('./mixer');
const pan = require('./pan');
const reverb = require('./reverb');

module.exports = {
  midiCCs: {
    ...reverb,
    ...delay,
    ...masterFilter,
    ...mixer,
    ...pan
  },
  midiComponents: {
    'reverb': Object.keys(reverb),
    'delay': Object.keys(delay),
    'master filter': Object.keys(masterFilter),
    'mixer': Object.keys(mixer),
    'pan': Object.keys(pan)
  }
};
