
/*
  Functions to attach dynamic JS events to editor controls.
  Includes Patch Management controls and MIDI CC controls.
*/

const midiCCs = nocWebMidi.midiCCs;
const midiComponents = nocWebMidi.midiComponents;

let midiChannels = {};
let midiPatch = {};

function initEditorEvents() {
  initSelectEvents();
  initSliderEvents();
}

function initSelectEvents() {
  let selects = document.getElementsByTagName("select");

  for (let i = 0; i < selects.length; i++) {
    if (!selects[i].id.endsWith('-patch-select')) {
      selects[i].addEventListener('change', function () {
        let selectedOption = this.options[this.selectedIndex];

        handlePatchChanges(selectedOption, this);
      });
    }
  }
}

function initSliderEvents() {
  let ranges = document.getElementsByTagName("input");

  for (var i = 0; i < ranges.length; i++) {
    if (ranges[i].type === 'range') {
      ranges[i].addEventListener('change', function () {
        handlePatchChanges(this, this);
      });
    }
  }
}

function handlePatchChanges(changedOption, control) {
  let selectedMidiChannel = parseInt(changedOption.dataset.midiChannel);
  let selectedMidiCC = changedOption.dataset.midiCc;
  let selectedMidiCCValue = changedOption.value;

  console.log({ changedOption, control });
  console.log({ parent: control.parentElement.closest('component-section') });

  markControlChange(selectedMidiChannel, selectedMidiCC, control);
  updateMidiPatch(selectedMidiChannel, selectedMidiCC, selectedMidiCCValue);
  sendMidiEvent(selectedMidiChannel, selectedMidiCC, selectedMidiCCValue);
}

function sendMidiEvent(selectedMidiChannel, selectedMidiCC, selectedMidiCCValue) {
  let selectedMidiChannelHex = selectedMidiChannel.toString(16);
  let output = false;

  if (midi && midi.outputs && outputID) {
    output = midi.outputs.get(outputID);
    output.send(["0xB" + selectedMidiChannelHex, selectedMidiCC, selectedMidiCCValue]);
  }
}

function markControlChange(midiChannel, midiCC, control) {
  if (!isChanged(midiChannel, midiCC)) {
    control.parentNode.className += " midi-patch-value";
  }
}

function isChanged(midiChannel, midiCC) {
  console.log({ midiPatch, midiChannel, midiCC });
  if (!midiPatch[midiChannels[midiChannel]]
    || (midiPatch[midiChannels[midiChannel]]
      && !midiPatch[midiChannels[midiChannel]][midiCC])) {

    return false;
  }

  return true;
}

function updateMidiPatch(midiChannel, midiCCNumber, midiCCValue) {
  // let circuitMidiCCValues = nocWebMidi.getCircuitMidiCC(parseInt(midiChannel), parseInt(midiCCNumber));
  // let patchType = midiChannels[midiChannel];

  if (!midiPatch[patchType]) {
    midiPatch[patchType] = {};
  }

  midiPatch[patchType][midiCCNumber] = {
    name: circuitMidiCCValues.name,
    value: midiCCValue
  };
}

export { initEditorEvents };