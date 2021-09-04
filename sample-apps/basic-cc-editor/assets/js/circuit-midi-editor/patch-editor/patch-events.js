

let midiPatch = {};

function initPatchEvents() {
  console.log('init patch events');

  setDefaultPatch();
}

function setDefaultPatch() {
  console.log('set default patch');
}

function handlePatchChanges(component, section, parameterName, parameterValue) {
  const componentName = component.dataset.componentName;
  const sectionName = section.dataset.sectionName;
  const control = section.querySelector(`[data-parameter-name='${parameterName}']`);
  const changed = isChanged(componentName, sectionName, parameterName, parameterValue);

  if (componentName && control && changed) {
    updateMidiPatch(control, componentName, sectionName, parameterName, parameterValue)
  }
}

function isChanged(componentName, sectionName, parameterName, parameterValue) {
  if (!midiPatch[componentName]
    || !midiPatch[componentName][sectionName]
    || !midiPatch[componentName][sectionName][parameterName]
    || midiPatch[componentName][sectionName][parameterName] !== parameterValue) {
    return true;
  }

  return false;
}

function updateMidiPatch(control, componentName, sectionName, parameterName, parameterValue) {

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

export { initPatchEvents, handlePatchChanges };