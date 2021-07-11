
var effects = require('./effects');
var envelope = require('./envelope');
var filter = require('./filter');
var mixer = require('./mixer');
var macroKnob = require('./macro-knob');
var oscillator = require('./oscillator');
var voice = require('./voice');

module.exports = {
  midiCCs: {
    ...voice.midiCCs,
    ...oscillator.midiCCs,
    ...mixer.midiCCs,
    ...filter.midiCCs,
    ...envelope.midiCCs,
    ...effects.midiCCs,
    ...macroKnob.midiCCs
  },
  midiComponents: {
    voice: voice.midiComponents,
    osc1: oscillator.midiComponents.osc1,
    osc2: oscillator.midiComponents.osc2,
    mixer: mixer.midiComponents,
    filter: filter.midiComponents,
    envelope: envelope.midiComponents,
    effects: effects.midiComponents,
    macroKnob: macroKnob.midiComponents
  }
};
