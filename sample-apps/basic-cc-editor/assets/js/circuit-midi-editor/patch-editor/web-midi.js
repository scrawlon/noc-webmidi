
let inputID = false;
let outputID = false;
let midi = false;
let midiDevices = {};
let midiIn = {
  channel: 0,
  enabled: false
};
let midiStatus = {
  input: false,
  output: false
};

function initWebMidi() {
  if (navigator.requestMIDIAccess) {
    navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);
    initWebMidiEvents();
  } else {
    // Web Midi not supported, or user denied access
    onMIDIFailure('Your browser does not support web midi. See here for a list of supported browsers: https://caniuse.com/?search=web%20midi');
  }
}

function initWebMidiEvents() {
  const webMidiConnectButton = document.querySelector('#web-midi-connect-device');

  webMidiConnectButton.addEventListener('click', function () {
    if (!midiStatus.input || !midiStatus.output) {
      initWebMidi();
    }
  });
}

function onMIDISuccess(MIDIAccess) {
  midi = MIDIAccess;
  midiDevices.inputs = getMidiDevices(midi, 'inputs');
  midiDevices.outputs = getMidiDevices(midi, 'outputs');

  if (!midiDevices.inputs.size) {
    midiStatus.input = false;
    updateMidiStatus();
  } else {
    midiDevices.inputs.forEach(function (device) {
      if (device.name.toLowerCase() === 'circuit') {
        midiStatus.input = true;
        updateMidiStatus();
        device.onmidimessage = onMIDIMessage;
        inputID = device.id;
      }
    });
  }

  if (!midiDevices.outputs.size) {
    midiStatus.output = false;
    updateMidiStatus();
  } else {
    midiDevices.outputs.forEach(function (device) {
      if (device.name.toLowerCase() === 'circuit') {
        midiStatus.output = true;
        updateMidiStatus();
        outputID = device.id;
      }
    });
  }
}

function getMidiDevices(midi, connectionType) {
  if (midi && midi[connectionType] && midi.size !== 0) {
    return midi[connectionType];
  }
}

// function printErrorMessage(message) {
//   let messageHolder = document.getElementById('web-midi-connection-status');
//   messageHolder.innerHTML += `<p>${message}</p>`;
// }

function updateMidiStatus() {
  const messageHolder = document.getElementById('web-midi-connection-status');
  const midiInText = midiStatus.input ? '&#10003;' : '<span class="error">x</span>';
  const midiOutText = midiStatus.output ? '&#10003;' : '<span class="error">x</span>';
  const midiConnectButton = document.querySelector('#web-midi-connect-device');

  messageHolder.innerHTML = `
    MIDI IN: ( ${midiInText} ) MIDI OUT: ( ${midiOutText} ) <br />
  `;

  if (!midiStatus.input || !midiStatus.output) {
    midiConnectButton.style.visibility = 'visible';
  } else {
    midiConnectButton.style.visibility = 'hidden';
  }
}

function onMIDIMessage(event) {
  if (midiIn && midiIn.enabled) {
    // let str = "";
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

function sendMiddleC(midi, portID) {
  let noteOnMessage = [0x90, 60, 63];
  let output = midi.outputs.get(portID);
  output.send(noteOnMessage);
  output.send([0x80, 60, 0x40], window.performance.now() + 1000.0);
}

function onMIDIFailure(msg) {
  console.log(`midi failure: ${Message} `);
}

function getCircuitDevices(midiDevices) {
  let circuits = [];

  midiDevices.forEach(function (device) {
    if (device.name.toLowerCase() === 'circuit') {
      circuits.push(device);
    }
  });

  return circuits;
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

  // Always check/update MIDI status
  initWebMidi();
}

export { initWebMidi, sendWebMidiEvent };