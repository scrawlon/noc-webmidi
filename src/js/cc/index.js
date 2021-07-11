const drums = require('./drums');
const session = require('./session');
const synth = require('./synth');

module.exports = {
  midiCCs: {
    ...synth.midiCCs,
    ...drums.midiCCs,
    ...session.midiCCs
  },
  midiComponents: {
    'synth 1': synth.midiComponents,
    'synth 2': synth.midiComponents,
    'drum 1': drums.midiComponents['1'],
    'drum 2': drums.midiComponents['2'],
    'drum 3': drums.midiComponents['3'],
    'drum 4': drums.midiComponents['4'],
    'session': session.midiComponents
  }
};