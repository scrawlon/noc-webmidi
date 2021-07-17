
let inputID = false;
let outputID = false;
let midi = false;
let midiDevices = {};
let midiIn = {
  channel: 0,
  enabled: false
};

function initWebMidi() {
  if (navigator.requestMIDIAccess) {
    navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);
  } else {
    onMIDIFailure('Your browser does not support web midi. See here for a list of supported browsers: https://caniuse.com/?search=web%20midi');
  }
}

function onMIDISuccess(MIDIAccess) {
  midi = MIDIAccess;
  midiDevices.inputs = getMidiDevices(midi, 'inputs');
  midiDevices.outputs = getMidiDevices(midi, 'outputs');
  let errorMessage = 'unknown error';

  if (!midiDevices.inputs.size) {
    errorMessage = `
          Novation Circuit&trade; device not detected on MIDI in<br />
          Make sure your Circuit&trade; is connected and reload this page.
        `;
    printErrorMessage(errorMessage);
  } else {
    midiDevices.inputs.forEach(function (device) {
      if (device.name.toLowerCase() === 'circuit') {
        device.onmidimessage = onMIDIMessage;
        inputID = device.id;
      }
    });
  }

  if (!midiDevices.outputs.size) {
    errorMessage = `
          Novation Circuit&trade; device not detected on MIDI out<br />
          Make sure your Circuit&trade; is connected and reload this page.
        `;
    printErrorMessage(errorMessage);
  } else {
    midiDevices.outputs.forEach(function (device) {
      if (device.name.toLowerCase() === 'circuit') {
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

function printErrorMessage(message) {
  let messageHolder = document.getElementById('message-holder');
  messageHolder.innerHTML += `<p>${message}</p>`;
}

function onMIDIMessage(event) {
  if (midiIn && midiIn.enabled) {
    // let str = "";
    let eventMidiChannel = event.data && event.data[0] ? (event.data[0] & 0x0F) : false;
    let eventMidiCC = event.data && event.data[1] ? event.data[1] : false;
    let eventMidiCCValue = event.data && event.data[2] ? event.data[2] : false;

    if ((eventMidiChannel === midiIn.channel) && eventMidiCC && eventMidiCCValue) {
      let eventType = event.data[0] & 0xf0;

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
  printErrorMessage('Failed to get MIDI access - ' + msg);
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

function sendMidiEvent(selectedMidiChannel, selectedMidiCC, selectedMidiCCValue) {
  let selectedMidiChannelHex = selectedMidiChannel.toString(16);
  let output = false;

  if (midi && midi.outputs && outputID) {
    output = midi.outputs.get(outputID);
    output.send(["0xB" + selectedMidiChannelHex, selectedMidiCC, selectedMidiCCValue]);
  } else {
    console.log('Circuit MIDI device not connected!');
  }
}

export { initWebMidi, sendMidiEvent };