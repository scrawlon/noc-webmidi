
/*
  Functions to render the HTML for the editor.
  Includes Patch Management controls and MIDI CC controls.
*/


const midiCCs = nocWebMidi.midiCCs;
const midiComponents = {
  cc: nocWebMidi.getMidiComponents('cc'),
  nrpn: nocWebMidi.getMidiComponents('nrpn')
};
// const midiComponents = {
//   cc: nocWebMidi.getMidiComponents('cc'),
//   nrpn: nocWebMidi.getMidiComponents('nrpn')
// };
// const midiCCComponents = nocWebMidi.getMidiComponents('cc');
// const midiNRPNComponents = nocWebMidi.getMidiComponents('nrpn');
const midiChannels = nocWebMidi.midiChannels;

function renderEditor() {
  const editorWrapper = document.getElementById('circuit-midi-editor');
  const editorHtml = getEditorHtml();

  // Add MIDI editor HTML to editorWrapper element.
  editorWrapper.innerHTML = editorHtml;
}

function getEditorHtml() {
  let webMidiControlHtml = getWebMidiControlHtml();
  let editorHtml = webMidiControlHtml;

  // console.log({ midiComponents });

  // Loop through all MIDI Components and render HTML for each
  midiComponents.cc.forEach(function (component, componentType) {
    const nrpnComponent = getComponentByType(midiComponents.nrpn, componentType);
    // const nrpnComponent = null;
    // const nrpnComponent = midiComponents.nrpn.get(componentType) ? midiComponents.nrpn.get(componentType) : new Map();
    const componentSectionHtml = getComponentSectionHtml(component, componentType, nrpnComponent);

    console.log({ component, nrpnComponent });

    editorHtml += componentSectionHtml;
  });

  return editorHtml;
}

function getComponentByType(components, componentType) {
  let match = {};

  components.forEach(function (component, type) {
    if (type === componentType) {
      match = component;
    }
  });

  return match;
}

function getWebMidiControlHtml() {
  return `
    <div class='web-midi-control'>
      <div id="web-midi-connection-status"></div>
      <button type='button' id='web-midi-connect-device'>click here to connect MIDI device</button>
    </div>
  `;
}

function getComponentSectionHtml(component, componentType, nrpnComponent) {
  const { parameters: ccComponentParameters } = component;
  // const nrpnComponentParameters = null;
  const { parameters: nrpnComponentParameters } = nrpnComponent;
  const componentTypeSlug = componentType.toLowerCase().replace(' ', '-');
  const componentCCType = getComponentType(componentType);
  const componentHtml = getComponentHtml(ccComponentParameters, nrpnComponentParameters);
  const componentMidiChannel = midiChannels[componentType];
  const componentMidiChannelOptions = getComponentMidiChannelOptions(componentMidiChannel);

  // HTML for each MIDI component section.
  return `
    <div id='${componentTypeSlug}' class='component-section' data-midi-cc-type='${componentCCType}'> 
      <h2>${componentType}</h2>
      <div class='midi-controls'>
        <label for='${componentTypeSlug}-midi-channel'>Midi Channel</label> 
        <select id='${componentTypeSlug}-midi-channel' name='${componentTypeSlug}-midi-channel' class='component-midi-channel'>
          ${componentMidiChannelOptions}
        </select>      
        <button type='button' class='activate-midi-in' data-midi-enabled=''>
          MIDI IN
        </button> 
        <button type='button' class='randomizer' data-component-section='${componentTypeSlug}'>
          randomize
        </button>
      </div>
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

function getComponentType(componentType) {
  const componenTypes = Object.keys(midiCCs);
  let componentCCType = '';

  componenTypes.forEach(function (type) {
    if (componentType.toLowerCase().includes(type)) {
      componentCCType = type;
    }
  });

  return componentCCType;
}

function getComponentHtml(ccComponentParameters, nrpnComponentParameters) {
  let componentHtml = '';

  // Loop through all MIDI CC parameter controls for each MIDI Component and generate HTML
  ccComponentParameters.forEach(function (ccParameters, parameterName) {
    const nrpnParameters = nrpnComponentParameters ? nrpnComponentParameters.get(parameterName) : [];
    const ccParameterHtml = getParameterHtml(ccParameters);
    const nrpnParameterHtml = getParameterHtml(nrpnParameters);

    componentHtml += `
        <div class='component' data-component-type='${parameterName}'>
          <h3>${parameterName}</h3>
          ${ccParameterHtml}
          ${nrpnParameterHtml}
        </div>
      `;
  });

  return componentHtml;
}

function getParameterHtml(parameters) {
  let parameterHtml = '';

  if (!parameters) {
    return parameterHtml;
  }

  parameters.forEach(function (parameter) {
    const { name, range, cc, nrpn } = parameter;
    const nameSlug = name && name.toLowerCase().replace(' ', '-');
    const description = range && getParameterDescription(range);
    const inputField = getParameterInput(parameter);
    const controllerValue = cc ? `data-midi-cc='${cc}'` : `data-midi-nrpn='${nrpn}'`;

    parameterHtml += `
      <div class='component-value' ${controllerValue}> 
        <label for='${nameSlug}'>${name}</label>: ${description} <br />
        ${inputField}
      </div> 
    `;
  });

  return parameterHtml;
}

function getComponentMidiChannelOptions(midiChannel) {
  const midiChannelOptions = [...Array(16).keys()].map(function (channel) {
    const selected = midiChannel == channel ? 'selected' : '';

    return `
      <option value='${channel}' ${selected}>
        ${channel + 1}
      </option>
    `;
  });

  return midiChannelOptions.join('\n');
}

function getParameterDescription(range) {
  const rangeKeys = Object.keys(range);
  const isSlider = Number.isInteger(parseInt(range[rangeKeys[0]]));

  // Generate text description of min/max values for slider components.
  return isSlider ? `(${range[rangeKeys[0]]} - ${range[rangeKeys[rangeKeys.length - 1]]})` : '';
}

function getParameterInput(parameter) {
  const { name, defaultValue, range } = parameter;
  const rangeKeys = range && Object.keys(range);
  const nameSlug = name && name.toLowerCase().replace(' ', '-');
  const isSlider = rangeKeys && Number.isInteger(parseInt(range[rangeKeys[0]]));

  return isSlider
    ? getParameterSliderInput(nameSlug, defaultValue, rangeKeys)
    : getParameterSelectInput(nameSlug, defaultValue, range, rangeKeys);
}

function getParameterSliderInput(nameSlug, defaultValue, rangeKeys) {
  const rangeMin = rangeKeys[0];
  const rangeMax = rangeKeys.pop();

  // Generate HTML for Slider element.
  return `<input name='${nameSlug}' type='range' min='${rangeMin}' max='${rangeMax}' value='${defaultValue}' />`;
}

function getParameterSelectInput(nameSlug, defaultValue, range, rangeKeys) {
  const values = rangeKeys.map(function (key) {
    const selected = defaultValue == key ? 'selected' : '';

    // Generate HTML for Select options.
    return `
      <option value='${key}' ${selected}>
        ${range[key]}
      </option>
    `;
  });

  // Generate HTML for Select element.
  return `
    <select name='${nameSlug}'>
      ${values}
    </select>
  `;
}

export { renderEditor };