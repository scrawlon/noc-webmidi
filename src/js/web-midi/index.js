
let midi;
// let midiDevices = {
//   inputs: [],
//   outputs: []
// };
let midiIn = {
  channel: 0,
  enabled: false
};

let midiConnectionStatusBox;

function initWebMidi(config) {
  if (!navigator.requestMIDIAccess) {
    // Web Midi not supported, or user denied access
    onMIDIFailure('Your browser does not support web midi. See here for a list of supported browsers: https://caniuse.com/?search=web%20midi');

    return false;
  }

  navigator.requestMIDIAccess({ sysex: true })
    .then(function (access) {
      midi = access;
      updateMidiStatus(midi, config);

      midi.onstatechange = function (e) {
        updateMidiStatus(midi, config);

        // Print information about the (dis)connected MIDI controller
        console.log(e.port.name, e.port.manufacturer, e.port.state);
      };
    });
}

function updateMidiStatus(midi, config) {
  const { inputs, outputs } = midi;
  const { midiConnectionStatus } = config;
  const midiConnectionStatusBox = midiConnectionStatus && document.querySelector(midiConnectionStatus);

  let midiInText = inputs && inputs.size ? '&#10003;' : '<span class="error">x</span>';
  let midiOutText = outputs && outputs.size ? '&#10003;' : '<span class="error">x</span>';

  inputs.forEach((input) => {
    input.onmidimessage = function (message) {
      console.log(message.data);
    }
  });

  if (midiConnectionStatusBox) {
    midiConnectionStatusBox.innerHTML = `
      MIDI IN: ( ${midiInText} ) | MIDI OUT: ( ${midiOutText} ) <br />
    `;
  }
}

function onMIDIFailure(msg) {
  alert(`midi failure: ${msg}`);
  console.log(`midi failure: ${msg}`);
}

function onMIDIMessage(event) {
  if (midiIn && midiIn.enabled) {
    const eventMidiChannel = event.data && event.data[0] ? (event.data[0] & 0x0F) : false;
    const eventMidiCC = event.data && event.data[1] ? event.data[1] : false;
    const eventMidiCCValue = event.data && event.data[2] ? event.data[2] : false;

    if ((eventMidiChannel === midiIn.channel) && eventMidiCC && eventMidiCCValue) {
      const eventType = event.data[0] & 0xf0;

      if (eventType === 0xB0) {
        updateSliderValue(eventMidiChannel, eventMidiCC, eventMidiCCValue);
        updateMidiPatch(eventMidiChannel, eventMidiCC, eventMidiCCValue);
      }
    }
  }
}

function sendWebMidiEvent(parameterType = null, parameterNumber = null, parameterValue = null, midiChannel = null) {
  const [msb, lsb] = parameterNumber && parameterNumber.split(':') || [];

  if (!parameterType || !parameterNumber || !parameterValue || !midiChannel) {
    return false;
  }

  midi.outputs.forEach(function (output) {
    if (output.name.toLowerCase() === 'circuit') {
      if (parameterType === 'cc') {
        console.log({ parameterType, output, midiChannel });
        output.send([0xB0 + (midiChannel - 1), msb, parameterValue]);
      } else if (parameterType === 'nrpn') {
        console.log({ parameterType, output, midiChannel });
        /* MSB */
        output.send([0xB0 + (midiChannel - 1), 99, msb]);

        /* LSB */
        output.send([0xB0 + (midiChannel - 1), 98, lsb]);

        /* value */
        output.send([0xB0 + (midiChannel - 1), 6, parameterValue])
      }
    }
  });
}

// function sendWebMidiEvent(selectedMidiChannel, selectedMidiCC, selectedMidiCCValue) {
//   let selectedMidiChannelHex = parseInt(selectedMidiChannel).toString(16);
//   let output = false;

//   if (midi && midi.outputs && outputID) {
//     output = midi.outputs.get(outputID);

//     if (output) {
//       output.send(["0xB" + selectedMidiChannelHex, selectedMidiCC, selectedMidiCCValue]);
//     }
//   }
// }

export { initWebMidi, sendWebMidiEvent };