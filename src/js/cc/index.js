const drums = require('./drums');
const session = require('./session');
const synth = require('./synth');

module.exports = {
  midiCCs: {
    synth: synth.midiCCs,
    // drums: drums.midiCCs,
    session: session.midiCCs
  },
  midiComponents: {
    synth: synth.midiComponents,
    // drums: drums.midiComponents,
    session: session.midiComponents
  }
};