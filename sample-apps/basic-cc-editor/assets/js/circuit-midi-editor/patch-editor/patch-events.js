

let midiPatch = {};

function handlePatchChanges(component, parameterName, parameterValue) {
  markControlChange(component, parameterName);
  updateMidiPatch(component, parameterName, parameterValue)
}

function markControlChange(component, parameterName) {
  const control = component.querySelector(`[data-parameter-name='${parameterName}']`);

  if (control) {
    control.classList.add('changed');
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

function updateMidiPatch(component, parameterName, parameterValue) {
  const componentName = component.dataset.component;
  const control = component.querySelector(`[data-parameter-name='${parameterName}']`);
  const section = control.closest('.section');
  const sectionName = section && section.dataset.section;

  console.log({ section, sectionName, parameterValue });

  if (!componentName || !sectionName || !parameterName) {
    return false;
  }

  if (!midiPatch[componentName]) {
    midiPatch[componentName] = {};
  }

  if (!midiPatch[componentName][sectionName]) {
    midiPatch[componentName][sectionName] = {};
  }

  midiPatch[componentName][sectionName][parameterName] = parameterValue;

  console.log({ midiPatch });
}

export { handlePatchChanges };