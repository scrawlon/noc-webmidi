
import { handlePatchChanges } from './patch-events.js';

const { midiChannels, initWebMidi, sendWebMidiEvent } = nocWebMidi;

let midiPatch = {};

function initEditorEvents(selectors) {
  initMidi(selectors);
  initParamterChangeEvents(selectors)
}

function initMidi(selectors) {
  const { midiConnectionStatus } = selectors;
  const config = {
    midiConnectionStatusSelector: midiConnectionStatus
  };

  initWebMidi(config);
}

function initParamterChangeEvents(selectors) {
  const { editorWrapper } = selectors;
  const editorWrapperBox = editorWrapper && document.querySelector(editorWrapper);
  const components = editorWrapperBox && editorWrapperBox.querySelectorAll('.component');

  if (!components) {
    return false;
  }

  components.forEach(function (component) {
    const sections = component.querySelectorAll('.section');

    sections.forEach(function (section) {
      section.addEventListener('input', function (event) {
        const parameter = event.target.closest('.parameter');
        const parameterValue = event.target.value;
        const { parameterType, parameterNumber, parameterName } = parameter && parameter.dataset;
        const midiChannel = component.querySelector('.midi-channel') && component.querySelector('.midi-channel').value;

        sendWebMidiEvent(parameterType, parameterNumber, parameterValue, midiChannel);
        handlePatchChanges(component, parameterName);
      });
    });
  });
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