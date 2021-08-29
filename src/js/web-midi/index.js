
let midi;
let midiDevices = {
  inputs: [],
  outputs: []
};
let midiIn = {
  channel: 0,
  enabled: false
};

let midiConnectionStatusBox;

function initWebMidi(webMidiConfig) {
  const { midiConnectionStatusSelector } = webMidiConfig;

  if (midiConnectionStatusSelector) {
    midiConnectionStatusBox = document.querySelector(midiConnectionStatusSelector);
  }

  if (!navigator.requestMIDIAccess) {
    // Web Midi not supported, or user denied access
    onMIDIFailure('Your browser does not support web midi. See here for a list of supported browsers: https://caniuse.com/?search=web%20midi');

    return false;
  }

  navigator.requestMIDIAccess()
    .then(function (access) {
      midi = access;
      updateMidiStatus(midi);

      midi.onstatechange = function (e) {
        updateMidiStatus(midi);

        // Print information about the (dis)connected MIDI controller
        console.log(e.port.name, e.port.manufacturer, e.port.state);
      };
    });
}

function updateMidiStatus(midi) {
  const { inputs, outputs } = midi;

  let midiInText = '<span class="error">x</span>';
  let midiOutText = '<span class="error">x</span>';

  // Get lists of available MIDI controllers
  midiDevices.inputs = inputs;
  midiDevices.outputs = outputs;

  if (midiDevices.inputs.size) {
    midiInText = '&#10003;'
  }

  if (midiDevices.outputs.size) {
    midiOutText = '&#10003;'
  }

  midiDevices.inputs.forEach((input) => {
    console.log(input.name); /* inherited property from MIDIPort */

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

function sendWebMidiEvent(selectedMidiChannel, selectedMidiCC, selectedMidiCCValue) {
  let selectedMidiChannelHex = parseInt(selectedMidiChannel).toString(16);
  let output = false;

  if (midi && midi.outputs && outputID) {
    output = midi.outputs.get(outputID);

    if (output) {
      output.send(["0xB" + selectedMidiChannelHex, selectedMidiCC, selectedMidiCCValue]);
    }
  }
}

export { initWebMidi, sendWebMidiEvent };