const drums = require('./drums');
const session = require('./session');
const synth = require('./synth');

module.exports = {
  midiCCs: {
    'synth': synth.midiCCs,
    'drums': drums.midiCCs,
    'session': session.midiCCs
  },
  midiComponents: {
    'synth 1': synth.midiComponents,
    'synth 2': synth.midiComponents,
    'drums 1': drums.midiComponents['1'],
    'drums 2': drums.midiComponents['2'],
    'drums 3': drums.midiComponents['3'],
    'drums 4': drums.midiComponents['4'],
    'session': session.midiComponents
  },
  midiChannels: {
    'synth 1': 0,
    'synth 2': 1,
    'drums 1': 9,
    'drums 2': 9,
    'drums 3': 9,
    'drums 4': 9,
    'session': 15
  }
};