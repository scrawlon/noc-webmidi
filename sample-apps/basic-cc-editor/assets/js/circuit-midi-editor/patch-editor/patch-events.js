

let midiPatch = {};

function handlePatchChanges(component, parameterName, parameterValue) {
  const componentName = component.dataset.componentName;
  const control = component.querySelector(`[data-parameter-name='${parameterName}']`);
  const changed = isChanged(componentName, parameterName, parameterValue);

  if (componentName && control && changed) {
    updateMidiPatch(control, componentName, parameterName, parameterValue)
  }
}

function isChanged(componentName, parameterName, parameterValue) {
  if (!midiPatch[componentName]
    || !midiPatch[componentName][parameterName]
    || midiPatch[componentName][parameterName] !== parameterValue) {
    return true;
  }

  return false;
}

function updateMidiPatch(control, componentName, parameterName, parameterValue) {
  const section = control.closest('.section');
  const sectionName = section && section.dataset.sectionName;

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
  markControlChange(control);

  console.log({ midiPatch });
}

function markControlChange(control) {
  control.classList.add('changed');
}

export { handlePatchChanges };