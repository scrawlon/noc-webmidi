
const effects = require('./effects');
const envelope = require('./envelope');
const filter = require('./filter');
const mixer = require('./mixer');
const macroKnobs = require('./macro-knobs');
const osc1 = require('./osc1');
const osc2 = require('./osc2');
const voice = require('./voice');

module.exports = {
  midiCCs: {
    ...voice,
    ...osc1,
    ...osc2,
    ...mixer,
    ...filter,
    ...envelope,
    ...effects,
    ...macroKnobs
  },
  midiComponents: {
    'voice': Object.keys(voice),
    'osc 1': Object.keys(osc1),
    'osc 2': Object.keys(osc2),
    'mixer': Object.keys(mixer),
    'filter': Object.keys(filter),
    'envelope': Object.keys(envelope),
    'effects': Object.keys(effects),
    'macro knobs': Object.keys(macroKnobs)
  }
};
