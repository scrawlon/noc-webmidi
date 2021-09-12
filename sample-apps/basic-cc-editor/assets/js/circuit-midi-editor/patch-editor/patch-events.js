
import { selectors, getAllComponentTypes, getAllComponents } from './config.js';

let midiPatch = {};

function initPatchEvents() {
  const { editorWrapper } = selectors;
  console.log('init patch events');

  setDefaultPatch();
  initPatchButtonEvents(editorWrapper);
}

function initPatchButtonEvents(editorWrapper) {
  const editorWrapperBox = document.querySelector(editorWrapper);

  console.log('init patch button events');
}

function savePatch() {
  /* should test for localStorage */
  if (Object.keys(midiPatch).length) {
    console.log('save patch');
  }
}

function loadPatch() {
  console.log('load patch');
}

function deletePatch() {
  console.log('delete patch');
}

function exportPatch() {
  console.log('export patch');
}

function importPatch() {
  console.log('import patch');
}

function setDefaultPatch() {
  const allComponentTypes = getAllComponentTypes();
  console.log({ allComponentTypes });

  let defaultPatch = {};

  allComponentTypes.forEach(function (componentType) {
    const components = getAllComponents(componentType);

    components.forEach(function (sections) {
      const { parameters: section = [] } = sections || {};

      section.forEach(function (parameters, sectionName) {
        parameters.forEach(function (parameter) {
          const { name: parameterName, defaultValue: parameterValue } = parameter;

          if (!defaultPatch[componentType]) {
            defaultPatch[componentType] = {};
          }

          if (!defaultPatch[componentType][sectionName]) {
            defaultPatch[componentType][sectionName] = {};
          }

          defaultPatch[componentType][sectionName][parameterName] = parameterValue;
        });
      });
    });
  });
  console.log('set default patch');
  console.log({ defaultPatch });

  savePatch();
}

function handlePatchChanges(component, section, parameterName, parameterValue) {
  const componentType = component.dataset.componentType;
  const sectionName = section.dataset.sectionName;
  const control = section.querySelector(`[data-parameter-name='${parameterName}']`);
  const changed = isChanged(componentType, sectionName, parameterName, parameterValue);

  if (componentType && control && changed) {
    updateMidiPatch(control, componentType, sectionName, parameterName, parameterValue)
  }
}

function isChanged(componentType, sectionName, parameterName, parameterValue) {
  if (!midiPatch[componentType]
    || !midiPatch[componentType][sectionName]
    || !midiPatch[componentType][sectionName][parameterName]
    || midiPatch[componentType][sectionName][parameterName] !== parameterValue) {
    return true;
  }

  return false;
}

function updateMidiPatch(control, componentType, sectionName, parameterName, parameterValue) {

  if (!componentType || !sectionName || !parameterName) {
    return false;
  }

  if (!midiPatch[componentType]) {
    midiPatch[componentType] = {};
  }

  if (!midiPatch[componentType][sectionName]) {
    midiPatch[componentType][sectionName] = {};
  }

  midiPatch[componentType][sectionName][parameterName] = parameterValue;
  markControlChange(control);

  console.log({ midiPatch });
}

function markControlChange(control) {
  control.classList.add('changed');
}

export { initPatchEvents, handlePatchChanges };