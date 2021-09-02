
import { handlePatchChanges } from './patch-events.js';

const { midiChannels, initWebMidi, sendWebMidiEvent } = nocWebMidi;

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
        const { parameterType, parameterNumber } = parameter && parameter.dataset;
        const parameterOutput = event.target.nextElementSibling
        const midiChannel = component.querySelector('.midi-channel') && component.querySelector('.midi-channel').value;

        sendWebMidiEvent(parameterType, parameterNumber, parameterValue, midiChannel);

        if (parameterOutput) {
          parameterOutput.value = parameterValue;
        }
      });

      section.addEventListener('change', function (event) {
        const parameter = event.target.closest('.parameter');
        const parameterValue = event.target.value;
        const { parameterName } = parameter && parameter.dataset;

        handlePatchChanges(component, parameterName, parameterValue);
      });
    });
  });
}

export { initEditorEvents };