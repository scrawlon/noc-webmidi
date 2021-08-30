
/*
  Functions to attach dynamic JS events to editor controls.
  Includes Patch Management controls and MIDI CC/NRPN controls.
*/

const { midiChannels, initWebMidi, sendWebMidiEvent } = nocWebMidi;

let midiPatch = {};

function initEditorEvents(selectors) {
  initMidi(selectors);
  initParamterChangeEvents(selectors)
  // initSelectEvents();
  // initSliderEvents();
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
        const { target } = event;
        const parameter = target.closest('.parameter');
        const parameterValue = target.value;
        const { parameterType, parameterNumber } = parameter && parameter.dataset;
        const midiChannel = component.querySelector('.midi-channel') && component.querySelector('.midi-channel').value;

        if (!parameter || !parameterValue || !parameterType || !parameterNumber || !midiChannel) {
          return false;
        }

        sendWebMidiEvent(parameterType, parameterNumber, parameterValue, midiChannel);
      });
    });
  });


  console.log('initParamterChangeEvents');
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
  // console.log({ selectedMidiChannel });

  markControlChange(selectedMidiChannel, selectedMidiCC, control);
  // updateMidiPatch(selectedMidiChannel, selectedMidiCC, selectedMidiCCValue);
  sendWebMidiEvent(selectedMidiChannel, selectedMidiCC, selectedMidiCCValue);
}

// function getComponentMidiCC(control) {
//   const componentValue = control.closest('.component-value');

//   return componentValue.dataset.midiCc;
// }

// function getComponentMidiChannel(control) {
//   const componentSection = control.closest('.component-section');
//   const componentMidiChannel = componentSection.querySelector('[id$="-midi-channel"');

//   return componentMidiChannel.value;
// }

function markControlChange(midiChannel, midiCC, control) {
  if (!isChanged(midiChannel, midiCC)) {
    control.parentNode.className += " midi-patch-value";
  }
}

function isChanged(midiChannel, midiCC) {
  // console.log({ midiPatch, midiChannel, midiCC });
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