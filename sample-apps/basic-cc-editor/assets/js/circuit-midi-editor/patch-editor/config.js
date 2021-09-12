
const selectors = {
  midiConnectionWrapper: '#web-midi-connection-status',
  editorWrapper: '#circuit-midi-editor'
}

const midiComponents = {
  cc: nocWebMidi.getMidiComponents('cc'),
  nrpn: nocWebMidi.getMidiComponents('nrpn')
};

function getAllComponentTypes() {
  const midiControllerTypes = Object.keys(midiComponents);

  let allComponentTypes = [];

  midiControllerTypes.forEach(function (controllerType) {
    const componentTypes = midiComponents[controllerType].keys();

    [...componentTypes].forEach(function (componentType) {
      if (!allComponentTypes.includes(componentType)) {
        allComponentTypes.push(componentType);
      }
    });
  });

  return allComponentTypes;
}

function getAllComponents(componentType) {
  const midiControllerTypes = Object.keys(midiComponents);

  let allComponents = [];

  midiControllerTypes.forEach(function (controllerType) {
    const components = midiComponents[controllerType].get(componentType);

    if (components) {
      allComponents.push(components);
    }
  });

  return allComponents;
}

export { selectors, midiComponents, getAllComponentTypes, getAllComponents };