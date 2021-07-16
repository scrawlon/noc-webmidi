
/*
  Functions to render the HTML for the editor.
  Includes Patch Management controls and MIDI CC controls.
*/


const midiCCs = nocWebMidi.midiCCs;
const midiComponents = nocWebMidi.midiComponents;
const midiChannels = nocWebMidi.midiChannels;

function renderEditor() {
  const editorWrapper = document.getElementById("circuit-midi-editor");
  let editorHtml = getEditorHtml();

  // Add MIDI editor HTML to editorWrapper element.
  editorWrapper.innerHTML = editorHtml;
}

function getEditorHtml() {
  let editorHtml = '';

  // Loop through all MIDI Components and render HTML for each
  midiComponents.forEach(function (component, componentType) {
    const componentSectionHtml = getComponentSectionHtml(component, componentType);

    editorHtml += componentSectionHtml;
  });

  return editorHtml;
}

function getComponentSectionHtml(component, componentType) {
  const { parameters } = component;
  const componentTypeSlug = componentType.toLowerCase().replace(' ', '-');
  const componentCCType = getCompenentCCType(componentType);
  const componentHtml = getComponentHtml(parameters);
  const midiChannel = midiChannels[componentType];

  // HTML for each MIDI component section.
  return `
    <div id='${componentTypeSlug}' class='component-section' data-midi-channel='${midiChannel}' data-midi-cc-type='${componentCCType}'> 
      <h2>${componentType}</h2>
      <button type='button' class='activate-midi-in' data-midi-enabled=''>
        MIDI IN
      </button> 
      <button type='button' class='randomizer' data-component-section='${componentTypeSlug}'>
        randomize
      </button>
      <div class='button-bar'> 
        <label for='${componentTypeSlug}-patch-select'>Patch Select: </label>
        <select id='${componentTypeSlug}-patch-select'>
          <option value='default'>Default Patch</option>
        </select>
        <button type='button' class='patch-load' data-component-section='${componentType}'>load</button>
        <button type='button' class='patch-save' data-component-section='${componentType}'>save</button>
        <button type='button' class='patch-delete' data-component-section='${componentType}'>delete</button>
        <button type='button' class='patch-export' data-component-section='${componentType}'>export</button>
        <button type='button' class='patch-import' data-component-section='${componentType}'>import</button>
      </div>
      ${componentHtml}
    </div>
  `;
}

function getCompenentCCType(componentType) {
  const midiCCTypes = Object.keys(midiCCs);
  let componentCCType = '';

  midiCCTypes.forEach(function (type) {
    if (componentType.toLowerCase().includes(type)) {
      componentCCType = type;
    }
  });

  return componentCCType;
}

function getComponentHtml(component) {
  let componentHtml = '';

  // Loop through all MIDI CC parameter controls for each MIDI Component and generate HTML
  component.forEach(function (parameters, parameterName) {
    let parameterHtml = '';

    parameters.forEach(function (parameter) {
      const { cc, name, range } = parameter;
      const nameSlug = name.toLowerCase().replace(' ', '-');
      const componentDescription = getComponentDescription(range);
      const componentInput = getComponentInput(parameter);

      parameterHtml += `
          <div class='component-value' data-midi-cc='${cc}'> 
            <label for='${nameSlug}'>${name}</label>: ${componentDescription} <br />
            ${componentInput}
          </div> 
        `;
    });

    componentHtml += `
        <div class='component'>
          <h3>${parameterName}</h3>
          ${parameterHtml}
        </div>
      `;
  });

  return componentHtml;
}

function getComponentDescription(range) {
  const rangeKeys = Object.keys(range);
  const isSlider = Number.isInteger(parseInt(range[rangeKeys[0]]));

  // Generate text description of min/max values for slider components.
  return isSlider ? `(${range[rangeKeys[0]]} - ${range[rangeKeys[rangeKeys.length - 1]]})` : '';
}

function getComponentInput(parameter) {
  const { name, defaultValue, range } = parameter;
  const rangeKeys = Object.keys(range);
  const nameSlug = name.toLowerCase().replace(' ', '-');
  const isSlider = Number.isInteger(parseInt(range[rangeKeys[0]]));

  return isSlider
    ? getComponentSliderInput(nameSlug, defaultValue, rangeKeys)
    : getComponentSelectInput(nameSlug, defaultValue, range, rangeKeys);
}

function getComponentSliderInput(nameSlug, defaultValue, rangeKeys) {
  const rangeMin = rangeKeys[0];
  const rangeMax = rangeKeys.pop();

  // Generate HTML for Slider element.
  return `<input name='${nameSlug}' type='range' min='${rangeMin}' max='${rangeMax}' value='${defaultValue}' />`;
}

function getComponentSelectInput(nameSlug, defaultValue, range, rangeKeys) {
  const componentValues = rangeKeys.map(function (key) {
    const selected = defaultValue == key ? "selected" : "";

    // Generate HTML sor Select element.
    return `
      <option value='${key}' ${selected}>
        ${range[key]}
      </option>
    `;
  });

  return `
    <select name='${nameSlug}'>
      ${componentValues}
    </select>
  `;
}

export { renderEditor };