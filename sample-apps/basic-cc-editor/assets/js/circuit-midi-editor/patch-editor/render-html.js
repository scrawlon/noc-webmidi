
const midiComponents = {
  cc: nocWebMidi.getMidiComponents('cc'),
  nrpn: nocWebMidi.getMidiComponents('nrpn')
};
const midiChannels = nocWebMidi.midiChannels;

function renderEditor(selectors) {
  const { editorWrapper } = selectors;
  const editorWrapperBox = document.querySelector(editorWrapper);
  const ccComponentTypes = midiComponents.cc.keys();
  const nrpnComponentTypes = midiComponents.nrpn.keys();
  const allComponentTypes = [...new Set([...ccComponentTypes, ...nrpnComponentTypes])];

  if (!editorWrapperBox || !allComponentTypes.length) {
    return false;
  }

  let editorHtml = '';

  allComponentTypes.forEach(function (componentType) {
    editorHtml += getComponentSectionHtml(componentType);
  });

  editorWrapperBox.innerHTML = editorHtml;
}

function getComponentSectionHtml(componentType) {
  const componentTypeSlug = componentType.toLowerCase().replace(' ', '-');
  const componentHtml = getComponentHtml(componentType);
  const componentMidiChannelOptions = getComponentMidiChannelOptions(componentType);

  // HTML for each MIDI component component.
  return `
    <div id='${componentTypeSlug}' class='component' data-component-name='${componentType}'> 
      <h2>${componentType}</h2>
      <div class='midi-controls'>
        <label for='${componentTypeSlug}-midi-channel'>Midi Channel</label> 
        <select id='${componentTypeSlug}-midi-channel' name='${componentTypeSlug}-midi-channel' class='midi-channel'>
          ${componentMidiChannelOptions}
        </select>      
        <button type='button' class='activate-midi-in' data-midi-enabled=''>
          MIDI IN
        </button> 
        <button type='button' class='randomizer' data-component-name='${componentType}'>
          randomize
        </button>
      </div>
      <div class='button-bar'> 
        <label for='${componentTypeSlug}-patch-select'>Patch Select: </label>
        <select id='${componentTypeSlug}-patch-select'>
          <option value='default'>Default Patch</option>
        </select>
        <button type='button' class='patch-load' data-component-name='${componentType}'>load</button>
        <button type='button' class='patch-save' data-component-name='${componentType}'>save</button>
        <button type='button' class='patch-delete' data-component-name='${componentType}'>delete</button>
        <button type='button' class='patch-export' data-component-name='${componentType}'>export</button>
        <button type='button' class='patch-import' data-component-name='${componentType}'>import</button>
      </div>
      ${componentHtml}
    </div>
  `;
}

function getComponentHtml(componentType) {
  const ccComponents = midiComponents.cc.get(componentType);
  const nrpnComponents = midiComponents.nrpn.get(componentType);
  const components = [ccComponents, nrpnComponents];

  let componentSectionsHtmlArrays = {};
  let componentHtml = '';

  components.forEach(function (sections) {
    const { parameters = [] } = sections || {};

    parameters.forEach(function (parameter, parameterName) {
      const parameterHtml = getParameterHtml(parameter);

      if (!(parameterName in componentSectionsHtmlArrays)) {
        componentSectionsHtmlArrays[parameterName] = [];
      }

      componentSectionsHtmlArrays[parameterName].push(parameterHtml);
    });
  });

  Object.keys(componentSectionsHtmlArrays).forEach(function (parameterName) {
    componentHtml += `
      <div class='section' data-section-name='${parameterName}'>
        <h3>${parameterName}</h3>
        ${componentSectionsHtmlArrays[parameterName].join('')}
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
    // const description = range && getParameterDescription(range);
    const inputField = getParameterInput(parameter);

    let parameterDataset = `data-parameter-name='${parameter.name}'`;

    if (cc) {
      parameterDataset += `data-parameter-type='cc' data-parameter-number='${cc}'`;
    }

    if (nrpn) {
      parameterDataset += `data-parameter-type='nrpn' data-parameter-number='${nrpn}'`;
    }

    parameterHtml += `
      <div class='parameter' ${parameterDataset}> 
        <label for='${nameSlug}'>${name}</label><br />
        ${inputField}
      </div> 
    `;
  });

  return parameterHtml;
}

function getComponentMidiChannelOptions(componentType) {
  const midiChannel = midiChannels[componentType];

  const midiChannelOptions = [...Array(16).keys()].map(function (channel) {
    const selected = midiChannel == channel + 1 ? 'selected' : '';

    return `
      <option value='${channel + 1}' ${selected}>
        ${channel + 1}
      </option>
    `;
  });

  return midiChannelOptions.join('\n');
}

// function getParameterDescription(range) {
//   const rangeKeys = Object.keys(range);
//   const isSlider = Number.isInteger(parseInt(range[rangeKeys[0]]));

//   // Generate text description of min/max values for slider components.
//   return isSlider ? `(${range[rangeKeys[0]]} - ${range[rangeKeys[rangeKeys.length - 1]]})` : '';
// }

function getParameterInput(parameter) {
  const { name, defaultValue, range } = parameter;
  const rangeKeys = range && Object.keys(range);
  const nameSlug = name && name.toLowerCase().replace(' ', '-');
  const isSlider = rangeKeys && Number.isInteger(parseInt(range[rangeKeys[0]]));

  // console.log({ range, rangeKeys });

  return isSlider
    ? getParameterSliderInput(nameSlug, defaultValue, rangeKeys)
    : getParameterSelectInput(nameSlug, defaultValue, range, rangeKeys);
}

function getParameterSliderInput(nameSlug, defaultValue, rangeKeys) {
  const rangeMin = rangeKeys[0];
  const rangeMax = rangeKeys.pop();

  // Generate HTML for Slider element.
  return `
    <input name='${nameSlug}' type='range' min='${rangeMin}' max='${rangeMax}' value='${defaultValue}' />
    <output name="display" for="${nameSlug}">${defaultValue}</output> 
    `;
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