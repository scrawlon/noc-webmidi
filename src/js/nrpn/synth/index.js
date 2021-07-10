
var effects = require('./effects');
var envelope = require('./envelope');
var lfo = require('./lfo');
var macroKnob = require('./macro-knob');
var modMatrix = require('./mod-matrix');

module.exports = {
  midiNRPNs: {
    envelope: envelope.midiNRPNs,
    lfo: lfo.midiNRPNs,
    effects: effects.midiNRPNs,
    modMatrix: modMatrix.midiNRPNs,
    macroKnob: macroKnob.midiNRPNs
  },
  midiComponents: {
    envelope: envelope.midiComponents,
    lfo: lfo.midiComponents,
    effects: effects.midiComponents,
    modMatrix: modMatrix.midiComponents,
    macroKnob: macroKnob.midiComponents
  }
};
