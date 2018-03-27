module.exports = {
  getCircuitMidiCC: function (midiChannel, midiCCNumber) {
    var allMidiCCs = require('./novation-circuit-midi-ccs'),
      midiCCs = allMidiCCs.midiCCs,
      circuitCCValues = false;

    switch( midiChannel ) {
      case 0:
      case 1:
        circuitCCValues = midiCCs.synth[midiCCNumber];
        break;
      case 9:
        circuitCCValues = midiCCs.drum[midiCCNumber];
        break;
      case 15:
        circuitCCValues = midiCCs.session[midiCCNumber];
        break;
    }

    return circuitCCValues;
  }

}
