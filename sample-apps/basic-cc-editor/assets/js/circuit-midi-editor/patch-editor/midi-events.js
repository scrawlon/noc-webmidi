
/*
  Functions to attach dynamic JS events to editor controls.
  Includes Patch Management controls and MIDI CC controls.
*/

import { initWebMidi, sendMidiEvent } from './web-midi.js';

const midiCCs = nocWebMidi.midiCCs;
const midiComponents = nocWebMidi.midiComponents;

let midiChannels = {};
let midiPatch = {};

function initEditorEvents() {
  initWebMidi();
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
  const selectedMidiCC = getComponentMidiCC(control);
  const selectedMidiCCValue = changedOption.value;
  const selectedMidiChannel = getComponentMidiChannel(control);

  // console.log({ changedOption, control });
  // console.log({ parent: control.closest('.component-section') });
  console.log({ selectedMidiChannel });

  markControlChange(selectedMidiChannel, selectedMidiCC, control);
  // updateMidiPatch(selectedMidiChannel, selectedMidiCC, selectedMidiCCValue);
  sendMidiEvent(selectedMidiChannel, selectedMidiCC, selectedMidiCCValue);
}

function getComponentMidiCC(control) {
  const componentValue = control.closest('.component-value');

  return componentValue.dataset.midiCc;
}

function getComponentMidiChannel(control) {
  const componentSection = control.closest('.component-section');
  const componentMidiChannel = componentSection.querySelector('[id$="-midi-channel"');

  return componentMidiChannel.value;
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