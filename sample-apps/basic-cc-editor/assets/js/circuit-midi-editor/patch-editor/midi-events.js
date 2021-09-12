
import { selectors } from './config.js';
import { handlePatchChanges } from './patch-events.js';

const { midiChannels, initWebMidi, sendWebMidiEvent } = nocWebMidi;

function initMidiEvents() {
  const { midiConnectionWrapper, editorWrapper } = selectors;

  if (midiConnectionWrapper && editorWrapper) {
    initWebMidi({ midiConnectionWrapper });
    initParameterChangeEvents(editorWrapper)
  }
}

function initParameterChangeEvents(editorWrapper) {
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
        const midiChannelInput = component.querySelector('.midi-channel');
        const midiChannel = midiChannelInput && midiChannelInput.value;

        sendWebMidiEvent(parameterType, parameterNumber, parameterValue, midiChannel);

        if (parameterOutput) {
          parameterOutput.value = parameterValue;
        }
      });

      section.addEventListener('change', function (event) {
        const parameter = event.target.closest('.parameter');
        const parameterValue = event.target.value;
        const { parameterName } = parameter && parameter.dataset;

        handlePatchChanges(component, section, parameterName, parameterValue);
      });
    });
  });
}

export { initMidiEvents };